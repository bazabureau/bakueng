# Baku Engineering Supplies LTD - Developer Guide

## 🎨 Design System

### Color Palette

**Primary Orange Accent**
- Primary: `#EB791B` (orange-600)
- Hover: `#D36D17` (orange-700)
- Light: `#FEF3E7` (orange-50)
- Border: `#F9DFC4` (orange-200)

**Neutrals**
- Gray 50: `#f9fafb`
- Gray 100: `#f3f4f6`
- Gray 200: `#e5e7eb`
- Gray 500: `#6b7280`
- Gray 600: `#4b5563`
- Gray 900: `#111827`
- White: `#ffffff`

**Status Colors**
- Success: `#10b981` (green-500)
- Error: `#ef4444` (red-500)
- Warning: `#f59e0b` (amber-500)

### Typography

Base font size: `16px` (defined in `:root` as `--font-size`)

**Headings** (using default globals.css typography)
- H1: `text-2xl` equivalent, medium weight
- H2: `text-xl` equivalent, medium weight
- H3: `text-lg` equivalent, medium weight
- H4: `text-base` equivalent, medium weight

**Body Text**
- Paragraph: `text-base`, normal weight
- Small text: use inline size classes when needed

**Font Weights**
- Normal: 400
- Medium: 500

### Spacing & Layout

**Container**
- Max width: `max-w-7xl` (1280px)
- Padding: `px-4 sm:px-6 lg:px-8`

**Sections**
- Vertical padding: `py-20` (80px)

**Grid System**
- Products: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- Catalogs: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Certifications: `grid-cols-1 md:grid-cols-2`

### Border Radius
- Small: `rounded` (0.25rem)
- Medium: `rounded-lg` (0.5rem)
- Large: `rounded-xl` (0.75rem)
- Extra Large: `rounded-2xl` (1rem)
- Full: `rounded-full`

---

## 🎬 Animation Specifications

### Motion Library
Using `motion/react` (formerly Framer Motion)

### Duration Standards

**Fast Interactions** (hover, tap)
- Duration: `240ms`
- Use class: `duration-240`
- JS: `{ duration: 0.24 }`

**Standard Transitions** (panels, modals)
- Duration: `300ms`
- Use class: `duration-300`
- JS: `{ duration: 0.3 }`

**Page Elements** (scroll-triggered)
- Duration: `360ms`
- Use class: `duration-360`
- JS: `{ duration: 0.36 }`

**Carousel Auto-scroll**
- Interval: `4500ms` (4.5 seconds)

### Easing Curves

**Standard Ease** (most animations)
```javascript
ease: [0.22, 1, 0.36, 1]
```

**Spring** (bouncy interactions)
```javascript
type: "spring",
stiffness: 200,
damping: 20
```

### Animation Patterns

**Fade In + Slide Up** (scroll-triggered content)
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-50px" }}
transition={{ duration: 0.36 }}
```

**Hover Lift** (cards, buttons)
```jsx
whileHover={{ y: -4, transition: { duration: 0.24 } }}
// or
whileHover={{ y: -8, transition: { duration: 0.24 } }}
```

**Hover Scale** (buttons, icons)
```jsx
whileHover={{ scale: 1.05 }}
transition={{ duration: 0.24 }}
```

**Slide Horizontal** (arrows, links)
```jsx
whileHover={{ x: 4 }}
transition={{ duration: 0.24 }}
```

**Stagger Children** (list items)
```jsx
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
  >
))}
```

### Reduced Motion

Always respect user preferences:

```jsx
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (mediaQuery.matches) {
    // Disable or reduce animations
    document.documentElement.style.setProperty('--motion-duration', '0.01ms');
  }
}, []);
```

Alternatively, use CSS:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎯 3D Animation Components

### Three.js Integration

Using **React Three Fiber** (`@react-three/fiber`) and **Drei** (`@react-three/drei`) for 3D rendering.

### 3D Components

**RotatingGears** (`/components/3d/RotatingGears.tsx`)
- Interactive 3D gear assembly
- Multiple interlocking gears with different sizes
- Metallic materials with realistic lighting
- Auto-rotating camera with OrbitControls
- Blue color scheme matching brand

**FloatingElements** (`/components/3d/FloatingElements.tsx`)
- Animated industrial components (bolts, bearings, valves)
- Floating and rotating animations
- Wireframe elements for technical aesthetic
- Continuous looping motion

**MechanicalAssembly** (`/components/3d/MechanicalAssembly.tsx`)
- Working piston-crankshaft system
- Synchronized mechanical motion
- Multiple pistons with realistic movement
- Gear train with proper rotation
- Engine block assembly

**HeroBackground3D** (`/components/3d/HeroBackground3D.tsx`)
- Particle system with floating cubes
- Animated grid plane for depth
- Blueprint-style wireframe lines
- Subtle ambient 3D effect for hero section

**Engineering3D** (`/components/Engineering3D.tsx`)
- Main 3D showcase section
- Tabbed interface for different 3D scenes
- Lazy loading for performance
- Interactive controls with touch/mouse support
- Feature descriptions for each scene

### 3D Performance Optimization

**Lazy Loading**
```jsx
const RotatingGears = lazy(() => 
  import("./3d/RotatingGears").then(module => ({ default: module.RotatingGears }))
);

<Suspense fallback={<LoadingFallback />}>
  <RotatingGears />
</Suspense>
```

**Best Practices**
- Components are lazy-loaded to reduce initial bundle size
- Suspense boundaries prevent render blocking
- OrbitControls disabled on mobile for better touch experience
- Reduced complexity on lower-end devices
- Respect `prefers-reduced-motion` for 3D animations

### 3D Materials & Lighting

**Metallic Materials**
```jsx
<meshStandardMaterial
  color="#EB791B"
  metalness={0.9}
  roughness={0.1}
/>
```

**Lighting Setup**
- Ambient light for base illumination
- Directional lights for highlights and shadows
- Point lights for accent colors (blue theme)
- Spot lights for dramatic focus

### Camera Controls

**OrbitControls Configuration**
```jsx
<OrbitControls
  enableZoom={false}
  enablePan={false}
  autoRotate
  autoRotateSpeed={0.5}
  maxPolarAngle={Math.PI / 2}
  minPolarAngle={Math.PI / 2}
/>
```

---

## 🧩 Component Library

### Layout Components

**Header** (`/components/Header.tsx`)
- Fixed position header with scroll detection
- Mobile-responsive navigation
- Top bar with contact info
- Smooth scroll links

**Hero** (`/components/Hero.tsx`)
- Parallax background effect
- Badge row with certifications
- Statistics cards
- Scroll indicator

**Footer** (`/components/Footer.tsx`)
- Multi-column layout
- Social media links
- Contact information
- Newsletter (optional)

### Product Components

**ProductCard** (`/components/ProductCard.tsx`)
- Image with hover zoom
- Overlay with quick actions
- Category badge
- Stock indicator
- Featured flag

**ProductGrid** (`/components/ProductGrid.tsx`)
- Filterable product list
- Search functionality
- Category filters
- Skeleton loading states
- Animated layout changes

### Feature Components

**Catalogs** (`/components/Catalogs.tsx`)
- PDF preview dialog
- Download functionality
- Metadata display (pages, size, date)
- Category badges

**Certifications** (`/components/Certifications.tsx`)
- Certificate cards with lightbox
- Standards compliance grid
- Interactive hover effects
- Modal dialogs for full view

**ContactForm** (`/components/ContactForm.tsx`)
- Multi-step form (3 steps)
- Form validation with react-hook-form
- Progress stepper
- Success state
- Field validation with error messages

**Contact** (`/components/Contact.tsx`)
- Contact information cards
- Map placeholder
- Integrated contact form

---

## 📦 ShadCN Components Used

- `accordion`
- `alert`
- `alert-dialog`
- `badge`
- `button`
- `card`
- `checkbox`
- `dialog`
- `input`
- `label`
- `select`
- `separator`
- `skeleton`
- `sonner` (toast notifications)
- `textarea`

---

## 🎯 Accessibility (WCAG AA)

### Color Contrast
- Text on white: minimum 4.5:1 ratio
- Large text: minimum 3:1 ratio
- Orange-600 (#EB791B) meets AA standards

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus states visible with ring utilities
- Logical tab order maintained

### ARIA Labels
```jsx
<button aria-label="Toggle menu">
  <Menu />
</button>

<a href="#" aria-label="LinkedIn">
  <LinkedinIcon />
</a>
```

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- `<nav>` for navigation
- `<section>` for content sections
- `<main>` for main content
- `<footer>` for footer

### Form Accessibility
- Labels associated with inputs
- Error messages announced
- Required fields indicated
- Validation feedback

### Motion & Animation
- Respects `prefers-reduced-motion`
- No essential information conveyed through motion only
- Alternative static states available

---

## 🖼️ Asset Requirements

### Images

**Hero Image**
- Dimensions: 1920x1080px minimum
- Format: JPG (optimized)
- Subject: Industrial facility, machinery, or factory
- File size: <500KB

**Product Images**
- Dimensions: 800x800px (square)
- Format: JPG or PNG
- Background: White or transparent
- File size: <200KB per image

**Catalog Thumbnails**
- Dimensions: 400x566px (A4 ratio)
- Format: JPG or PNG
- File size: <100KB

### Icons
Using `lucide-react` package:
- Consistent 24px size
- Stroke width: 2
- Accessible with ARIA labels

### Logos
- SVG format preferred
- Fallback PNG at 2x resolution
- Transparent background

---

## 🔧 Developer Tokens

### CSS Custom Properties

Located in `/styles/globals.css`:

```css
:root {
  /* Colors */
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  --accent: #e9ebef;
  --border: rgba(0, 0, 0, 0.1);
  
  /* Typography */
  --font-size: 16px;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  
  /* Layout */
  --radius: 0.625rem;
}
```

### Tailwind Extensions

**Custom Durations**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        '240': '240ms',
        '360': '360ms',
      }
    }
  }
}
```

---

## 📱 Responsive Breakpoints

```javascript
// Tailwind default breakpoints
sm: '640px'   // Small devices
md: '768px'   // Medium devices
lg: '1024px'  // Large devices
xl: '1280px'  // Extra large devices
2xl: '1536px' // 2X large devices
```

### Mobile-First Approach
Always style mobile first, then add responsive classes:

```jsx
className="text-base md:text-lg lg:text-xl"
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
```

---

## 🏗️ File Structure & Naming Conventions

### Component Files
- PascalCase: `ProductCard.tsx`
- One component per file
- Co-locate types if component-specific

### Utility Files
- kebab-case: `use-mobile.ts`, `utils.ts`

### Component Structure
```tsx
// 1. Imports
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

// 2. Types/Interfaces
interface ProductCardProps {
  name: string;
  price: number;
}

// 3. Constants
const ANIMATION_DURATION = 0.24;

// 4. Component
export function ProductCard({ name, price }: ProductCardProps) {
  // State
  const [isHovered, setIsHovered] = useState(false);
  
  // Render
  return (
    <motion.div>
      {/* JSX */}
    </motion.div>
  );
}
```

---

## 🚀 Performance Optimization

### Image Loading
- Use `ImageWithFallback` component for graceful loading
- Lazy load images below the fold
- Optimize image sizes (WebP format when possible)

### Animation Performance
- Use `transform` and `opacity` for animations (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Set `will-change` for frequently animated elements

### Code Splitting
- Dynamic imports for heavy components
- Lazy load route components

### Bundle Size
- Tree-shake unused ShadCN components
- Minimize third-party dependencies

---

## 🧪 Testing Considerations

### Visual Regression
- Test hover states
- Test focus states
- Test loading states
- Test error states

### Responsive Testing
- Mobile (375px)
- Tablet (768px)
- Desktop (1280px)
- Large Desktop (1920px)

### Accessibility Testing
- Keyboard navigation
- Screen reader compatibility
- Color contrast
- Focus management

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📝 Content Guidelines

### Product Names
- Clear and descriptive
- Include size/specification
- Format: "Product Type [Specification]"
- Example: "Industrial Ball Valve DN50"

### Descriptions
- Technical but accessible
- Highlight key features
- Include applications
- 100-200 characters

### CTAs (Call to Actions)
- Action-oriented verbs
- Clear value proposition
- Examples:
  - "Browse Products"
  - "Request Quote"
  - "Download Catalog"
  - "Contact Us"

---

## 🔐 Security Notes

### Form Handling
- Validate all inputs client-side
- Sanitize data before sending
- Use HTTPS for form submissions
- Implement rate limiting

### API Keys
- Never commit API keys
- Use environment variables
- Rotate keys regularly

---

## 📞 Support & Contact

For technical questions or component usage:
- Review component props in TypeScript definitions
- Check Motion documentation: https://motion.dev
- Review ShadCN docs: https://ui.shadcn.com

---

## 🎨 Figma Export Notes

### Component Mapping
- Buttons → `Button` component
- Cards → `Card` component
- Inputs → `Input` component
- Badges → `Badge` component

### Style Tokens
- Colors mapped to CSS custom properties
- Spacing uses Tailwind scale
- Typography follows globals.css defaults

### Animation Specs
- Export timing as CSS transition durations
- Easing curves → cubic-bezier values
- Interactive states → motion variants

---

**Version:** 1.0.0  
**Last Updated:** November 2024  
**Framework:** React + TypeScript + Tailwind CSS v4  
**Motion Library:** motion/react  
**UI Components:** ShadCN/UI
