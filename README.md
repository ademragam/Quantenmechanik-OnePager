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

## Bilder

<img width="1794" height="882" alt="Screenshot 2026-03-06 222712" src="https://github.com/user-attachments/assets/289c1796-e994-48d6-a44d-dc2cfbc3f997" />
<img width="1512" height="502" alt="Screenshot 2026-03-06 222726" src="https://github.com/user-attachments/assets/586f2d7b-70b5-4452-89c3-e53114936b7b" />
<img width="1766" height="800" alt="Screenshot 2026-03-06 222720" src="https://github.com/user-attachments/assets/d4119a3f-fd12-4364-9a23-cf0174d75db1" />


## Lizenz

MIT
