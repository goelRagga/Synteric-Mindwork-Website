# Synteric Mindworks — Next.js Website

Enterprise AI company website built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 📦 Tech Stack

- **Next.js 14** — App Router, React Server Components
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations and scroll-triggered reveals
- **next/font** — Optimized Google Fonts (Syne + DM Sans)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with metadata + fonts
│   ├── page.tsx           # Home page assembling all sections
│   └── globals.css        # Global styles + Tailwind directives
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Sticky nav with scroll effect + mobile menu
│   │   └── Footer.tsx     # Footer with links
│   │
│   ├── sections/
│   │   ├── Hero.tsx       # Hero with animated orbs + stat counters
│   │   ├── Products.tsx   # 6 product cards grid
│   │   ├── Capabilities.tsx # Interactive tabbed capabilities
│   │   ├── Industries.tsx # 8 industry cards
│   │   ├── Process.tsx    # 6-phase engagement process
│   │   ├── WhyUs.tsx      # Comparison table + commitments
│   │   ├── TechStack.tsx  # Tech stack grid
│   │   └── CTA.tsx        # Conversion section
│   │
│   └── ui/
│       ├── Reveal.tsx     # Framer Motion scroll reveal + stagger
│       ├── SectionHeader.tsx # Reusable section heading component
│       └── Button.tsx     # Animated button component
│
├── hooks/
│   └── useScrollReveal.ts # Custom scroll reveal hook
│
└── lib/
    └── utils.ts           # cn() utility (clsx + tailwind-merge)
```

## 🌐 Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (run from project root)
vercel --prod
```

Your site will be live at a `.vercel.app` URL in under 2 minutes.

## 🎨 Customization

- **Colors**: Edit `tailwind.config.ts` — change `#c92e8e` for brand color
- **Content**: All content is in the individual section components in `src/components/sections/`
- **Fonts**: Change in `src/app/layout.tsx` — import different Google Fonts
- **Logo**: Replace the text logo in `Navbar.tsx` with an `<Image>` component pointing to your logo file in `/public/`

## Adding Your Logo

1. Place your logo file in `/public/logo.png` (or .svg)
2. In `src/components/layout/Navbar.tsx`, replace the text logo with:

```tsx
import Image from "next/image";

// Replace the <Link> logo div with:
<Link href="/">
  <Image src="/logo.png" alt="Synteric Mindworks" width={180} height={40} />
</Link>
```

## SEO

All SEO metadata is configured in `src/app/layout.tsx`. Update:
- `title` — Page title
- `description` — Meta description  
- `openGraph` — Social sharing metadata
- `keywords` — SEO keywords

For per-page SEO, export a `metadata` object from any `page.tsx`.
