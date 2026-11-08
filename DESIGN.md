---
version: alpha
name: News
description: "A bright, playful Indonesian news experience that pairs confident indigo, crisp editorial typography, and friendly rounded surfaces to make trusted headlines feel approachable, timely, and easy to explore."

colors:
  primary: "#5766ea"
  primary-hover: "#4554d8"
  on-primary: "#ffffff"
  background: "#f7f8fc"
  surface: "#ffffff"
  border: "#e3e7f0"
  text: "#20243a"
  text-muted: "#626a82"
  accent: "#4352d4"
  success: "#16845b"
  warning: "#9a5b00"
  danger: "#c0394b"

typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.03em
  heading:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: -0.01em
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6

spacing:
  base: 8px
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

radius:
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
  pill: 9999px

shadows:
  card: "0 2px 10px rgba(32, 36, 58, 0.06)"
  elevated: "0 12px 32px rgba(32, 36, 58, 0.14)"
  focus: "0 0 0 3px rgba(87, 102, 234, 0.28)"

motion:
  duration-fast: 120ms
  duration-base: 200ms
  duration-slow: 320ms
  easing: "cubic-bezier(0.2, 0.7, 0.2, 1)"
---

## Rationale

News should feel immediate and trustworthy without feeling stern. The vivid indigo primary gives the product a recognizable, consumer-friendly identity and makes actions easy to spot. A cool, near-white canvas and white content surfaces keep the experience bright and calm, while semantic colors are reserved for meaningful status such as live coverage, saved state, or urgent updates.

Plus Jakarta Sans gives headlines a warm, contemporary character that suits a playful product; Inter keeps article text and interface labels clear at small sizes. The scale favors strong, readable story headlines and comfortable long-form reading. Use Indonesian language conventions and familiar local context—such as WIB timestamps and Indonesian place names—where relevant, without assuming every reader prefers Bahasa Indonesia.

An 8px spacing rhythm creates consistent editorial layouts while smaller 4px and 12px increments allow precise alignment. Rounded cards and chips soften dense news feeds, but restrained radii, clear hierarchy, and ample whitespace keep the interface from feeling toy-like. Motion is brief and purposeful so the product feels responsive without distracting from reading.

Dark mode preserves the same hierarchy and indigo identity while shifting surfaces to deep blue-gray. Text and controls must be recolored for contrast rather than simply dimmed; imagery should remain legible, and any status color should remain distinguishable in both themes.

## 1. Visual Theme & Atmosphere

Create a bright, playful, consumer-news atmosphere: lively enough to invite browsing, composed enough to communicate credibility. Use indigo as a consistent navigation and action cue, not as a fill for every surface. Keep article imagery prominent, crop it thoughtfully, and avoid decorative effects that compete with the story.

Favor clean editorial compositions, rounded cards, topic chips, and concise metadata. Use playful accents sparingly—for example, a small “LIVE” badge or a friendly empty-state illustration—while keeping serious news coverage visually respectful. Show the publication or source clearly so readers can quickly judge where a story comes from.

## 2. Color System

### Light theme

- **Primary `#5766ea`:** Main calls to action, selected navigation, and key brand moments. Pair with white text.
- **Primary hover `#4554d8`:** Hover and pressed states for primary actions; keep white text.
- **On-primary `#ffffff`:** Text and icons placed on primary fills.
- **Background `#f7f8fc`:** App canvas and page background.
- **Surface `#ffffff`:** Cards, menus, dialogs, and input surfaces.
- **Border `#e3e7f0`:** Subtle dividers and card edges. For controls that need a visible boundary, use a darker neutral such as `#9ca5bb`.
- **Text `#20243a`:** Headlines, article copy, and primary labels.
- **Text-muted `#626a82`:** Timestamps, captions, secondary labels, and supporting metadata.
- **Accent `#4352d4`:** Text links and editorial highlights; use on light backgrounds rather than as small text on primary fills.
- **Success `#16845b`:** Positive or completed states.
- **Warning `#9a5b00`:** Caution, developing-story, or attention states.
- **Danger `#c0394b`:** Errors and critical alerts.

### Dark theme

Use theme tokens so components do not hardcode light colors:

- **Background:** `#111522`
- **Surface:** `#191f30`
- **Raised surface:** `#222a3d`
- **Border:** `#30384d`
- **Text:** `#f3f5ff`
- **Text-muted:** `#aab2c7`
- **Primary:** `#8994ff`, with `#111522` as on-primary
- **Accent:** `#a5adff`
- **Success:** `#65d6a2`
- **Warning:** `#ffc267`
- **Danger:** `#ff8290`

Maintain clear separation between cards and the app canvas in both themes. Do not use color alone to convey live status, urgency, errors, or selection; include a label, icon, or shape cue. Check all text and icons against their actual rendered backgrounds.

## 3. Typography

Use **Plus Jakarta Sans** for display and section headings. Its rounded forms bring a friendly editorial personality to the brand. Use **Inter** for body copy, metadata, navigation, and controls because it remains highly legible in compact interface contexts. Use **JetBrains Mono** only for technical or diagnostic values, not editorial content.

- **Display (56px / 700):** Landing-page hero or a single featured story headline on wide screens. Scale down responsively; do not force this size into feed cards.
- **Heading (32px / 600):** Page titles, major editorial sections, and prominent feature headlines.
- **Body (15px / 400):** Article summaries, labels, and general interface text. For long-form article pages, use 17–18px with a 1.7 line-height.
- **Small interface text:** Use 12–13px for timestamps, source metadata, and compact labels; preserve readable contrast and avoid long passages at this size.

Keep headlines sentence case and avoid overly tight line lengths. Allow natural wrapping for Bahasa Indonesia and other supported languages.

## 4. Components & Patterns

1. **Top navigation:** Place the wordmark, key sections, search, and account actions in a clear header. On mobile, keep the brand and highest-value actions visible and move secondary links into a menu. Use a distinct active state with both color and an underline, indicator, or filled chip.
2. **Topic navigation:** Use horizontally scrollable topic chips on narrow screens and a fixed row or sidebar on wider layouts. Example topics: *Nasional*, *Bisnis*, *Teknologi*, *Olahraga*, *Hiburan*. Selected chips use a primary tint or fill; retain a visible selection cue in dark mode.
3. **Breaking-news strip:** Show a concise “TERKINI” or “LIVE” label beside the headline or update. Use danger color only when the story warrants urgency; do not imply every breaking item is an emergency. Include a text label and timestamp.
4. **Featured story card:** Use a large, high-quality image, category label, clear headline, short summary, source, and publication time. Make the headline the dominant element. Use a gentle shadow or border, not both at high intensity.
5. **Article feed card:** Present thumbnail, category, headline, source, and relative or absolute time in a predictable scan pattern. Make the clickable area generous, preserve a clear headline focus, and use a subtle background or border change on hover.
6. **Article detail header:** Display category, headline, deck, author or publisher, and publication time before the article body. Support a readable text column, inline media captions, and a visible source attribution.
7. **Primary and secondary buttons:** Primary buttons use `#5766ea` with white text and a darker hover state. Secondary buttons use a surface fill with a visible border and text color. Include hover, pressed, disabled, and loading states; never communicate disabled state using opacity alone.
8. **Search field:** Use a labeled input with a search icon, clear focus ring, and a helpful empty-state prompt such as “Cari berita atau topik”. Support keyboard submission, a clear action, and visible loading or no-results states.
9. **Save and share actions:** Use 44px minimum hit areas with clear labels or accessible names. Saved state should pair a filled icon with a text or state change; provide brief confirmation without interrupting reading.
10. **Loading and empty states:** Use restrained skeleton blocks that match the shape of article cards. Provide useful next steps for no results, network errors, and empty saved lists; avoid indefinite spinners when the system can show progress or retry.

## 5. Spacing & Layout

Use a responsive 12-column grid on desktop, with a centered content container capped at approximately 1200px. A story-feed column can sit beside a 280–320px supporting column for trending topics or related coverage. On tablet, reduce to a single primary column with optional compact supporting modules; on mobile, use a single-column feed.

Use 24px desktop page gutters, 20px tablet gutters, and 16px mobile gutters. Keep a 16–24px gap between cards and a 32–48px gap between major editorial sections. Give the article body a comfortable reading width of roughly 640–720px and keep long-form paragraphs separated by 20–24px. Align headlines, summaries, and metadata consistently within each card. Avoid dense text-heavy sidebars on small screens.

## 6. Motion & Interaction

Use motion to clarify state and provide gentle feedback, not to decorate the news feed. Standard transitions last 120–200ms; reserve longer movement for larger overlays or page transitions. Prefer opacity and small positional changes over scaling or parallax.

- Buttons darken slightly on hover and visibly depress on press.
- Cards may raise by 1–2px on hover on pointer devices; do not require hover to discover actions.
- Menus and dialogs fade in with a small upward shift, and close promptly after a clear user action.
- Search and feed loading should use skeletons with subtle, low-contrast shimmer or static placeholders.
- Avoid autoplaying motion or animated breaking-news effects that could distract readers.
- Keep interaction state immediate, with clear disabled, loading, success, and error feedback.

## Accessibility

### Contrast Ratios

Approximate WCAG contrast ratios for the light theme:

- Body text `#20243a` on background `#f7f8fc`: **13.8:1** — exceeds AAA (7:1).
- Body text `#20243a` on surface `#ffffff`: **15.1:1** — exceeds AAA.
- Muted text `#626a82` on background `#f7f8fc`: **5.3:1** — meets AA for normal text.
- Accent link `#4352d4` on background `#f7f8fc`: **5.2:1** — meets AA for normal text.
- White text `#ffffff` on primary `#5766ea`: **approximately 4.7:1** — meets AA for normal text.
- White text `#ffffff` on primary hover `#4554d8`: **approximately 6.3:1** — meets AA and large-text AAA.
- Success `#16845b` on white: **approximately 4.7:1** — meets AA for normal text.
- Warning `#9a5b00` on white: **approximately 5.9:1** — meets AA for normal text.
- Danger `#c0394b` on white: **approximately 5.3:1** — meets AA for normal text.

Ratios are approximate and should be rechecked against final rendered colors, opacity, and component states. The subtle border `#e3e7f0` is for decoration and separation, not the sole boundary of an interactive control; use a stronger border or another visible cue where required.

### Minimum Requirements

- Touch target: 44×44px minimum
- Focus indicator: `#5766ea` outline, 2px, 2px offset
- Focus contrast: approximately 4.7:1 against the light background

### Motion

- Respects prefers-reduced-motion: yes

### Notes

Use semantic headings in a logical order, descriptive link text, meaningful alt text for editorial images, and captions for images that need context. Announce live updates without repeatedly interrupting screen readers. Provide keyboard access to menus, carousels, search, and article actions; do not trap focus except inside modal dialogs. Support browser zoom and text resizing without clipping. Use explicit locale-aware dates and times, including WIB where appropriate, and ensure color, icons, and labels continue to communicate meaning in both light and dark modes.