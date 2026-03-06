# ⚛️ Quantenmechanik OnePager

Interaktiver OnePager für Physik-LK Klasse 12. Dark-Sci-Fi-Ästhetik mit Canvas-Animationen, einem klickbaren Schrödingers-Katze-Experiment und vollständiger Component-Architektur.

**Stack:** React · Framer Motion · Tailwind CSS v4 · Canvas API

## Struktur

```
src/
├── App.jsx               Einstiegspunkt
├── HeroSection.jsx       Vollbild-Intro mit Parallax
├── ParticleField.jsx     Animiertes Partikelfeld (Canvas, fixed)
├── OrbitalDiagram.jsx    Bohr-Modell mit rotierenden Elektronen
├── WaveCanvas.jsx        Live-Welleninterferenz (Canvas)
├── ConceptCards.jsx      Die vier Kernkonzepte als Cards
├── SchrodingerBox.jsx    Interaktives Gedankenexperiment
├── DoubleSlit.jsx        Doppelspalt mit SVG-Diagramm
├── QuantumTimeline.jsx   Timeline 1900–1935
└── FormulaGrid.jsx       Formelreferenz für die Klausur
```

## Setup

```bash
npm create vite@latest quantum-app -- --template react
cd quantum-app
npm install framer-motion tailwindcss @tailwindcss/vite
```

`vite.config.js` anpassen:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

`src/index.css`:
```css
@import "tailwindcss";
```

Dateien in `src/` kopieren, dann:
```bash
npm run dev
```

## Props

| Komponente | Prop | Beschreibung |
|---|---|---|
| `HeroSection` | `scrollYProgress` | `MotionValue` von `useScroll()` |
| `OrbitalDiagram` | `size?` | Durchmesser in px (Standard: 220) |
| `ConceptCards` | `concepts?` | Eigene Konzepte überschreiben |
| `SchrodingerBox` | `showExplanation?` | Erklärungstext ein/aus (Standard: true) |
| `QuantumTimeline` | `milestones?` | Eigene Timeline-Einträge |
| `FormulaGrid` | `formulas?`, `accentColor?` | Eigene Formeln + Farbe |

## Lizenz

MIT
