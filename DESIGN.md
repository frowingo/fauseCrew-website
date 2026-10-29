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

The theme follows the system by default; the header toggle offers light, system and dark. The choice lives in `localStorage` (`fauscrew-theme`) and an inline script in `index.html` applies it before first paint via `html[data-theme]`. All colors are CSS custom properties on `:root`, overridden under `:root[data-theme="dark"]`.

**Light:** warm paper background, berry emphasis, brand-gradient surfaces (`#ff9138 → #ff7a26 → #611a38`) and the app's primary button gradient.

**Dark:** the dark icon's berry-black gradient (`#33101f → #14060c`) as background and brand surfaces, its ember glow (`#ff7a26` at ~16%) behind key visuals, and its orange glyph gradient (`#ffa04d → #ff6a2a`) for emphasis, primary buttons and the roof-F mark. Primary buttons switch to dark ink on orange. The app icon swaps to the dark variant.

## App preview

`AppPreview` is a faithful, interactive copy of the app's main screens, authored in iOS points on a 390×844 canvas and scaled with `--s`:

- **Tab bar:** floating apricot → orange → berry pill with Profil · Ev · Oyunlar, matching `CustomTabBar`.
- **Ev:** `BrandHeroCardBackground` header with house thumbnail, `AnnouncementCard` (purple/indigo, unread badge, expandable), `TodaysChoresCard` (indigo → teal ring and bar, status badges Devam ediyor / İncelemede / Tamamlandı), `HouseMembersCard` tiles, and the green floating "Yeni görev" button.
- **Profil:** profile hero with orange avatar ring, house row and the teal invite-code section.
- **Oyunlar:** hero card plus the `GamesHubView` 2-column grid with each game's own cover colors.

The preview follows the site theme using iOS light/dark system colors. Example data stays labeled; nothing is saved.

## Motion

Hero copy rises in, the roof-F mark draws itself like the app splash, floating notes bob, sections reveal on scroll (`[data-reveal]`, enabled only by JavaScript) and the games rail scrolls as a marquee. `prefers-reduced-motion` disables all animation and makes the rail scrollable.

## Do's and Don'ts

- Do keep the preview in sync with the app's real components and labels.
- Do keep unavailable store badges neutral; never style them as working downloads.
- Do keep illustrative data labeled as examples.
- Don't add invented store availability, statistics or testimonials.
- Don't introduce colors outside the app palette or the dark icon palette.
