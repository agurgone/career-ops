# Pipeline

Inbox of pending URLs to evaluate. Add URLs here; run `/career-ops pipeline` to process them.

## Manual checks (no API — check weekly)

- [ ] EIB/EIF e-recruitment (PeopleSoft, scanner-blind): https://erecruitment.eib.org/psc/hr/EIBJOBS/CAREERS/c/HRS_HRAM_FL.HRS_CG_SEARCH_FL.GBL
  - Also monitor: devex.com/jobs · LinkedIn saved search "European Investment Fund"

## Pendientes

### Central Banks & Policy — manual local scan, chunk 1 (2026-09-19)

Cloud routine "Scan Chunk 1" has failed 4 consecutive runs due to egress block in the cloud sandbox (career-portal domains return 403 from the proxy). Ran manually in a local interactive session instead — real network access confirmed, all 31 companies fully checked via WebFetch + Playwright (JS-rendered SPAs needed Playwright).

**Confirmed zero relevant postings** (fully verified, not just blocked): BoE (9 open roles, none economist/macro), CBI (3 roles: resilience/supervisor/regulatory panel), Bank of Canada (17 roles, only Senior Economist listed separately below), BIS (2 roles: IT architect, audit manager), FSB (staffed via BIS secretariat, same result), ESRB (staffed via ECB, see ECB result), EU Careers/EPSO (0 economics competitions open, only IT/audit/legal), IMF (3 results for "Economist": Deputy Division Chief — too senior; Research Analyst Program — too junior; Communications Officer — irrelevant), OECD (8 roles, no economist title, you already have an active pooled application there — #151), WTO (1 role: internship only), UN Careers (interface not efficiently scannable — enormous duty-station filter list; historical pattern here is nationality-restricted National Officer posts), EBRD (3 roles: junior Analyst/Associate in unrelated verticals), RBA (0 for "Economist").

**Not fully verified — manual check recommended:** SNB (9 total openings, results table didn't render in this pass), HM Treasury/Civil Service Jobs (blocked by an "I'm not a robot" check — not bypassed), Riksbank/Norges Bank/Bundesbank (confirmed "no vacancies"/internship-only via WebFetch, not re-verified with Playwright).

**New finds — added to pipeline:**
- [ ] https://talent.ecb.europa.eu/careers/JobDetail/Research-Analyst-ESCB-IO-European-Systemic-Risk-Board-Secretariat/14801 | ECB (ESRB Secretariat) | Research Analyst (ESCB/IO) | Closes 22-Sep-2026 (URGENT — 3 days)
- [ ] https://rb.wd5.myworkdayjobs.com/en-US/FRS/job/Chicago-IL/Economist-Senior-Economist-Economic-Advisor---Macroeconomics_R-0000033014-2 | Federal Reserve Bank of Chicago | Economist/Senior Economist/Economic Advisor – Macroeconomics
- [ ] https://rb.wd5.myworkdayjobs.com/en-US/FRS/job/Chicago-IL/Economist-Senior-Economist-Economic-Advisor---Financial-Economics_R-0000033195-1 | Federal Reserve Bank of Chicago | Economist/Senior Economist/Economic Advisor – Financial Economics
- [ ] https://rb.wd5.myworkdayjobs.com/en-US/FRS/job/Chicago-IL/Principal-Business-Economist-Regional-Policy-Advisor_R-0000032751-1 | Federal Reserve Bank of Chicago | Principal Business Economist/Regional Policy Advisor
- [ ] /job/Ottawa-%28Downtown%29-Senior-Economist-ON/605890217/ (careers.bankofcanada.ca) | Bank of Canada | Senior Economist | Closes 22-Sep-2026 (URGENT — 3 days)
- [ ] https://worldbankgroup.csod.com/ux/ats/careersite/1/home/requisition/38298?c=worldbankgroup | World Bank | Economist, Dhaka | Country-office role — verify nationality/local-hire restrictions before evaluating
- [ ] https://worldbankgroup.csod.com/ux/ats/careersite/1/home/requisition/38312?c=worldbankgroup | World Bank | Economist, Lomé | Country-office role — verify nationality/local-hire restrictions before evaluating
- [ ] https://bdf.wd103.myworkdayjobs.com/en-US/recrutement-banque-de-France/job/PARIS/Economiste-chercheur-senior--H-F-_JR100415 | Banque de France | Économiste chercheur senior (H/F) | Posting is in French; French not in Andrea's language set (Italian native, English fluent, German/Spanish basic) — verify actual language requirement before evaluating
- [ ] https://bdf.wd103.myworkdayjobs.com/en-US/recrutement-banque-de-France/job/PARIS/conomiste-statisticien--H-F-_JR100669 | Banque de France | Économiste statisticien (H/F) | Same French-language caveat as above

### Playwright Nivel 1 scan — 2026-06-12 (22 companies, repaired URLs)

### Playwright Nivel 1 scan — 2026-06-11 (22 high-priority tracked companies)
- [x] #119 | https://apply.workable.com/capital-economics/j/3BB573A8DB/ | Capital Economics | China Economist | 2.1/5 | PDF ❌

### JOE listings — 2026-06-10 (scan: page 1/2+, sorted A-Z by institution; academic faculty excluded)
- [!] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477264 | ERIA | Senior Economist (Jakarta) — CLOSED (deadline 03/09/2026 passed)
- [!] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477422 | White House Council of Economic Advisers | Economist (DC) — CLOSED (deadline 05/31/2026 passed; also US-citizens-only 1-yr PhD appointment)
- [!] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477437 | Central Bank of Taiwan | Research Economist (Taipei) — CLOSED (deadline 05/15/2026 passed; also ROC-citizens-only)
- [x] #115 | https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477476 | DoorDash | Head Economist (DC/NYC) | 2.3/5 | PDF ❌ | SKIP: platform/gig economics, US onsite
- [x] #116 | https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477486 | America First Policy Institute | Researcher (Fiscal & Regulatory) | 1.8/5 | PDF ❌ | SKIP: US public finance + partisan think tank
- [x] #117 | https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477161 | Teamsters | Economist (Strategic Initiatives, DC) | 2.0/5 | PDF ❌ | SKIP: labor-union economics + testimony, US onsite
- [!] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477291 | Inter-American Development Bank | Sector Economic Advisor - CSD (DC) — CLOSED (deadline 02/28/2026 passed)
- [!] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477292 | Inter-American Development Bank | Sector Economic Advisor - IFD (DC) — CLOSED (deadline 02/28/2026 passed)
- [!] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477368 | Inter-American Development Bank | Senior / Lead Country Economists (Lima/Quito/Mexico City) — CLOSED (deadline 03/31/2026 passed)
- [!] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477391 | Harvard CEPR | Senior Research Manager (Cambridge, MA) — CLOSED (deadline 04/30/2026 passed; also education-econ domain)
- [!] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477339 | Reserve Bank of New Zealand | Advisor, Model Development — CLOSED (deadline 03/27/2026 passed; strong-fit, missed)
- [!] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477340 | Reserve Bank of New Zealand | Senior Advisor, Model Development — CLOSED (deadline 03/27/2026 passed; strong-fit, missed)
- [!] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477442 | NZ Treasury | Macroeconomic Modelling Specialist (Senior Analyst) — CLOSED (deadline 05/10/2026 passed; strong-fit, missed)

### JOE listings — 2026-05-23
- [x] #093 | https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477440 | Capital Fund Management | Quantitative Researcher (New York) | 3.5/5 | PDF ✅ | Applied 2026-05-23
- [x] #094 | https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477249 | Nipun Capital | Senior Quantitative Researcher (Foster City, CA) | 2.3/5 | PDF ❌
- [x] #095 | https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477139 | PDT Partners | Quantitative Researcher (New York) | 3.0/5 | PDF ❌
- [x] #096 | https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477350 | Cornerstone Research | Senior Economist (NYC/Boston) | 3.2/5 | PDF ❌
- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477255 | Nclusion | Research Economist (Palo Alto) | SKIP: position confirmed filled
- [x] #098 | https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477482 | IMF Tokyo (OAP) | Economist – Regional Office Asia-Pacific (Tokyo) | 2.8/5 | PDF ❌
- [x] #059 | https://job-boards.greenhouse.io/anthropic/jobs/5018472008 | Anthropic | Research Economist, Economic Research | 4.3/5 | PDF ❌
- [x] https://job-boards.greenhouse.io/anthropic/jobs/5183053008 | Anthropic | (new posting — to identify) | SKIP: 4-month fellowship ($3,850/wk stipend), not a permanent role
- [x] #060 | https://openai.com/careers/senior-economist-san-francisco/ | OpenAI | Senior Economist | 3.7/5 | PDF ❌
- [x] https://openai.com/careers/research-scientist-phd-san-francisco/ | OpenAI | Research Scientist, PhD | SKIP: SF + wrong archetype
- [x] https://openai.com/careers/research-scientist-learning-and-cognitive-outcomes-london-uk/ | OpenAI | Research Scientist, Learning & Cognitive Outcomes | SKIP: learning science/cognitive domain — not macro economics
- [x] https://careers.google.com/jobs/results/118826814922465990-senior-data-scientistresearch-economist/ | Google | Senior Data Scientist/Research Economist
- [x] #061 | https://careers.google.com/jobs/results/134621669932049094-competition-economist/ | Google | Competition Economist | 3.5/5 | PDF ❌
- [x] https://www.metacareers.com/profile/job_details/1287393622479232 | Meta | Research Scientist, Demography and Survey Sciences | SKIP: wrong domain (demography)
- [x] https://www.amazon.jobs/en/jobs/3170645/economist-people-experience-and-technology-central-science | Amazon | Economist, People Experience and Technology Central Science | SKIP: internal HR economics
- [x] https://www.amazon.jobs/en/jobs/10387098/economist-economic-decision-science | Amazon | Economist, Economic Decision Science | SKIP: internal ops economics
- [!] https://www.amazon.jobs/en/jobs/3195143/senior-economist-people-experience-and-technology-central-science | Amazon | Senior Economist, People Experience and Technology Central Science — EXPIRED
- [x] https://www.amazon.jobs/en/jobs/3060591/senior-economist-last-mile-economics | Amazon | Senior Economist, Last Mile Economics | SKIP: internal ops
- [x] https://www.amazon.jobs/en/jobs/2959606/principal-economist-stores-economics-and-science | Amazon | Principal Economist, Stores Economics and Science | SKIP: US-only (Seattle), seller fee pricing/supply chain — not macro research
- [x] #062 | https://jobs.careers.microsoft.com/global/en/job/1586150/Economist | Microsoft | Economist | 3.6/5 | PDF ❌
- [x] https://careers.bloomberg.com/job/detail/123843 | Bloomberg | Quantitative Research Analyst, Economics (Madrid) | SKIP: Madrid + junior
- [x] https://careers.moodys.com/economist-1/job/12787 | Moody's Analytics | Economist 1 | SKIP: junior (Economist 1)
- [x] https://www.janestreet.com/join-jane-street/position/6302325002/ | Jane Street | Quantitative Researcher, New York | SKIP: NYC
- [!] https://www.janestreet.com/join-jane-street/position/8017833002/ | Jane Street | Quantitative Researcher, London — EXPIRED (404)
- [x] https://search.jobs.barclays/job/new-york/senior-g10-fx-macro-strategist/13015/86251084224 | Barclays | Senior G10 FX/Macro Strategist | SKIP: NYC
- [x] https://jobs.citi.com/job/new-york/us-rates-strategist-treasury-trading/287/94737235216 | Citigroup | US Rates Strategist - Treasury Trading | SKIP: rates + NYC
- [x] https://jobs.citi.com/job/new-york/senior-global-economist-director/287/94560024720 | Citigroup | Senior Global Economist, Director
- [x] https://www.drw.com/work-at-drw/listings/quantitative-researcher-commodities-3116560 | DRW | Quantitative Researcher - Commodities | SKIP: commodities trading
- [x] https://www.drw.com/work-at-drw/listings/quantitative-trading-analyst-3172062 | DRW | Quantitative Trading Analyst | SKIP: execution trading
- [x] https://www.drw.com/work-at-drw/listings/quantitative-ai-strategist-3386899 | DRW | Quantitative AI Strategist | SKIP: front-office AI tooling/product for traders — engineering, not macro research
- [x] https://www.drw.com/work-at-drw/listings/quantitative-trading-associate-3261427 | DRW | Quantitative Trading Associate | SKIP: execution trading
- [x] https://optiver.com/working-at-optiver/career-opportunities/4734370002/ | Optiver | Quantitative Researcher – HFT Futures/Equities | SKIP: HFT
- [x] https://optiver.com/working-at-optiver/career-opportunities/7251404002/ | Optiver | Quantitative Trader/Researcher – Systematic Options Trading | SKIP: options trading
- [x] https://optiver.com/working-at-optiver/career-opportunities/8060185002/ | Optiver | Options Quantitative Researcher | SKIP: options
- [x] https://optiver.com/working-at-optiver/career-opportunities/8053587002/ | Optiver | Graduate Quantitative Researcher, PhD (2026 Start) | SKIP: graduate level
- [x] https://www.vanguardjobs.com/job/22829705/model-portfolio-solutions-analyst-quantitative-strategist-malvern-pa/ | Vanguard | Model Portfolio Solutions Analyst/Quantitative Strategist | SKIP: US-only + prior CV rejection
- [x] https://www.vanguardjobs.com/job/22562571/quantitative-investment-analyst-malvern-pa/ | Vanguard | Quantitative Investment Analyst | SKIP: US-only + prior CV rejection
- [x] https://www.vanguardjobs.com/job/23044679/senior-financial-economist-malvern-pa/ | Vanguard | Senior Financial Economist | SKIP: US-only + prior CV rejection
- [x] https://www.vanguardjobs.com/job/23236349/investment-risk-analyst-malvern-pa/ | Vanguard | Investment Risk Analyst | SKIP: US-only + prior CV rejection
- [x] https://www.vanguardjobs.com/job/22753703/equity-investment-risk-analyst-malvern-pa/ | Vanguard | Equity Investment Risk Analyst | SKIP: US-only + prior CV rejection
- [x] https://www.vanguardjobs.com/job/22198542/senior-investment-strategist-malvern-pa/ | Vanguard | Senior Investment Strategist | SKIP: US-only + prior CV rejection
- [x] https://www.vanguardjobs.com/job/22680583/quantitative-trading-analyst-malvern-pa/ | Vanguard | Quantitative Trading Analyst | SKIP: US-only + prior CV rejection
- [x] https://careers.statestreet.com/global/en/job/STSTGLOBALR777055EXTERNALENGLOBAL/Actuarial-Investment-Strategist-VP-II-State-Street-Investment-Management | State Street | Actuarial Investment Strategist, VP II | SKIP: actuarial
- [x] https://careers.morningstar.com/us/en/job/REQ-053519/Senior-Quantitative-Analyst | Morningstar | Senior Quantitative Analyst | SKIP: wrong domain
- [x] https://careers.morningstar.com/us/en/job/REQ-053662/Associate-Quantitative-Analyst | Morningstar | Associate Quantitative Analyst | SKIP: wrong domain
- [x] https://careers.morningstar.com/us/en/job/REQ-044447/Assistant-Vice-President-Quantitative-Analyst | Morningstar | AVP, Quantitative Analyst | SKIP: wrong domain
- [x] https://www.revolut.com/careers/position/quant-research-analyst-2ee79de4-6889-46bf-a5b8-7190f9069016/ | Revolut | Quant Research Analyst | SKIP: fintech, not macro
- [x] https://careers.adyen.com/vacancies/6864127-financial-risk-analyst | Adyen | Financial Risk Analyst | SKIP: fintech risk analyst
- [x] https://careers.adyen.com/vacancies/7270367-cdd-risk-analyst | Adyen | CDD Risk Analyst | SKIP: fintech risk analyst
- [x] https://wise.jobs/job/senior-risk-analyst-financial-risk-management-in-singapore-jid-79 | Wise | Senior Risk Analyst - Financial Risk Management | SKIP: wrong domain + Singapore
- [x] https://www.flywire.com/company/careers/jobs/743999963196833 | Flywire | Risk Analyst | SKIP: wrong domain
- [!] https://group.bnpparibas/en/careers/job-offer/quantitative-research-analyst | BNP Paribas | Quantitative Research Analyst — Error: DNS/access error, could not verify
- [x] https://group.bnpparibas/en/careers/job-offer/global-quantitative-economist | BNP Paribas | Global Quantitative Economist
- [x] https://group.bnpparibas/en/careers/job-offer/vice-president-equities-quantitative-researcher | BNP Paribas | VP - Equities Quantitative Researcher | SKIP: equities QR
- [x] https://careers.nomura.com/Nomura/job/London-Algorithmic-Trading-Model-Risk-Quantitative-Analyst-(Associate)-Lond-EC4R-3AB/1326839900/ | Nomura | Algorithmic Trading Model Risk Quantitative Analyst (Associate) | SKIP: algo trading model risk, wrong domain
- [x] https://higher.gs.com/roles/137453 | Goldman Sachs | Global Investment Research, US Economics, Political/Economic Research Analyst
- [x] https://globalcareers-msci.icims.com/jobs/2849/quantitative-researcher---private-assets/job | MSCI | Quantitative Researcher - Private Assets | SKIP: private assets, wrong domain
- [x] https://careers.msci.com/job/research/new-york/quantitative-researcher-credit/2024-2391 | MSCI | Quantitative Researcher - Credit | SKIP: credit + NYC
- [x] https://wellfound.com/jobs/3753684-quantitative-ai-researcher | Numerai | Quantitative AI Researcher | SKIP: crypto/ML quant

### Hedge Funds & Asset Managers — Chunk 3 (2026-05-11)
- [x] https://www.citadel.com/careers/details/quantitative-researcher-phd-graduate-europe/ | Citadel | Quantitative Researcher - PhD Graduate (Europe) | SKIP: entry level
- [x] https://www.citadel.com/careers/details/quantitative-researcher-phd-graduate-us/ | Citadel | Quantitative Researcher - PhD Graduate (US) | SKIP: entry level
- [!] https://careers.twosigma.com/careers/JobDetail/New-York-New-York-United-States-Quantitative-Researcher-Experienced-Hire/12633 | Two Sigma | Quantitative Researcher - Experienced Hire — EXPIRED + NYC-only
- [x] https://careers.twosigma.com/careers/JobDetail/New-York-New-York-United-States-Quantitative-Researcher-Machine-Learning/12634 | Two Sigma | Quantitative Researcher: Machine Learning | SKIP: ML focus + NYC
- [x] https://careers.twosigma.com/careers/JobDetail/London-United-Kingdom-of-Great-Britain-and-Northern-Ireland-Quantitative-Researcher-Quantitative-Trader-Two-Sigma-Securities-UK/12635 | Two Sigma | Quantitative Researcher / Quantitative Trader (London) | SKIP: trading focus
- [x] https://www.deshaw.com/careers/quantitative-analyst-2636 | D.E. Shaw | Quantitative Analyst | SKIP: generic, no macro angle
- [x] https://careers.point72.com/CSJobDetail?jobName=intraday-futures-quantitative-researcher-trading-research&jobCode=CSS-0010963 | Point72 | Macro Quantitative Researcher (Intraday Futures) | SKIP: intraday/futures trading
- [x] https://careers.point72.com/CSJobDetail?jobName=fund-flow-quantitative-researcher&jobCode=CSS-0014323 | Point72 | Fund Flow Quantitative Researcher | SKIP: fund flow, not macro research
- [x] https://careers.point72.com/CSJobDetail?jobName=quantitative-researcher-portfolio-research&jobCode=CSS-0013431 | Point72 | Quantitative Researcher, Portfolio Research | SKIP: portfolio construction
- [x] https://careers.point72.com/CSJobDetail?jobName=quantitative-researcher-macro&jobCode=CSS-0008107 | Point72 | Quantitative Researcher - Macro | SKIP: NYC + systematic trading focus
- [x] https://careers.point72.com/CSJobDetail?jobName=quantitative-researcher&jobCode=CSS-0010379 | Point72 | Quantitative Researcher (London) | SKIP: 3.3/5 — equities-first Cubist shop, no macro angle, live alpha gap
- [x] #080 | https://career.mlp.com/careers/job/755943671775 | Millennium | Quantitative Researcher, Systematic Macro | 4.0/5 | PDF ❌
- [x] https://career.mlp.com/careers/job/755930923588-commodities-quantitative-researcher-systematic-global-macro-baar-zug-switzerland | Millennium | Commodities Quantitative Researcher, Systematic Global Macro (Zug) | SKIP: commodities + Zug
- [x] https://job-boards.greenhouse.io/tudorgroup/jobs/5358422 | Tudor Investment Corp | Medium Frequency Quantitative Researcher | SKIP: 2.9/5 — 3+ yrs live alpha required, quant field (not econ) preferred
- [x] https://job-boards.greenhouse.io/tudorgroup/jobs/942825 | Tudor Investment Corp | Discretionary Global Macro (Application) | SKIP: already evaluated (#039 3.0/5)
- [x] https://job-boards.greenhouse.io/tudorgroup/jobs/942848 | Tudor Investment Corp | Systematic Strategies (Application) | SKIP: 3.0/5 — general pool app, unclear routing, low ROI
- [x] https://boards.greenhouse.io/marshallwace/jobs/4008599002 | Marshall Wace | Quantitative Researcher | EXPIRED (gone from Greenhouse API 2026-05-17)
- [x] https://www.qube-rt.com/careers/job?gh_jid=6845873002 | Qube Research & Technologies | Quantitative Researcher | SKIP: 2.8/5 — same CS/physics profile as prior QRT SKIPs
- [x] https://www.qube-rt.com/careers/job?gh_jid=6472853002 | Qube Research & Technologies | Quantitative Researcher, Macro/CTA Mid-low Freq | EXPIRED
- [x] https://www.qube-rt.com/careers/data/london/experienced-candidates/data-analytics/job?gh_jid=6962479002 | Qube Research & Technologies | Quantitative Data Analyst (London) | SKIP: 2.5/5 — data infrastructure support role, not research
- [x] https://careers.aqr.com/jobs/open-positions/greenwich-ct/2026-research-analyst/7216090?gh_jid=7216090 | AQR | 2026 Research Analyst | SKIP: 2026 analyst = entry level
- [x] https://job-boards.greenhouse.io/winton/jobs/4353297101 | Winton | Quantitative Researcher | SKIP: already evaluated (#037 3.3/5)
- [!] https://job-boards.eu.greenhouse.io/mangroup/jobs/4553301101 | Man Group | Quant Researcher — EXPIRED (Greenhouse error page, 2026-05-23)
- [!] https://job-boards.eu.greenhouse.io/mangroup/jobs/4772820101 | Man Group | Quantitative Researcher - Discretionary — EXPIRED (Greenhouse error page, 2026-05-23)
- [x] https://job-boards.eu.greenhouse.io/mangroup/jobs/4510684101 | Man Group | Quantitative Researcher - Equities | SKIP: equities QR
- [x] https://job-boards.eu.greenhouse.io/mangroup/jobs/4737145101 | Man Group | Quantitative Researcher | SKIP: cash equities intraday alpha (Algo Research team, Massachusetts) — equities-only, wrong domain
- [x] https://job-boards.eu.greenhouse.io/mangroup/jobs/4702558101 | Man Group | Senior Quant Researcher - Volatility | SKIP: volatility
- [x] https://careers.blackrock.com/job/london/associate-macro-research-fundamental-fixed-income/45831/70348115168 | BlackRock | Associate, Macro Research - Fundamental Fixed Income (London) | EXPIRED
- [x] https://careers.blackrock.com/job/london/quantitative-researcher-trading-research-vice-president-london/45831/88009935088 | BlackRock | Quantitative Researcher - Trading Research, VP (London) | EXPIRED (2026-05-23)
- [x] https://boards.greenhouse.io/exoduspoint/jobs/6591899002 | ExodusPoint | Quantitative Researcher | EXPIRED (gone from Greenhouse API 2026-05-17)
- [x] https://boards.greenhouse.io/exoduspoint/jobs/6793032002 | ExodusPoint | Quantitative Researcher (New York or London) | EXPIRED (gone from Greenhouse API 2026-05-17)
- [!] https://apply.workable.com/caxton/j/0F3BF3C183/ | Caxton Associates | Quantitative Research Analyst — EXPIRED (Workable 404/not_found redirect, 2026-05-23)
- [x] #089 | https://job-boards.greenhouse.io/grahamcapitalmanagement/jobs/4058503005 | Graham Capital | Quantitative Research Analyst | 3.3/5 | PDF ❌
- [x] https://job-boards.greenhouse.io/grahamcapitalmanagement/jobs/4596235005 | Graham Capital | Quantitative Research Analyst, Smart Execution | SKIP: smart execution
- [x] https://job-boards.greenhouse.io/grahamcapitalmanagement/jobs/4608324005 | Graham Capital | Quantitative Research Analyst, Portfolio Construction | SKIP: portfolio construction
- [x] https://boards.greenhouse.io/squarepointcapital/jobs/5063264 | Squarepoint | Quantitative Researcher, CTA-Commodities | SKIP: CTA-commodities
- [x] https://boards.greenhouse.io/squarepointcapital/jobs/239376 | Squarepoint | Junior Quant Researcher | SKIP: junior
- [x] https://boards.greenhouse.io/squarepointcapital/jobs/5225405 | Squarepoint | Quantitative Researcher, Securitized Products | SKIP: securitized products
- [x] https://boards.greenhouse.io/squarepointcapital/jobs/253414 | Squarepoint | Senior Quant Researcher - Volatility | SKIP: volatility
- [x] https://boards.greenhouse.io/squarepointcapital/jobs/4562565 | Squarepoint | Senior Quant Researcher - Derivatives Modeling | SKIP: derivatives
- [x] https://boards.greenhouse.io/squarepointcapital/jobs/1713329 | Squarepoint | Senior Quant Researcher - Risk | SKIP: risk
- [x] https://boards.greenhouse.io/squarepointcapital/jobs/467334 | Squarepoint | Senior Quant Researcher - Algorithmic Execution | SKIP: algo execution
- [x] https://boards.greenhouse.io/squarepointcapital/jobs/6069464 | Squarepoint | Junior Quant Researcher - ML Alpha Research | SKIP: junior ML

### Hedge Funds & Asset Managers — Chunk 3 refresh (2026-05-16)
- [x] https://boards.greenhouse.io/squarepointcapital/jobs/1163559 | Squarepoint | Senior Quant Researcher - Fixed Income | SKIP: fixed income systematic
- [x] https://boards.greenhouse.io/squarepointcapital/jobs/253413 | Squarepoint | Senior Quant Researcher - Intraday Statistical Arbitrage | SKIP: intraday stat arb
- [x] https://job-boards.eu.greenhouse.io/mangroup/jobs/4687710101 | Man Group | Quantitative Researcher - PM Monetisation | SKIP: PM monetisation (trading)
- [!] https://job-boards.eu.greenhouse.io/mangroup/jobs/4688020101 | Man Group | Senior Quantitative Researcher - Macro — EXPIRED (Greenhouse error page, 2026-05-23)
- [x] https://job-boards.eu.greenhouse.io/mangroup/jobs/4724223101 | Man Group | Principal Quant | SKIP: NYC + HFT focus
- [x] https://boards.greenhouse.io/exoduspoint/jobs/6900099002 | ExodusPoint | Quantitative Researcher (Stamford or New York) | SKIP: Stamford/NYC
- [x] https://boards.greenhouse.io/exoduspoint/jobs/7839186002 | ExodusPoint | Quantitative Researcher (London) | EXPIRED
- [x] https://careers.blackrock.com/job/19309891/quantitative-researcher-systematic-fixed-income-associate-london-gb/ | BlackRock | Quantitative Researcher - Systematic Fixed Income, Associate (London) | SKIP: systematic FI + associate level
- [x] https://careers.blackrock.com/job/new-york/quantitative-researcher-global-allocation-vice-president/45831/86487706544 | BlackRock | Quantitative Researcher, Global Allocation - Vice President (New York) | SKIP: global allocation + NYC
- [x] https://careers.blackrock.com/job/new-york/economist-macro-research-fundamental-fixed-income-vice-president-or-associate-new-york/45831/70574287488 | BlackRock | Economist / Macro Research, Fundamental Fixed Income - VP or Associate (New York) | EXPIRED (2026-05-23)
- [x] https://www.deshaw.com/careers/desim-macro-quantitative-analyst-4936 | D.E. Shaw | DESIM Macro Quantitative Analyst | EXPIRED (redirects to /careers, 2026-05-23)
- [x] https://career.mlp.com/careers/job/755939901399 | Millennium | Quantitative Researcher, Multi-Asset | SKIP: multi-asset, not macro
- [x] https://career.mlp.com/careers/job/755930336095 | Millennium | Quantitative Researcher, Short-Term Macro (London) | EXPIRED
- [x] https://career.mlp.com/careers/job/755953450082 | Millennium | Quantitative Researcher - Rates | SKIP: rates focus
- [x] https://career.mlp.com/careers/job/755953399441 | Millennium | Quantitative Researcher - FX (London) | SKIP: FX exotic derivatives pricing/C++ — not macro research
- [x] https://careers.twosigma.com/careers/JobDetail/New-York-New-York-United-States-Quantitative-Researcher-ETFs-and-Passive-Flows/12632 | Two Sigma | Quantitative Researcher - ETFs and Passive Flows | SKIP: ETFs, wrong domain
- [x] https://careers.point72.com/CSJobDetail?jobName=quantitative-researcher-machine-learning&jobCode=CSS-0013392 | Point72 | Quantitative Researcher - Machine Learning | SKIP: ML focus
- [x] https://careers.point72.com/CSJobDetail?jobName=quantitative-researcher&jobCode=CSS-0013507 | Point72 | Quantitative Researcher | EXPIRED (2026-05-23)
- [x] https://careers.point72.com/CSJobDetail?jobName=entry-level-quantitative-researcher&jobCode=CSS-0010275 | Point72 | Entry-Level Quantitative Researcher | SKIP: entry level
- [x] https://apply.workable.com/caxton/j/CC2C9491E2/ | Caxton Associates | Quantitative Researcher (Commodities) | SKIP: commodities QR
- [x] https://apply.workable.com/caxton/j/54A99D1679/ | Caxton Associates | Analyst, Global Macro FX & Rates | EXPIRED (404, 2026-05-23)
- [x] https://apply.workable.com/caxton/j/920C546418/ | Caxton Associates | Macro Analyst (Macro Trading) | EXPIRED (404, 2026-05-23)
- [x] https://arrowstreetcapital.wd5.myworkdayjobs.com/en-US/Arrowstreet/job/Quantitative-Researcher_R1066-3 | Arrowstreet Capital | Quantitative Researcher | SKIP: equity quant
- [x] https://arrowstreetcapital.wd5.myworkdayjobs.com/en-US/Arrowstreet/job/Senior-Quantitative-Researcher_R1385-1 | Arrowstreet Capital | Senior Quantitative Researcher | SKIP: equity quant
- [x] https://systematica.pinpointhq.com/en/jobs/66288 | Systematica Investments | Data Scientist / Quantitative Analyst | SKIP: data scientist, not macro economist
- [x] https://www.citadel.com/careers/details/quantitative-researcher-data-strategies-group/ | Citadel | Quantitative Researcher - Data Strategies Group | SKIP: data strategies, not macro

### Macro Advisory & Think Tanks — Chunk 2 (2026-05-21)
- [!] https://www.resolutionfoundation.org/about-us/opportunities/economist-research-and-policy-analyst-2/ | Resolution Foundation | Economist / Research and Policy Analyst — EXPIRED (deadline was May 28, 2026; now passed)
- [!] https://app.beapplied.com/apply/5kuzfgna0w | Resolution Foundation | (Senior) Economist / Research and Policy Analyst — EXPIRED (Applied form closed Sep 2021)
- [!] https://www.resolutionfoundation.org/about-us/opportunities/senior-econ-rpa/ | Resolution Foundation | Senior Economist / Senior Research and Policy Analyst — EXPIRED (404 page not found)
- [!] https://www.ippr.org/jobs/senior-economist-macroeconomics | IPPR | Senior Economist, Macroeconomics — EXPIRED (404)
- [!] https://www.ippr.org/jobs/economist-international-policy | IPPR | Economist, International Policy — EXPIRED (404)
- [!] https://www.ippr.org/jobs/research-fellow | IPPR | Research Fellow (Public Services) — EXPIRED (404)
- [!] https://www.bruegel.org/careers/energy-and-climate-economist-0 | Bruegel | Energy and Climate Economist — EXPIRED (404)
- [!] https://www.bruegel.org/careers/climate-economist | Bruegel | Climate Economist — EXPIRED (404)
- [!] https://www.bruegel.org/careers/economist-expertise-sustainable-finance | Bruegel | Economist - Sustainable Finance — EXPIRED (403 forbidden)
- [x] https://www.bruegel.org/careers/micro-economist-expertise-digital-economy-and-competition-policy | Bruegel | Micro-Economist - Digital Economy & Competition Policy | SKIP: micro-economics / competition policy / digital economy — wrong domain for macro-financial profile
- [!] https://niesr.ac.uk/vacancy/senior-economist-3 | NIESR | Senior Economist (Macro Modelling & Forecasting / NiGEM) — EXPIRED (404)
- [!] https://niesr.ac.uk/vacancy/associate-economist-4 | NIESR | Associate Economist (Macro Modelling & Forecasting) — EXPIRED (404)
- [!] https://careers.oxfordeconomics.com/postings/e528c1b2-0b59-4bd8-bc2b-f12636b9525f | Oxford Economics | Senior Economist - Climate Consulting (London) — EXPIRED (redirected to generic careers page)
- [x] https://careers.oxfordeconomics.com/postings/70f9f23d-e658-46f4-919c-838a26b21d5e | Oxford Economics | Economist / Senior Economist - Macro Consulting (Singapore) | SKIP: Singapore location — wrong geography
- [!] https://londoneconomics.co.uk/economic-consultant-education-and-labour-markets/ | London Economics | Economic Consultant - Education & Labour Markets — EXPIRED (404)
- [!] https://londoneconomics.co.uk/senior-economic-consultant-public-policy-markets-and-advisory/ | London Economics | Senior Economic Consultant - Public Policy, Markets & Advisory — EXPIRED (404)
- [!] https://www.ifs.org.uk/jobs/3371 | IFS | Post-doctoral Fellowship — EXPIRED (404)
- [!] https://careers.chathamhouse.org/jobs/7401384-2026-2027-chatham-house-academy-fellowships | Chatham House | 2026-2027 Academy Fellowships — FILLED ("position no longer active")

### Hedge Funds & Asset Managers — Chunk 3 refresh (2026-05-22)
- [x] https://www.citadel.com/careers/details/global-quantitative-strategies-quantitative-researcher/ | Citadel | Global Quantitative Strategies — Quantitative Researcher | SKIP: NY/HK/Singapore locations
- [!] https://careers.twosigma.com/careers/JobDetail/New-York-New-York-United-States-Quantitative-Researcher-Macro/8520 | Two Sigma | Quantitative Researcher: Macro — EXPIRED (error page)
- [!] https://careers.twosigma.com/careers/JobDetail/New-York-New-York-United-States-Systematic-Macro-Quantitative-Researcher/12659 | Two Sigma | Systematic Macro Quantitative Researcher — EXPIRED (error page)
- [!] https://careers.twosigma.com/careers/JobDetail/New-York-New-York-United-States-Quantitative-Researcher-Macro-Features-Forecasting-and-Management/11731 | Two Sigma | Quantitative Researcher — Macro Features, Forecasting and Management — EXPIRED (error page)
- [!] https://careers.twosigma.com/careers/JobDetail/New-York-New-York-United-States-Quantitative-Researcher-Fixed-Income/12584 | Two Sigma | Quantitative Researcher: Fixed Income — EXPIRED (error page)
- [x] https://job-boards.eu.greenhouse.io/mangroup/jobs/4524727101 | Man Group | Quantitative Researcher — Algo Research | SKIP: algo/execution research focus — wrong domain
- [x] https://www.qube-rt.com/careers/job?gh_jid=5953097002 | Qube Research & Technologies | Quantitative Researcher | SKIP: Mumbai + physics/stats/engineering profile required
- [x] https://job-boards.greenhouse.io/point72/jobs/7297612002 | Point72 | Quantitative Researcher — Macro (Greenhouse) | SKIP: NYC + systematic trading focus
- [x] https://job-boards.greenhouse.io/point72/jobs/7045987002 | Point72 | Cubist Quantitative Researcher | SKIP: Cubist = equities-first systematic shop
- [x] https://job-boards.greenhouse.io/point72/jobs/7725294002 | Point72 | Quantitative Researcher | SKIP: Point72 systematic, no macro research angle confirmed
- [!] https://apply.workable.com/caxton/j/4EC9851A82/ | Caxton Associates | Associate Portfolio Manager Program — EM Macro London — EXPIRED (404 redirect)
- [x] https://apply.workable.com/caxton/j/1C5F743843/ | Caxton Associates | Associate Portfolio Manager Program — London | SKIP: requires 3-10yr live capital management experience + investment track record — hard blocker
- [!] https://boards.greenhouse.io/exoduspoint/jobs/6054578002 | ExodusPoint | Quantitative Researcher — EXPIRED (Greenhouse error page)
- [x] https://squarepoint-capital.com/open-opportunities?id=6349235 | Squarepoint Capital | Quantitative Researcher, Data Science | SKIP: systematic quant shop, prior evaluations consistently SKIP

### Banks, Data, Tech & Fintech — Chunk 4 (2026-05-22)
- [x] https://higher.gs.com/roles/161225 | Goldman Sachs | GIR Macro Research, Latin America Economics, Jr. Analyst | SKIP: junior analyst grade
- [!] https://higher.gs.com/roles/147516 | Goldman Sachs | AWM Macro Research – Quantitative Researcher, Associate — EXPIRED (redirected to generic careers page)
- [!] https://higher.gs.com/roles/145410 | Goldman Sachs | Junior Economist - Associate, London — EXPIRED (redirected to generic careers page)
- [!] https://higher.gs.com/roles/154022 | Goldman Sachs | GBM FICC / Equity Quantitative Researcher Analyst, Associate — EXPIRED (redirected to generic careers page)
- [!] https://builtinlondon.uk/job/global-research-economist-covering-emea-emerging-markets-central-asia-and-balkans-associate-or | J.P. Morgan | Global Research Economist – EMEA Emerging Markets (London) — EXPIRED (removed Mar 10, 2025)
- [x] https://search.jobs.barclays/job/singapore/fx-and-em-macro-strategist/22545/17840286 | Barclays | FX and EM Macro Strategist, Singapore | SKIP: Singapore location
- [x] https://search.jobs.barclays/job/delhi/vp-scenario-design-economist/13015/65307894976 | Barclays | VP Scenario Design Economist, Delhi | SKIP: Delhi location
- [x] https://search.jobs.barclays/job/minato/economics-research-analyst/13015/29287482272 | Barclays | Economics Research Analyst, Tokyo | SKIP: Tokyo + junior analyst grade
- [x] https://search.jobs.barclays/job/new-york/latam-economist/13015/65579260720 | Barclays | LatAm Economist, NYC | SKIP: NYC + LatAm domain
- [x] https://jobs.citi.com/job/prague/economist/287/76315269120 | Citigroup | Economist, Prague | SKIP: sell-side macro, Prague — not aligned with research archetype
- [!] https://jobs.citi.com/job/frankfurt-am-main/research-economist-vp/287/80354137664 | Citigroup | Research Economist - VP, Frankfurt — EXPIRED (Job Not Found)
- [x] https://jobs.citi.com/job/chiyoda/research-associate-economist-avp-jpn-citi-research/287/48658304640 | Citigroup | Research Associate/Economist (AVP), Japan | SKIP: Japan location + sell-side research
- [x] https://jobs.citi.com/job/new-york/sr-quantitative-economist-economic-forecasting-svp-hybrid/287/65459837632 | Citigroup | Sr. Quantitative Economist – Economic Forecasting, SVP, NYC | SKIP: NYC + sell-side
- [!] https://mycareer.hsbc.com/en_GB/external/PipelineDetail/Economist-Global-Investment-Research/272157 | HSBC | Economist – Global Investment Research — EXPIRED (error page)
- [x] https://mycareer.hsbc.com/en_GB/external/PipelineDetail/Credit-Strats-Manager-Quantitative-Strategist/249561 | HSBC | Credit Strats Manager (Quantitative Strategist) | SKIP: credit strats, wrong domain
- [x] https://mycareer.hsbc.com/en_GB/external/PipelineDetail/Associate-Director-Credit-Strats-Quantitative-Strategist/249560 | HSBC | Associate Director, Credit Strats (Quantitative Strategist) | SKIP: credit strats, wrong domain
- [x] https://mycareer.hsbc.com/en_GB/external/PipelineDetail/Inv-PE-Portfolio-Strategist/261088 | HSBC | Portfolio Strategist | SKIP: investment portfolio strategy, not macro research
- [x] https://careers.societegenerale.com/en/job-offers/strategist-25000HTB-en | Société Générale | Strategist, NYC | SKIP: NYC location
- [!] https://careers.nomura.com/Nomura/job/London-European-Economist,-Analyst-2-Associate-1-Lond-EC4R-3AB/1230636000/ | Nomura | European Economist, Analyst 2–Associate 1, London — FILLED ("position has been filled")
- [!] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5012&PageType=JobDetails&jobid=343533 | UBS | Economist — EXPIRED ("posting expired or position filled")
- [x] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5012&PageType=JobDetails&jobid=332386&frmSiteId=5050 | UBS | US Senior Economist | SKIP: US-only
- [x] https://group.bnpparibas/en/careers/job-offer/quantitative-analyst-resources-and-financing-optimization | BNP Paribas | Quantitative Analyst – Resources and Financing Optimization | SKIP: financing optimization/treasury, wrong domain
- [x] https://www.janestreet.com/join-jane-street/position/7850705002/ | Jane Street | Macro Analyst, New York | SKIP: NYC location
- [x] https://www.janestreet.com/join-jane-street/position/8343131002/ | Jane Street | Quantitative Researcher, Hong Kong | SKIP: Hong Kong location
- [!] https://drw.com/work-at-drw/job/systematic-macro-quantitative-researcher-1765992/ | DRW | Systematic Macro Quantitative Researcher — EXPIRED (500 error)
- [x] https://www.drw.com/work-at-drw/listings/quantitative-researcher-2913735 | DRW | Quantitative Researcher | SKIP: DRW = prop trading firm, systematic — not macro research
- [x] https://www.drw.com/work-at-drw/listings/quantitative-researcher-fx-3050267 | DRW | Quantitative Researcher – FX | SKIP: FX trading, wrong domain
- [x] https://www.drw.com/work-at-drw/listings/quantitative-researcher-3173309 | DRW | Quantitative Researcher | SKIP: DRW systematic, wrong domain
- [!] https://www.vanguardjobs.com/job/23297352/investment-strategy-analyst-london-gb/ | Vanguard | Investment Strategy Analyst, London — EXPIRED (job not found)
- [x] https://www.vanguardjobs.com/job/22124894/senior-economist-investment-strategy-group-malvern-pa/ | Vanguard | Senior Economist – Investment Strategy Group, PA | SKIP: US-only + prior CV rejection
- [x] https://www.vanguardjobs.com/job/23256227/market-research-strategist-malvern-pa/ | Vanguard | Market Research Strategist, PA | SKIP: US-only + prior CV rejection
- [!] https://jobs.fidelity.com/job-details/20803645/fixed-income-quantitative-analyst-london-/ | Fidelity | Fixed Income Quantitative Analyst, London — EXPIRED (404)
- [x] https://careers.statestreet.com/global/en/job/STSTGLOBALR767142EXTERNALENGLOBAL/Quantitative-Research-Analyst-Systematic-Equity-Assistant-Vice-President-State-Street-Global-Advisors | State Street | QRA Systematic Equity, AVP, London | SKIP: systematic equities, wrong domain
- [x] https://careers.moodys.com/jobs/17134BR-quantitative-analyst-new-york/ | Moody's Analytics | Quantitative Analyst, NYC | SKIP: NYC + wrong domain
- [!] https://bloomberg.avature.net/careers/JobDetail/Bloomberg-Economics-Geoeconomics-Climate-Economist-Econometrician/15705 | Bloomberg | Climate Economist/Econometrician — EXPIRED (error page)
- [!] https://bloomberg.avature.net/careers/JobDetail/Bloomberg-Economics-Economist-Innovation-AI-Economics/15489 | Bloomberg | Economist (Innovation & AI Economics) — EXPIRED (error page)
- [x] https://bloomberg.avature.net/careers/JobDetail/Bloomberg-Economics-Country-Risk-Analyst/18671 | Bloomberg | Country Risk Analyst | SKIP: active but country risk data analytics role — not macro research; data pipeline/indices building focus
- [x] https://job-boards.greenhouse.io/anthropic/jobs/5076616008 | Anthropic | Research Scientist, Societal Impacts | SKIP: SF-only + ML/AI safety background required — wrong domain
- [x] https://job-boards.greenhouse.io/anthropic/jobs/4966476008 | Anthropic | Editorial, Economics & Policy Lead | SKIP: editorial/communications role, not research economics
- [x] https://job-boards.greenhouse.io/anthropic/jobs/5071132008 | Anthropic | Research Engineer, Economic Research | SKIP: data engineering/infrastructure role, not research economist
- [x] https://job-boards.greenhouse.io/anthropic/jobs/5076606008 | Anthropic | Research Engineer / Scientist, Societal Impacts | SKIP: SF-only + AI safety/ML focus
- [x] https://job-boards.greenhouse.io/anthropic/jobs/4502440008 | Anthropic | Data Scientist, Economic Index | SKIP: closed July 2025 + data science role not macro research
- [!] https://openai.com/careers/policy-research-scientist-geopolitics | OpenAI | Policy Research Scientist, Geopolitics — EXPIRED (404)
- [x] https://openai.com/careers/research-scientist-san-francisco/ | OpenAI | Research Scientist | SKIP: SF-only + ML research ("new ideas in machine learning") — wrong domain
- [x] https://careers.google.com/jobs/results/126114764397912774-competition-economist/ | Google | Competition Economist | SKIP: antitrust/IO domain — already evaluated similar role as #061
- [x] https://careers.google.com/jobs/results/123260518036054726-economist/ | Google | Economist | SKIP: likely internal tech economics, not macro research
- [x] https://www.amazon.jobs/en/jobs/10387171/senior-economist-economic-decision-science | Amazon | Senior Economist, Economic Decision Science | SKIP: internal ops economics — prior SKIP pattern
- [x] https://www.amazon.jobs/en/jobs/2964070/senior-economist | Amazon | Senior Economist | SKIP: Amazon internal economics — prior SKIP pattern
- [x] https://www.amazon.jobs/en/jobs/2883176/senior-economist-tech-lead-amazon | Amazon | Senior Economist, Tech Lead | SKIP: internal tech economics
- [x] https://www.amazon.jobs/en/jobs/2934448/principal-economist-ww-selling-partner-growth | Amazon | Principal Economist, WW Selling Partner Growth | SKIP: internal seller/marketplace economics
- [x] https://www.amazon.jobs/en/jobs/2829710/principal-economist-economics-growth-rufus | Amazon | Principal Economist, Economics & Growth (Rufus) | SKIP: internal product economics (Rufus = Amazon AI assistant)
- [!] https://www.efinancialcareers.com/jobs-UK-London-Quantitative_Investment_Strategies_QIS_Quantitative_Strategist.id23590697 | Deutsche Bank | QIS Quantitative Strategist, London (via eFinancialCareers) — EXPIRED (404)
- [!] https://www.efinancialcareers.com/jobs-UK-London-Quantitative_Strategist_-_Treasury_Strats.id23591315 | Deutsche Bank | Quantitative Strategist – Treasury Strats, London (via eFinancialCareers) — EXPIRED (404)
- [x] https://wise.jobs/job/quantitative-researcher-staff-data-scientist-in-london-jid-962 | Wise | Staff Data Scientist – Quant Research (FX risk modeling), London | SKIP: fintech data science/FX risk, wrong archetype
- [x] https://careers.adyen.com/vacancies/7155054-credit-risk-analyst | Adyen | Credit Risk Analyst, Amsterdam | SKIP: fintech credit risk analyst, wrong domain

### Central Banks & Policy Institutions — Chunk 1 (2026-05-25)
- [!] https://talent.ecb.europa.eu/careers/JobDetail/Senior-Economists-Monetary-Analysis/9667 | ECB | Senior Economists – Monetary Analysis — EXPIRED (closing date 29.05.2024, over 1 year ago)
- [!] https://talent.ecb.europa.eu/careers/JobDetail/Senior-Research-Economist-Monetary-Policy-Research/10771 | ECB | Senior Research Economist – Monetary Policy Research — EXPIRED (closing date 12.05.2025)
- [!] https://talent.ecb.europa.eu/careers/JobDetail/Senior-Economists-Forecasting-and-Policy-Modelling/12817 | ECB | Senior Economists – Forecasting and Policy Modelling — EXPIRED (closing date 01.12.2025)
- [!] https://talent.ecb.europa.eu/careers/JobDetail/Senior-Research-Economist-Financial-Research-Division/4543 | ECB | Senior Research Economist – Financial Research Division — EXPIRED (closing date 10.12.2021)
- [!] https://careers.bankofcanada.ca/job/Ottawa-(Downtown)-Senior-Economist-ON/591354817/ | Bank of Canada | Senior Economist (Ottawa) — CLOSED (position filled message)
- [!] https://careers.bankofcanada.ca/job/Ottawa-(Downtown)-Senior-Economist-Model-Development-ON/593876217/ | Bank of Canada | Senior Economist – Model Development — CLOSED (position filled message)
- [!] https://careers.bankofcanada.ca/job/Ottawa-(Downtown)-Principal-Economist-ON/591949517/ | Bank of Canada | Principal Economist — CLOSED (position filled message)
- [!] https://careers.bankofcanada.ca/job/Ottawa-(Downtown)-Principal-Economist,-Payment-Policy-and-Strategy-Team-ON/601474617/ | Bank of Canada | Principal Economist, Payment Policy and Strategy — CLOSED (position filled message)
- [!] https://careers.bankofcanada.ca/job/Calgary-Economist-or-Senior-Economist-AB/591391717/ | Bank of Canada | Economist or Senior Economist (Calgary) — CLOSED (position filled message)
- [!] https://www.bundesbank.de/en/career/job-offers/economist-for-macroeconometric-modelling-915120 | Bundesbank | Economist for Macroeconometric Modelling — EXPIRED (404 page not found)
- [!] https://careers.snb.ch/job/Senior-Economist/1142752001/ | Swiss National Bank | Senior Economist (International Policy Analysis) — EXPIRED ("not currently available")
- [!] https://jobs.ebrd.com/job/London-Principal-Economist/1286769101/ | EBRD | Principal Economist — FILLED ("position has been filled")
- [!] https://jobs.ebrd.com/job/London-Senior-Lead-Research-Economist/1061670001/ | EBRD | Senior / Lead Research Economist — FILLED ("position has been filled")
- [!] https://www.federalreserve.gov/careers-economistgeneral.htm | Federal Reserve Board | Economists (Multiple Positions) — EXPIRED (404 page not found)
- [!] https://www.riksbank.se/en-gb/about-the-riksbank/come-work-with-us/available-vacancies/ | Sveriges Riksbank | Research Economist — NO VACANCIES (vacancies page shows no current listings)
- [x] https://www.civilservicejobs.service.gov.uk/csr/jobs.cgi?jcode=1936587 | HM Treasury | Economic Adviser for Labour Markets | SKIP: labour market microeconomics (NLW/Minimum Wage analysis) — wrong domain; not macro-financial
- [x] #105 | https://www.civilservicejobs.service.gov.uk/csr/jobs.cgi?jcode=1928028 | HM Treasury | Economic Adviser – Macroeconomic Assessment | 4.0/5 | PDF ❌
- [x] #106 | https://www.civilservicejobs.service.gov.uk/csr/index.cgi?SID=am9ibGlzdF92aWV3X3ZhYz0xOTA5MDgxJm93bmVydHlwZT1mYWlyJnVzZXJzZWFyY2hjb250ZXh0PTgxMDI0OTg2JnBhZ2VhY3Rpb249dmlld3ZhY2J5am9ibGlzdCZzZWFyY2hzb3J0PWNsb3Zpbmcmb3duZXI9NTA3MDAwMCZzZWFyY2hwYWdlPTImcGFnZWNsYXNzPUpvYnM%3D | HM Treasury | Macroeconomic Adviser (Darlington Only) | 3.5/5 | PDF ❌
- [!] http://careers.rba.gov.au/caw/en/job/495430/economists-and-analysts | Reserve Bank of Australia | Economists and Analysts — EXPIRED (DNS error, domain not resolved)
- [!] https://www.bis.org/careers/vacancies/jr100194.htm | BIS / FSB | Director of Financial Stability Analysis — EXPIRED (404 page not found)
- [x] https://www.wto.org/english/thewto_e/vacan_e/vacan_e.htm | WTO | Trade Policy Analyst / Economist | SKIP: generic careers page, no specific vacancy — URL does not point to an active specific posting
- [!] https://careers.un.org/jobSearchDescription/241225?language=en | United Nations | Economic Affairs Officer — EXPIRED (deadline Oct 30, 2024; confirmed "no longer available" on page)

### Macro Advisory & Think Tanks — Chunk 2 refresh (2026-05-26)
- [!] https://app.beapplied.com/apply/ejs5bakqcm | Resolution Foundation | Principal Economist / Research and Policy Analyst — EXPIRED (Applied form closed Jan 2024)
- [!] https://ifs.org.uk/jobs/44 | IFS | Associate Director — EXPIRED (404)
- [!] https://frontiereconomics.wd3.myworkdayjobs.com/en-US/Frontier_Economics_Careers/job/Manager--Economist-_JR10073 | Frontier Economics | Manager (Economist) — EXPIRED ("page doesn't exist")
- [!] https://careers.oxera.com/jobs/6130035-senior-consultant-competition-economics | Oxera | Senior Consultant – Competition Economics — FILLED ("position no longer active")
- [!] https://careers.oxera.com/jobs/6615201-senior-consultant-performance-productivity-and-efficiency | Oxera | Senior Consultant – Performance, Productivity & Efficiency — FILLED ("position no longer active")
- [!] https://www.ippr.org/job/senior-research-fellow-centre-for-economic-justice | IPPR | Senior Research Fellow – Centre for Economic Justice — EXPIRED (page not found)
- [!] https://www.ippr.org/jobs/senior-research-fellow-democracy-and-politics-2 | IPPR | Senior Research Fellow – Democracy and Politics — EXPIRED (404)

### Hedge Funds & Asset Managers — Chunk 3 scan (2026-05-27)
- [!] https://boards.greenhouse.io/marshallwace/jobs/4037620002 | Marshall Wace | Quantitative Researcher - Volatility Strategies — EXPIRED (Greenhouse error redirect)
- [x] https://job-boards.greenhouse.io/bridgewater89/jobs/8406845002 | Bridgewater | Equity Quantitative Research Associate | SKIP: equities QR — wrong domain
- [x] https://job-boards.greenhouse.io/grahamcapitalmanagement/jobs/4444206005 | Graham Capital | AI / ML Quantitative Research Manager | SKIP: ML/AI focus — same as prior evaluation in Chunk 5 scan
- [x] https://job-boards.greenhouse.io/grahamcapitalmanagement/jobs/4617135005 | Graham Capital | Quantitative Research Manager | SKIP: HF systematic research gap — same as prior evaluation
- [x] https://job-boards.greenhouse.io/point72/jobs/8384470002 | Point72 | Microstructure Quantitative Researcher | SKIP: microstructure, wrong domain
- [!] https://job-boards.greenhouse.io/point72/jobs/7663057002 | Point72 | Credit Quantitative Analyst - Global Macro — EXPIRED (redirected to generic Point72 careers)
- [!] https://careers.twosigma.com/careers/JobDetail/New-York-New-York-United-States-Quantitative-Researcher-Scientific-Discretionary/12679 | Two Sigma | Quantitative Researcher - Scientific Discretionary — EXPIRED (error page)
- [!] https://www.deshaw.com/careers/quantitative-analyst-4898 | D.E. Shaw | Quantitative Analyst — EXPIRED (redirected to generic careers)
- [!] https://career.mlp.com/careers/job/755935534256 | Millennium | Quantitative Researcher, Systematic Equities — EXPIRED ("job may have closed")
- [!] https://job-boards.greenhouse.io/quberesearchandtechnologies/jobs/7686749002 | Qube Research & Technologies | Quantitative Researcher – QRT Academy — EXPIRED (Greenhouse error redirect)
- [x] https://job-boards.greenhouse.io/quberesearchandtechnologies/jobs/6486065002 | Qube Research & Technologies | Quantitative Researcher/Trader | SKIP: active but Mumbai + physics/stats profile required
- [!] https://careers.aqr.com/jobs/research/greenwich-ct/quantitative-research-prediction-markets-vp/6818614?gh_jid=6818614 | AQR | Quantitative Research – Prediction Markets VP — EXPIRED (redirected to generic AQR careers)
- [!] https://careers.blackrock.com/job/london/quantitative-modeling-vice-president/45831/84703877168 | BlackRock | Quantitative Modeling, Vice President (London) — EXPIRED (Custom Job Error)
- [!] https://careers.blackrock.com/job/new-york/quantitative-investment-researcher-blackrock-investment-institute-associate/45831/92961326752 | BlackRock | Quantitative Investment Researcher, BlackRock Investment Institute, Associate (NYC) — EXPIRED (Custom Job Error)
- [x] https://arrowstreetcapital.wd5.myworkdayjobs.com/en-US/Arrowstreet/job/Senior-Quantitative-Researcher_R1481 | Arrowstreet Capital | Senior Quantitative Researcher | SKIP: Boston + equities/currency systematic — wrong domain and US location
- [x] https://apply.workable.com/capula-investment-management-ltd/j/9582487D5F | Capula | Quantitative Strategist (PhD) | SKIP: requires fresh PhD in physics/math/stats/engineering — economics PhD not profile match
- [!] https://www.linkedin.com/jobs/view/emea-economist-and-portfolio-strategist-at-pimco-3823814479 | PIMCO | EMEA Economist & Portfolio Strategist (London) — EXPIRED (LinkedIn expired redirect)
- [x] https://www.linkedin.com/jobs/view/quantitative-researcher-portfolio-finance-at-balyasny-asset-management-l-p-4416324555 | Balyasny | Quantitative Researcher, Portfolio Finance | SKIP: NYC + portfolio finance focus

### Scan Chunk 5 — IFI, Think Tanks, Macro Research & QR (2026-05-17)
- [x] https://niesr.ac.uk/vacancy/associate-economist-4 | NIESR | Associate Economist | SKIP: too junior
- [x] https://careers.oxfordeconomics.com/postings/80dbc5b9-afef-42e6-8ae9-f74ec31e9fc2 | Oxford Economics | Sr. Economist / Data Scientist - Economic Impact (London) | SKIP: requires ML experience (domain mismatch); economic impact consulting not macro research
- [x] https://job-boards.eu.greenhouse.io/mangroup/jobs/4724414101 | Man Group | Senior Quantitative Researcher - Macro (London) | SKIP: hard blocker — requires 4+ yrs live trading alpha signals (futures/FX); "Macro" = trading factors, not macro research
- [x] https://boards.greenhouse.io/grahamcapitalmanagement/jobs/4444206005 | Graham Capital | AI/ML Quantitative Research Manager (London/NY/Norwalk) | SKIP: ML/AI focus, HF systematic gap too large
- [x] https://boards.greenhouse.io/grahamcapitalmanagement/jobs/4617135005 | Graham Capital | Quantitative Research Manager (London/NY/Norwalk/WPB) | SKIP: HF systematic research gap too large
- [x] https://www.qube-rt.com/careers/job?gh_jid=4104778002 | QRT | Quantitative Researcher (London) | SKIP: pure systematic quant shop, CS/math/physics profile required
- [x] https://www.qube-rt.com/careers/job?gh_jid=6785866002 | QRT | Quantitative Strategist (London) | SKIP: pure systematic quant shop, wrong profile
- [x] https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1002/job/210587704 | JPMorgan | Economist - EMEA EM (Central Asia/Balkans) - Associate/VP (London) | EXPIRED: "This job is no longer available"

### Scan retry — 2026-05-23
- [x] #090 | https://www.efinancialcareers.co.uk/jobs-UK-London-Systematic_Macro_Quantitative_Researcher__Multi-Strat_Hedge_Fund.id23993238 | Anon Multi-Strat HF | Systematic Macro QR | 3.8/5 | PDF ❌

### Portal Scan — 2026-05-29
- [x] #099 | https://www.efinancialcareers.co.uk/jobs-United_Kingdom-London-Senior_Quant_Researcher__PM_%E2%80%93_Systematic_Liquid_Macro_%E2%80%93_London.id24287032 | Octavius Finance (anon HF) | Senior Quant Researcher / PM – Systematic Liquid Macro | 2.9/5 | PDF ❌
- [x] #100 | https://www.efinancialcareers.co.uk/jobs-United_Kingdom-London-Global_Macro_Systematic_Quant_Researcher_%E2%80%93_London_%E2%80%93_Hedge_Fund.id24283013 | Octavius Finance (anon HF) | Global Macro Systematic Quant Researcher | 3.5/5 | PDF ❌
- [x] #101 | https://www.efinancialcareers.co.uk/jobs-United_Kingdom-London-Quantitative_Researcher_-_Discretionary.id24276563 | Man Group | Quantitative Researcher – Discretionary | 2.4/5 | PDF ❌
- [x] #102 | https://www.efinancialcareers.co.uk/jobs-United_Kingdom-London-Macro_Quantitative_Researcher.id24215376 | Anson McCade (anon HF) | Macro Quantitative Researcher | 3.4/5 | PDF ❌
- [x] #103 | https://www.efinancialcareers.co.uk/jobs-United_Kingdom-London-EconomistStrategist_Quantitative.id24266559 | Aviva | Economist/Strategist (Quantitative) | 3.9/5 | PDF ❌
- [x] #104 | https://www.jobs.ac.uk/job/DRO118/environmental-macro-economist | National Oceanography Centre | Environmental Macro Economist ⚠️ closes 31 May 2026 | 3.5/5 | PDF ❌

### Scan Chunk 1 — Central Banks & Policy (2026-06-07)
> ⚠️ DEAD CHUNK — verified via Playwright 2026-06-10. The 2026-06-07 remote scan used websearch (no liveness check) and surfaced permanent-URL archived/closed postings. Every verifiable specific posting was dead. Do NOT re-add these URLs. Check live careers pages instead.
- [!] https://talent.ecb.europa.eu/careers/JobDetail/Economist/2845 | ECB | Economist — EXPIRED (closing date 21.12.2020, archived)
- [!] https://talent.ecb.europa.eu/careers/JobDetail/Senior-Economist-Prices-and-Costs/8275 | ECB | Senior Economist – Prices and Costs — EXPIRED (same archived vintage; not re-verified individually)
- [!] https://talent.ecb.europa.eu/careers/JobDetail/Senior-Economist-European-Institutions-and-Fora/9109 | ECB | Senior Economist – European Institutions and Fora — EXPIRED (same archived vintage; not re-verified individually)
- [!] https://talent.ecb.europa.eu/careers/JobDetail/Senior-Economist-External-Developments/5321 | ECB | Senior Economist – External Developments — EXPIRED (same archived vintage; not re-verified individually)
- [!] https://talent.ecb.europa.eu/careers/JobDetail/Senior-Economist-Monetary-Policy-Strategy/5086 | ECB | Senior Economist – Monetary Policy Strategy — EXPIRED (closing date 08.06.2022, archived)
- [!] https://talent.ecb.europa.eu/careers/JobDetail/Senior-Economist-Strategic-Issue-Section-DG-MP/3860 | ECB | Senior Economist – Strategic Issue Section DG/MP — EXPIRED (same archived vintage; not re-verified individually)
- [!] https://careers.bankofcanada.ca/job/Ottawa-(Downtown)-Economist,-International-economic-analysis-and-near-term-forecasting-ON/602759817/ | Bank of Canada | Economist – International Economic Analysis and Near-Term Forecasting — CLOSED (posting removed, chrome-only page)
- [x] https://www.centralbank.ie/careers/experienced-professionals | Central Bank of Ireland | Economist and Senior Economist Opportunities — CLOSED 2026-06-10: generic landing page; current-vacancies portal confirmed empty (no live roles)
- [x] https://imf.wd5.myworkdayjobs.com/IMF | IMF | Experienced Economist Pipeline — PROCESSED 2026-06-10: live Workday board; evaluated Financial Sector Expert/MCMFS (#113, 4.3/5, APPLY) + Tax Policy/FADT2 (#114, 1.9/5, SKIP)
- [!] https://careers.un.org/jobSearchDescription/258200 | United Nations | Economic Affairs Officer — CLOSED (deadline Jun 2025) + P-3 too junior
- [!] https://hmtreasury.referrals.selectminds.com/Obr-careers | OBR | Economic Modelling and Analysis Team Leader — DEAD URL (domain does not resolve)

- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477311 | Brown University | Postdoctoral Research Associate | SKIP: academic postdoc — outside profile archetypes
- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477440 | Capital Fund Management | Quantitative Researcher | SKIP: duplicate, already evaluated as #093 (3.5/5)
- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477244 | Chung-Hua Institution for Economic Research | Assistant Research Fellow (equivalent to assistant professor) | SKIP: academic faculty — outside profile archetypes
- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477350 | Cornerstone Research | Senior Economist | SKIP: duplicate, already evaluated as #096 (3.2/5)
- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477453 | Food &amp;amp; Resource Economics (FRE), University of Florida / IFAS | Postdoctoral Research Associate | SKIP: academic postdoc — outside profile archetypes
- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477249 | Nipun Capital, L.P. | Senior Quantitative Researcher | SKIP: duplicate, already evaluated as #094 (2.3/5)
- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477139 | PDT Partners | Quantitative Researcher | SKIP: duplicate, already evaluated as #095 (3.0/5)
- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477482 | Regional Office for Asia and the Pacific, International Monetary Fund (IMF) | Economist (Local) - IMF Regional Office for Asia and the Pacific (OAP) in Tokyo | SKIP: duplicate, already evaluated as #098 (2.8/5)
- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477197 | Stanford University (US) and Heidelberg University (Germany) | Postdoctoral Research Fellow or Social Science Research Scholar | SKIP: academic postdoc — outside profile archetypes
- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477321 | TIAA Institute | Postdoctoral Research Fellow | SKIP: academic postdoc — outside profile archetypes
- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477425 | University of Minnesota, Twin Cities | Minnesota State Economist and Professor of Applied Economics | SKIP: academic faculty — outside profile archetypes
- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477224 | University of North Carolina Greensboro | Director of Economic Analysis and Public Scholarship | SKIP: academic admin role — outside profile archetypes
- [x] https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477408 | University of Tennessee | Post-Doctoral Research Associate | SKIP: academic postdoc — outside profile archetypes

## Procesadas

- [x] #120 | https://careers.blackrock.com/job/new-york/managing-director-global-head-of-macro-blackrock-investment-institute/45831/95674962736 | BlackRock | Managing Director, Global Head of Macro - BlackRock Investment Institute (New York) | 1.8/5 | PDF ❌
- [x] #118 | https://talent.ecb.europa.eu/careers/JobDetail/Research-Analysts-Economic-Analysis-Policy/14249 | ECB | Research Analysts - Economic Analysis & Policy | 2.6/5 | PDF ❌
- [x] #091 | https://www.efinancialcareers.co.uk/jobs-UK-London-Quantitative_Analyst_%E2%80%93_Systematic_Macro_Global_Asset_Manager_London.id24152388 | Anon Global AM | Quantitative Analyst – Systematic Macro (London) | 3.6/5 | PDF ❌
- [x] #130 | https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477508 | Consulting firm (anon) | Part-Time PhD Economist - Composite Index Methodology | 1.8/5 | PDF ❌
- [x] #131 | https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477504 | Mount Mercy University (St. Ambrose) | Faculty, Economics/Quantitative Methods | 1.0/5 | PDF ❌
- [x] #132 | https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477506 | University of Arizona | Lead Economist (EBRC) | 2.2/5 | PDF ❌
- [x] #133 | https://www.aeaweb.org/joe/listing.php?JOE_ID=2026-01_111477509 | White House CEA | Staff Economist - Supply Chains | 1.2/5 | PDF ❌
- [x] #134 | https://www.unjobnet.org/jobs/detail/86774540 | European Investment Bank | Group Chief Economist (Luxembourg) | 2.6/5 | PDF ❌
- [x] #135 | https://www.unjobnet.org/jobs/detail/86774018 | World Trade Organization | Research Economist | 2.9/5 | PDF ❌
- [x] #136 | https://www.unjobnet.org/jobs/detail/86767545 | World Bank (IFC) | Economist - Country Advisory & Economics (Rabat) | 2.0/5 | PDF ❌
- [x] #137 | https://www.unjobnet.org/jobs/detail/86757060 | Bill & Melinda Gates Foundation | Senior Research Economist - Gender/Health Equity (11-mo LTE) | 1.0/5 | PDF ❌
- [x] #138 | https://www.unjobnet.org/jobs/detail/86754911 | World Bank (IFC) | Senior Economist - East Asia & Pacific (Hong Kong) | 2.1/5 | PDF ❌
- [x] #139 | https://www.unjobnet.org/jobs/detail/86748756 | UNDP | National Economist (Mogadishu, Somalia) | 1.0/5 | PDF ❌
- [x] #140 | https://www.unjobnet.org/jobs/detail/86725446 | UN Women | Economist/Women's Economic Empowerment Research Expert (Retainer Consultant) | 1.3/5 | PDF ❌
- [x] #141 | https://www.unjobnet.org/jobs/detail/86719105 | IMF | Economist/Sr. Economist - ICDMM (Macro Modelling & Monetary) | 3.3/5 | PDF ✅
- [x] #142 | https://www.unjobnet.org/jobs/detail/86699251 | UNFPA | Health Economist Midwifery Investment Specialist (Abuja, Nigeria) | 1.0/5 | PDF ❌
- [x] #143 | https://www.unjobnet.org/jobs/detail/86690546 | OECD | Economist - Policy Analyst (Crete Centre, Athens) | 3.1/5 | PDF ✅
- [x] #144 | https://www.unjobnet.org/jobs/detail/86673025 | UNHCR | Associate Economist (Abidjan, Ivory Coast) | 1.0/5 | PDF ❌
- [x] #145 | https://www.unjobnet.org/jobs/detail/84900531 | IFAD | Technical Specialist (Economist) - Development Effectiveness | 1.5/5 | PDF ❌
- [x] #146 | https://www.unjobnet.org/jobs/detail/74751203 | AIIB | Senior Economist - Climate Policy (for pooling only) | 1.2/5 | PDF ❌
- [x] https://www.efinancialcareers.co.uk/jobs-UK-London-Quantitative_Researcher.id24055010 | Jane Street | Quantitative Researcher (London) | SKIP: ML/deep learning focus, not macro economics — domain mismatch
- [x] https://www.efinancialcareers.co.uk/jobs-UK-London-Quantitative_Researcher.id24162774 | Winton | Quantitative Researcher (London) | SKIP: eFC re-post of Greenhouse job 4353297101, already evaluated as #037 (3.3/5)
- [x] #092 | https://www.efinancialcareers.co.uk/jobs-UK-London-Data_Scientist_Macro_Fixed_Income_Hedge_Fund_London_Onsite.id23993235 | Anon Macro FI HF | Data Scientist – Macro Fixed Income Hedge Fund (London) | 2.8/5 | PDF ❌
- [x] #121 | https://www.worldquant.com/career-listing/?id=4252938006 | WorldQuant | Experienced Quantitative Strategist | 1.8/5 | PDF ❌
- [x] #122 | https://www.worldquant.com/career-listing/?id=4069466006 | WorldQuant | Quantitative Researcher | 1.0/5 | PDF ❌
- [x] #123 | https://bdf.wd103.myworkdayjobs.com/en-US/recrutement-banque-de-France/job/PARIS/Economiste-international-H-F_JR100179 | Banque de France | Economiste international H/F | 4.3/5 | PDF ✅
- [x] #124 | https://careers.marsh.com/global/en/job/R_344059/NERA-Junior-Economist-Auckland | NERA | NERA Junior Economist - Auckland | 1.5/5 | PDF ❌
- [x] #125 | https://www.squarepoint-capital.com/opportunity-details?id=253410 | Squarepoint | Senior Quant Researcher - CTA/Short-Term | 2.0/5 | PDF ❌
- [x] #126 | https://www.squarepoint-capital.com/opportunity-details?id=253411 | Squarepoint | Senior Quant Researcher - Equity Mid/Low Frequency | 1.8/5 | PDF ❌
- [x] #127 | https://pimco.wd1.myworkdayjobs.com/pimco-careers/job/Newport-Beach-CA-USA/Quantitative-Research-Analyst---Client-Analytics_R106268 | PIMCO | Quantitative Research Analyst – Client Analytics | 2.9/5 | PDF ❌
- [x] #128 | https://pimco.wd1.myworkdayjobs.com/pimco-careers/job/London-GBR/Product-Strategist_R106312 | PIMCO | Product Strategist | 1.6/5 | PDF ❌
