---
name: Brock Major — Portfolio
description: Personal portfolio for software engineer Brock Major, targeting NYC SDE2 opportunities.
colors:
  dark-base: "#1c1714"
  surface-card: "#2a231e"
  accent: "#d4974a"
  ink-primary: "#f5f0ea"
  ink-body: "#c8c0b5"
  ink-secondary: "#9a8e82"
  ink-tertiary: "#857870"
typography:
  display:
    fontFamily: "Ubuntu Mono, 'Courier New', monospace"
    fontSize: "clamp(1.375rem, calc(1.375rem + 1.5vw), 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "calc(15px + 0.8vw)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  card: "8px"
  photo: "5%"
spacing:
  section-pad: "5rem"
  card-inner: "2rem"
  icon-margin: "2rem"
components:
  nav-link:
    backgroundColor: "{colors.dark-base}"
    textColor: "{colors.ink-primary}"
    rounded: "0"
    padding: "0.5rem 1rem"
  nav-link-hover:
    backgroundColor: "{colors.dark-base}"
    textColor: "{colors.ink-secondary}"
    rounded: "0"
    padding: "0.5rem 1rem"
  experience-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-inner}"
  stat-chip:
    backgroundColor: "{colors.dark-base}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.card}"
    padding: "1rem 1.5rem"
---

# Design System: Brock Major — Portfolio

## 1. Overview

**Creative North Star: "The Sharp Handshake"**

Brock Major's portfolio is built on a single conviction: the design gets out of the way so the person gets noticed. The palette is nearly monochromatic charcoal — dark, calm, achromatic. The atmosphere is a well-lit room where the work and the person are the only things in it. Nothing decorative enters without earning its place. Nothing shouts. Nothing performs.

This system explicitly rejects the generic dark Bootstrap portfolio with floating cards and no human voice; the overwrought creative portfolio with WebGL scenes and custom cursor trails (which signals "frontend magician" when the actual work is full-stack product engineering); the cold corporate bio that reads like a LinkedIn summary reformatted as HTML; and the "Hello World!" typewriter hero, which by 2026 is a cliché that has outlived any warmth it once had. The visual ambition here is the ambition of the sharp handshake: confident, specific, human — and brief.

The system's biggest open gap is color: the current palette has no accent whatsoever. This is a documented absence. Before any redesign of individual sections, picking and committing to one accent is the highest-leverage move available.

**Key Characteristics:**
- Near-monochromatic dark base. One background tone, one surface tone. Depth is tonal, not shadow-based.
- No accent color (documented gap — the single biggest upgrade available).
- System fonts everywhere except the hero mono. Readable, fast, honest.
- Fluid type scale. Every size adapts with the viewport; nothing is a hard pixel value where a `clamp()` belongs.
- Flat-by-default elevation. Surfaces lift by luminance delta, not box-shadow.
- Specificity carries credibility. "190M+ users reached" and "15K+ patient e-cards sent" do more work than any design flourish.

## 2. Colors: The Warm Dark Palette

A warm near-black base with a single amber accent. The warmth is baked into the base tones, not layered on top — the background reads as dark brown rather than charcoal, and the amber sits naturally against it.

### Primary

- **Ember Amber** (`#d4974a`): The accent. Used on the hero name, stat values in Experience, nav link hover, and contact icon hover. Warm, confident, not SaaS-orange. Contrast against dark-base: approximately 6.4:1 (AA for normal text). The rarest color on the page — its scarcity is what gives it weight.

### Neutral

- **Warm Near-Black** (`#1c1714`): The floor. Every section background, nav bar, stat chip backgrounds. RGB 28/23/20 — a very dark brown with a distinct warm tint. Contrast against ink-primary: approximately 16:1.
- **Warm Surface** (`#2a231e`): The card. Experience card background. A clear step up from the near-black — warm brown rather than lifted charcoal. This tonal delta is the entire elevation system.
- **Warm Off-White** (`#f5f0ea`): Primary text. Headings, body copy, SVG icons, nav links at rest. Slightly warmer than pure white — softens against the warm dark base.
- **Warm Silver** (`#c8c0b5`): Body text inside cards. Experience summary paragraph. Contrast against Warm Surface: approximately 7.8:1 (AAA).
- **Warm Stone** (`#9a8e82`): Secondary metadata. Company name, date ranges. Contrast against Warm Near-Black: approximately 5.5:1 (AA).
- **Warm Muted** (`#857870`): Tertiary labels. Stat chip label text. Contrast against Warm Near-Black: approximately 4.6:1 — passes AA for large text. Use only at tracked uppercase label scale.

### Named Rules

**The One-Accent Rule.** Ember Amber is the only color that isn't a warm neutral. Use it in exactly these contexts: hero name, stat values, nav hover, contact icon hover. Do not introduce it elsewhere. Its restraint is what makes it feel like a deliberate choice rather than decoration.

**The Contrast Floor Rule.** `#857870` on `#1c1714` is 4.6:1. Permissible for large text (≥18px or bold ≥14px). Never use as body copy color at small sizes.

## 3. Typography

**Display Font:** Ubuntu Mono (with `'Courier New', monospace` fallback)
**Body Font:** `-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif` (Bootstrap system stack)

**Character:** Ubuntu Mono appears in exactly one context — the `<code>` element in the hero typewriter — where it signals technical identity through specificity. The rest of the site uses the system UI stack: fast to load, familiar to read, deliberately unstyled. The contrast between the mono hero and the neutral body reads as confident restraint, not laziness.

**Active issue:** The `@font-face` declaration for 'Ubuntu' in `Landing.css` points to `http://example.com/fonts/ubuntu.woff` — a broken placeholder that will never load. The Ubuntu Mono weight in the hero currently falls through to `Courier New`. Fix this before shipping: either load Ubuntu Mono from Google Fonts (`@import`) or remove the broken declaration.

### Hierarchy

- **Display** (Ubuntu Mono, 400, `calc(1.375rem + 1.5vw)`, line-height 1.2): Hero typewriter only. The `<code>` element. Never used outside the landing section.
- **Headline** (system UI, 700, `clamp(1.75rem, 4vw, 2.5rem)`, line-height 1.15, -0.02em tracking): Section h1 headings (About Me, Experience, Contact). One per section.
- **Title** (system UI, 600, 1.2rem, line-height 1.3): Component-level headings. Currently: role title inside the experience card ("Software Engineer").
- **Body** (system UI, 400, `calc(15px + 0.8vw)`, line-height 1.6): About paragraph, experience summary. Cap at 65–75ch per line for readability — currently uncapped in some sections.
- **Label** (system UI, 400, 0.8rem, 0.05em tracking): Stat chip labels ("users reached", "patient e-cards sent"), company metadata ("Epic Systems · March 2023 – June 2026").

### Named Rules

**The One-Mono Rule.** Ubuntu Mono appears in exactly one context: the hero `<code>` element. Do not introduce monospace type elsewhere — not in the experience card, not in the nav, not in the contact section. Its rarity is what makes it signal something. Spread it and it becomes costume.

**The Missing Subtitle Rule.** The hero currently reads: `Hello World!` → `My name is Brock Major.` — and stops. The subtitle explaining what Brock does is commented out. A recruiter who lands on this page in the first five seconds has no idea what Brock does. This is a content bug, not a design bug, but it is the most urgent fix on the site.

## 4. Elevation

This system is tonal-flat. No `box-shadow` declarations exist anywhere in the codebase. Depth is communicated exclusively through luminance: a surface at `#3a3b3c` reads as elevated above the `#2b2d2c` page because it reflects approximately 15% more light — no shadows needed, no borders needed.

State transitions use `transform: scale()` and `opacity` only: the SVG icons scale to 1.1× on hover; the profile photo scales to 1.03× on hover; the contact labels fade from opacity 0 to 1. No CSS layout properties are animated.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Do not introduce `box-shadow` on any component. If a new component needs to feel elevated, step its background color up in luminance (toward `#3a3b3c` or lighter) rather than reaching for a shadow. A shadow is a different visual language; it would read as alien against the current system.

## 5. Components

### Navigation

Fixed to the top of the viewport. Background: Cold Concrete (`#2b2d2c`). Links right-aligned. Font size: 1rem, system UI, white at rest. On hover: color softens toward Stone Mid (`#aaaaaa`) — there is no background change. On page load, each nav link fades in from above with a staggered delay (0ms, 100ms, 200ms) via `react-reveal/Fade`. No active/current-section indicator exists — a gap worth addressing once content is stable.

### Experience Card

The site's only content card. Background: Lifted Surface (`#3a3b3c`). Border-radius: 8px. Padding: 2rem. Internal structure: a header row (logo image + role/company text), a summary paragraph, and a row of stat chips. No border. No shadow. The tonal lift against the page background is the only visual distinction.

The stat chips inside the card sit on Cold Concrete (`#2b2d2c`) — the same color as the page background — which means they visually "punch through" the card surface rather than sitting on top of it. This is a deliberate contrast move, not an error.

### Stat Chips

Background: Cold Concrete (`#2b2d2c`). Border-radius: 8px. Padding: 1rem 1.5rem. Minimum width: 160px, maximum: 220px. Two-line structure: large value (1.3rem, 700 weight, white) above tracked uppercase label (0.8rem, `#888888`). Flex-wrapped row; gaps collapse cleanly on narrow viewports.

### Contact Icon Links

Three SVG icons (LinkedIn, GitHub, email). Size: `calc(30px + 3vw)` — fluid. Margin: 2rem each. On hover, the icon scales to 1.1× and a text label fades in below via `visibility: hidden → visible` plus `opacity: 0 → 1` transition (200ms ease). The visibility/opacity combo avoids layout reflow; an earlier `display: none → flex` implementation caused a page jump that was fixed by this approach.

On desktop (≥768px): icons arrange horizontally. On mobile: stack vertically.

### Signature Component: Profile Photo + Confetti

The profile photo in the About section is wrapped in a hidden checkbox input pattern. Clicking the photo triggers a confetti explosion (`react-confetti`, 500 pieces, 0.5 gravity, no recycle) centered below the photo. The photo scales on hover (1.03×) and animates briefly on click. This is the site's only delight moment — the one place where personality breaks through the restraint.

## 6. Do's and Don'ts

### Do:

- **Do** let specificity carry credibility. "190M+ users reached" and "15K+ patient e-cards sent" are more convincing than five bullet points about responsibilities.
- **Do** introduce one accent color before the next deploy. Pick it, commit to it, use it in exactly one high-value place (a hover state, a link, a stat value). The rest of the system is ready for it.
- **Do** fix the broken Ubuntu Mono font import in `Landing.css` before shipping. The `http://example.com/fonts/ubuntu.woff` placeholder means the hero is rendering in Courier New.
- **Do** add a hero subtitle that communicates what Brock does in under 10 words. The "My name is Brock Major" line is a name, not a value proposition.
- **Do** cap the About paragraph line length at 65–75ch. Unrestricted line length on wide viewports hurts readability.
- **Do** verify `#888888` stat labels render at ≥18px before shipping. If they fall below that, step the color up to `#aaaaaa` or larger.
- **Do** use `text-wrap: balance` on section h1 headings to prevent orphaned words on tablet viewports.

### Don't:

- **Don't** replicate the "Hello World!" typewriter hero. It is explicitly on the anti-references list — a pattern that in 2026 signals "bootstrap template" faster than it signals personality. Replace with something specific to Brock.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent on cards, callouts, or list items. Not here, not anywhere.
- **Don't** use gradient text (`background-clip: text`). Not for stat values, not for section headings, not for the hero.
- **Don't** add WebGL, custom cursor effects, or heavy entrance choreography. The brand is "warm and approachable" — these moves signal the wrong kind of engineer.
- **Don't** add `box-shadow` to the experience card or any other component. The system is tonal-flat; a shadow breaks the visual contract.
- **Don't** use `#888888` at body-text scale. It fails WCAG AA for text below 18px on the dark background. Large tracked labels only.
- **Don't** write the About section in the third person or corporate register. "Brock Major is a software engineer who..." is the cold corporate bio the system explicitly rejects. First person, human voice.
- **Don't** invent numbered section markers (01, 02, 03) or tiny uppercase tracked eyebrows above section headings as default scaffolding. One is voice; every section is AI grammar.
- **Don't** add a second accent before committing to the first. Two improvised colors do not add up to one deliberate one.
