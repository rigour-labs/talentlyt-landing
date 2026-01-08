# TalentLyt Landing Page

Professional Next.js landing page for TalentLyt - AI-Powered Interview Intelligence platform.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Next.js 16
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first responsive design
- 🎯 SEO optimized with metadata
- 🌈 Beautiful gradient effects
- ✨ Interactive components

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout with metadata
│       ├── page.tsx         # Main landing page
│       └── globals.css      # Global styles
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Sections

1. **Navigation** - Fixed header with smooth scroll
2. **Hero** - Eye-catching headline with CTAs
3. **Stats** - Key metrics and achievements
4. **Features** - 6 core features with icons
5. **Architecture** - Dual-agent system explanation
6. **How It Works** - 5-step process
7. **Benefits** - 6 key benefits
8. **Integrations** - Tech stack showcase
9. **Testimonials** - Customer testimonials
10. **Pricing** - 3 pricing tiers
11. **CTA** - Final call-to-action
12. **Footer** - Links and company info

## Customization

### Colors

Edit gradient colors in the component files:
- Blue: `from-blue-600 to-cyan-600`
- Purple: `from-purple-600 to-pink-600`
- Green: `from-emerald-600 to-teal-600`

### Content

Update text content directly in `src/app/page.tsx` in each section component.

### Links

Update all `href` attributes to point to your actual routes.

## Tech Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## License

© 2024 Rigour Labs. All rights reserved.
