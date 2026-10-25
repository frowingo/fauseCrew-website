---
name: FausCrew
description: A warm, shared-home identity inherited from the mobile app.
colors:
  berry: "#611a38"
  orange: "#e97839"
  paper: "#faf8f5"
  ink: "#302c2d"
  muted: "#746e6d"
  line: "#e8e2dc"
  peach: "#f8d3bb"
  sage: "#d2e0d4"
  lilac: "#e6d9eb"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(64px, 6.8vw, 92px)"
    fontWeight: 750
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "14px"
    lineHeight: 1.9
  button:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "13px"
    fontWeight: 650
rounded:
  button: "9px"
  store: "11px"
  surface: "16px"
  announcement: "12px"
components:
  button-primary:
    backgroundColor: "{colors.berry}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "14px 21px"
    typography: "{typography.button}"
  store-badge:
    backgroundColor: "#fffcf8"
    textColor: "{colors.ink}"
    rounded: "{rounded.store}"
    padding: "10px 13px"
---

# Design System: FausCrew

## Overview

FausCrew inherits the mobile app's orange-to-berry identity, original roof-F mark and rounded light surfaces. The website extends that established identity with locally bundled Manrope and generous space around concise Turkish copy. This document describes the implemented site, rather than introducing a new brand direction.

**Key Characteristics:**
- Warm paper backgrounds and dark berry emphasis.
- Clear, rounded typography with compact supporting copy.
- Softly elevated app demonstrations and flat surrounding content.
- Consistent Lucide line icons and initial-based member avatars.

## Colors

Berry carries primary actions, emphasized words and the final invitation surface. Orange appears in brand accents; the app greeting preserves a gradient from bright orange through burnt orange to berry. Paper, ink, muted text and fine warm dividers support the content. Peach, sage and lilac distinguish illustrative household members without adding status claims.

## Typography

Manrope Variable is locally bundled and used throughout. The display role is for the hero; section titles are smaller, balanced, tightly tracked and may use a muted second line. Marketing body copy uses roughly 12–14px with generous line height. The 7–10px labels inside phone demonstrations reproduce a miniature app interface; these sizes are not a general-purpose website text scale.

At mobile widths the hero title is 68px and section headings are approximately 33–34px. Headings use balanced wrapping, paragraphs use pretty wrapping, and emphasis comes from weight and solid color.

## Layout

The central container is at most 1180px wide. Its default outer allowance is 96px, narrowing to 64px below 1100px and 40px below 800px. The desktop hero and feature demonstration use two columns. Below 720px the site stacks into a single column, centers the hero, exposes a menu toggle and puts the feature demonstration after its controls. The three onboarding steps become a vertical sequence.

Section spacing is generous, with tighter spacing inside related groups. The phone remains a deliberately compact illustrative object, while the surrounding site reflows. Ambient curves are clipped by the main content boundary to prevent horizontal scrolling.

## Elevation & Depth

The page is mostly flat, using warm tonal surfaces to separate sections. Soft offset shadows lift the phone, floating notes and announcement paper. The shared floating-note shadow is `0 18px 50px -20px #563a3d35`; the announcement uses `0 16px 40px -15px #79533835`. Device frames retain their structural dark outline.

## Shapes

Controls use gently rounded corners, larger content surfaces use broader rounding, and member avatars are circular. The original rounded app icon is used unchanged. The phone's 43px outer radius and 32px screen radius are device geometry, not general card tokens. Thin elliptical lines echo the mobile app's ambient curves.

## Components

**Primary links:** berry fill, white text, compact rounding and an arrow. Hover darkens the fill and raises the control by 2px. Keyboard focus uses a 3px warm orange outline with a 5px offset.

**Store badges:** pale bordered surfaces with platform marks and a clearly stated upcoming status. They remain noninteractive until a valid store URL is configured. Do not style an unavailable badge as a working download.

**Feature chooser:** vertically arranged text-led buttons with icons and dividers. Selection adds a warm surface, changes the associated phone screen and exposes an invitation to explore. Buttons report selection with `aria-pressed`.

**App preview:** an illustrative phone with three navigation choices, reversible chore completion and an expandable announcement. Example values remain labeled; this is not an authenticated product session. The feature-stage phone is upright, while the hero phone is gently rotated.

**FAQ:** native disclosure controls with thin separators and a circular chevron treatment. Opening rotates the indicator and reveals supporting text.

**Navigation:** text links on desktop; a bordered menu toggle and vertically expanded navigation on mobile. The logo remains the visual anchor.

Motion is concentrated in floating-note arrival and short preview-panel changes. Reduced-motion preferences disable animation, transitions and smooth scrolling. Selection, scrollbars and focus styling use the same warm palette.

## Do's and Don'ts

- Do preserve the original roof-F icon and orange-to-berry app identity.
- Do use warm light surfaces and clear type hierarchy around the demonstration.
- Do keep illustrative app data explicitly identified as examples.
- Do provide visible keyboard focus and honor reduced-motion preferences.
- Don't introduce a replacement logo or unrelated visual identity for new sections.
- Don't promote miniature phone-label sizes into normal page content.
- Don't add invented store availability, product statistics or testimonials.
