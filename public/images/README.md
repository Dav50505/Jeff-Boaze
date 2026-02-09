# Images Directory

## Current Implementation
The website currently uses external image URLs that load directly. For production, download and optimize these images locally.

## Images to Download and Optimize

### From Jeff Boaze Plumbing Website:
1. **Logo** → Save as `logo.png`
   - URL: https://jeff-boaze-plumbing.com/wp-content/uploads/2017/12/JeffB-Logo2.png
   - Optimize: Convert to WebP, max 400px width

2. **Faucet Service** → Save as `service-faucet.jpg`
   - URL: http://jeff-boaze-plumbing.com/wp-content/uploads/2017/02/Faucet-2-sm.jpg
   - Optimize: Convert to WebP, max 800px width

3. **Water Heater** → Save as `service-water-heater.jpg`
   - URL: http://jeff-boaze-plumbing.com/wp-content/uploads/2017/11/AdobeStock_62721104_Preview-340x227.jpg
   - Optimize: Convert to WebP, max 800px width

4. **Gas Lines** → Save as `service-gas-lines.jpg`
   - URL: http://jeff-boaze-plumbing.com/wp-content/uploads/2017/11/AdobeStock_88633624_Preview-340x227.jpg
   - Optimize: Convert to WebP, max 800px width

5. **Plumbing Plans** → Save as `service-plumbing-plans.jpg`
   - URL: http://jeff-boaze-plumbing.com/wp-content/uploads/2017/10/Plumbing-Plans-sm.jpg
   - Optimize: Convert to WebP, max 800px width

### From Unsplash (or similar stock photos):
Download high-quality images with these search terms:

1. **Hero Background** → Save as `hero-bg.jpg`
   - Search: "professional plumber tools workshop clean"
   - Size: 1920x1080
   - Unsplash: https://unsplash.com/s/photos/plumber-tools

2. **About Section - Jeff & Tyler** → Save as `about-team.jpg`
   - Search: "professional plumber portrait family business"
   - Size: 1200x800
   - Unsplash: https://unsplash.com/s/photos/professional-plumber

3. **Emergency Service Badge** → Save as `emergency-plumber.jpg`
   - Search: "emergency plumbing repair urgent"
   - Size: 800x600
   - Unsplash: https://unsplash.com/s/photos/plumbing-emergency

4. **Trust Background** → Save as `trust-bg.jpg`
   - Search: "plumbing tools clean professional workspace"
   - Size: 1600x900
   - Unsplash: https://unsplash.com/s/photos/plumbing-tools

## Optimization Steps

1. **Download all images**
2. **Compress with TinyPNG** (https://tinypng.com/) or similar
3. **Convert to WebP format** using tools like:
   - Squoosh: https://squoosh.app/
   - ImageMagick: `convert image.jpg -quality 85 image.webp`
4. **Create multiple sizes** for responsive images:
   - Small: 640px width
   - Medium: 1024px width
   - Large: 1920px width

## File Structure
```
public/images/
├── logo.png (and logo.webp)
├── hero-bg.jpg (and hero-bg.webp)
├── about-team.jpg (and about-team.webp)
├── emergency-plumber.jpg (and emergency-plumber.webp)
├── service-faucet.jpg (and service-faucet.webp)
├── service-water-heater.jpg (and service-water-heater.webp)
├── service-gas-lines.jpg (and service-gas-lines.webp)
├── service-plumbing-plans.jpg (and service-plumbing-plans.webp)
└── trust-bg.jpg (and trust-bg.webp)
```

## Update Component URLs
Once images are downloaded and optimized, update the image URLs in:
- `src/components/Header.tsx` (logo)
- `src/pages/Home.tsx` (hero, services, testimonial section)
- `src/pages/About.tsx` (team photo)

Change from external URLs to local paths like:
```tsx
// From:
src="https://source.unsplash.com/..."

// To:
src="/images/hero-bg.webp"
```
