# ELO — The Child Companion Robot
### Immersive 3D Keynote & Product Experience

A cinematic, 3D presentation website for **ELO**, a voice-first child companion robot engineered to introduce technology through natural verbal interaction rather than continuous passive screen consumption.

---

## Key Features

- **Realistic 3D Recreation of the Physical Prototype:** Procedural Three.js model faithful to the physical hardware geometry:
  - Black rectangular chassis with matte composite finish.
  - Signature four yellow 5-spoke wheels with treaded rubber tires.
  - Vertical neck mounting structure with standoff pins and pivot joint.
  - Tilted grey head housing with 4 corner socket bolts.
  - Active OLED display with real-time procedural animated expressive eyes (Happy, Curious, Listening, Thinking) featuring organic blinking, saccades, and cursor tracking.
  - Hardware openings: Center optical camera aperture, front & side dual ultrasonic distance transducers, and physical red rocker power switch.
- **Cinematic 10-Slide Keynote Presentation Deck:**
  1. *Product Introduction:* Target age 4–8 years, voice-first companion vision.
  2. *Socioeconomic Reality:* PLFS 2025 verified statistics (40.0% FLFPR, ~20 Cr employed women, 44.4% citing childcare/homemaking commitments).
  3. *Caregiving Disparity:* Time Use Survey 2024 / UNDP 2025 (341 min vs 42 min unpaid domestic work comparison, 8.1× ratio).
  4. *Screen Exposure & Development:* BMJ Paediatrics Open 2025 (63.2% children 2–4 hrs weekdays, 12.7% >8 hrs weekdays), WHO 1-hr guideline, and JAMA Pediatrics 2024 meta-analysis evidence.
  5. *Childcare Gap:* UNDP/Dalberg 2026 urban childcare demand deficit (<10% met) and indicative Coimbatore fee examples.
  6. *Product Reveal:* Voice-first architecture replacing passive video viewing.
  7. *Hardware Anatomy:* Interactive 3D camera zooming into the 5 actual physical subsystems.
  8. *Live Spoken Dialogue:* Demonstrating child inquiry ("Why is the sky blue?") and gentle Child Safety Filter redirection.
  9. *Parent Application:* Sleek mobile interface showing child tracking selection, simulated camera stream, and emergency stop control.
  10. *Vision & Prototype Verification:* Direct comparison with reference photograph and essential adult supervision disclaimer.
- **Keynote Controls:** Keyboard arrows (`←` / `→` / `Space`), Auto-play mode, Fullscreen (`F`), and touch swipe support.

---

## Tech Stack

- **React 19**
- **Three.js** (PBR materials, PCFSoftShadowMap, Procedural CanvasTexture)
- **Tailwind CSS**
- **Lucide Icons**
- **Vite**

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Manjunath-2006/elo-story2.git
cd elo-story2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Boundary Notice

ELO is a complementary home companion, not a replacement for parents, caregivers, daycare centres or responsible adult supervision.
