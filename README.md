# Methodic Landscaping Website

A modern, responsive marketing website for Methodic Landscaping - a landscaping and hardscaping roll-up acquiring businesses across New England.

## Features

- Mobile-first responsive design
- Clean, modern aesthetic
- Team member profiles with photos
- Strategic advisors section
- Smooth scroll animations
- Sticky header with transparency effects

## Tech Stack

- Next.js 16 with App Router
- TypeScript
- CSS Modules (pure CSS, no frameworks)
- Google Fonts (Montserrat) + Georgia serif

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

Note: the contact form route uses Resend. Set `RESEND_API_KEY` in your environment for the `/api/contact` endpoint (and the production build) to work.

## Project Structure

```
methodic-landscaping/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Statistics.tsx   # Stats strip
│   ├── AboutPE.tsx      # About section
│   ├── Leadership.tsx   # Team section
│   ├── Advisors.tsx     # Advisors section
│   └── Footer.tsx       # Footer
├── public/
│   └── images/          # Team member photos
└── package.json
```

## Build for Production

```bash
npm run build
npm run start
```

## Color Palette

- Background (warm off-white): #F7F5EE
- Primary deep green: #1C3A2A
- Darker green (footer, hero overlay): #142C20
- Accent green: #3F6B4C
- Soft sage: #8FA98A
- Body text: #16261C
