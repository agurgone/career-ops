# Story Bank — Master STAR+R Stories

This file accumulates your best interview stories over time. Each evaluation (Block F) adds new stories here. Instead of memorizing 100 answers, maintain 5-10 deep stories that you can bend to answer almost any behavioral question.

## How it works

1. Every time `/career-ops oferta` generates Block F (Interview Plan), new STAR+R stories get appended here
2. Before your next interview, review this file — your stories are already organized by theme
3. The "Big Three" questions can be answered with stories from this bank:
   - "Tell me about yourself" → combine 2-3 stories into a narrative
   - "Tell me about your most impactful project" → pick your highest-impact story
   - "Tell me about a conflict you resolved" → find a story with a Reflection

## Stories

<!-- Stories will be added here as you evaluate offers -->
<!-- Format:
### [Theme] Story Title
**Source:** Report #NNN — Company — Role
**S (Situation):** ...
**T (Task):** ...
**A (Action):** ...
**R (Result):** ...
**Reflection:** What I learned / what I'd do differently
**Best for questions about:** [list of question types this story answers]
-->

---

### [Scale / Impact] Oxford ABM — 1:1 France Macro Simulation
**Source:** Reports #107, #109 — Bank of Canada / NBIM
**S:** Part of £3.5M UKRI "Large Agent Collider" project at Oxford, building the first ABM capable of simulating the French economy at household level (~6M households, ~4M firms).
**T:** Lead the consumption-saving module — integrate HFCS microdata, ICIO tables, and macro timeseries into a policy shock simulator.
**A:** Designed heterogeneous-agent module from scratch; empirical calibration using French data; built policy shock transmission analysis; collaborated cross-functionally with computer scientists and economists.
**R:** Working model contributing to joint paper expected for JEDC 2026; regularly presented at Oxford seminars.
**Reflection:** Earlier integration of macro timeseries data would have reduced calibration debt — would do it in sprint 1 next time. The hardest part is connecting micro data granularity to macro outcomes — that translation is the core intellectual challenge.
**Best for questions about:** large-scale modelling, cross-functional collaboration, research leadership, technical innovation, working with complex data

---

### [Policy Impact] GLRI — 136-Country Impact Study at WEF Davos
**Source:** Reports #107, #108, #109 — Bank of Canada / EBA / NBIM
**S:** Whiteshield needed a rigorous, defensible methodology for the Global Labour Resilience Index — a macro impact assessment across 136 countries and 92 indicators to advise governments.
**T:** Lead full pipeline: methodology design, data collection and harmonisation, modelling, report authorship, academic peer review, and dissemination.
**A:** Built composite index with economic weighting; harmonised heterogeneous data across 136 countries; structured results into policy recommendations for UAE Ministry of Human Resources; coordinated peer review in parallel with client deadline.
**R:** Report launched at WEF Davos 2024; adopted by UAE government ministries as strategic planning tool; peer-reviewed and published.
**Reflection:** Upfront agreement on indicator selection criteria saves ~40% of revision cycles. Better framing "which indicators matter most to this specific audience" at the start would have cut one revision round.
**Best for questions about:** impact, managing complexity, translating analysis to policy, working under pressure, stakeholder management

---

### [Regulatory Research] CBI Macroprudential ABM — Central Bank Policy Contribution
**Source:** Reports #107, #108 — Bank of Canada / EBA
**S:** Central Bank of Ireland needed to understand the interaction effects of simultaneously imposing LTV and LTI borrower-side macroprudential constraints on Irish mortgage market.
**T:** Analyse 800K+ household-level mortgage records (2000–2018) using a multi-agent baseline model; produce findings presentable to central bank officials.
**A:** Built ABM calibrated to Irish mortgage microdata; tested policy counterfactuals; structured findings around policy questions (not just regression tables); presented at CBI and academic venues.
**R:** Published as SSRN working paper; directly contributed to internal CBI policy discussion on macroprudential tool design.
**Reflection:** Regulators respond better to "what happens if we relax tool X while keeping Y?" than to t-statistics. Framing outputs as counterfactual scenarios rather than statistical results dramatically improved reception.
**Best for questions about:** central bank experience, policy-relevant research, econometrics, explaining complex technical findings to senior decision-makers

---

### [Executive Communication] UAE Government Advisory — Translating Models to Strategy
**Source:** Reports #108, #109 — EBA / NBIM
**S:** UAE Ministry of Human Resources needed macro-strategic guidance from GLRI results — senior officials with no quantitative background.
**T:** Translate GLRI model outputs into actionable strategic recommendations for a Ministerial audience.
**A:** Structured briefings by policy lever (supply-side vs demand-side); quantified expected impact scenarios; built separate narrative versions for technical and non-technical audiences; presented at multiple stakeholder sessions.
**R:** Recommendations adopted in UAE Ministry's strategic plan; Whiteshield retained for follow-on advisory.
**Reflection:** One clear message + three supporting data points — never more. The technical-to-narrative translation is a skill, not a concession; it sharpens the argument.
**Best for questions about:** senior stakeholder communication, translating complex analysis, advisory roles, working with non-technical executives

---

### [Cross-functional Collaboration] Oxford LAC — Economists + Computer Scientists Integration
**Source:** Report #107 — Bank of Canada
**S:** UKRI-funded Large Agent Collider project required tight integration between economists and CS researchers who use fundamentally different vocabularies and mental models.
**T:** Contribute economic framing to a team that speaks Python/ML but not DSGE or heterogeneous-agent theory.
**A:** Built a translation layer: clearly defined economic requirements in CS terms, set up shared data contracts for what variables the ABM needed, co-authored across disciplines.
**R:** Successful integration of economic and CS approaches; joint research output expected 2026.
**Reflection:** The bottleneck is always ontological — if you don't define terms precisely at the start, you waste 3-4 weeks discovering you've been talking about different things. Shared vocabulary session at project kickoff is non-negotiable.
**Best for questions about:** cross-functional teamwork, communication, interdisciplinary research, collaboration in diverse teams
