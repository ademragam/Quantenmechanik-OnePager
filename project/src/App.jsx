import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


import ParticleField    from "./components/ParticleField";
import HeroSection      from "./components/HeroSection";
import WaveCanvas       from "./components/WaveCanvas";
import ConceptCards     from "./components/ConceptCards";
import SchrodingerBox   from "./components/SchrodingerBox";
import DoubleSlit       from "./components/DoubleSlit";
import QuantumTimeline  from "./components/QuantumTimeline";
import FormulaGrid      from "./components/FormulaGrid";

export default function App() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: "linear-gradient(135deg, #050414 0%, #0d0820 40%, #080d1e 100%)",
        fontFamily: "'Courier New', monospace",
        color: "#e8e4f8",
      }}
    >
      {/* Fortschrittsbalken*/}
      <motion.div
        className="fixed top-0 left-0 h-0.5 z-50"
        style={{
          width: progressWidth,
          background: "linear-gradient(90deg, #63fcf1, #ba78ff, #ff9664)",
          boxShadow: "0 0 12px rgba(99,252,241,0.7)",
        }}
      />

      {/*  Partikel  */}
      <ParticleField />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,252,241,0.03) 1px, transparent 1px), " +
            "linear-gradient(90deg, rgba(99,252,241,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />

      {/* Seiteninhalt liegt über dem Hintergrund (z-10) */}
      <div className="relative z-10">

        {/* HEro */}
        <HeroSection scrollYProgress={scrollYProgress} />

        {/* Interferenz */}
        <section className="py-8">
          <div
            className="text-center mb-2 text-xs tracking-widest uppercase"
            style={{ color: "rgba(99,252,241,0.4)", fontFamily: "monospace" }}
          >
            Superposition zweier Wellen → Interferenz
          </div>
          <WaveCanvas />
        </section>

        {/* Wellenfunktion, Unschärfe, Dualismus, Verschränkung */}
        <ConceptCards />

        {/* Schrödingers Katze */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <SchrodingerBox />
        </section>

        {/* Doppelspalt */}
        <DoubleSlit />

        {/* Von Planck 1900 bis Schrödinger 1935 */}
        <QuantumTimeline />

        {/* Formeln */}
        <FormulaGrid />

        {/* Footer */}
        <footer
          className="text-center py-10 border-t"
          style={{ borderColor: "rgba(99,252,241,0.08)" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs tracking-widest"
            style={{ color: "rgba(232,228,248,0.2)", fontFamily: "monospace" }}
          >
            QUANTENMECHANIK · LK PHYSIK 12 · h = 6.626 × 10⁻³⁴ J·s
          </motion.div>
        </footer>
      </div>
    </div>
  );
}