# Smile Dental — Design System

## Visual World

**Aesthetic:** Clean Healthcare Professional — inspired by DentaCare (ref-2.jpg)

A modern dental clinic website that feels trustworthy, professional, and welcoming. Clean lines, generous whitespace, and a warm teal palette create an atmosphere of calm confidence.

**Design Principles:**
- Clean and professional — healthcare trust
- Welcoming and warm — patient comfort
- Modern and polished — clinical excellence
- Accessible and clear — easy navigation

---

## Color Palette

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#00A896` | Primary teal — buttons, accents, icons |
| `--color-primary-dark` | `#0F766E` | Darker teal — hover states, gradients |
| `--color-secondary` | `#0A5C36` | Deep green — footer, dark sections |

### Neutral Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-charcoal` | `#1A1A1A` | Headings, strong text |
| `--color-gray` | `#64748B` | Body text, descriptions |
| `--color-light-gray` | `#F8FAFB` | Page background |
| `--color-teal-tint` | `#E6F9F7` | Teal-tinted backgrounds |
| `--color-border` | `#E2E8F0` | Borders, dividers |

### Overlay Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-overlay-dark` | `rgba(0,0,0,0.6)` | Hero image overlay |
| `--color-overlay-gradient` | `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3))` | Hero gradient |

---

## Typography

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Color |
|---------|------|--------|-------------|-------|
| H1 | 48px | 800 | 1.1 | Charcoal |
| H2 | 36px | 700 | 1.2 | Charcoal |
| H3 | 24px | 600 | 1.3 | Charcoal |
| Body | 16px | 400 | 1.6 | Gray |
| Small | 14px | 400 | 1.5 | Gray |
| Eyebrow | 14px | 600 | 1.4 | Primary |

---

## Spacing

### Section Padding

| Section | Top/Bottom | Left/Right |
|---------|------------|------------|
| Hero | 0 | 0 (full-width) |
| Services | 80px | 20px (mobile) / 40px (desktop) |
| About | 80px | 20px (mobile) / 40px (desktop) |
| Stats | 60px | 20px (mobile) / 40px (desktop) |
| CTA | 80px | 20px (mobile) / 40px (desktop) |

### Element Spacing

| Element | Gap |
|---------|-----|
| Service pills | 12px |
| Stats grid | 24px |
| Card internal | 20px |
| Section eyebrow to heading | 12px |
| Heading to subtitle | 16px |

---

## Components

### 1. Navbar

**Structure:**
- Fixed top, white background, subtle shadow on scroll
- Logo left (tooth SVG + "Smile Dental")
- Nav links center (hidden on mobile)
- CTA button right ("Записаться →" pill shape)

**Styling:**
- Height: 72px
- Max-width: 1200px centered
- Links: 14px, medium weight, gray, hover primary
- CTA: Primary bg, white text, rounded-full, 14px

**Mobile:**
- Hamburger menu right
- Full-screen overlay menu

### 2. Hero Section

**Structure:**
- Full-width, relative container
- Background image (right side)
- Dark gradient overlay (left to right)
- Content container (left side)

**Content:**
- White headline (H1, 48px bold)
- White subtitle (16px, opacity 90%)
- 4 service pills (rounded-full, border-white/30)
- "Записаться" button (white bg, teal text)

**Floating Element:**
- Doctor profile card (absolute positioned, right side)
- White bg, rounded-2xl, shadow-xl
- Avatar (64px) + Name + Specialty + Experience + Rating

**Mobile:**
- Stack: text top, image bottom
- Hide doctor card
- Full-width gradient overlay

### 3. Service Pills

**Styling:**
- Rounded-full
- Border: 1px solid rgba(255,255,255,0.3)
- Background: rgba(255,255,255,0.1)
- Text: white, 14px
- Padding: 8px 16px
- Hover: white bg, teal text

### 4. Doctor Profile Card

**Structure:**
- Avatar (64px circle)
- Name (16px, bold)
- Specialty (14px, gray)
- Experience line (14px, teal)
- Rating (stars + count)

**Styling:**
- Background: white
- Border-radius: 16px
- Shadow: 0 20px 40px rgba(0,0,0,0.15)
- Padding: 16px
- Width: 280px

### 5. Service Image Card

**Structure:**
- Full image background
- Gradient overlay (bottom to top)
- Teal label pill (top)
- Title (white, bold)
- Description (white, opacity 80%)
- Arrow button (bottom right)

**Styling:**
- Border-radius: 16px
- Overflow: hidden
- Height: 300px
- Hover: scale(1.02), shadow increase

### 6. Stats Row

**Structure:**
- 4-column grid
- Each: icon in teal circle + number + label

**Styling:**
- Icon circle: 48px, teal bg, white icon
- Number: 32px, bold, charcoal
- Label: 14px, gray
- Border-top: 1px solid border color

### 7. CTA Section

**Structure:**
- Teal gradient background
- White heading
- White subtitle (opacity 90%)
- White button (teal text)

**Styling:**
- Background: linear-gradient(135deg, #00A896, #0F766E)
- Border-radius: 24px (on container)
- Padding: 60px 40px

### 8. Footer

**Structure:**
- Dark background (charcoal or secondary)
- 4-column grid: Logo+description, Quick Links, Services, Contact
- Bottom bar: copyright + social icons

**Styling:**
- Background: #1A1A1A
- Text: white/gray
- Links: white, hover primary
- Social icons: 20px, white, hover primary

---

## Layout

### Max Width

```css
max-width: 1200px;
margin: 0 auto;
```

### Grid System

| Columns | Gap | Usage |
|---------|-----|-------|
| 2 | 40px | Hero, About |
| 3 | 24px | Services, Testimonials |
| 4 | 24px | Stats |

### Breakpoints

| Breakpoint | Width |
|------------|-------|
| Mobile | < 768px |
| Tablet | 768px - 1024px |
| Desktop | > 1024px |

---

## Icons

**Library:** Lucide React

**常用 Icons:**
- Navigation: Menu, X, ChevronRight, ChevronDown
- Services: Stethoscope, Syringe, Smile, Eye, Sparkles
- UI: Phone, Mail, MapPin, Clock, Star, ArrowRight
- Social: Facebook, Instagram, Youtube (inline SVG)

**Icon Sizing:**
- Nav icons: 20px
- Card icons: 24px
- Stat icons: 24px
- Social icons: 20px

---

## Animations

**Transitions:**
- Default: 200ms ease
- Hover scale: 200ms ease
- Page transitions: 300ms ease

**Hover Effects:**
- Cards: scale(1.02), shadow increase
- Buttons: bg darkens, shadow increase
- Links: color change to primary

**Scroll Animations:**
- Fade in + slide up on section entry
- Delay: 0ms, 100ms, 200ms for staggered elements

---

## Images

### Strategy

- Design for real photographs
- SVGs used as placeholders during development
- Dark overlay ensures readability over any image

### Image Specifications

| Image | Dimensions | Notes |
|-------|------------|-------|
| Hero patient | 800x600 | Woman with dental mirror, right side |
| Service cards | 400x300 | Dental procedures |
| Doctor avatars | 200x200 | Professional headshots |
| About doctor | 600x400 | Doctor with patient |

### Placeholder Strategy

Use existing SVG illustrations as placeholders:
- `hero-dentist.svg` — hero background
- `hero-doctor.svg` — doctor card avatar
- `service-*` — service cards
- `dr-*` — doctor avatars

---

## Accessibility

**Color Contrast:**
- White on teal: 4.5:1 minimum
- Charcoal on white: 15:1
- Gray on white: 7:1

**Focus States:**
- Visible focus ring on interactive elements
- 2px solid primary color

**Semantic HTML:**
- Proper heading hierarchy (H1 → H2 → H3)
- Landmark regions (nav, main, footer)
- Alt text on all images

---

## Implementation Notes

### CSS Approach

- Tailwind CSS for utility classes
- Custom theme via `@theme` directive in index.css
- Component-specific styles in JSX

### State Management

- React hooks (useState, useEffect)
- Context API for form state
- URL-based routing (React Router)

### Performance

- Lazy load below-fold images
- Code-split routes
- Optimize SVGs

---

## File Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ScrollToTop.jsx
│   └── icons/
│       └── ToothIcon.jsx
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   ├── Testimonials.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   └── Appointment.jsx
├── data/
│   └── clinic.js
├── App.jsx
├── index.css
└── main.jsx
```

---

## Quick Reference

### Color Usage

| Element | Color |
|---------|-------|
| Primary buttons | Teal bg, white text |
| Secondary buttons | White bg, teal text |
| Headings | Charcoal |
| Body text | Gray |
| Links | Teal |
| Backgrounds | Light gray, teal tint |
| Footer | Dark charcoal |

### Border Radius

| Element | Radius |
|---------|--------|
| Cards | 16px |
| Buttons (pill) | 9999px |
| Buttons (rounded) | 12px |
| Images | 16px |
| Avatar | 50% |

### Shadows

| Element | Shadow |
|---------|--------|
| Cards | 0 4px 20px rgba(0,0,0,0.08) |
| Card hover | 0 8px 30px rgba(0,0,0,0.12) |
| Doctor card | 0 20px 40px rgba(0,0,0,0.15) |
| Navbar | 0 2px 10px rgba(0,0,0,0.05) |
