# SLOT13 Studios corporate website

Standalone static corporate site, isolated from the Nova internal app and Slot13 casino. No backend, dependencies, authentication, payment code, or casino services are included.

## Commands

- `npm run lint`: JavaScript syntax, anchors, required emails, asset existence, and content checks.
- `npm run build`: produces `dist/` using Node built-ins.
- Local viewing: build, then serve `dist/` with any static web server.

## Vercel

Use a separate project with Root Directory `studio-website`, framework Other, build `npm run build`, output `dist`. Deploy branch `feature/slot13-studios-website` to **preview only**. Do not connect production domains, merge, or promote until Jesse approves. The existing domain currently serves a different studio landing page whose source project is not visible in the connected Vercel team. Resolve its ownership before any production cutover. The casino remains at https://play.clubsocial.click; its future URL is informational only.

## Artwork provenance

Existing artwork and fonts copied from `adminTIIIPSY/slot13-casino` main public assets on October 31, 2026:

- `graffiti-heist.webp`: `public/assets/graffiti-heist-thumbnail.png`, optimized to WebP.
- `devils-dues.webp`: `public/assets/devils-due-13-thumbnail.png`, optimized to WebP.
- `trick-or-treat.webp`: `public/games/trick-or-treat/art/lobby-thumbnail.webp`.
- `graffiti.ttf`, `street.otf`: `public/assets/fonts/S13-Graffiti.ttf`, `S13-Street.otf`.

Gobble & Ghouls uses a labeled typographic placeholder pending approved artwork. The door illustration is CSS, not a proposed replacement logo. Favicon and social sharing image are simple site typography. All titles are conservatively labeled in development; no verified demo buttons are present.

## Prelaunch review

Confirm the five advertised mailboxes receive mail (mailto links alone do not verify delivery). Approve artwork and game status labels. Confirm domain deployment ownership and intended canonical www/non-www choice. Verify the social preview after the approved domain cutover. No DNS, email, authentication, or production settings have been changed.
