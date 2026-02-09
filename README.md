# Jeff Boaze Plumbing Website

A modern, conversion-focused marketing website for Jeff Boaze Plumbing, Inc., a 4th generation family-owned plumbing company serving Folsom, Granite Bay, El Dorado Hills, and Orangevale, CA.

## About the Business

**Jeff Boaze Plumbing, Inc.**  
- 4th generation family-owned plumbing company
- 40+ years of experience
- CA License #1012513
- Phone: (916) 622-3439
- Email: jeffboazeplumbing@gmail.com
- "Never a Problem, Only a Solution"

## Tech Stack

- **React 19** — Modern React with hooks
- **TypeScript** — Type-safe development
- **Vite** — Lightning-fast build tool and dev server
- **Tailwind CSS v4** — Utility-first CSS with custom theme
- **React Router** — Client-side routing

## Features

- **Mobile-first responsive design** — Optimized for all screen sizes
- **Conversion-focused** — Prominent CTAs and click-to-call buttons throughout
- **SEO-optimized** — Meta tags, Open Graph, and LocalBusiness JSON-LD schema
- **Performance** — ~85 KB gzipped JavaScript bundle
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation
- **4 pages:** Home, About, Services, Contact

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone git@github.com:Dav50505/Jeff-Boaze.git
cd Jeff-Boaze

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:5173/`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
Jeff-Boaze/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Sticky header with nav and CTA
│   │   ├── Footer.tsx         # Footer with contact info and links
│   │   ├── Layout.tsx         # Page layout wrapper
│   │   ├── Icons.tsx          # SVG icon components
│   │   ├── RequestEstimateForm.tsx  # Reusable contact form
│   │   └── ScrollToTop.tsx    # Scroll restoration on route change
│   ├── pages/
│   │   ├── Home.tsx           # Landing page with hero and services
│   │   ├── About.tsx          # Company story and values
│   │   ├── Services.tsx       # Detailed service listings
│   │   └── Contact.tsx        # Contact form and info
│   ├── App.tsx                # Route configuration
│   ├── main.tsx               # App entry point
│   └── index.css              # Tailwind config and global styles
├── index.html                 # HTML template with SEO meta
├── tailwind.config.ts         # Tailwind configuration
├── vite.config.ts             # Vite configuration
└── package.json
```

## Key Components

### Header
- Sticky navigation with 4 main links
- Always-visible click-to-call button
- Emergency service badge
- Mobile hamburger menu

### Footer
- Call-to-action banner
- Company information and hours
- Review platform links (Yelp, Angi, Google)
- License number display

### Request Estimate Form
- Reusable component with Name, Phone, Email, Service dropdown, and Message fields
- Appears on Home, Services, and Contact pages
- Success state with confirmation message

## Deployment

Build artifacts are in the `dist/` folder after running `npm run build`. Deploy to any static hosting service:

- **Netlify:** Drag and drop `dist/` folder
- **Vercel:** Connect GitHub repo and deploy
- **Cloudflare Pages:** Connect GitHub and auto-deploy

## License

© 2026 Jeff Boaze Plumbing, Inc. All rights reserved.
