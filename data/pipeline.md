# Pipeline

Inbox of pending URLs to evaluate. Add URLs here; run `/career-ops pipeline` to process them.

## Manual checks (no API — check weekly)

- [ ] EIB/EIF e-recruitment (PeopleSoft, scanner-blind): https://erecruitment.eib.org/psc/hr/EIBJOBS/CAREERS/c/HRS_HRAM_FL.HRS_CG_SEARCH_FL.GBL
  - Also monitor: devex.com/jobs · LinkedIn saved search "European Investment Fund"

## Pendientes

### Manual addition (2026-09-21)
- [ ] https://careers.twosigma.com/careers/JobDetail/New-York-New-York-United-States-Quantitative-Researcher-Systematic-Macro-Portfolio-Management/13975 | Two Sigma | Quantitative Researcher - Systematic Macro Portfolio Management | Surfaced during #203 evaluation as a much better-fit alternative to the HFT-arm listing scored there

### Central Banks & Policy — manual local scan, chunk 1 (2026-09-19)

Cloud routine "Scan Chunk 1" has failed 4 consecutive runs due to egress block in the cloud sandbox (career-portal domains return 403 from the proxy). Ran manually in a local interactive session instead — real network access confirmed, all 31 companies fully checked via WebFetch + Playwright (JS-rendered SPAs needed Playwright).

**Confirmed zero relevant postings** (fully verified, not just blocked): BoE (9 open roles, none economist/macro), CBI (3 roles: resilience/supervisor/regulatory panel), Bank of Canada (17 roles, only Senior Economist listed separately below), BIS (2 roles: IT architect, audit manager), FSB (staffed via BIS secretariat, same result), ESRB (staffed via ECB, see ECB result), EU Careers/EPSO (0 economics competitions open, only IT/audit/legal), IMF (3 results for "Economist": Deputy Division Chief — too senior; Research Analyst Program — too junior; Communications Officer — irrelevant), OECD (8 roles, no economist title, you already have an active pooled application there — #151), WTO (1 role: internship only), UN Careers (interface not efficiently scannable — enormous duty-station filter list; historical pattern here is nationality-restricted National Officer posts), EBRD (3 roles: junior Analyst/Associate in unrelated verticals), RBA (0 for "Economist").

**Not fully verified — manual check recommended:** SNB (9 total openings, results table didn't render in this pass), HM Treasury/Civil Service Jobs (blocked by an "I'm not a robot" check — not bypassed), Riksbank/Norges Bank/Bundesbank (confirmed "no vacancies"/internship-only via WebFetch, not re-verified with Playwright).

**New finds — added to pipeline:**
- [ ] https://rb.wd5.myworkdayjobs.com/en-US/FRS/job/Chicago-IL/Economist-Senior-Economist-Economic-Advisor---Macroeconomics_R-0000033014-2 | Federal Reserve Bank of Chicago | Economist/Senior Economist/Economic Advisor – Macroeconomics
- [ ] https://rb.wd5.myworkdayjobs.com/en-US/FRS/job/Chicago-IL/Economist-Senior-Economist-Economic-Advisor---Financial-Economics_R-0000033195-1 | Federal Reserve Bank of Chicago | Economist/Senior Economist/Economic Advisor – Financial Economics
- [ ] https://rb.wd5.myworkdayjobs.com/en-US/FRS/job/Chicago-IL/Principal-Business-Economist-Regional-Policy-Advisor_R-0000032751-1 | Federal Reserve Bank of Chicago | Principal Business Economist/Regional Policy Advisor
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
- [x] #171 | https://talent.ecb.europa.eu/careers/JobDetail/Research-Analyst-ESCB-IO-European-Systemic-Risk-Board-Secretariat/14801 | ECB (ESRB Secretariat) | Research Analyst (ESCB/IO) | 1.0/5 | PDF ❌ | SKIP: ESCB/IO secondment eligibility blocker
- [x] #168 | /job/Ottawa-%28Downtown%29-Senior-Economist-ON/605890217/ (careers.bankofcanada.ca) | Bank of Canada | Senior Economist | 1.3/5 | PDF ❌ | SKIP: citizenship/clearance/no-relocation blockers
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

### Central Banks & Policy Institutions — Chunk 1 refresh (2026-06-10)
- [ ] https://talent.ecb.europa.eu/careers/JobDetail/Economists-Prices-and-Costs/13480 | ECB | Economists – Prices and Costs
- [ ] https://talent.ecb.europa.eu/careers/JobDetail/Economist-Monetary-Analysis/13620 | ECB | Economist – Monetary Analysis (Money, Credit and Financial Accounts)
- [ ] https://talent.ecb.europa.eu/careers/JobDetail/Economist-External-Developments/4849 | ECB | Economist – External Developments
- [ ] https://careers.un.org/jobSearchDescription/261859?language=en | United Nations | Senior Economic Affairs Officer (Macroeconomic), P5
- [ ] https://jobs.smartrecruiters.com/OECD/744000130505898-economist-policy-analyst- | OECD | Economist / Policy Analyst (Athens, deadline 28 Jun 2026)
- [ ] https://www.civilservicejobs.service.gov.uk/csr/jobs.cgi?jcode=1785043 | HM Treasury | Head of Fiscal Forecast and OBR Branch

### Banks, Data, Tech & Fintech — Chunk 4 refresh (2026-06-11)
- [ ] https://job-boards.greenhouse.io/anthropic/jobs/5231205008 | Anthropic | Regional Research Economist, Economic Research
- [ ] https://job-boards.greenhouse.io/anthropic/jobs/4555010008 | Anthropic | Economist
- [ ] https://globalcareers-msci.icims.com/jobs/2850/quantitative-researcher/job | MSCI | Quantitative Researcher
- [ ] https://stripe.com/jobs/listing/data-scientist-economic-insights-research/7980402 | Stripe | Data Scientist, Economic Insights & Research
- [ ] https://block.xyz/careers/jobs/4814639008?gh_jid=4814639008 | Square (Block) | Senior Economist, Advanced Insights and Modeling
- [ ] https://careers.bloomberg.com/job/detail/123928 | Bloomberg | Quantitative Analyst (Data Visualization), Bloomberg Economics
- [ ] https://careers.bloomberg.com/job/detail/100440 | Bloomberg | CEE & Russia Economist
- [ ] https://careers.bloomberg.com/job/detail/96430 | Bloomberg | Nordic Economist
- [ ] https://careers.bloomberg.com/job/detail/93382 | Bloomberg | Quantitative Researcher - Enterprise Data
- [ ] https://careers.google.com/jobs/results/123967399538893510-senior-economist/ | Google | Senior Economist, Economic Impact Estimation
- [ ] https://careers.google.com/jobs/results/137389842756444870-regulatory-competition-economist/ | Google | Regulatory Competition Economist
- [ ] https://careers.google.com/jobs/results/74638639891391174-macroeconomist/ | Google | Macroeconomist
- [ ] https://careers.google.com/jobs/results/144082303916614342-competition-economist/ | Google | Competition Economist
- [ ] https://www.janestreet.com/join-jane-street/position/8092053002/ | Jane Street | Quantitative Researcher, London
- [ ] https://www.amazon.jobs/en/jobs/3192620/economist-economic-decision-science | Amazon | Economist, Economic Decision Science
- [ ] https://www.amazon.jobs/en/jobs/2963641/economist-ii | Amazon | Economist II
- [ ] https://www.amazon.jobs/en/jobs/2964072/economist | Amazon | Economist
- [ ] https://www.amazon.jobs/en/jobs/2611886/economist | Amazon | Economist
- [ ] https://www.amazon.jobs/en/jobs/1988297/economist-economic-and-community-impact | Amazon | Economist, Economic and Community Impact
- [ ] https://www.amazon.jobs/en/jobs/3005549/economist-ii-amz9442285 | Amazon | Economist II - AMZ9442285

### Hedge Funds & Asset Managers — Chunk 3 refresh (2026-06-24)
- [ ] https://www.deshawindia.com/careers/senior-analyst-lead-analyst-macro-economist-financial-research-6101 | D.E. Shaw | Senior Analyst/Lead Analyst – Macro (Economist), Financial Research
- [ ] https://www.deshaw.com/careers/economist-analyst-discretionary-macro-new-york-3934 | D.E. Shaw | Economist Analyst, Discretionary Macro
- [ ] https://job-boards.greenhouse.io/point72/jobs/8233916002 | Point72 | Research Analyst, Global Macro
- [ ] https://careers.point72.com/CSJobDetail?jobCode=CSS-0002897&jobName=macro-research-analyst&retURL=%2FCSCareerSearch | Point72 | Macro Research Analyst
- [ ] https://careers.point72.com/CSJobDetail?jobName=quantitative-analyst-global-macro&jobCode=CSS-0013509&location=New+York&locale=English&retURL=/CSCareerSearch | Point72 | Quantitative Analyst, Global Macro
- [ ] https://careers.point72.com/CSJobDetail?jobName=quantitative-strategist-macro-data-analytics&jobCode=PIT-0014438&location=New+York&locale=English&retURL=%2FCSCareerSearch | Point72 | Quantitative Strategist, Macro Data Analytics
- [ ] https://startup.jobs/macro-sector-analyst-point72-4474904 | Point72 | Macro Sector Analyst
- [ ] https://job-boards.greenhouse.io/bridgewater89/jobs/8219433002 | Bridgewater | Research Associate, Fiscal and Trade Policy
- [ ] https://job-boards.greenhouse.io/bridgewater89/jobs/8203810002 | Bridgewater | Commodities Research Associate
- [ ] https://boards.greenhouse.io/bridgewater89/jobs/6478365002 | Bridgewater | Geopolitics Research Associate
- [ ] https://www.linkedin.com/jobs/view/quantitative-researcher-central-liquidity-book-at-balyasny-asset-management-l-p-3748811334 | Balyasny | Quantitative Researcher - Central Liquidity Book
- [ ] https://www.linkedin.com/jobs/view/quantitative-researcher-pm-engagement-at-balyasny-asset-management-l-p-4181449865 | Balyasny | Quantitative Researcher, PM Engagement
- [ ] https://www.tealhq.com/job/quantitative-researcher-credit_45377646-f31a-4f4e-b620-24693d771f20 | Balyasny | Quantitative Researcher - Credit
- [ ] https://www.theladders.com/job/treasury-senior-quantitative-researcher-balyasnyassetmanagement-new-york-ny_83084294 | Balyasny | Treasury Senior Quantitative Researcher
- [ ] https://builtin.com/job/quantitative-researcher-macro/4385913 | Qube Research & Technologies | Quantitative Researcher - Macro
- [ ] https://job-boards.greenhouse.io/quberesearchandtechnologies/jobs/7947279002 | Qube Research & Technologies | Quantitative Strategist
- [ ] https://www.theladders.com/job/senior-quant-researcher-cta-fixed-income-squarepoint-capital-houston-mn_77313399 | Squarepoint | Senior Quant Researcher - CTA/Fixed Income
- [ ] https://www.quantblueprint.com/job/squarepoint-senior-quant-researcher-cta-short-term-1 | Squarepoint | Senior Quant Researcher - CTA/Short-Term
- [ ] https://www.worldquant.com/career-listing/?id=4069466006 | WorldQuant | Quantitative Researcher
- [ ] https://builtin.com/job/quantitative-researcher-quant-macro/3755266 | WorldQuant | Quantitative Researcher, Quant Macro
- [ ] https://careers.blackrock.com/job/new-york/blackrock-investment-institute-bii-us-macro-strategist-vice-president/45831/68931340912 | BlackRock | BlackRock Investment Institute (BII) - US Macro Strategist, VP
- [ ] https://careers.blackrock.com/job/new-york/managing-director-global-head-of-macro-blackrock-investment-institute/45831/95674962736 | BlackRock | Managing Director, Global Head of Macro - BlackRock Investment Institute
- [ ] https://careers.blackrock.com/job/new-york/senior-quantitative-researcher-fixed-income-markets-research-director/45831/95589919856 | BlackRock | Senior Quantitative Researcher – Fixed Income Markets Research, Director
- [ ] https://careers.blackrock.com/job/mumbai/index-fixed-income-quant-researcher-investment-vice-president/45831/77268597264 | BlackRock | Index Fixed Income Quant Researcher, Investment, VP
- [ ] https://careers.blackrock.com/job/mexico-city/associate-quantitative-research-and-portfolio-management-multi-asset-strategies-and-solutions-mass/45831/95265574352 | BlackRock | Associate, Quantitative Research and Portfolio Management (MASS)
- [ ] https://careers.aqr.com/jobs/research/greenwich-ct/research-analyst-discretionary-macro/7979589?gh_jid=7979589 | AQR | Research Analyst - Discretionary Macro
- [ ] https://careers.aqr.com/jobs/research/greenwich-ct/research-associate-discretionary-macro/7979593?gh_jid=7979593 | AQR | Research Associate - Discretionary Macro
- [ ] https://careers.aqr.com/jobs/research/greenwich-ct/integrated-research-analyst-associate/7013706?gh_jid=7013706 | AQR | Integrated Research – Analyst/Associate
- [ ] https://boards.greenhouse.io/winton/jobs/4047683101 | Winton | MENA Equities Quantitative Researcher
- [ ] https://boards.greenhouse.io/winton/jobs/4069455101 | Winton | Quantitative Risk
- [ ] https://wd3.myworkdaysite.com/en-US/recruiting/brevanhoward/BH_ExternalCareers/job/London-82/Junior-Economist_JR100950 | Brevan Howard | Junior Economist
- [ ] https://wd3.myworkdaysite.com/en-US/recruiting/brevanhoward/BH_ExternalCareers/job/London-82/Senior-Quant-Analyst---Rates_JR101138 | Brevan Howard | Senior Quant Analyst - Rates
- [ ] https://wd3.myworkdaysite.com/en-US/recruiting/brevanhoward/BH_ExternalCareers/job/London-82/Quant-Analyst---Credit_JR101139 | Brevan Howard | Quant Analyst - Credit
- [ ] https://www.linkedin.com/jobs/view/credit-quantitative-researcher-at-capula-investment-management-llp-4315692101 | Capula | Credit Quantitative Researcher
- [ ] https://www.linkedin.com/jobs/view/credit-quantitative-researcher-at-capula-investment-management-llp-4340598030 | Capula | Credit Quantitative Researcher

### Central Banks & Policy — Chunk 1 (2026-06-29)
- [ ] https://talent.ecb.europa.eu/careers/JobDetail/Senior-Economist-External-Developments/10393 | ECB | Senior Economist – External Developments
- [ ] https://talent.ecb.europa.eu/careers/JobDetail/Senior-Economist-ESCB-IO-Monetary-Policy-Strategy/13177 | ECB | Senior Economist (ESCB/IO) – Monetary Policy Strategy (restricted to seconded Eurosystem/NCB staff)
- [ ] https://www.bis.org/careers/vacancies/jr100198.htm | BIS | Senior/Principal Economist
- [ ] https://www.bis.org/careers/vacancies/jr100388.htm | BIS | Financial Policy Analyst
- [ ] https://www.careers.eba.europa.eu/en/our-vacancies/policy-expert-23 | EBA | Policy Expert – credit risk & non-bank finance
- [ ] https://www.civilservicejobs.service.gov.uk/csr/jobs.cgi?jcode=1888688 | HM Treasury (National Infrastructure Commission) | Senior Economists – Energy and Transport
- [ ] https://www.civilservicejobs.service.gov.uk/csr/jobs.cgi?jcode=1937936 | HM Treasury | Senior Policy Adviser – Access to Finance
- [ ] https://www.civilservicejobs.service.gov.uk/csr/jobs.cgi?jcode=1937389 | HM Treasury | Assistant Economist – Trade Policy Analysis
- [ ] https://imf.wd5.myworkdayjobs.com/en-US/IMF/job/USA-Washington-DC/Economist-Sr-Economist---STAFI_26-R8940 | IMF | Economist/Sr. Economist – STAFI (Financial Institutions Division, Statistics Dept)
- [ ] https://jobs.smartrecruiters.com/OECD/744000130747518-economist-policy-analyst- | OECD | Economist – Policy Analyst (OECD Crete Centre, Athens)
- [ ] https://jobs.smartrecruiters.com/OECD/744000072464505-chief-economist | OECD | Chief Economist (Economics Department, Paris)

### Macro Advisory & Think Tanks — Chunk 2 refresh (2026-07-21)
- [ ] https://careers.oxfordeconomics.com/postings/a05f7819-6fe2-43c4-86a5-64f7b90ff638 | Oxford Economics | Lead Economist - EMEA Consulting - Tourism Economics
- [ ] https://careers.oxfordeconomics.com/postings/6361d32c-ca8d-43d6-b80b-be576e0c2c32 | Oxford Economics | (Sr.) Economist / Data Scientist - EMEA Macro Consulting
- [ ] https://careers.oxfordeconomics.com/postings/ac64098a-407c-4cbe-8bef-2b37a164c5cf | Oxford Economics | Senior Consultant - EMEA Macro Consulting
- [ ] https://careers.oxfordeconomics.com/postings/4887cb3c-4082-4e8a-a576-aff2fba20db8 | Oxford Economics | Economist - Modelling Team, Macro Consulting
- [ ] https://careers.oxfordeconomics.com/postings/11c14f49-5c8e-41ed-b851-c20cdab765b8 | Oxford Economics | Senior Economist – EMEA Consulting - Tourism Economics
- [ ] https://careers.oxfordeconomics.com/postings/ef2489e3-c007-4042-b602-75d84d3af1b3 | Oxford Economics | Lead Economist / Associate Director - TMT - Economic Impact Consulting
- [ ] https://careers.oxfordeconomics.com/en/postings/44314db2-1174-4bd8-848c-cfa71ee55af5 | Oxford Economics | Lead Economist - Economic Impact Consulting
- [ ] https://careers.oxfordeconomics.com/postings/8251cb20-9e5e-4fea-9ecd-3417f14dc095 | Oxford Economics | Lead Economist - Geospatial Research
- [ ] https://careers.oxfordeconomics.com/postings/2e5ed44c-33be-40ab-b6b8-0c3253ad8054 | Oxford Economics | Economist / Senior Economist - Macro Consulting - EMEA
- [ ] https://careers.oxera.com/jobs/6884159-consultant-competition-economics-madrid | Oxera | Consultant Competition Economics (Madrid)
- [ ] https://careers.oxera.com/jobs/6883998-consultant-competition-economics-italy | Oxera | Consultant Competition Economics (Italy)
- [ ] https://apply.workable.com/capital-economics/j/3BB573A8DB | Capital Economics | China Economist
- [ ] https://apply.workable.com/capital-economics/j/12B7B7D096/ | Capital Economics | Economist - Consultancy Team
- [ ] https://www.ippr.org/jobs/chief-of-staff-and-senior-research-fellow | IPPR | Chief of Staff and Senior Research Fellow
- [ ] https://www.ippr.org/jobs/senior-research-fellow-ippr-north-2 | IPPR | Senior Research Fellow, IPPR North
- [ ] https://www.ippr.org/jobs/principal-research-fellow-health-policy | IPPR | Principal Research Fellow & Head of Health
- [ ] https://www.ippr.org/jobs/director-of-policy-and-politics | IPPR | Director of Policy and Politics

### Hedge Funds & Asset Managers — Chunk 3 refresh (2026-07-22)
- [ ] https://job-boards.greenhouse.io/bridgewater89/jobs/8007466002 | Bridgewater | Macroeconomic Research Associate
- [ ] https://job-boards.greenhouse.io/bridgewater89/jobs/8419108002 | Bridgewater | Research Associate, Quantitative Developer
- [ ] https://job-boards.greenhouse.io/bridgewater89/jobs/8463805002 | Bridgewater | Investment Associate
- [ ] https://careers.aqr.com/jobs/research/greenwich-connecticut-united-states/researcher-discretionary-macro-/2715686 | AQR | Researcher – Discretionary Macro
- [ ] https://careers.blackrock.com/job/new-york/quantitative-investment-researcher-blackrock-investment-institute-vice-president/45831/93763593040 | BlackRock | Quantitative Investment Researcher, BII, VP
- [ ] https://careers.blackrock.com/job/new-york/quantitative-modeler-associate/45831/79182164768 | BlackRock | Quantitative Modeler, Associate
- [ ] https://careers.blackrock.com/job/new-york/associate-blackrock-investment-institute-portfolio-researcher/45831/84171444272 | BlackRock | Associate, BII Portfolio Researcher
- [ ] https://job-boards.greenhouse.io/point72/jobs/8408286002 | Point72 | Quantitative Strategist, Macro Technology
- [ ] https://job-boards.eu.greenhouse.io/mangroup/jobs/4882441101 | Man Group | Quantitative Researcher – AI/ML
- [ ] https://career.mlp.com/careers/job/755930336287-portfolio-manager-senior-quantitative-researcher-systematic-equities-london-london-united-kingdom | Millennium | PM/Senior Quantitative Researcher, Systematic Equities (London)
- [ ] https://career.mlp.com/careers/job/755954362828-quantitative-researcher-systematic-equities-london-united-kingdom | Millennium | Quantitative Researcher, Systematic Equities (London)
- [ ] https://job-boards.greenhouse.io/exoduspoint/jobs/8060596002 | ExodusPoint | Junior Quantitative Researcher (London)
- [ ] https://careers.twosigma.com/careers/JobDetail/New-York-Ny-United-States-Quantitative-Researcher-ETFs-and-Passive-Flows/13767 | Two Sigma | Quantitative Researcher – ETFs and Passive Flows
- [ ] https://www.citadel.com/careers/details/macro-equity-vol-desk-analyst/ | Citadel | Macro Equity Vol Desk Analyst
- [ ] https://www.deshaw.com/careers/fundamental-research-analyst-5255 | D.E. Shaw | Fundamental Research Analyst
- [ ] https://www.qube-rt.com/careers/research-and-trading/london/experienced-candidates/research/job?gh_jid=6546880002 | Qube R&T | Quantitative Researcher – Portfolio Allocation Manager (London)
- [ ] https://job-boards.greenhouse.io/quberesearchandtechnologies/jobs/4104490002 | Qube R&T | Quantitative Researcher – Experienced (Paris)
- [ ] https://job-boards.greenhouse.io/quberesearchandtechnologies/jobs/7902894002 | Qube R&T | Quantitative Researcher – Macro (Mumbai)
- [ ] https://jobs.amundi.com/job/job-quantitative-portfolio-manager-m-w-d-multi-asset-m-w-d_113001.aspx | Amundi | Quantitative Portfolio Manager – Multi Asset (Munich)
- [ ] https://jobs.amundi.com/offre-de-emploi/emploi-quantitative-analyst-fixed-income_98449.aspx | Amundi | Quantitative Analyst – Fixed Income (Paris)
- [ ] https://www.theladders.com/job/alpha-capture-quantitative-researcher-new-york-balyasnyassetmanagement-new-york-ny_83643382 | Balyasny | Quantitative Researcher – Alpha Capture (New York)
- [ ] https://www.theladders.com/job/quantitative-researcher-multi-asset-arbitrage-balyasnyassetmanagement-new-york-ny_86747624 | Balyasny | Quantitative Researcher – Multi-Asset Arbitrage (New York)
- [ ] https://www.theladders.com/job/quantitative-researcher-systematic-equities-new-york-balyasnyassetmanagement-new-york-ny_81768668 | Balyasny | Quantitative Researcher – Systematic Equities (New York)

### Banks, Data, Tech & Fintech — Chunk 4 refresh (2026-07-23)
- [ ] https://higher.gs.com/roles/155541 | Goldman Sachs | Quantitative Strategist, GSET
- [ ] https://www.drw.com/work-at-drw/listings/macro-analyst-event-driven-3320026 | DRW | Macro Analyst - Event Driven
- [ ] https://optiver.com/working-at-optiver/career-opportunities/8440604002/ | Optiver | Quantitative Trader/Researcher – Systematic Options Trading
- [ ] https://block.xyz/careers/jobs/5026639008 | Block (Square) | Principal Market & Quant Researcher, Bitcoin
- [ ] https://careers.statestreet.com/global/en/job/STSTGLOBALR772475EXTERNALENGLOBAL/Senior-Quantitative-Economic-Modeler-Officer | State Street | Senior Quantitative Economic Modeler
- [ ] https://careers.statestreet.com/global/en/job/STSTGLOBALR770596EXTERNALENGLOBAL/Chief-Macro-Policy-Strategist-Managing-Director | State Street | Chief Macro Policy Strategist
- [ ] https://careers.statestreet.com/global/en/job/STSTGLOBALR764218EXTERNALENGLOBAL/Quantitative-Researcher-Portfolio-Solutions-Officer-State-Street-Global-Advisors | State Street | Quantitative Researcher – Portfolio Solutions
- [ ] https://careers.statestreet.com/global/en/job/STSTGLOBALR766659EXTERNALENGLOBAL/Quantitative-Research-Analyst-Systematic-Equity-State-Street-Global-Advisors-AVP | State Street | Quantitative Research Analyst, Systematic Equity
- [ ] https://job-boards.greenhouse.io/anthropic/jobs/4934439008 | Anthropic | Economist, Policy
- [ ] https://openai.com/careers/economist-san-francisco/ | OpenAI | Economist
- [ ] https://www.amazon.jobs/en/jobs/10468079/senior-economist-amazon-stores-economics-and-science-seas | Amazon | Senior Economist, Amazon Stores Economics and Science (SEAS)
- [ ] https://www.amazon.jobs/en/jobs/1692950/principal-economist | Amazon | Principal Economist
- [ ] https://www.amazon.jobs/en/jobs/10426946/senior-economist | Amazon | Senior Economist
- [ ] https://www.amazon.jobs/en/jobs/10431868/principal-economist-aws-economic-development | Amazon | Principal Economist, AWS Economic Development
- [ ] https://careers.msci.com/job/research/san-francisco/quantitative-researcher-model-scaling/2026-5140 | MSCI | Quantitative Researcher - Model Scaling
- [ ] https://mycareer.hsbc.com/en_GB/external/PipelineDetail/Quantitative-Equities-Strategy-Manager-HSBC-Global-Asset-Management/281493 | HSBC | Quantitative Equities Strategy Manager
- [ ] https://mycareer.hsbc.com/en_GB/external/PipelineDetail/Quantitative-Investment-Strategies-Structurer-Markets/273156 | HSBC | Quantitative Investment Strategies Structurer
- [ ] https://jobs.citi.com/job/new-york/quantitative-analyst/287/92569427344 | Citigroup | Quantitative Analyst
- [ ] https://jobs.citi.com/job/new-york/research-strategist/287/73953874368 | Citigroup | Research Strategist
- [ ] https://careers.nomura.com/Nomura/job/New-York-Portfolio-Strategist-NY-10019/1377144200/ | Nomura | Portfolio Strategist
- [ ] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5012&PageType=JobDetails&jobid=339448 | UBS | Quantitative Analyst
- [ ] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5012&PageType=JobDetails&jobid=343997 | UBS | QIS Quantitative Analyst Director
- [ ] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5155&PageType=JobDetails&jobid=312786 | UBS | G10 FX Strategist
- [ ] https://www.vanguardjobs.com/job/22940908/senior-portfolio-strategist-malvern-pa/ | Vanguard | Senior Portfolio Strategist
- [ ] https://jobs.fidelity.com/en/jobs/2123619/quantitative-analyst-multi-asset-systematic-strategies/ | Fidelity | Quantitative Analyst, Multi-Asset Systematic Strategies
- [ ] https://jobs.fidelity.com/en/jobs/2128252/quantitative-investment-analyst/ | Fidelity | Quantitative Investment Analyst
- [ ] https://jobs.fidelity.com/en/jobs/2132163/quantitative-analyst/ | Fidelity | Quantitative Analyst
- [ ] https://bloomberg.avature.net/careers/JobDetail/Bloomberg-Economics-Data-Scientist/19933 | Bloomberg | Bloomberg Economics Data Scientist
- [ ] https://bloomberg.avature.net/careers/JobDetail/Team-Leader-Macro-Economics-Data/16924 | Bloomberg | Team Leader - Macro Economics Data
- [ ] https://careers.ice.com/jobs/9973?lang=en-us | ICE Data Services | Lead Quantitative Analyst
- [ ] https://careers.ice.com/jobs/11499?lang=en-us | ICE Data Services | Quantitative Analyst
- [ ] https://factset.wd1.myworkdayjobs.com/en-US/FactSetCareers/job/Senior-Quantitative-Researcher--Structured-Products-_R25637 | FactSet | Senior Quantitative Researcher, Structured Products
- [ ] https://careers.morningstar.com/us/en/job/REQ-055988/Portfolio-Manager-Senior-Quantitative-Researcher | Morningstar | Portfolio Manager & Senior Quantitative Researcher
- [ ] https://careers.morningstar.com/us/en/job/REQ-056226/Senior-Quantitative-Analyst | Morningstar | Senior Quantitative Analyst
- [ ] https://group.bnpparibas/en/careers/job-offer/risk-esg-senior-quantitative-analyst | BNP Paribas | Senior Quantitative Analyst (Risk & ESG)
- [ ] https://www.janestreet.com/join-jane-street/position/4794171002/ | Jane Street | Quantitative Trader

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
### Macro Advisory & Think Tanks — Chunk 2 scan (2026-07-28)

- [ ] https://careers.oxfordeconomics.com/postings/72d25903-a8c2-4497-b0fa-69453a5fcdff | Oxford Economics | Senior Economist, Tourism Economics - Americas
- [ ] https://frontiereconomics.wd3.myworkdayjobs.com/en-US/Frontier_Economics_Careers/job/Economic-Consultant--Competition---Energy-_JR10072 | Frontier Economics | Economic Consultant (Pool) - Competition & Energy
- [ ] https://frontiereconomics.wd3.myworkdayjobs.com/en-US/Frontier_Economics_Careers/job/Economist_JR10009 | Frontier Economics | Economist - Speculative Applications Pool
- [ ] https://apply.workable.com/capital-economics/j/A1238CCD1B | Capital Economics | North America Economist
- [ ] https://www.resolutionfoundation.org/about-us/opportunities/research-director/ | Resolution Foundation | Research Director
- [ ] https://www.bruegel.org/careers/energy-and-climate-economist | Bruegel | Energy and Climate Economist
- [ ] https://spe.org.uk/careers/jobs/senior-economist-4/ | Society of Professional Economists | Senior Economist (OMFIF)

### Banks, Data, Tech & Fintech — Chunk 4 refresh (2026-07-30)

- [ ] https://job-boards.greenhouse.io/anthropic/jobs/5149802008 | Anthropic | Transformative AI Research Economist, Economic Research
- [ ] https://job-boards.greenhouse.io/anthropic/jobs/5232055008 | Anthropic | Data Scientist, Policy
- [ ] https://careers.google.com/jobs/results/92768759820755654-competition-economist/ | Google | Competition Economist
- [ ] https://www.amazon.jobs/en/jobs/10427279/senior-economist | Amazon | Senior Economist
- [ ] https://www.amazon.jobs/en/jobs/10457261/principal-economist-stores-economics-and-science | Amazon | Principal Economist, Stores Economics and Science
- [ ] https://bloomberg.avature.net/careers/JobDetail/Bloomberg-Economics-UK-Economist/12522 | Bloomberg | UK Economist
- [ ] https://bloomberg.avature.net/careers/JobDetail/Quant-Researcher-Agentic-AI-CTO-Office/18880 | Bloomberg | Quant Researcher, Agentic AI CTO Office
- [ ] https://bloomberg.avature.net/careers/JobDetail/Senior-Quantitative-Analyst-Interest-Rate-Modeling-Risk-Analytics/13711 | Bloomberg | Senior Quantitative Analyst – Interest Rate Modeling & Risk Analytics
- [ ] https://bloomberg.avature.net/careers/JobDetail/Equity-Index-Quantitative-Researcher/19854 | Bloomberg | Equity Index Quantitative Researcher
- [ ] https://bloomberg.avature.net/careers/JobDetail/Bloomberg-Economics-Geoeconomics-Climate-Economist/10097 | Bloomberg | Climate Economist / Econometrician (Geoeconomics)
- [ ] https://jobs.citi.com/job/new-york/research-strategist/287/77319213040 | Citigroup | Research Strategist
- [ ] https://jobs.citi.com/job/new-york/quantitative-analyst-avp/287/79561409024 | Citigroup | Quantitative Analyst, AVP
- [ ] https://jobs.citi.com/job/london/junior-research-equity-strategist/287/98220945056 | Citigroup | Junior Research Equity Strategist
- [ ] https://mycareer.hsbc.com/en_GB/external/PipelineDetail/Senior-Economist-Global-Risk/216508 | HSBC | Senior Economist – Global Risk
- [ ] https://www.janestreet.com/join-jane-street/position/4808264002/ | Jane Street | Quantitative Researcher
- [ ] https://www.drw.com/work-at-drw/listings/quantitative-researcher-3481214 | DRW | Quantitative Researcher
- [ ] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5012&PageType=JobDetails&jobid=327278 | UBS | Quantitative Analyst
- [ ] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5155&PageType=JobDetails&jobid=343919 | UBS | Quantitative Analyst - QIS
- [ ] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5012&PageType=JobDetails&jobid=317873 | UBS | Quantitative Analyst
- [ ] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5012&PageType=JobDetails&jobid=328192 | UBS | Quant Analyst, Corporate & Wholesale Credit Risk Scenario Models
- [ ] https://careers.nomura.com/Nomura/job/New-York-US-Economic-Research-Analyst-NY-10019/1400789000/ | Nomura | US Economic Research Analyst
- [ ] https://careers.nomura.com/Nomura/job/Philadelphia-Associate,-Senior-Quantitative-Analyst-PA-19106/1348533000/ | Nomura | Associate, Senior Quantitative Analyst
- [ ] https://careers.nomura.com/Nomura/job/Philadelphia-Head-of-FI-Risk-and-Quantitative-Research-PA-19106/1362146500/ | Nomura | Head of FI Risk and Quantitative Research
- [ ] https://group.bnpparibas/en/careers/job-offer/vice-president-quantitative-research-1 | BNP Paribas | VP, Quantitative Research
- [ ] https://group.bnpparibas/en/careers/job-offer/analyst-associate-equity-flow-strategist | BNP Paribas | Analyst/Associate – Equity Flow Strategist
- [ ] https://careers.statestreet.com/global/en/job/STSTGLOBALR793399EXTERNALENGLOBAL/Machine-Learning-Quantitative-Research-Analyst | State Street | Machine Learning Quantitative Research Analyst
- [ ] https://careers.statestreet.com/global/en/job/STSTGLOBALR784329EXTERNALENGLOBAL/Quantitative-Research-a-k-a-Researcher | State Street | Quantitative Research (Researcher)
- [ ] https://careers.msci.com/job/research/budapest/quantitative-researcher-financial-engineer/2024-1721 | MSCI | Quantitative Researcher - Financial Engineer (Budapest)
- [ ] https://factset.wd1.myworkdayjobs.com/en-US/FactSetCareers/job/Senior-Quantitative-Researcher---Equity-Risk_R23657 | FactSet | Senior Quantitative Researcher - Equity Risk
- [ ] https://careers.morningstar.com/us/en/job/REQ-052541/Quantitative-Analyst | Morningstar | Quantitative Analyst
- [ ] https://careers.morningstar.com/us/en/job/REQ-049652/Lead-Quantitative-Analyst | Morningstar | Lead Quantitative Analyst
- [ ] https://www.vanguardjobs.com/job/23415922/us-economist-malvern-pa/ | Vanguard | US Economist
- [ ] https://jobs.fidelity.com/en/jobs/2125214/quantitative-researcher-portfolio-optimization/ | Fidelity | Quantitative Researcher, Portfolio Optimization
- [ ] https://careers.societegenerale.com/en/job-offers/desk-head-quantitative-advisor-260008UB-en | Société Générale | Desk Head Quantitative Advisor
- [ ] https://careers.ice.com/jobs/12154?lang=en-us | ICE Data Services | Analyst, Quantitative Research (London)
- [ ] https://openai.com/careers/quantitative-intelligence-analyst-san-francisco/ | OpenAI | Quantitative Intelligence Analyst
- [ ] https://www.optiver.com/join-us/jobs/institutional-sales-and-trading/chicago/macro-analyst/ | Optiver | Macro Analyst

### Hedge Funds & Asset Managers — Chunk 3 refresh (2026-08-05)
- [ ] https://job-boards.greenhouse.io/point72/jobs/7297625002 | Point72 | Quantitative Researcher - Systematic Credit
- [ ] https://boards.greenhouse.io/exoduspoint/jobs/6988611002 | ExodusPoint | Junior Quantitative Modeler
- [ ] https://job-boards.eu.greenhouse.io/mangroup/jobs/4866654101 | Man Group | Quantitative Researcher - Discretionary
- [ ] https://job-boards.eu.greenhouse.io/mangroup/jobs/4890008101 | Man Group | Quantitative Portfolio Implementation Analyst
- [ ] https://career.mlp.com/careers/job/755956179163 | Millennium | Quantitative Researcher
- [ ] https://wd3.myworkdaysite.com/en-US/recruiting/brevanhoward/BH_ExternalCareers/job/London-82/Quant-Analyst---Rates_JR100513 | Brevan Howard | Quant Analyst - Rates
- [ ] https://wd3.myworkdaysite.com/en-US/recruiting/brevanhoward/BH_ExternalCareers/job/London-82/Quantitative-Analyst_JR100995 | Brevan Howard | Quantitative Analyst
- [ ] https://careers.blackrock.com/job/san-francisco/associate-quantitative-research/45831/91108048384 | BlackRock | Associate, Quantitative Research (San Francisco)
- [ ] https://schroders.referrals.selectminds.com/careers/jobs/quantitative-portfolio-manager-8167 | Schroders | Quantitative Portfolio Manager
- [ ] https://boards.greenhouse.io/winton/jobs/4026099101 | Winton | Equities Quantitative Researcher (Alpha Capture)
- [ ] https://job-boards.greenhouse.io/bridgewater89/jobs/8632073002 | Bridgewater | Commodities Research Associate
- [ ] https://apply.workable.com/caxton/j/6121E9AA35/ | Caxton | Global Macro Portfolio Manager

### Hedge Funds & Asset Managers — Chunk 3 refresh (2026-08-12)
- [ ] https://job-boards.eu.greenhouse.io/mangroup/jobs/4724414101 | Man Group | Senior Quantitative Researcher - Macro
- [ ] https://boards.greenhouse.io/bridgewater89/jobs/6863882002 | Bridgewater | Research Associate, Quantitative Equities
- [ ] https://careers.blackrock.com/job/london/associate-quantitative-researcher-systematic-active-equity/45831/99017512480 | BlackRock | Associate, Quantitative Researcher - Systematic Active Equity (London)
- [ ] https://careers.twosigma.com/careers/JobDetail/New-York-New-York-United-States-Quantitative-Researcher-Systematic-Macro-Portfolio-Management/13975 | Two Sigma | Quantitative Researcher - Systematic Macro Portfolio Management
- [ ] https://www.deshaw.com/careers/macro-trader-5914 | D.E. Shaw | Macro Trader
- [ ] https://www.qube-rt.com/careers/job?gh_jid=6486059002 | QRT | Quantitative Researcher, Equity Mid-High Frequency
- [ ] https://schroders.referrals.selectminds.com/careers/jobs/quantitative-analyst-4665 | Schroders | Quantitative Analyst
- [ ] https://schroders.referrals.selectminds.com/careers/jobs/solutions-strategist-7808 | Schroders | Solutions Strategist

### Banks, Data, Tech & Fintech — Chunk 4 refresh (2026-08-13)
- [ ] https://job-boards.greenhouse.io/anthropic/jobs/5103788008 | Anthropic | Research Scientist, Frontier Red Team (Emerging Risks)
- [ ] https://higher.gs.com/roles/159288 | Goldman Sachs | Global Macro Research, Economics, PhD Fellowship (London)
- [ ] https://openai.com/careers/applied-data-scientist-unit-economics-understanding-san-francisco/ | OpenAI | Applied Data Scientist, Unit Economics Understanding
- [ ] https://group.bnpparibas/en/careers/job-offer/macro-quant-analyst-1 | BNP Paribas | Macro Quant Analyst
- [ ] https://group.bnpparibas/en/careers/job-offer/quantitative-analyst-gmqr-prime-strategist | BNP Paribas | Quantitative Analyst - GMQR Prime Strategist
- [ ] https://group.bnpparibas/en/careers/job-offer/mexico-economist-temporary-role-up-to-12-months | BNP Paribas | Mexico Economist (Temporary 12 months)
- [ ] https://jobs.citi.com/job/new-york/global-macro-research-strategist-vp-ny/287/78567765072 | Citigroup | Global Macro Research Strategist (VP), NY
- [ ] https://careers.nomura.com/Nomura/job/London-Credit-Quantitative-Research-AssociateVice-President-Lond-EC4R-3AB/1410899300/ | Nomura | Credit Quantitative Research - Associate/VP (London)
- [ ] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5012&PageType=JobDetails&jobid=345451&codes=IINDD | UBS | US Rates Strategist
- [ ] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5155&PageType=JobDetails&jobid=348712 | UBS | Algorithmic Trading - Quantitative Analyst
- [ ] https://search.jobs.barclays/job/london/quantitative-strategist-carbon-and-environmental-products/13015/89658084240 | Barclays | Quantitative Strategist - Carbon & Environmental Products (London)
- [ ] https://bloomberg.avature.net/careers/JobDetail/Bloomberg-Intelligence-US-Equity-Strategist/18197 | Bloomberg | US Equity Strategist
- [ ] https://bloomberg.avature.net/careers/JobDetail/Equity-Index-Quantitative-Researcher/19778 | Bloomberg | Equity Index Quantitative Researcher
- [ ] https://bloomberg.avature.net/careers/JobDetail/Bloomberg-Intelligence-Developed-Asia-Rates-Market-Strategist-Japan/14532 | Bloomberg | Developed Asia Rates Market Strategist (Japan)
- [ ] https://careers.moodys.com/associate-economist-2/job/13223 | Moody's Analytics | Associate Economist 2
- [ ] https://careers.moodys.com/job/19374213/economist-e1-economic-research-edinburgh-gb/ | Moody's Analytics | Economist E1 - Economic Research (Edinburgh)
- [ ] https://careers.moodys.com/assc-dir-senior-economist/job/29096892 | Moody's Analytics | Associate Director - Senior Economist (Remote)
- [ ] https://globalcareers-msci.icims.com/jobs/5008/quantitative-researcher/job | MSCI | Quantitative Researcher (Budapest)
- [ ] https://globalcareers-msci.icims.com/jobs/4287/quantitative-researcher---factor-model/job | MSCI | Quantitative Researcher - Factor Model (Mexico City)
- [ ] https://careers.ice.com/jobs/13315?lang=en-us | ICE Data Services | Quantitative Analyst, Quantitative Research (Atlanta)
- [ ] https://careers.ice.com/jobs/4739?lang=en-us | ICE Data Services | Senior Analyst, Global Quantitative Research (Atlanta)
- [ ] https://careers.ice.com/jobs/11201?lang=en-us | ICE Data Services | Analyst, Quantitative Research (Atlanta)
- [ ] https://careers.ice.com/jobs/13107?lang=en-us | ICE Data Services | Analyst, Quantitative Research (Hyderabad)
- [ ] https://careers.ice.com/jobs/13447?lang=en-us | ICE Data Services | Data Scientist, Global Quantitative Research (Atlanta)
- [ ] https://careers.statestreet.com/global/en/job/STSTGLOBALR790888EXTERNALENGLOBAL/Quantitative-Analyst-Assistant-Vice-President | State Street | Quantitative Analyst, AVP (Boston)
- [ ] https://careers.statestreet.com/global/en/job/STSTGLOBALR790823EXTERNALENGLOBAL/eFX-Quantitative-Analyst-AVP-Global-Markets | State Street | eFX Quantitative Analyst, AVP (Boston)
- [ ] https://careers.statestreet.com/global/en/job/R-792319/Macro-Strategy-Analyst-Assistant-Vice-President | State Street | Macro Strategy Analyst, AVP (London)
- [ ] https://careers.statestreet.com/global/en/job/STSTGLOBALR792775EXTERNALENGLOBAL/Senior-Equity-Strategist-Vice-President | State Street | Senior Equity Strategist, VP (London)
- [ ] https://careers.statestreet.com/global/en/job/STSTGLOBALR791161EXTERNALENGLOBAL/Quantitative-Risk-Analyst-Model-Risk-Management-Assistant-Vice-President | State Street | Quantitative Risk Analyst, Model Risk Mgmt (Boston)
- [ ] https://careers.statestreet.com/global/en/job/STSTGLOBALR782637EXTERNALENGLOBAL/Quantitative-Analyst-Officer | State Street | Quantitative Analyst, Officer (Krakow)
- [ ] https://jobs.fidelity.com/en/jobs/2122513/quantitative-equity-research-analyst/ | Fidelity | Quantitative Equity Research Analyst (Boston)
- [ ] https://jobs.fidelity.com/en/jobs/2126917/senior-manager-portfolio-strategist/ | Fidelity | Senior Manager, Portfolio Strategist (TX/RI)
- [ ] https://factset.wd1.myworkdayjobs.com/en-US/FactSetCareers/job/Lead-Quantitative-Researcher---Alternatives-Risk_R26472 | FactSet | Lead Quantitative Researcher - Alternatives Risk
- [ ] https://careers.morningstar.com/us/en/job/REQ-053563/Associate-Quantitative-Analyst | Morningstar | Associate Quantitative Analyst (Navi Mumbai)
- [ ] https://careers.morningstar.com/us/en/job/REQ-055393/Analyst-Quant-Structured-Finance-Analytics-Mathematical-Modelling | Morningstar | Analyst, Quant, Structured Finance Analytics (Madrid)
- [ ] https://www.vanguardjobs.com/job/23359725/multi-asset-investment-product-strategist-malvern-pa/ | Vanguard | Multi-Asset Investment Product Strategist (Malvern PA)
- [ ] https://www.vanguardjobs.com/job/23570861/quantitative-mbs-research-analyst-malvern-pa/ | Vanguard | Quantitative MBS Research Analyst (Malvern PA)
- [ ] https://www.vanguardjobs.com/job/23569429/equity-product-strategist-malvern-pa/ | Vanguard | Equity Product Strategist (Malvern PA)
- [ ] https://www.amazon.jobs/en/jobs/2964046/senior-economist | Amazon | Senior Economist
- [ ] https://careers.google.com/jobs/results/133103531564376774-senior-economist/ | Google | Senior Economist, Economic Impact Estimation
- [ ] https://www.metacareers.com/profile/job_details/1016147127616653/ | Meta | Research Scientist, Demography and Survey Sciences

### Hedge Funds & Asset Managers — Chunk 3 refresh (2026-09-04)
- [ ] https://careers.point72.com/CSJobDetail?jobName=quantitative-researcher-trading-research&jobCode=CSS-0010080 | Point72 | Quantitative Researcher, Trading Research
- [ ] https://careers.point72.com/CSJobDetail?jobName=quantitative-researcher-machine-learning&jobCode=CSS-0013280 | Point72 | Quantitative Researcher – Machine Learning
- [ ] https://boards.greenhouse.io/bridgewater89/jobs/5921864002 | Bridgewater | Quantitative Research Associate – Sustainable Investing
- [ ] https://boards.greenhouse.io/bridgewater89/jobs/5719909002 | Bridgewater | Macro Equity Research Associate
- [ ] https://boards.greenhouse.io/bridgewater89/jobs/5725475002 | Bridgewater | Quantitative Equities Research Associate
- [ ] https://job-boards.eu.greenhouse.io/mangroup/jobs/4549637101 | Man Group | Quantitative Researcher – Specialist Strategies (Hong Kong)
- [ ] https://job-boards.eu.greenhouse.io/mangroup/jobs/4682351101 | Man Group | Quantitative Researcher (verify title)
- [ ] https://job-boards.greenhouse.io/worldquant/jobs/4673030006 | WorldQuant | Quantitative Researcher, Quant Macro
- [ ] https://schroders.referrals.selectminds.com/careers/jobs/quantitative-analyst-5678 | Schroders | Quantitative Analyst

### Macro Advisory & Think Tanks — Chunk 2 (2026-09-04)
- [ ] https://careers.oxfordeconomics.com/postings/e5c6722d-81c8-4349-9412-27341eefaf0a | Oxford Economics | Economist - Scenarios & Macro Modelling (London / Oxford)
- [ ] https://careers.oxfordeconomics.com/postings/7a335963-ac62-4347-bcb5-105ee4303fe6 | Oxford Economics | Sr. Economist / Data Scientist - Economic Impact (London)
- [ ] https://careers.oxfordeconomics.com/postings/eb3bd47a-c6d6-4fba-a043-99f4dd6deae8 | Oxford Economics | Economist - Product Development - Tourism Economics (London)
- [ ] https://careers.oxfordeconomics.com/jobs/243636 | Oxford Economics | Senior Economist - Tourism Economics (Americas / Philadelphia)
- [ ] https://careers.oxfordeconomics.com/postings/5a2c302e-f172-4a06-a93e-addbf94b01d3 | Oxford Economics | Senior Economist – EMEA Consulting - Tourism Economics (Dubai)

### Banks, Data, Tech & Fintech — Chunk 4 refresh (2026-09-17)
- [ ] https://job-boards.greenhouse.io/anthropic/jobs/5154112008 | Anthropic | Research Operations, Economic Research
- [ ] https://www.amazon.jobs/en/jobs/10427276/senior-economist | Amazon | Senior Economist
- [ ] https://www.amazon.jobs/en/jobs/10427265/economist-ii | Amazon | Economist II
- [ ] https://www.amazon.jobs/en/jobs/10510781/principal-economist-fulfillment-by-amazon | Amazon | Principal Economist, Fulfillment by Amazon
- [ ] https://jobs.citi.com/job/london/equity-quantitative-research-analyst-vice-president/287/99664786960 | Citigroup | Equity Quantitative Research Analyst VP (London)
- [ ] https://jobs.citi.com/job/new-york/gsmg-research-senior-associate-global-macro-strategy/287/99436923888 | Citigroup | GSMG Research Senior Associate – Global Macro Strategy
- [ ] https://jobs.citi.com/job/new-york/gsmg-research-senior-associate-global-macro-quantitative-research/287/99436923840 | Citigroup | GSMG Research Senior Associate – Global Macro Quantitative Research
- [ ] https://jobs.citi.com/job/new-york/emerging-markets-fx-and-rates-research-strategist-latam-senior-associate/287/99751153904 | Citigroup | EM FX & Rates Research Strategist LATAM, Senior Associate
- [ ] https://bloomberg.avature.net/careers/JobDetail/Bloomberg-Economics-US-Senior-Economist/16197 | Bloomberg | US Senior Economist
- [ ] https://careers.ice.com/jobs/13168?lang=en-us | ICE Data Services | Analyst, Global Quantitative Research (London)
- [ ] https://www.vanguardjobs.com/job/23387237/senior-quantitative-credit-strategist-malvern-pa/ | Vanguard | Senior Quantitative Credit Strategist
- [ ] https://jobs.fidelity.com/en/jobs/2131918/quantitative-portfolio-analyst-portfolio-engineering/ | Fidelity | Quantitative Portfolio Analyst, Portfolio Engineering
- [ ] https://careers.msci.com/job/research/norman/associate-financial-engineering-research-and-development/2026-5846 | MSCI | Associate, Financial Engineering, Research & Development
- [ ] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5012&PageType=JobDetails&jobid=340560 | UBS | Macro Desk Strategist
- [ ] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5012&PageType=JobDetails&jobid=327034 | UBS | Research – Economics & Strategy, Global Cross Assets
- [ ] https://www.janestreet.com/join-jane-street/position/8573726002/ | Jane Street | Quantitative Researcher
- [ ] https://higher.gs.com/roles/180084 | Goldman Sachs | GIR US Economics Research Associate
- [ ] https://apply.careers.hsbc.com/job/Central-Associate-Director,-Global-FX-Strategist-Hong/1347686357/ | HSBC | Associate Director, Global FX Strategist (Hong Kong)

### Macro Advisory & Think Tanks — Chunk 2 (2026-09-19)
- [x] #188 | https://careers.oxfordeconomics.com/postings/396ca8e0-6dea-4d25-ac54-078f17af1577 | Oxford Economics | Lead Economist - US Construction and Infrastructure (Philadelphia) | 2.3/5 | PDF ❌ | Sector-specific (construction/infra) mismatch vs macro-financial background
- [x] #189 | https://careers.chathamhouse.org/jobs/8389579-research-fellow-west-africa-africa-programme | Chatham House | Research Fellow (West Africa) - Africa Programme ⚠️ deadline Sep 29 | 2.1/5 | PDF ❌ | Regional specialization (West Africa) mismatch
- [x] #190 | https://www.ippr.org/job/research-fellow-economist-centre-for-economic-justice | IPPR | Research Fellow/Economist - Centre for Economic Justice | 2.0/5 | PDF ❌ | UK domestic policy focus mismatch
- [ ] https://app.beapplied.com/apply/cgoihiahf3 | Resolution Foundation | Senior Economist - Net Zero
- [ ] https://app.beapplied.com/apply/ejs5bakqcm | Resolution Foundation | Economist/Research and Policy Analyst
- [x] #191 | https://uk.linkedin.com/jobs/view/economist-senior-economist-at-cambridge-econometrics-4263103037 | Cambridge Econometrics | Economist / Senior Economist | 3.4/5 | PDF ❌ | CONFIRMED DEAD 2026-09-21 (camecon.com/careers shows zero current vacancies)

### Banks, Data, Tech & Fintech — Chunk 4 refresh (2026-09-19)
- [x] #192 | https://higher.gs.com/roles/159268 | Goldman Sachs | Global Macro Research, Economics — PhD Fellowship (NY) | 1.5/5 | PDF ❌ | Ineligible: fellowship for currently-enrolled PhD candidates, not graduates
- [x] #193 | https://group.bnpparibas/en/careers/job-offer/quantitative-analyst-gmqr-quant-strategists | BNP Paribas | Quantitative Analyst - GMQR Quant Strategists | 2.0/5 | PDF ❌ | Domain mismatch: front-office derivatives-pricing quant research
- [x] #194 | https://group.bnpparibas/en/careers/job-offer/macro-quant-analyst-2 | BNP Paribas | Macro Quant Analyst | 3.0/5 | PDF ❌ | Hybrid macro/quant fit but below threshold
- [ ] https://group.bnpparibas/en/careers/job-offer/quantitative-analyst-4 | BNP Paribas | Quantitative Analyst
- [ ] https://group.bnpparibas/en/careers/job-offer/associate-quantitative-analyst-ir-options | BNP Paribas | Associate Quantitative Analyst - IR Options
- [ ] https://group.bnpparibas/en/careers/job-offer/equity-quantitative-analyst | BNP Paribas | Equity Quantitative Analyst
- [x] #195 | https://mycareer.hsbc.com/en_GB/external/PipelineDetail/Senior-Quantitative-Analyst/175559 | HSBC | Senior Quantitative Analyst | 2.2/5 | PDF ❌ | No archetype fits well
- [x] #196 | https://jobs.citi.com/job/singapore/research-senior-associate-emerging-markets-economics-assistant-vice-president/287/99487052016 | Citigroup | Research Senior Associate, EM Economics - AVP (Singapore) | 4.0/5 | PDF ❌ | CONFIRMED DEAD 2026-09-21 (404 Job Not Found)
- [x] #197 | https://jobs.citi.com/job/new-york/us-economics-research-senior-associate-avp-new-york-ny/287/81834244672 | Citigroup | US Economics Research Senior Associate, AVP (NY) | 3.8/5 | PDF ❌ | CONFIRMED DEAD 2026-09-21 (404 Job Not Found)
- [ ] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5155&PageType=JobDetails&jobid=343945 | UBS | Quantitative Analyst, Agency Algorithmic Trading
- [ ] https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5012&PageType=JobDetails&jobid=342483 | UBS | Electronic Trading Quantitative Analyst
- [ ] https://drw.com/work-at-drw/listings/quantitative-researcher-2581873 | DRW | Quantitative Researcher
- [ ] https://optiver.com/working-at-optiver/career-opportunities/8455668002/ | Optiver | Quantitative Researcher - SVT
- [x] #198 | https://careers.nomura.com/Nomura/job/New-York-Research-Analyst,-US-Fixed-Income-NY-10019/1311268700/ | Nomura | Research Analyst, US Fixed Income (NY) | 2.0/5 | PDF ❌ | Posting confirmed filled/closed; severe seniority mismatch
- [ ] https://careers.nomura.com/Nomura/job/New-York-Securitized-Products-Research-Analyst,-US-Fixed-Income-NY-10019/1403125400/ | Nomura | Securitized Products Research Analyst, US Fixed Income (NY)
- [x] #199 | https://db.wd3.myworkdayjobs.com/en-US/DBWebsite/job/Macro-Research--d-m-w-_R0407515 | Deutsche Bank | Macro Research | 3.8/5 | PDF ❌ | CONFIRMED DEAD 2026-09-21 ("page doesn't exist" on Workday)
- [x] #200 | https://vanguard.wd5.myworkdayjobs.com/en-US/vanguard_external/job/Senior-Financial-Economist_175519 | Vanguard | Senior Financial Economist | 3.1/5 | PDF ❌ | Same req rejected Jan 2026, still live 4+ months — recommend against reapplying
- [x] #201 | https://statestreet.wd1.myworkdayjobs.com/en-US/Global/job/Quantitative-Research-Analyst--Officer_R-789457 | State Street | Quantitative Research Analyst, Officer | 3.7/5 | PDF ❌ | Officer-tier downlevel + productization framing
- [ ] https://www.amazon.jobs/en/jobs/10482932/economist-stores-economics-and-science | Amazon | Economist, Stores Economics and Science
- [x] #202 | https://careers.google.com/jobs/results/141603000018707142-senior-economist/ | Google | Senior Economist, Economic Impact Estimation | 3.3/5 | PDF ❌ | Product/platform economic-impact role, not macro-financial

### Hedge Funds & Asset Managers — Chunk 3 refresh (2026-09-19)
- [x] #203 | https://careers.twosigma.com/careers/JobDetail/New-York-New-York-United-States-Quantitative-Researcher-Two-Sigma-Securities/13550 | Two Sigma | Quantitative Researcher, Two Sigma Securities | 2.3/5 | PDF ❌ | Market-microstructure/HFT mismatch; consider Systematic Macro PM listing instead (job 13975)
- [x] #204 | https://job-boards.greenhouse.io/worldquant/jobs/4372598006 | WorldQuant | Quantitative Researcher, Quant Macro (Taipei) | 3.1/5 | PDF ❌ | No markets/alpha-research background; entry-level track
- [x] #205 | https://careers.blackrock.com/job/13929384/associate-vice-president-fixed-income-macro-quantitative-pm-researcher-san-francisco-san-francisco-ca/ | BlackRock | Associate/VP Fixed Income Macro Quantitative PM/Researcher (SF) | 4.0/5 | PDF ✅ | CONFIRMED DEAD 2026-09-21 (Playwright: redirects to homepage, absent from live keyword search) — do not pursue without a live re-post
- [ ] https://apply.workable.com/caxton/j/01A054D8C3/ | Caxton | Discretionary Macro Portfolio Manager (New York)
- [ ] https://apply.workable.com/caxton/j/01EC6C5D5F/ | Caxton | Discretionary Macro Portfolio Manager (Dubai)
- [ ] https://apply.workable.com/caxton/j/FB866FD99F/ | Caxton | Associate PM Programme, EM Macro (NYC)
- [ ] https://apply.workable.com/caxton/j/C27F858E52/ | Caxton | Associate PM Program, Systematic Strategies
- [ ] https://apply.workable.com/caxton/j/662FE1FB8B/ | Caxton | Associate PM Program (Singapore)
- [ ] https://apply.workable.com/caxton/j/8B8041EE9F/ | Caxton | Associate PM Program (Dubai)
- [ ] https://apply.workable.com/caxton/j/36FF1FBBA4/ | Caxton | Associate PM Program (NY)
- [ ] https://apply.workable.com/caxton/j/845E6B3A88/ | Caxton | Portfolio Manager (New York)
- [ ] https://job-boards.greenhouse.io/winton/jobs/4026232101 | Winton | Commodity Fundamentals Portfolio Manager
- [x] #206 | https://job-boards.eu.greenhouse.io/mangroup/jobs/4724413101 | Man Group | Quantitative Researcher [role TBC] | 1.5/5 | PDF ❌ | Posting confirmed dead (Greenhouse API 404)
- [x] #207 | https://job-boards.greenhouse.io/grahamcapitalmanagement/jobs/4672741005 | Graham Capital | Research Role [role TBC] | 2.4/5 | PDF ❌ | Posting URL dead; analyst-level HF trading support vs PhD policy modeller
- [x] #208 | https://job-boards.greenhouse.io/exoduspoint/jobs/7986685002 | ExodusPoint | Research Role [role TBC] | 2.2/5 | PDF ❌ | Req 404s on Greenhouse API (posting dead)
- [x] #209 | https://schroders.referrals.selectminds.com/careers/jobs/quantitative-analyst-3221 | Schroders | Quantitative Analyst | 2.4/5 | PDF ❌ | JD fetch failed; title-only eval
- [x] #210 | https://schroders.referrals.selectminds.com/careers/jobs/research-analyst-5205 | Schroders | Research Analyst | 2.0/5 | PDF ❌ | Bottom-up Pan Asia SMID equity research — hard domain mismatch
