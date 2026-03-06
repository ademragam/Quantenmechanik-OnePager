import { useRef } from "react";
import { motion, useInView } from "framer-motion";


const CONCEPTS = [
  {
    icon: "⚛️",
    title: "Wellenfunktion ψ",
    color: "#63fcf1",
    text: "Die Wellenfunktion ψ(x,t) beschreibt den quantenmechanischen Zustand eines Teilchens vollständig. |ψ|² gibt die Wahrscheinlichkeitsdichte an, ein Teilchen an einem bestimmten Ort zu finden.",
    formula: "|ψ(x,t)|² dx = P",
  },
  {
    icon: "🔬",
    title: "Heisenbergsche Unschärfe",
    color: "#ba78ff",
    text: "Ort und Impuls eines Teilchens können nicht gleichzeitig beliebig genau gemessen werden. Je genauer der Ort bekannt ist, desto ungenauer ist der Impuls – und umgekehrt.",
    formula: "Δx · Δp ≥ ℏ/2",
  },
  {
    icon: "🌊",
    title: "Welle-Teilchen-Dualismus",
    color: "#ff9664",
    text: "Quantenobjekte wie Elektronen oder Photonen zeigen je nach Experiment Wellen- oder Teilchenverhalten. Beim Doppelspaltexperiment entsteht ein Interferenzmuster – sogar mit einzelnen Elektronen.",
    formula: "λ = h/p",
  },
  {
    icon: "🔗",
    title: "Quantenverschränkung",
    color: "#ffd166",
    text: "Zwei verschränkte Teilchen bilden ein gemeinsames Quantensystem. Die Messung an einem Teilchen beeinflusst augenblicklich den Zustand des anderen – unabhängig von der Entfernung.",
    formula: "|ψ⟩ = (|00⟩ + |11⟩)/√2",
  },
];

function GlowCard({ children, color = "#63fcf1" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: `0 0 40px 4px ${color}22` }}
      className="rounded-2xl p-6"
      style={{
        background: "rgba(13,8,30,0.85)",
        border: `1.5px solid ${color}33`,
        backdropFilter: "blur(12px)",
      }}
    >
      {children}
    </motion.div>
  );
}

function ConceptCard({ concept, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlowCard color={concept.color}>
        <div className="flex items-start gap-4 mb-4">
          <span className="text-3xl">{concept.icon}</span>
          <div>
            <h3
              className="font-bold text-lg mb-1"
              style={{ color: concept.color, fontFamily: "monospace" }}
            >
              {concept.title}
            </h3>
            <div
              className="text-sm px-3 py-1 rounded-lg inline-block font-mono"
              style={{
                background: `${concept.color}11`,
                border: `1px solid ${concept.color}33`,
                color: concept.color,
              }}
            >
              {concept.formula}
            </div>
          </div>
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(232,228,248,0.65)", fontFamily: "monospace" }}
        >
          {concept.text}
        </p>
      </GlowCard>
    </motion.div>
  );
}


export default function ConceptCards({ concepts = CONCEPTS }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <div
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "rgba(186,120,255,0.6)", fontFamily: "monospace" }}
        >
          Die vier Säulen
        </div>
        <h2 className="text-3xl font-bold" style={{ color: "#e8e4f8" }}>
          Kernkonzepte
        </h2>
      </motion.div>

      <div
        className="grid grid-cols-1 gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        {concepts.map((c, i) => (
          <ConceptCard key={c.title} concept={c} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

export { CONCEPTS };
