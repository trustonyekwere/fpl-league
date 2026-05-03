# FPL Mini League — Next.js App

A clean, production-grade FPL mini league dashboard built with Next.js 14, React, and Tailwind CSS.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **TypeScript**

## Color System

| Role      | Color            | Tailwind token     |
|-----------|------------------|--------------------|
| Primary   | Blue (#2563eb)   | `blue-500`         |
| Secondary | Red (#ef4444)    | `red-500`          |
| Background| Deep navy (#080e1f) | `bg-[#080e1f]`  |
| Surface   | Ink (#0f172a)    | `bg-[#0f172a]`     |
| Text      | Snow (#f1f5f9)   | `text-snow`        |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
fpl-league/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Home page (assembles all components)
│   └── globals.css       # Tailwind base + CSS variables
├── components/
│   ├── Navbar.tsx        # Sticky top nav with active link state
│   ├── Hero.tsx          # Manager of the week + Fixture banner
│   ├── LiveBar.tsx       # Live GW status bar
│   ├── Results.tsx       # GW match results with score boxes
│   ├── LeagueTable.tsx   # Full standings table
│   ├── Podium.tsx        # Top 3 leaders (sidebar)
│   ├── NextFixtures.tsx  # Upcoming fixtures (sidebar)
│   ├── WeeklyWinners.tsx # GW-by-GW winners (sidebar)
│   └── Footer.tsx        # Page footer
├── tailwind.config.ts    # Extended brand color tokens
├── next.config.js
├── tsconfig.json
└── package.json
```

## Build for Production

```bash
npm run build
npm run start
```

## Customisation

- **Colors**: Edit `tailwind.config.ts` → `theme.extend.colors.brand` (blues) and `.accent` (reds)
- **Data**: Replace static arrays in each component with your API calls
- **Fonts**: Add your preferred font in `app/layout.tsx` using `next/font`
