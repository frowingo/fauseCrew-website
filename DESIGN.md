---
name: FausCrew
description: A warm, shared-home identity inherited from the mobile app, with a dark mode taken from its dark app icon.
colors:
  orange-light: "#ff9138"
  orange: "#ff7a26"
  berry: "#611a38"
  mark-berry: "#8a2440"
  paper: "#fbf8f5"
  ink: "#2b2326"
  muted: "#6d6366"
  line: "#ece3dc"
  dark-bg: "#14060c"
  dark-surface: "#220e18"
  dark-icon-top: "#33101f"
  dark-orange-light: "#ffa04d"
  dark-orange: "#ff6a2a"
  dark-ink: "#fbeee6"
  indigo: "#45579e"
  teal: "#2e9187"
  purple: "#7a61ad"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(60px, 7.4vw, 104px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.05em"
  section:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(36px, 4.4vw, 56px)"
    fontWeight: 800
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "15px"
    lineHeight: 1.8
  app-preview:
    fontFamily: "-apple-system, SF Pro, system-ui"
    note: "Authored in iOS points on a 390×844 canvas, then scaled."
rounded:
  button: "12px"
  store: "14px"
  card: "20–28px"
  surface: "36–40px"
---

# Design System: FausCrew

## Overview

The website reuses the mobile app's own visual language (`houseflowApp/FausCrew/Views/Shared`): the `FausBrand` orange → berry diagonal, the `BrandHeroCardBackground` circles and tilted capsules, the `MainScreenBackground` ambient line field and the roof-F mark. Dark mode is derived from `Design/AppIcon/FausCrew-AppIcon-Dark.svg`.

## Themes

The theme follows the system until the visitor flips the header switch: a sun knob that rolls across and becomes a crescent moon, while the new theme grows as a circle from the switch (View Transitions; instant under reduced motion or without support). The choice lives in `localStorage` (`fauscrew-theme`) and an inline script in `index.html` applies it before first paint via `html[data-theme]`. All colors are CSS custom properties on `:root`, overridden under `:root[data-theme="dark"]`.

**Light:** warm paper background, berry emphasis, brand-gradient surfaces (`#ff9138 → #ff7a26 → #611a38`) and the app's primary button gradient.

**Dark:** the dark icon's berry-black gradient (`#33101f → #14060c`) as background and brand surfaces, its ember glow (`#ff7a26` at ~16%) behind key visuals, and its orange glyph gradient (`#ffa04d → #ff6a2a`) for emphasis, primary buttons and the roof-F mark. Primary buttons switch to dark ink on orange. The app icon swaps to the dark variant. The base background carries the app's perforated hex mesh (`FausMeshTextureView`: 5.4 pt pitch, dark holes with a warm rim, radial fade toward the top-trailing light), fixed to the viewport behind the page.

## App preview

`AppPreview` is a faithful, interactive copy of the app's main dashboard (`HouseDashboardView`), authored in iOS points on a 390×844 canvas and scaled with `--s`. Only the Ev tab is live: Profil and Oyunlar appear in the tab bar but do not open. The screen follows the site theme with the app's own themes from `FausTheme.swift`, held as `--a-*` tokens on `.app`:

- **Faus Light:** iOS system colors, orange → berry hero and tab bar.
- **Faus Dark:** ember on deep berry: berry-black base with the perforated mesh, glow and stronger ambient lines, deep-berry hero and tab bar with an ember bloom, pastel indigo/teal/purple accents.

Contents: hero with house picture frame, `AnnouncementCard` (expandable, read toggle), `TodaysChoresCard` (indigo → teal ring and bar, active chores first, then "Geçmiş"); the members card and the floating button are left out. The features section points at a part of the dashboard (`focus`) instead of switching screens. Example data stays labeled; nothing is saved.

## Games

The games section shows the two ways to play as a pair of cards, offline against bots and online with the house, and the rail's covers carry art only. Each game card gets "Bot" and "Online" chips only for the modes it has in the app: House Rockets and House Tanks have both, Taş, Kağıt, Makas has bots only, and the rest get no chips.

## Language

The site speaks Turkish and English. Every visible text lives in `src/content.ts`; Turkish is the source and the English copy keeps the same shape, including the sample screen, which follows the app's own English strings. The language switch is built like the theme switch: the chosen flag (Turkish, or half US, half UK) is the knob and rolls across the track, the other language waits on the free side as its code, and the new copy fades in. The page opens in Turkish until the visitor picks, and the choice is kept under `fauscrew-lang`.

## Header

`SiteHeader` blends into the hero at the top of the page and, once the page scrolls, condenses into a floating glass island that echoes the app's floating tab bar: gradient rim (apricot → berry), a highlight that slides to the section in view, and a reading-progress line along its lower edge. On mobile the island grows a sheet of section tiles, using the app's card gradients for their icons, with the primary action and the "yakında" store note.

## Motion

Hero copy rises in, the roof-F mark draws itself like the app splash, floating notes bob, sections reveal on scroll (`[data-reveal]`, enabled only by JavaScript) and the games rail scrolls as a marquee. `prefers-reduced-motion` disables all animation and makes the rail scrollable.

## Do's and Don'ts

- Do keep the preview in sync with the app's real components and labels.
- Do keep unavailable store badges neutral; never style them as working downloads.
- Do keep illustrative data labeled as examples.
- Don't add invented store availability, statistics or testimonials.
- Don't introduce colors outside the app palette or the dark icon palette.
