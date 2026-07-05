# Kontrola Design System

Kontrola is a **network monitoring / NMS (network management system)** product built by **tristek** (organization seen in the sample data: `noc@tristek.id`, org pill "tristek"). It gives NOC/IT teams a single dashboard over their network fleet — routers, switches, firewalls, servers, storage, cameras, wireless — aggregating SNMP telemetry (uptime, interface status, throughput, errors, latency, packet loss) pulled from tools like Zabbix, Datadog, LibreNMS and Smokeping.

This design system was built from the product's real front-end source, **not from a screenshot**. It is intentionally a "vanilla" static front end — plain HTML + one CSS file + vanilla JS, no framework, no build step — see `BACKEND.md` in the source repo for the full data contract.

## Sources

- **Product codebase (ground truth):** GitHub repo `MRafkusia/network-ui-kontrola` — `index.html` (Infrastructure/device-list page), `device.html` (per-device detail page), `styles.css` (all styling, ~47KB), `app.js`/`device.js` (page logic), `common.js` (shared chart/format helpers), `data.js` (dummy SNMP dataset), `BACKEND.md` (data-contract handoff doc), `assets/kontrola-logo.png` (logo).
  Explore it further for the exact interaction logic (sorting, filters, CSV/PDF export, port "uplink/downlink" flagging) this design system only recreates visually.
- **Icon style reference:** GitHub repo `tabler/tabler`. The product's own inline SVG icons already follow the **Tabler Icons** visual convention (24×24 viewBox, `stroke="currentColor"`, `stroke-width="2"`, round caps/joins, no fill) — so this system uses the same stroke-icon convention and can pull additional glyphs from the [Tabler Icons](https://tabler.io/icons) set (CDN: `@tabler/icons`) for any icon not already hand-coded in the product. See ICONOGRAPHY below.

Explore these repos yourself for anything this system doesn't cover — the interaction code (`app.js`, `device.js`) in particular has a lot of filtering/aggregation logic ("aggregation lens", port role flagging, CSV/PDF export) worth reading before building new screens.

## Product surfaces

Only one product surface exists in the source: the **Network Infrastructure web app** (desktop-oriented, responsive down to mobile). It has two screens:
1. **Infrastructure / device list** (`index.html`) — fleet-wide summary cards, health charts, top-utilized-links, and a sortable/filterable device table.
2. **Device detail** (`device.html`) — one device's hero card, per-interface table, device-wide graphs, ICMP latency/loss, and raw SNMP info.

The top nav also lists Overview / Storage / Applications / Licenses tabs that aren't built out in the source (Network is the only implemented tab) — treat those as placeholders for future surfaces, not designs to invent.

## Content fundamentals

- **Voice:** operational, factual, dense with numbers — this is a NOC tool, not a marketing site. Copy reads like a network engineer wrote it: "Every metric, chart and device below is aggregated across each device's uplink ports", "Aggregate inbound / outbound traffic", "Round-trip latency of ICMP echo probes from the Kontrola poller to this device." No adjectives, no hype.
- **Casing:** sentence case for headings and labels ("Network Health Overview", "Top Utilize Link", "Link Errors"), except table headers and small eyebrow labels which are UPPERCASE with wide letter-spacing ("SLA · 24H", "IP ADDRESS").
- **Person:** no direct address ("you/your") in the UI chrome — it's all third-person/system voice describing the device or metric ("Devices in scope", "No data available"). The only first/second person text is in the (Indonesian-language) `BACKEND.md` handoff doc, which is written to a developer audience ("Anda", "kita").
- **Numbers over adjectives:** every card pairs a plain-language label with a hard number and a technical footnote — e.g. Availability shows "99.94%" plus "46/48 uplink ports up · target 99.90%", not "Excellent". Units are always explicit (Gbps, ms, err, %).
- **Empty/error states are explicit, never silent:** a value that can't be measured renders as a literal "N/A" chip or a "No data available" block with an icon — see `KCOMMON.noData()` / `.na` — rather than a blank cell or a zero.
- **Info affordances explain method, not just meaning:** every metric has a hoverable "i" with a two-part explainer — WHAT the number means, then HOW it's measured (e.g. "Per-port ifHCInOctets / ifHCOutOctets counters, rated to bits per second"). Write new metrics the same way.
- **No emoji.** The only "decoration" is the stroke icons (see Iconography) and color-coded status dots/badges.
- **Bilingual repo, monolingual UI:** the shipped product UI is English throughout; only the backend handoff documentation is Indonesian. Follow English for any new UI copy unless told otherwise.

## Visual foundations

- **Color:** one warm accent (`--orange #E25716`) carries every call-to-action, active state, and "in-focus" affordance — nav active pill, CTA buttons, table header bar, focus rings, active segmented-control option, chart's primary series. Neutrals are warm-tinted grays/creams (`--ink #241F20`, `--light #F0EBEB`, page bg `#F3F0EF`) rather than cool grays — never blue-gray. A second accent, `--link-blue #2D6FD6`, appears only as the "second series" color in charts (TX vs RX, downlink vs uplink) and never as a primary UI color. Status uses conventional green/amber/red (`--good`/`--warn`/`--bad`), each with a soft background tint version for badges.
- **No gradients as decoration.** The only gradient in the whole system is a very subtle radial "corner tint" on metric cards (`radial-gradient(150px 150px at 100% 0, accent 11%, transparent)`) — a hint of color, not a background wash. Never a full-bleed gradient background.
- **Type:** Arimo (a metrically-compatible Helvetica/Swiss-721 substitute) for everything — headings, body, table cells, and numerals. No serif, no display face, no monospace family (tabular numerals are just Arimo with `font-variant-numeric: tabular-nums`). Weights used: 400 body copy, 600 UI labels/buttons, 700 headings and big numeric values. Big numbers get slightly negative letter-spacing (-0.02 to -0.022em) to read dense; uppercase eyebrow labels get wide positive tracking (+0.04 to +0.07em).
- **Backgrounds:** flat color only. No photography, no illustration, no pattern/texture, no noise/grain. The one raster image in the whole product is the logo.
- **Cards:** white (or dark-surface) rounded rectangles, `20px` radius, a hairline **orange-tinted border** (`rgba(226,87,22,.28)`, not gray) plus a soft two-layer drop shadow (`0 1px 2px … , 0 8px 24px …`). This orange-tinted border (instead of a neutral gray border) is a distinctive, consistent brand signature — use it on every card-level container.
- **Corner radii scale with size**, not a single global radius: small chips/badges are fully pill-shaped (999px), inputs/buttons sit at 11px, popovers at 13px, cards at 20px, the modal at 22px. Bigger container → bigger (but still not maximal) radius.
- **Shadows:** soft and layered (never a single hard drop shadow) — cards get a barely-there 1px contact shadow plus a diffuse 24px ambient shadow; popovers/modals get one bigger diffuse shadow; primary buttons get a colored shadow tinted to match their own fill (orange button → orange-tinted shadow).
- **Animation:** minimal and functional only — 120–200ms ease transitions on hover/active color and background changes, a 0.5s width transition on progress/utilization bars, and popovers fade+slide 4-6px on open/close. No bounce, no spring, no page-transition choreography, no decorative looping animation.
- **Hover states:** background tints to the orange-050 tint (not a darker/lighter neutral gray) for interactive rows/links; icon buttons additionally lift 1px (`translateY(-1px)`); primary buttons darken to `--orange-600`. Table rows tint to a very light warm `--row-hover`.
- **Press/active states:** the segmented control and pagination use solid orange fill + white text for the active/selected option (a filled state, not a color shift) — this is a **selection** state, distinct from hover.
- **Borders:** hairline (1–1.5px), mostly translucent black (`rgba(36,31,32,.07–.14)`) for neutral dividers, or translucent orange (`rgba(226,87,22,.28)`) specifically on card containers.
- **Layout:** a single centered content column (`max-width: 1320px`), generous 22–28px page padding. The 4-up summary-metric grid and 2-up chart grid collapse to 2-up / 1-up under 1140px, and further simplify (nav hidden, hero chips wrap 2×2) under 760px. No sidebar; everything reads top-to-bottom in one column of full-width sections.
- **Transparency & blur:** used sparingly and only for overlay dismissal affordances — the modal backdrop (`rgba(20,16,17,.5)` + `backdrop-filter: blur(3px)`) and the info-tooltip/dropdown pop-in. Never blurred content behind a nav bar or card.
- **Dark mode:** a real second theme (`[data-theme="dark"]`), not just an inverted filter — warm near-black surfaces (`#171314`/`#221D1E`), the same orange accent (slightly stronger opacity for borders), and brighter/more saturated status colors so they still read on dark backgrounds.
- **Imagery:** none in the live UI beyond the logo — no photography, no stock imagery, no illustration. If a future surface needs imagery, keep it out of the chrome; this is a data-first, chrome-minimal product.

## Iconography

- **Style:** every icon in the product is a hand-authored inline SVG following one consistent convention — 24×24 viewBox, `fill="none"`, `stroke="currentColor"`, `stroke-width="2"` (2.4 for small chevrons/arrows), `stroke-linecap="round"`, `stroke-linejoin="round"`. This is exactly the **Tabler Icons** convention (see `tabler/tabler`, and the dedicated `tabler/tabler-icons` icon set it's built from) — Kontrola's own icons were evidently drawn to match that library even though they're inline, not imported from it.
- **No icon font, no PNG icons, no emoji.** Every glyph is inline SVG, sized via CSS (`width`/`height` on the `<svg>`), colored via `currentColor` so it inherits the surrounding text/icon-button color automatically (including on hover and in dark mode).
- **Where icons appear:** nav-action icon buttons (bell, theme toggle, user), table toolbar controls (search, vendor filter, export caret), the CSV/PDF export menu, sort arrows and chevrons, the "i" info-affordance next to chart titles, the uplink/downlink lens toggle, and the breadcrumb back-chevron.
- **This system's `guidelines/icons-stroke-set.card.html`** reproduces the actual set of icons found in the source HTML verbatim (copied, not re-drawn) as a reference sheet.
- **Extending the set:** for any icon not already in the product, pull the matching glyph from the [Tabler Icons](https://tabler.io/icons) library (MIT-licensed, CDN: `@tabler/icons` / `@tabler/icons-react`) rather than hand-drawing a new one — it's the same visual language and will match seamlessly. Keep the same attributes (24×24, stroke-width 2, round caps/joins, currentColor).

## Components

All components live under `components/<group>/` as `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, with one `@dsCard`-tagged demo per directory. None of these come from a pre-existing component library spec (the source is a plain HTML/CSS/JS app, not a component-driven codebase) — they were extracted as the recurring UI patterns actually used across `index.html`/`device.html`/`styles.css`.

- **core/** — `Button` (primary/secondary/ghost), `IconButton` (round nav icon button), `SegmentedControl` (range/status/lens toggle)
- **feedback/** — `StatusBadge` (up/down/testing/N/A), `ToolBadge` (Zabbix/Datadog/LibreNMS/Smokeping), `Chip` (generic pill — filter/summary chips), `SyncPill` (poll-freshness indicator)
- **data/** — `MetricCard` (fleet summary stat card), `Sparkline` (capsule trend line), `PortsBar` (up/total ratio + bar), `DataTable` (sortable table, orange header), `Pagination`, `ScopeBar` (aggregation-lens banner), `HeroChip` (device-hero stat chip)
- **forms/** — `SearchInput`, `Select`, `FlagToggle` (uplink/downlink/unset port-role toggle)
- **navigation/** — `TopNav` (logo + pill nav + actions), `Breadcrumb`
- **overlays/** — `Dropdown` + `DropdownItem` (export/vendor-filter popover menu), `InfoTooltip` (metric "i" explainer popover)

**Intentional additions:** none of the above are inventions beyond the source — every one maps directly to a class/pattern in `styles.css`. `Dropdown` generalizes two near-identical source patterns (`.export-pop` and `.vf-pop`) into one reusable primitive, which is the only real abstraction beyond a 1:1 port.

## UI kit

`ui_kits/network/` — a clickable recreation of the **Network Infrastructure** app: `index.html` boots a small React app that toggles between the device-list screen (`InfrastructurePage.jsx`) and the device-detail screen (`DevicePage.jsx`), sharing icons (`icons.jsx`) and a trimmed sample dataset (`data.js`, 6 of the source's 24 dummy devices — the rest were purely repetitive rows). Click any device row to open its detail screen; click the logo/breadcrumb to go back. Search, sort, status filter, and the uplink/downlink lens are live; CSV/PDF export and the vendor-filter checkboxes are visual-only (no file is produced) — see `BACKEND.md` in the source repo for the real interaction/data contract if you need to wire these up for real.

## Index

- `readme.md` — this file
- `styles.css` — global stylesheet entry point (import-only)
- `base.css` — reset + body/page/card shell
- `fonts/fonts.css` — Arimo webfont loading
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` — design tokens
- `assets/kontrola-logo.png` — product logo (light/dark via CSS filter)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand, Icons groups in the Design System tab)
- `components/` — reusable UI primitives (see Components above)
- `ui_kits/network/` — the Infrastructure + Device screens UI kit
- `SKILL.md` — portable skill file for using this system in Claude Code
