# Portfolio UX/UI Critique & Redesign Specification

## Executive assessment

The current portfolio is technically clean and visually restrained, but it feels more like a **well-designed developer resume website** than a **high-end technical portfolio for an AI/backend engineer**.

### Current score

- Visual design: **6/10**
- UX / information architecture: **5.5/10**
- Personal differentiation: **4.5/10**
- Technical storytelling: **5/10**
- Content quality: **7.5/10**
- Potential after redesign: **9/10**

The important point is that the **content and professional background are stronger than the interface currently communicates**.

The redesign should not add visual noise. It should make the existing strengths much more legible:

> **What I build → proof of what I've built → production experience → technical depth → contact**

The target is an **editorial + technical + product-oriented portfolio**, closer in spirit to Linear/Vercel/Stripe-quality information design than a generic AI developer template.

---

# 1. Core design diagnosis

## The biggest problem

The site currently communicates:

> "I am an AI developer."

It should communicate:

> **"I build serious AI and backend systems."**

That distinction should drive every design decision.

The portfolio currently has:

- strong technical breadth
- real production experience
- measurable engineering outcomes
- AI/LLM systems experience
- backend engineering experience
- interesting projects
- UNSW AI education
- hackathon coaching experience

But the UI mostly presents those things as **text, cards, pills, and whitespace**.

The result is clean but not memorable.

---

# 2. What is working

Do not throw away the current visual foundation.

### Keep

- restrained black/white/blue palette
- strong typography
- minimal visual language
- subtle borders
- clean card construction
- simple navigation
- clear section structure
- lack of unnecessary animations
- strong readability
- direct email/LinkedIn/GitHub contact options

### Do not respond to the critique by adding

- 3D animations
- particles
- glowing AI cards
- animated gradients everywhere
- floating blobs
- cursor-following effects
- WebGL gimmicks
- excessive terminal animations
- "AI hologram" visuals

The site does **not** need more effects.

It needs better **information design, hierarchy, density, and technical storytelling**.

---

# 3. Global design system

## 3.1 Page width

Use one global container.

```text
Desktop max-width: 1160px
Large desktop max-width: 1200px
Mobile horizontal padding: 20px
Tablet horizontal padding: 32px
Desktop horizontal padding: 32px
```

Every major section should align to the same left and right boundaries.

Avoid sections that independently choose different widths.

---

## 3.2 Grid

Use a 12-column desktop grid.

```text
12 columns
24px gutters
```

Suggested layout:

```text
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
```

Hero:

```text
Left: 5 columns
Gap: 1 column
Right: 6 columns
```

Project grid:

```text
Featured project: 12 columns
Secondary projects: 6 + 6
```

Skills:

```text
4 columns × 3
```

Experience:

```text
Content: 8–9 columns
Date/meta: 3–4 columns
```

---

# 4. Vertical rhythm

The current site uses too much empty space.

The objective is not to eliminate whitespace, but to make it intentional.

### Recommended spacing tokens

```text
4px
8px
12px
16px
24px
32px
48px
64px
80px
96px
```

### Section spacing

Desktop:

```text
Hero bottom: 96px
Section-to-section: 112px
Major section: 128px max
Internal section spacing: 48–64px
```

Do not repeatedly use huge 150–200px gaps simply to make the site feel premium.

### Principle

> Premium design = intentional rhythm, not maximum emptiness.

Reduce the current vertical whitespace by approximately **20–30%**.

---

# 5. Typography system

The existing typography is generally good. Keep the clean sans-serif direction but create stronger hierarchy.

## Recommended scale

### Display / hero

```text
Desktop: 72px
Line height: 0.95–1.0
Weight: 700–750
Letter spacing: -0.04em
```

### Section heading

```text
48px
Line height: 1.05
Weight: 650–700
Letter spacing: -0.03em
```

### Project heading

```text
28–32px
Weight: 650–700
```

### Body large

```text
20px
Line height: 1.5
```

### Body

```text
16px
Line height: 1.55
```

### Metadata / eyebrow

```text
13–14px
Weight: 600
Letter spacing: 0.04–0.08em
Uppercase only where useful
```

### Avoid

- too many font sizes
- excessive grey text
- oversized headings followed by tiny body text
- treating every card title as equally important

---

# 6. Color system

Keep the restrained palette.

Suggested tokens:

```text
Background: #FFFFFF
Primary text: near-black
Secondary text: neutral grey
Border: very light neutral
Accent: existing blue
Muted surface: very light grey
```

The blue should become a **system**, not just a button color.

Use the accent for:

- active navigation
- primary CTA
- important metrics
- links
- system states
- selected project elements
- architecture diagrams
- subtle interactive states

Do not flood the page with blue.

---

# 7. Navigation redesign

## Current issue

Current:

> Skills | Experience | Work | Get in touch

"Work" is vague and "Skills" is not necessarily a primary destination.

## Recommended

```text
NR.                         Experience   Projects   Contact   [Get in touch]
```

Or:

```text
NR.                         About   Experience   Projects   [Contact]
```

### Behavior

- sticky navigation
- translucent/blurred background when scrolling
- subtle bottom border
- active section indicator
- 56–64px desktop height

### CTA

Keep the blue "Get in touch" button.

It is one of the strongest existing navigation elements.

---

# 8. Hero redesign

## Objective

Within 5 seconds, communicate:

1. Who you are
2. What you build
3. Why you're credible
4. Where to explore

## Remove

The current fake terminal/code block should be removed.

It is visually attractive but mostly decorative.

It looks like a generic AI developer portfolio element.

## Replace with

A visual representation of an **actual system you built**.

Examples:

- RAG pipeline
- agent workflow
- AI data copilot flow
- compliance workflow
- financial agent architecture
- API → model → retrieval → validation flow

## Layout

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│ Sydney, Australia                                   │
│                                                     │
│ AI Developer &                                      │
│ Backend Engineer                                    │
│                                                     │
│ I build production AI systems, from LLM workflows  │
│ and retrieval pipelines to the backend             │
│ infrastructure behind them.                        │
│                                                     │
│ [View selected work] [Get in touch]                │
│                                                     │
│                           ┌───────────────────────┐ │
│                           │ Actual system visual  │ │
│                           │                       │ │
│                           │ Retrieval → Agent    │ │
│                           │       ↓              │ │
│                           │       API             │ │
│                           └───────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

## Hero measurements

```text
Min-height: 620–700px desktop
Top padding: 110–130px
Bottom padding: 80–96px
```

Do not make the hero unnecessarily tall.

## Hero copy

Keep the title concise.

Potential positioning:

> **AI Developer & Backend Engineer**

Supporting statement:

> I build production AI systems — from LLM workflows and retrieval pipelines to the APIs and infrastructure behind them.

Then:

```text
[View selected work]
[Get in touch]
```

---

# 9. Add a small credibility strip

Immediately below the hero, add a compact proof layer.

Example:

```text
AI SYSTEMS        BACKEND        RAG & AGENTS        PRODUCTION
```

Or:

```text
Python · FastAPI · LangGraph · PostgreSQL · Java · Spring Boot
```

This replaces the need to dump every technology immediately into a large skills section.

The hero establishes identity.

The strip establishes technical range.

---

# 10. Projects should become the primary portfolio experience

## Current problem

The current project grid makes everything look equally important.

This turns genuinely interesting projects into generic cards.

## New hierarchy

Use:

### 1 featured project

Full-width.

### 2 secondary projects

Half-width.

### 2 compact projects

Smaller cards.

---

# 11. Featured project component

## Example: FinAgent

```text
┌─────────────────────────────────────────────────────────┐
│ FEATURED PROJECT                                        │
│                                                         │
│ FinAgent                                                │
│ Evidence-grounded financial market strategy agent      │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │                                                     │ │
│ │              SYSTEM VISUALIZATION                  │ │
│ │                                                     │ │
│ │ Market data → Retrieval → Agent → Evidence → UI   │ │
│ │                                                     │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ LangGraph · Python · FastAPI                            │
│                                                         │
│ [View project →]                                       │
└─────────────────────────────────────────────────────────┘
```

## Visual

Do not use a fake dashboard just for decoration.

Create a simplified visualization that explains what the system does.

For example:

```text
Question
   ↓
Market / Financial Data
   ↓
Retrieval
   ↓
Agent reasoning
   ↓
Evidence validation
   ↓
Recommendation + confidence
```

This is much more compelling than a terminal window.

---

# 12. Project content formula

Every featured project should answer:

### What is it?

One sentence.

### Why does it matter?

One sentence.

### What did you build?

2–3 technical bullets.

### What was the result?

A metric if available.

### What technologies?

Short inline list.

### Where can I see it?

GitHub / demo / case study.

---

# 13. Rewrite project descriptions around outcomes

Avoid descriptions like:

> Natural Language Query Engine

or:

> AI Curriculum Builder

These are labels, not stories.

Instead:

### AI Data Copilot

> Ask questions in natural language and generate SQL across 100+ table schemas.

Then:

- embedding-based schema retrieval
- confidence-scored column mapping
- ambiguity-aware SQL generation

Now the product is understandable.

---

# 14. Remove excessive technology pills

The current site uses pills in:

- Skills
- Projects
- almost every technical area

This creates a repetitive visual language.

Use pills only where they add value.

For projects prefer:

```text
Python · LangGraph · FastAPI
```

as a simple metadata line.

Reserve pills for:

- filters
- categories
- statuses
- interactive controls

---

# 15. Experience redesign

## Current problem

The previous ConnectSecure role visually receives more emphasis than the current Arctic Intelligence role.

That is backwards.

## New structure

### Current role

Largest and most detailed.

```text
AI Developer
Arctic Intelligence
Sydney, Australia
Aug 2026 — Present

[impact / capability cards]

Building AI-powered features...
Designing LLM workflows...
```

### Previous role

Medium detail.

### Internship

Compact.

This creates a clear visual hierarchy.

---

# 16. Experience component

Use a timeline/editorial structure rather than isolated blocks.

Example:

```text
EXPERIENCE

2026 — Present
AI Developer
Arctic Intelligence

Building AI-powered compliance systems...
Designing LLM workflows...

────────────────────────────────────

2024 — 2026
Software Development Engineer
ConnectSecure

40%                 70%
less onboarding     less manual mapping

AI reporting        semantic migration
pipeline            tooling

────────────────────────────────────

2024
Backend Development Intern
ChangeJar

30% growth in acquisition
50% lower acquisition cost
```

---

# 17. Metric cards redesign

The 40%, 70%, 30% figures are good content.

Make them smaller and more scannable.

Instead of:

```text
┌──────────────────────────────────────────────┐
│ 40%   Cut onboarding effort with a long...  │
└──────────────────────────────────────────────┘
```

Use:

```text
40%
Less onboarding effort

AI-powered reporting pipeline
```

And:

```text
70%
Less manual mapping

Semantic database migration
```

Metrics should be visually dominant.

Descriptions should be short.

Technical detail can appear below or on interaction.

---

# 18. Skills redesign

## Current issue

The skills section is visually clean but behaves like a résumé keyword dump.

## Replace "technologies" with "capabilities"

### AI Systems

LLM Applications · RAG · Agentic Workflows · Evaluation · MCP

### Backend

Python · FastAPI · Java · Spring Boot · REST APIs · System Design

### Data

PostgreSQL · MongoDB · Vector Search · Data Pipelines

### Infrastructure

Docker · CI/CD · Cloud · Observability

This feels more senior.

---

# 19. Skills layout

Use a compact 2×2 or 4-column system.

```text
TECHNICAL RANGE

AI SYSTEMS              BACKEND

LLM Applications        Python
RAG                     FastAPI
Agents                  Java
Evaluation              Spring Boot
MCP                     System Design


DATA                    INFRASTRUCTURE

PostgreSQL              Docker
MongoDB                 CI/CD
Vector Search           Cloud
Data Pipelines           Observability
```

Avoid huge vertical spacing.

Target section height:

**250–350px desktop.**

---

# 20. Education redesign

## Current issue

Education and leadership are currently combined.

The three cards are treated as equal.

They are not.

## Separate them.

### Education

Primary:

> Master of Information Technology — Artificial Intelligence  
> UNSW, Sydney  
> 2026–2027

Secondary:

> B.Tech, Electronics & Communication Engineering  
> PES University  
> 2020–2024

Make the master's clearly dominant.

---

# 21. Leadership redesign

Create a compact section:

## Leadership

### Hackathon Coach — Cognitivo × NVIDIA

One short paragraph.

Focus on the strongest signal:

> Coached an enterprise AI hackathon and designed Day 1 training around agentic AI and API integration.

This is much more interesting when framed as leadership rather than education.

---

# 22. Contact section redesign

## Current issue

The current contact area feels like a footer.

It should feel like a conclusion.

## New layout

```text
────────────────────────────────────────────

Have a hard problem to solve?

I build AI systems, backend infrastructure,
and products that need to work in the real world.

[Email me] [LinkedIn] [GitHub]

────────────────────────────────────────────

NR.                                      © 2026
```

## Typography

Heading:

```text
56–64px desktop
```

Body:

```text
18–20px
max-width: 560px
```

Keep the email CTA blue.

---

# 23. Footer

Keep it extremely simple.

```text
NR.                         Sydney, Australia
                             GitHub · LinkedIn
```

No giant footer.

No duplicated navigation.

No unnecessary copyright block unless desired.

---

# 24. Responsive design

Do not simply stack desktop components.

## Mobile hero

```text
Sydney, Australia

AI Developer &
Backend Engineer

I build production AI systems...

[View work]
[Get in touch]

[System visual]
```

Hero typography:

```text
48–56px
line-height: 0.95
```

## Mobile project layout

One column.

Featured project first.

No tiny 3-column cards.

## Mobile navigation

```text
NR.                       ☰
```

or:

```text
NR.             Contact
```

Keep the CTA visible if possible.

---

# 25. Motion guidelines

Motion should explain state, not provide entertainment.

Use:

- 150–250ms hover transitions
- subtle card elevation
- link underline transitions
- nav active-state transitions
- project image reveal
- subtle scroll-in animation

Avoid:

- parallax everywhere
- infinite animations
- animated gradients
- floating objects
- cursor effects
- excessive text animations

---

# 26. Project interaction model

Projects should feel like products.

### On hover

- slightly raise card
- reveal arrow
- subtly brighten border
- move visual 2–4px

### On click

Open:

- GitHub
- live demo
- or a dedicated project detail page

Do not use hover effects that hide critical information.

---

# 27. Project detail pages

Eventually, consider dedicated pages for the top 2–3 projects.

Structure:

```text
Project title

What I built

Problem

Approach

Architecture

Technical decisions

Challenges

Results

Stack

GitHub / Demo
```

This would turn the portfolio from:

> "Here are my projects."

into:

> **"Here is how I think as an engineer."**

That is a much stronger signal for senior technical hiring.

---

# 28. Visual identity: NR.

Keep the "NR." mark.

But make the dot intentional.

Potential design system:

```text
NR.
```

The blue dot becomes a recurring micro-accent.

Use it in:

- logo
- section labels
- architecture nodes
- active states
- metrics
- tiny decorative markers

This gives the site a recognizable identity without introducing a loud brand.

---

# 29. Recommended page order

Final structure:

```text
NAVIGATION

HERO
↓
TECHNICAL / CREDIBILITY STRIP
↓
SELECTED WORK
  ├── FinAgent — featured
  ├── AI Data Copilot
  ├── LoadForge
  └── Other projects
↓
EXPERIENCE
  ├── Arctic Intelligence
  ├── ConnectSecure
  └── ChangeJar
↓
TECHNICAL RANGE
↓
EDUCATION
↓
LEADERSHIP
↓
CONTACT CTA
↓
FOOTER
```

This creates a stronger narrative.

---

# 30. What should be removed

Remove or substantially reduce:

- fake terminal hero
- giant empty gaps
- equal weighting of all projects
- excessive technology pills
- oversized metric containers
- generic project subtitles
- education/leadership combined card grid
- vague "Work" navigation label
- decorative elements that do not communicate anything
- unnecessary repetition of technologies

---

# 31. What should be added

Add:

- real system visualizations
- featured project hierarchy
- stronger project outcomes
- architecture diagrams
- technical decision explanations
- stronger current-role presentation
- capability-oriented skills
- clear leadership section
- stronger final CTA
- consistent global grid
- intentional visual identity around NR.

---

# 32. Exact component inventory

The redesigned page should roughly contain:

```text
<App>
  <Navbar />

  <Hero>
    <HeroCopy />
    <SystemVisualization />
  </Hero>

  <TechStrip />

  <SelectedWork>
    <FeaturedProject />
    <ProjectGrid />
  </SelectedWork>

  <Experience>
    <CurrentRole />
    <ExperienceItem />
    <ExperienceItem />
  </Experience>

  <TechnicalRange>
    <SkillGroup />
    <SkillGroup />
    <SkillGroup />
    <SkillGroup />
  </TechnicalRange>

  <Education>
    <EducationItem />
    <EducationItem />
  </Education>

  <Leadership>
    <LeadershipItem />
  </Leadership>

  <ContactCTA />

  <Footer />
</App>
```

---

# 33. Suggested component design tokens

```text
Container
max-width: 1160px

Section
padding-block: 112px

Card
border: 1px solid
radius: 16px
padding: 28–32px

FeaturedCard
radius: 20px
padding: 40px

Button
height: 48px
padding-inline: 22px
radius: 999px

Small metadata
13–14px

Body
16px / 1.55

Large body
20px / 1.5

Section title
48px

Hero title
72px

Mobile hero
48–56px
```

These are starting points, not rigid rules. Tune them against the actual viewport.

---

# 34. The visual target

The final site should feel like:

> **A technical product portfolio built by an engineer who understands product design.**

Not:

> A developer who downloaded a portfolio template.

The visitor should progressively discover:

```text
WHO IS THIS?
        ↓
AI + BACKEND ENGINEER

WHAT DOES HE BUILD?
        ↓
Real AI systems

CAN HE ACTUALLY BUILD?
        ↓
Projects + architecture + outcomes

HAS HE DONE IT PROFESSIONALLY?
        ↓
Production experience + metrics

IS THERE DEPTH?
        ↓
AI + backend + data + infrastructure

SHOULD I CONTACT HIM?
        ↓
Clear CTA
```

That is the UX story the current site is missing.

---

# 35. Redesign priority matrix

## P0 — Must change

1. Hero
2. Project hierarchy
3. Project visualizations
4. Vertical spacing
5. Experience hierarchy

## P1 — Strongly recommended

6. Skills → capabilities
7. Metric card redesign
8. Education / Leadership separation
9. Contact CTA
10. Navigation naming

## P2 — Polish

11. NR. identity system
12. Motion
13. responsive refinement
14. project detail pages
15. micro-interactions

---

# 36. Final design principle

The redesign should follow one rule:

> **Every visual element must either establish identity, explain a system, demonstrate credibility, or drive action.**

If an element does none of those things, remove it.

Your portfolio does not need to become louder.

It needs to become **more intentional**.

The raw material is already there. The redesign's job is to expose it.
