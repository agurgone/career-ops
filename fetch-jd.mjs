#!/usr/bin/env node

/**
 * fetch-jd.mjs — Playwright JD content extractor
 *
 * Fetches a job posting URL via headless Chromium (handles SPAs: Workday,
 * Ashby, Lever, custom React/Vue careers pages) and writes the JD as a clean
 * markdown file to jds/{slug}.md.
 *
 * Use this when WebFetch is blocked (4xx, JS-only rendering, login walls
 * that surface partial content). Reuses liveness-core.mjs to flag expired
 * postings.
 *
 * Usage:
 *   node fetch-jd.mjs <url> [--slug=name] [--out=jds/]
 *
 * Output: writes jds/{slug}.md and prints the path. Exits 1 if expired.
 */

import { chromium } from 'playwright';
import { writeFile, mkdir } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { classifyLiveness } from './liveness-core.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseArgs(argv) {
  const args = { url: null, slug: null, out: 'jds' };
  for (const arg of argv.slice(2)) {
    if (arg.startsWith('--slug=')) args.slug = arg.slice(7);
    else if (arg.startsWith('--out=')) args.out = arg.slice(6);
    else if (!args.url && !arg.startsWith('--')) args.url = arg;
  }
  return args;
}

function slugFromUrl(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '').split('.')[0];
    const tail = u.pathname.split('/').filter(Boolean).slice(-2).join('-');
    return `${host}-${tail}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
  } catch {
    return `jd-${Date.now()}`;
  }
}

function htmlToMarkdown(text) {
  return text
    .replace(/\r\n?/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .split('\n')
    .map((line) => line.trim())
    .filter((line, i, arr) => line || (arr[i - 1] && arr[i - 1] !== ''))
    .join('\n')
    .trim();
}

async function fetchJd({ url, slug, out }) {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
    viewport: { width: 1280, height: 900 },
  });
  const page = await ctx.newPage();

  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    const status = response?.status() ?? 0;
    await page.waitForTimeout(2500);

    const finalUrl = page.url();
    const bodyText = await page.evaluate(() => document.body?.innerText ?? '');
    const title = await page.title();

    const applyControls = await page.evaluate(() => {
      const els = Array.from(document.querySelectorAll('a, button, input[type="submit"], [role="button"]'));
      return els
        .filter((el) => {
          if (el.closest('nav, header, footer')) return false;
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden') return false;
          return el.getClientRects().length > 0;
        })
        .map((el) => (el.innerText || el.value || el.getAttribute('aria-label') || '').trim())
        .filter(Boolean);
    });

    const liveness = classifyLiveness({ status, finalUrl, bodyText, applyControls });

    const md = htmlToMarkdown(bodyText);
    const finalSlug = slug || slugFromUrl(url);
    const outDir = resolve(__dirname, out);
    await mkdir(outDir, { recursive: true });
    const outPath = resolve(outDir, `${finalSlug}.md`);

    const header = [
      `# ${title || finalSlug}`,
      '',
      `**Source URL:** ${url}`,
      `**Final URL:** ${finalUrl}`,
      `**HTTP Status:** ${status}`,
      `**Liveness:** ${liveness.result}${liveness.reason ? ` (${liveness.reason})` : ''}`,
      `**Fetched:** ${new Date().toISOString()}`,
      '',
      '---',
      '',
      md,
    ].join('\n');

    await writeFile(outPath, header, 'utf8');
    console.log(JSON.stringify({ ok: true, path: outPath, liveness: liveness.result, status, length: md.length }, null, 2));
    return liveness.result === 'expired' ? 1 : 0;
  } catch (err) {
    console.error(JSON.stringify({ ok: false, error: err.message, url }));
    return 2;
  } finally {
    await browser.close();
  }
}

const args = parseArgs(process.argv);
if (!args.url) {
  console.error('Usage: node fetch-jd.mjs <url> [--slug=name] [--out=jds/]');
  process.exit(2);
}
process.exit(await fetchJd(args));
