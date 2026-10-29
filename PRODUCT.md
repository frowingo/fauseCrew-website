# FausCrew website

A Turkish, responsive public introduction to the FausCrew mobile app, intended to support its future App Store and Google Play presence. Built locally in this repository as requested.

## Audience and outcome

People sharing a home: roommates, couples, families. Understand how the app helps coordinate chores, announcements and household members, with games for shared downtime. Discover the app and eventually reach its store listings.

## Confirmed constraints

React project; inherit visual patterns from ../houseFlowApp. Store links stay “Yakında”, confirmed by user. Future houseFlow API integration, no active integration now. Avoid unnecessary architecture. Never build a .NET project without explicit permission. Published to Fly.io at the user's request: https://fauscrew.iworf.com/ (personal organization, Frankfurt, single shared CPU / 256 MB, autostop/autostart).

## Product truth

Source reviewed: FausBrand, MainScreenBackground, HouseDashboardView, ChoreRow, GamesHubView, MainTabView and AppEnvironment in houseFlowApp. Confirmed features: create/join a household, invite codes, chores, announcements, members and games. The official product name is FausCrew everywhere. The primary illustrative user is Elif. These spellings are confirmed by the user and must be preserved. Logo is copied unchanged from its light SVG app icon.

## Stack

React, TypeScript, Vite, Lucide, locally bundled Manrope. Static marketing website. Demo content is illustrative, labeled, and kept in browser memory only.

## Deliberately undecided

Store listing URLs, support email, legal entity, final privacy/terms content, hosting domain, production API and auth. No claims about price, ratings, usage counts, security certifications or release dates.

The canonical public domain is fauscrew.iworf.com. Serve it directly without redirecting to a fly.dev hostname. Preserve the existing Fly app identity that owns its DNS target and TLS certificate.
