# ⚛️ Quantenmechanik OnePager

Ein interaktiver, animierter OnePager über Quantenmechanik — gebaut für Physik-LK Klasse 12. Dark-Sci-Fi-Ästhetik mit lebendigen Canvas-Animationen, einem klickbaren Schrödingers-Katze-Experiment und vollständiger Component-Architektur.

---

## Vorschau

> Partikelfeld im Hintergrund · Live-Welleninterferenz · Interaktive Kiste · SVG-Doppelspalt · Scroll-Animationen

**Tech-Stack:** React · Framer Motion · Tailwind CSS · Canvas API

---

## Projektstruktur

```
src/
├── App.jsx                 Einstiegspunkt – setzt alle Sektionen zusammen
├── HeroSection.jsx         Vollbild-Intro mit Parallax und Orbital-Animation
├── ParticleField.jsx       60 leuchtende Quantenpunkte im Hintergrund (Canvas, fixed)
├── OrbitalDiagram.jsx      Animiertes Bohr-Modell mit drei rotierenden Elektronen
├── WaveCanvas.jsx          Zwei Sinuswellen + ihre Überlagerung in Echtzeit (Canvas)
├── ConceptCards.jsx        Grid mit den vier Kernkonzepten der Quantenmechanik
├── SchrodingerBox.jsx      Interaktives Gedankenexperiment – Wellenfunktionskollaps per Klick
├── DoubleSlit.jsx          Doppelspalt-Erklärung mit handgezeichnetem SVG-Diagramm
├── QuantumTimeline.jsx     Vertikale Timeline von Planck (1900) bis Schrödinger (1935)
└── FormulaGrid.jsx         Formelreferenz für die Klausur
```

---

## Installation

**Voraussetzungen:** Node.js 18+

```bash
# Neues Vite-Projekt anlegen
npm create vite@latest quantum-app -- --template react
cd quantum-app

# Abhängigkeiten installieren
npm install framer-motion

# Tailwind CSS einrichten
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

`tailwind.config.js` anpassen:
```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

`src/index.css` ersetzen:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Dann alle `.jsx`-Dateien in `src/` kopieren und starten:

```bash
npm run dev
```

---

## Komponenten & Props

Jede Komponente ist eigenständig verwendbar und kann über Props angepasst werden.

### `HeroSection`
```jsx
<HeroSection scrollYProgress={scrollYProgress} />
```
| Prop | Typ | Beschreibung |
|---|---|---|
| `scrollYProgress` | `MotionValue` | Kommt von `useScroll()` in App.jsx – treibt den Parallax-Effekt an |

---

### `OrbitalDiagram`
```jsx
<OrbitalDiagram size={220} />
```
| Prop | Typ | Standard | Beschreibung |
|---|---|---|---|
| `size` | `number` | `220` | Durchmesser des Diagramms in px |

---

### `ConceptCards`
```jsx
<ConceptCards concepts={meineKonzepte} />
```
| Prop | Typ | Beschreibung |
|---|---|---|
| `concepts` | `Array<{icon, title, color, text, formula}>` | Eigene Konzepte – lässt den Standard-Datensatz überschreiben |

Eigene Konzepte übergeben:
```jsx
const meineKonzepte = [
  {
    icon: "🧲",
    title: "Spin",
    color: "#63fcf1",
    text: "Elektronen haben einen intrinsischen Eigendrehimpuls...",
    formula: "s = ±ℏ/2",
  },
]
```

---

### `SchrodingerBox`
```jsx
<SchrodingerBox showExplanation={true} />
```
| Prop | Typ | Standard | Beschreibung |
|---|---|---|---|
| `showExplanation` | `boolean` | `true` | Blendet den Erklärungstext links aus wenn `false` |

---

### `QuantumTimeline`
```jsx
<QuantumTimeline milestones={meineMeilensteine} />
```
| Prop | Typ | Beschreibung |
|---|---|---|
| `milestones` | `Array<{year, name, event}>` | Eigene Timeline-Einträge |

---

### `FormulaGrid`
```jsx
<FormulaGrid formulas={meineFormeln} accentColor="#63fcf1" />
```
| Prop | Typ | Standard | Beschreibung |
|---|---|---|---|
| `formulas` | `Array<{label, formula}>` | 6 LK-Formeln | Eigene Formelsammlung |
| `accentColor` | `string` | `"#ffd166"` | Farbe aller Formel-Karten |

---

## Farbpalette

| Farbe | Hex | Verwendung |
|---|---|---|
| Cyan | `#63fcf1` | Wellenfunktion, Doppelspalt, Partikel |
| Lila | `#ba78ff` | Unschärfe, Schrödinger |
| Orange | `#ff9664` | Dualismus, Timeline |
| Gelb | `#ffd166` | Formeln, Atomkern |

---

## Abhängigkeiten

```json
{
  "react": "^18.0.0",
  "framer-motion": "^11.0.0",
  "tailwindcss": "^3.0.0"
}
```

---

## Lizenz

MIT — frei verwendbar für Schule, Uni und eigene Projekte.
