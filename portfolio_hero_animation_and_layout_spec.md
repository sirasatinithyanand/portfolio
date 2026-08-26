# Hero Section — Animation & Layout Design Specification

## Purpose

The hero should become the **signature interaction of the portfolio**.

The current terminal/code-window concept should be replaced with something that communicates:

> **I build AI systems that move from intelligence to production.**

The animation should not exist merely to make the site "feel modern."

It should visually demonstrate the kind of systems being built.

The desired impression is:

> "This person understands AI as an engineering system, not just as a collection of models and prompts."

---

# 1. Core concept

## Recommended concept: "AI System in Motion"

The hero contains a compact, editorial-style visualization of an AI workflow.

The system continuously processes a request:

```text
INPUT
  ↓
RETRIEVE
  ↓
REASON
  ↓
VALIDATE
  ↓
RESPOND
```

The animation is driven by a small blue signal that travels through the system.

Each stage briefly becomes active as the signal reaches it.

The entire loop then restarts.

### Important

The animation should feel like a **real system trace**, not a decorative animation.

No:

- floating particles
- glowing neural networks
- spinning 3D objects
- AI brain graphics
- holograms
- random code typing
- excessive neon
- infinite gradient blobs

---

# 2. What the animation communicates

The animation should communicate four things without requiring the visitor to read the entire page:

### 1. Retrieval

The system doesn't blindly ask an LLM a question.

### 2. Reasoning

There is an AI/agent layer doing actual work.

### 3. Validation

The output is checked/grounded.

### 4. Production

The system eventually becomes a usable response/API/product.

This reinforces the portfolio's actual positioning:

> LLMs + RAG + agents + backend systems + production engineering.

---

# 3. Hero composition

Desktop layout:

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│ NR.                         Experience Projects Contact      │
│                                                              │
│                                                              │
│ Sydney, Australia                                            │
│                                                              │
│ AI Developer &                         ┌───────────────────┐ │
│ Backend Engineer                       │                   │ │
│                                        │    AI SYSTEM      │ │
│ I build production AI systems,        │                   │ │
│ from LLM workflows and retrieval      │   INPUT           │ │
│ pipelines to the APIs and             │     ↓             │ │
│ infrastructure behind them.           │   RETRIEVE        │ │
│                                        │     ↓             │ │
│ [View selected work]                  │   REASON          │ │
│ [Get in touch]                        │     ↓             │ │
│                                        │   VALIDATE        │ │
│ AI · Backend · Systems                │     ↓             │ │
│                                        │   RESPONSE        │ │
│                                        │                   │ │
│                                        │ ● SYSTEM READY    │ │
│                                        └───────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

# 4. Exact hero dimensions

## Desktop

```text
Max content width: 1160px
Hero min-height: 620px
Preferred height: 660–700px

Top padding: 100–120px
Bottom padding: 72–96px

Left content: ~500–540px
Right visualization: ~500–540px

Column gap: 64–80px
```

Do not make the hero occupy the entire viewport just because it is the hero.

The next section should become visible enough to suggest that there is more content below.

---

# 5. Hero left side

## Eyebrow

Use:

```text
Sydney, Australia
```

But make it slightly more purposeful.

Recommended:

```text
Sydney, Australia
```

with a small blue dot or subtle location marker.

Typography:

```text
14px
Weight: 500
Letter spacing: 0.02em
Color: secondary text
```

---

# 6. Hero headline

Use:

```text
AI Developer &
Backend Engineer
```

Keep the current positioning.

The wording is already strong.

The issue is not the title.

The issue is what surrounds it.

### Typography

```text
Desktop: 68–72px
Line height: 0.95–1.0
Weight: 700–750
Letter spacing: -0.045em
```

The headline should occupy approximately 2 lines.

Avoid:

```text
AI
Developer &
Backend
Engineer
```

The current three-line version is too tall.

Two lines creates a stronger visual block.

---

# 7. Supporting statement

Recommended:

> I build production AI systems — from LLM workflows and retrieval pipelines to the APIs and infrastructure behind them.

### Typography

```text
18–20px
Line height: 1.45–1.5
Max width: 500px
Color: secondary text
```

Keep it to approximately 2–3 lines.

Do not write a paragraph.

---

# 8. CTA layout

Primary:

```text
View selected work
```

Secondary:

```text
Get in touch
```

Layout:

```text
[ View selected work ]   [ Get in touch ]
```

Primary button:

```text
Blue background
White text
48px height
22px horizontal padding
999px radius
```

Secondary:

```text
Transparent
1px border
48px height
999px radius
```

Keep the current rounded button language.

It is already effective.

---

# 9. Hero credibility line

Under the buttons, add a compact technical positioning line:

```text
AI systems · Backend · Data · Infrastructure
```

Alternative:

```text
LLMs · RAG · Agents · APIs · Systems
```

This should not become a skill dump.

Typography:

```text
13–14px
Medium
Secondary text
```

---

# 10. Right-side visualization

## Visual container

Do NOT make it look like a fake browser terminal.

Instead, create a custom system panel.

Recommended:

```text
Width: 500–540px
Height: 390–440px
Border: 1px neutral
Radius: 20px
Background: very subtle off-white / neutral surface
```

The panel should visually feel like a **technical instrument**.

Not a dashboard.

Not a terminal.

Not a SaaS product screenshot.

---

# 11. Visualization structure

Inside the panel:

```text
AI WORKFLOW

────────────────────────────

INPUT

"Assess venue risk"

        ↓

RETRIEVE
12 sources found

        ↓

REASON
Agent active

        ↓

VALIDATE
✓ Evidence grounded

        ↓

RESPONSE
Risk narrative generated

────────────────────────────

● SYSTEM READY
```

The exact copy can change depending on which project is being represented.

---

# 12. Animation timeline

The animation should take approximately:

```text
5–6 seconds
```

Then loop.

It should be slow enough to understand.

### Sequence

```text
0.0s
System idle

0.5s
INPUT activates

1.2s
Signal moves to RETRIEVE

2.0s
RETRIEVE activates

2.8s
Signal moves to REASON

3.6s
REASON activates

4.2s
VALIDATE activates

4.8s
RESPONSE activates

5.4s
SYSTEM READY

6.0s
Loop
```

Do not animate everything simultaneously.

The sequence should feel causal.

---

# 13. The signal animation

This is the most important animation detail.

Use a small blue indicator.

For example:

```text
INPUT
 ●
 ↓
RETRIEVE
 ○
 ↓
REASON
 ○
 ↓
VALIDATE
 ○
 ↓
RESPONSE
 ○
```

When active:

```text
RETRIEVE
 ●
```

The dot moves down the pipeline.

### Visual treatment

Use:

- small 5–7px circle
- accent blue
- subtle opacity change
- short 150–250ms transition
- no glow

The movement should feel precise.

---

# 14. Node activation

Each stage should have three states.

## Idle

```text
Neutral text
Neutral connector
```

## Processing

```text
Blue label
Blue status dot
Slightly stronger text
```

## Complete

```text
Neutral text
Small checkmark
```

Example:

```text
RETRIEVE

✓ 12 sources found
```

Then:

```text
REASON

● Agent processing...
```

Then:

```text
REASON

✓ Reasoning complete
```

This makes the animation communicate system state.

---

# 15. Connector animation

Between each stage:

```text
│
│
↓
```

When the signal moves through it, the connector briefly changes to the accent color.

After the signal passes, it returns to neutral.

This produces:

```text
INPUT
  │
  │ ← active
  ↓
RETRIEVE
```

without needing flashy animation.

---

# 16. Response animation

At the end of the pipeline:

```text
RESPONSE

Risk narrative generated
```

The response text can appear with a very subtle fade/slide.

Avoid a typewriter effect.

Typewriter animations are extremely common in developer portfolios and would make this feel more template-like.

Instead:

```text
opacity: 0 → 1
translateY: 4px → 0
duration: 200–250ms
```

---

# 17. System status

At the bottom of the visualization:

```text
● SYSTEM READY
```

or:

```text
● WORKFLOW COMPLETE
```

This should remain visible throughout.

When the animation runs:

```text
● PROCESSING
```

At the end:

```text
● SYSTEM READY
```

This creates the impression of a real system trace.

---

# 18. Make the visualization subtly personalized

The visualization should reference the type of work actually represented in the portfolio.

Possible scenario:

```text
INPUT

"Assess venue risk"
```

Then:

```text
RETRIEVE

Regulatory sources
Company data
Risk indicators
```

Then:

```text
REASON

Risk agent
```

Then:

```text
VALIDATE

✓ Evidence grounded
```

Then:

```text
RESPONSE

Risk narrative
```

This is much stronger than generic:

```text
Hello world
```

or:

```text
Ask me anything
```

---

# 19. Alternative scenario rotation

Once the core animation works, it could rotate between 2–3 real engineering concepts.

For example:

### Scenario A — AI Compliance

```text
Question
→ Retrieval
→ Risk Agent
→ Evidence
→ Narrative
```

### Scenario B — AI Data Copilot

```text
Question
→ Schema Retrieval
→ Column Mapping
→ SQL Generation
→ Validation
```

### Scenario C — Agentic Workflow

```text
Task
→ Planner
→ Tools
→ Agent
→ Structured Output
```

Each scenario can use the same visual framework.

The scenario changes every 10–15 seconds.

### Important

Do not change scenarios every 3 seconds.

The visitor needs enough time to understand one.

---

# 20. Recommended initial scenario

Use the **AI compliance/risk workflow** first.

Reason:

It aligns with the professional identity currently represented by the portfolio.

It also differentiates the site from generic:

> "I make ChatGPT apps."

It suggests:

> **AI applied to serious business systems.**

---

# 21. Micro-interaction: hover

If the user hovers over a node on desktop:

```text
RETRIEVE
```

could reveal:

```text
Retrieval layer
Evidence + context
```

Or:

```text
REASON
```

reveals:

```text
LLM / agent reasoning
```

Keep this subtle.

Do not make essential information hover-only.

On mobile, tapping a node can reveal the same detail.

---

# 22. Micro-interaction: hover over the panel

The panel can very subtly respond:

```text
translateY(-2px)
border becomes slightly stronger
```

Do not use a giant shadow.

Do not make the whole panel glow blue.

---

# 23. Scroll behavior

The hero should not have an elaborate scroll animation.

Instead, when the user scrolls:

- hero remains visually stable
- navigation becomes sticky
- system animation continues
- next section naturally enters view

If desired, the visualization can reduce opacity slightly after the hero is mostly off-screen.

Avoid parallax.

---

# 24. Reduced-motion behavior

This is mandatory.

If:

```css
prefers-reduced-motion: reduce
```

is enabled:

- stop the moving signal
- keep the pipeline visible
- show all nodes in their final neutral state
- show "SYSTEM READY"
- remove transitions

The visualization should still make sense as a static graphic.

---

# 25. Mobile layout

Do not attempt to preserve the two-column desktop layout.

Use:

```text
Sydney, Australia

AI Developer &
Backend Engineer

Supporting statement

[View selected work]
[Get in touch]

Technical positioning

        ↓

AI SYSTEM VISUAL
```

The system visualization becomes full width.

### Mobile measurements

```text
Horizontal padding: 20px
Headline: 48–54px
Body: 17–18px
Visualization width: 100%
Visualization height: 360–420px
Gap between copy and visual: 48px
```

---

# 26. Mobile animation behavior

Keep the animation.

Do not disable it just because it is mobile.

However:

- reduce animation complexity
- reduce text
- remove hover behavior
- keep touch targets large
- avoid tiny labels

The system should remain readable at 320px wide.

---

# 27. Accessibility

The animation must not be the only way to understand the hero.

The HTML should contain meaningful text equivalents.

For example:

```text
AI workflow:
Input → Retrieval → Reasoning → Validation → Response.
```

The visual animation is an enhancement.

Use semantic markup and accessible labels.

---

# 28. Performance

The hero is the first thing loaded.

Therefore:

### Prefer

- CSS transitions
- SVG
- simple DOM animation
- requestAnimationFrame only where needed
- lightweight JS
- no large animation libraries

### Avoid

- Three.js
- WebGL
- large Lottie files
- video backgrounds
- huge GIFs
- external animation frameworks

The animation should ideally add **almost no measurable performance burden**.

---

# 29. Recommended implementation

Use:

```text
HTML
CSS
JavaScript
SVG
```

The system visualization should preferably be an SVG or DOM-based diagram.

Example conceptual structure:

```html
<section class="hero">
  <div class="hero-content">
    ...
  </div>

  <div class="hero-visual">
    <svg class="workflow">
      ...
    </svg>
  </div>
</section>
```

Animation state:

```text
idle
→ input
→ retrieve
→ reason
→ validate
→ response
→ ready
→ repeat
```

Keep the animation state machine simple.

---

# 30. Animation state model

Recommended:

```javascript
const states = [
  "input",
  "retrieve",
  "reason",
  "validate",
  "response",
  "ready"
];
```

Each state:

1. activates current node
2. moves signal
3. updates status
4. waits
5. advances

This is easier to maintain than a collection of unrelated animation timers.

---

# 31. Animation timing tokens

```text
--hero-transition-fast: 180ms
--hero-transition: 260ms
--hero-transition-slow: 500ms

--hero-step: 900ms
--hero-cycle: ~6000ms
```

The exact values should be tuned visually.

The important thing is that the animation feels **calm and deliberate**.

---

# 32. Visual style of the system panel

## Background

Use an extremely subtle neutral surface.

Example:

```text
#F8F8F8
```

or a similar project token.

## Border

```text
1px solid neutral / 10–15% opacity
```

## Radius

```text
18–20px
```

## Typography

Node labels:

```text
13px
600
letter spacing: 0.05em
```

Status:

```text
13px
```

Body values:

```text
15–16px
```

Do not make the panel typography look like a terminal.

---

# 33. Avoid making it look like a dashboard

This is a critical distinction.

A dashboard has:

- lots of cards
- charts
- metrics
- filters
- controls

Your hero should have none of that.

It is a **system visualization**.

Think:

> architecture diagram + live trace

not:

> SaaS analytics dashboard.

---

# 34. Alternative hero concept: "From idea to production"

If the workflow concept feels too AI-specific, the second-best option is:

```text
IDEA
 ↓
MODEL
 ↓
WORKFLOW
 ↓
API
 ↓
DATABASE
 ↓
PRODUCTION
```

This is particularly good because it captures the portfolio's strongest positioning:

> You don't just build AI models. You build the systems around them.

The animation can move a signal from left to right.

This would be more engineering-oriented and less "AI demo."

---

# 35. Alternative hero concept: "Evidence → Intelligence → Action"

A third option:

```text
DATA
  ↓
EVIDENCE
  ↓
INTELLIGENCE
  ↓
DECISION
  ↓
ACTION
```

With actual sources represented as tiny cards:

```text
10-K
API
DATABASE
WEB
```

Then:

```text
RETRIEVAL
```

Then:

```text
AGENT
```

Then:

```text
STRUCTURED OUTPUT
```

This would be particularly strong if the portfolio is intended to emphasize compliance/financial AI.

---

# 36. Recommended choice

Ranked:

### 1. AI System in Motion

**Best overall.**

It communicates AI + systems + engineering.

### 2. Idea → Production

**Best for backend/AI positioning.**

It communicates end-to-end engineering.

### 3. Evidence → Intelligence → Action

**Best for financial/compliance positioning.**

It gives the portfolio a more distinctive domain identity.

---

# 37. What the finished hero should feel like

When someone opens the page:

### First second

They see:

> AI Developer & Backend Engineer

### Second–third second

They understand:

> This person builds production AI systems.

### Third–fifth second

They notice the system visual:

> Oh, the AI workflow is actually doing something.

### Fifth–tenth second

They see:

> Retrieval → reasoning → validation → response.

And subconsciously understand:

> **This person thinks in systems.**

That is the desired outcome.

---

# 38. Final hero specification

```text
┌──────────────────────────────────────────────────────────────┐
│ NR.                         Experience Projects Contact      │
│                                                              │
│                                                              │
│ Sydney, Australia                                            │
│                                                              │
│ AI Developer &                         ┌───────────────────┐ │
│ Backend Engineer                       │ AI WORKFLOW       │ │
│                                        │                   │ │
│ I build production AI systems,        │ INPUT             │ │
│ from LLM workflows and retrieval      │   ●               │ │
│ pipelines to the APIs and             │   ↓               │ │
│ infrastructure behind them.          │ RETRIEVE          │ │
│                                        │   ↓               │ │
│ [View selected work]                  │ REASON            │ │
│ [Get in touch]                        │   ↓               │ │
│                                        │ VALIDATE          │ │
│ AI · Backend · Systems                │   ↓               │ │
│                                        │ RESPONSE          │ │
│                                        │                   │ │
│                                        │ ● SYSTEM READY    │ │
│                                        └───────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

# 39. One final design principle

The hero animation should follow this rule:

> **If you removed the animation, the hero should still communicate the complete idea. If you add the animation back, it should deepen the meaning rather than merely add movement.**

That is the difference between:

**animation for decoration**

and

**animation as product communication.**

For this portfolio, I strongly recommend the latter.
