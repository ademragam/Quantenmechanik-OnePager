import { motion, useTransform } from "framer-motion";
import OrbitalDiagram from "./OrbitalDiagram";


export default function HeroSection({ scrollYProgress }) {
 
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  return (
    <motion.section
      style={{ y: heroY }}
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
    >
      {/*  Hintergrundkreis*/}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(99,252,241,0.06) 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="inline-block text-xs tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full"
          style={{
            border: "1px solid rgba(99,252,241,0.3)",
            color: "#63fcf1",
            background: "rgba(99,252,241,0.05)",
            fontFamily: "monospace",
          }}
        >
          Physik LK · Klasse 12 · Quantenmechanik
        </div>
      </motion.div>

      {/* Haupttitel  */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="font-black leading-none mb-4"
        style={{
          fontSize: "clamp(3.5rem, 10vw, 8rem)",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "-0.02em",
          background: "linear-gradient(135deg, #ffffff 20%, #63fcf1 55%, #ba78ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        QUANTEN
        <br />
        MECHANIK
      </motion.h1>

      {/* Einleitungssatz */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-xl text-base leading-relaxed mb-10"
        style={{
          color: "rgba(232,228,248,0.6)",
          fontSize: "1.05rem",
          fontFamily: "monospace",
        }}
      >
        Die Physik des Allerkleinsten — wo Teilchen an zwei Orten gleichzeitig
        sind, Katzen weder leben noch sterben, und Messung die Realität
        verändert.
      </motion.p>

      {/* Atomdiagramm  */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <OrbitalDiagram />
      </motion.div>

      {/* Scroll*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
        style={{
          color: "rgba(99,252,241,0.4)",
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
          fontFamily: "monospace",
        }}
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: 1, height: 28,
            background: "linear-gradient(#63fcf1, transparent)",
          }}
        />
      </motion.div>
    </motion.section>
  );
}