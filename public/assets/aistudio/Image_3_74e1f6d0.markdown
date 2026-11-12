---
name: Modo Plan B Proactivo
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#a73a00'
  on-secondary: '#ffffff'
  secondary-container: '#fd651e'
  on-secondary-container: '#571a00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002114'
  on-tertiary-container: '#069669'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb599'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#7f2b00'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

The brand identity embodies modern Colombian hospitality: deeply empathetic, authoritative yet warm, and hyper-responsive in critical moments. The interface represents a safety net for travelers facing sudden schedule disruptions, converting stress into delight through seamless execution and clear choices.

The design movement combines **Modern Hospitality Minimalism** with **Warm Tactile Reassurance**. Generous spatial cadence, soft protective contours, and high-legibility typographic hierarchies remove cognitive overload. Surfaces convey tactile security and high-end concierge service rather than alarming incident-management software.

### Tone & Sensibility
- **Empathetic & Calm:** Warm, human, and reassuring. Eliminates anxiety before it escalates.
- **Authoritative & Certified:** Official institutional validations (Capitanía de Puerto, IDEAM) provide objective certainty without bureaucratic coldness.
- **Effortless Resolution:** 1-touch actions with immediate visual feedback, zero cognitive friction, and explicit resolution timelines.

## Colors

The color system establishes instant psychological stabilization by pairing deep navigational tones with warm Caribbean vitality and affirmative resolution signals.

- **Primary (`#0F172A` / `#1E293B`):** Deep Tropical Navy anchors structure, headers, and core action containers. It projects institutional stability, operational confidence, and luxury concierge reliability.
- **Secondary (`#EA580C` / `#F97316` / `#F59E0B`):** Caribbean Amber and Coral serve as focal energy accents for contingency triggers, premium tags, and key calls-to-action, communicating active care rather than critical panic.
- **Tertiary (`#059669` / `#10B981`):** Colombian Emerald Green signals certified verification badges, resolved trip statuses, instant confirmations, and confirmed voucher redemptions.
- **Neutrals & Surfaces (`#FFFFFF`, `#F8FAFC`, `#E2E8F0`, `#64748B`):** Clean cloud and Caribbean sand tints create airy, glare-free readability under direct outdoor sunlight.

## Typography

The typographic hierarchy utilizes **Plus Jakarta Sans** across all levels. Its balanced geometric construction and rounded, welcoming letterforms prevent visual fatigue during moments of disruption.

- **Display & Headlines:** Used for empathetic greetings, status headlines, and rescue plan values. Snappy line-heights and slight negative tracking produce punchy, scannable anchors.
- **Body:** Generous line heights ensure readability outdoors on mobile devices.
- **Labels & Badges:** Slightly tracked uppercase or semi-bold weights for official verification pills (IDEAM / Capitanía de Puerto), meal vouchers, and dispatch counters.

## Layout & Spacing

The layout is built mobile-first around a fluid container structure optimized for one-thumb PWA ergonomics.

### Layout Mechanics
- **Mobile (Base):** Single-column stream with `1rem` outer margins. Action targets maintain a minimum vertical clearance of `48px` to ensure effortless one-handed selection during travel movement.
- **Tablet / Desktop:** Max content width bounded at `768px` for focused itinerary flows, or `1120px` multi-column rescue comparison tables with `gutter-desktop` separation.
- **Flow & Stacking:** Vertical rhythm uses the `space-*` scale to separate structural sections (e.g., weather alert banner to family welcome, then rescue cards, and finally sticky reassurance triggers).

## Elevation & Depth

Visual hierarchy uses **tonal layering** paired with **ambient diffused shadows** to achieve a soft, reassuring, tactile depth.

### Depth Levels
- **Base Canvas (`level-0`):** Solid `#F8FAFC`, quiet and neutral.
- **Elevated Surfaces (`level-1`):** White card containers (`#FFFFFF`) featuring a `0 2px 8px -2px rgba(15, 23, 42, 0.06)` shadow and a crisp `1px` border of `#E2E8F0`.
- **Active / Rescue Cards (`level-2`):** Interactive contingency selections use an ambient warm glow shadow `0 12px 28px -6px rgba(15, 23, 42, 0.12)` with a slight amber or teal boundary glow upon focus/selection.
- **Floating Reassurance Dock (`level-3`):** Pinned bottom sheet with `0 -8px 24px -4px rgba(15, 23, 42, 0.08)` and `backdrop-filter: blur(12px)` over dynamic content.

## Shapes

The design language uses roundedness level `2` (`0.5rem` base, `1rem` for medium cards, `1.5rem` for large contingency containers, and fully pill-shaped for status badges). This geometry creates a friendly, approachable, and forgiving physical feel. 

Sharp corners are avoided to reinforce the soothing, protective identity of a high-end concierge service.

## Components

### Weather Alert & Authority Banner
- **Container:** Warm amber-tinted background (`#FFFBEB`) with a soft left accent border (`4px`, `#F59E0B`).
- **Institutional Tag:** Dual-pill badge with `#059669` background or high-contrast border displaying "Verificado Capitanía de Puerto / IDEAM" with a real-time timestamp.
- **Copy:** Empathetic explanation of safety parameters over boat transits to Islas del Rosario, framing the disruption as proactive protection.

### Personalized Family Greeting Card
- **Identity:** Prominent text ("Hola Camilo, cuidamos el día de tu familia"), accompanied by a concierge avatar and a direct hotline link.
- **Micro-Status:** Compact pill showing active group size ("4 personas • Transporte incluido").

### 1-Touch Contingency Rescue Cards (Plan A, B, C)
- **Structure:** Vertical card stack featuring Plan A (Castillo San Felipe & Almuerzo Colonial), Plan B (Spa & Piscina Cubierta Familiar), and Plan C (Bono $200.000 COP Día Libre en Hotel).
- **Badge:** Distinct color-coded micro-badge ("Opción Cultural", "Opción Relax", "Flexibilidad Total").
- **CTA:** Primary "Elegir este plan en 1 toque" button inside each card, executing instant booking lock without page reloads.

### Sticky Reassurance Dock
- **Position:** Pinned to viewport bottom with high z-index and blurred translucent backplate.
- **Elements:** 1-tap WhatsApp concierge channel, instant dispatch status indicator ("Van privada asignada: Placas XYZ-123"), and 100% money-back / satisfaction guarantee indicator.