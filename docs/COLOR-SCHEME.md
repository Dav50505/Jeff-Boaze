# Jeff Boaze Plumbing — Color Scheme

This document describes the site’s color palette and maps each role to the theme tokens used in code. The scheme prioritizes trust, professionalism, and readability while using orange/gold and red to create urgency for contact and emergency actions.

## Primary Colors

- **Blue** — Dominant brand color for headers, navigation, and key sections. Main blue **#1E5A9E**, brighter blue **#0066CC**.  
  **Tokens:** `primary-500` (#1E5A9E), `primary-400` (#0066CC), and the full scale `primary-50` through `primary-900` in [src/index.css](../src/index.css). Use darker shades (e.g. `primary-700`, `primary-800`, `primary-900`) for hero and nav backgrounds; mid shades for links and icons; light shades for subtle backgrounds.

- **White** — Main background and text on dark elements. **#FFFFFF**.  
  **Tokens:** Tailwind `white`, `bg-white`, and default text on blue/red sections.

## Secondary Colors

- **Orange/Gold** — Accent for calls-to-action, buttons, and highlights (e.g. phone number). **#F7941D** (gold), **#E55C00** (darker orange for hover).  
  **Tokens:** `accent-500` (#F7941D), `accent-600` (#E55C00) for hover states.

- **Dark Gray / Charcoal** — Body text and secondary headings. **#333333**, **#4A4A4A**.  
  **Tokens:** `gray-700` (#333333), `gray-600` (#4A4A4A) (and `gray-500` for muted labels).

## Accent / Supporting Colors

- **Light Gray** — Section backgrounds and visual separation. **#F5F5F5**, **#EEEEEE**.  
  **Tokens:** `gray-50` (#F5F5F5), `gray-100` (#EEEEEE) (borders and dividers).

- **Black** — Used sparingly for text and borders.  
  **Tokens:** Tailwind `black` or `gray-900` as needed.

## Emergency / Urgency

- **Red** — Emergency service banner, emergency badge, and urgent CTAs.  
  **Token:** `emergency` (#dc2626) in [src/index.css](../src/index.css).

## Design Intent

Blue conveys trust, reliability, and professionalism; orange/gold creates urgency and draws attention to contact information; white and grays provide clean, readable backgrounds. The combination is traditional for a trades/service business, prioritizing readability and professionalism.
