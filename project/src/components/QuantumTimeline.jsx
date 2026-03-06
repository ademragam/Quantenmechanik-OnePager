import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Fünf Wendepunkte von Planck bis Schrödinger 
const DEFAULT_MILESTONES = [
  {
    year: "1900",
    name: "Max Planck",
    event: "Entdeckt, dass Energie nur in diskreten Paketen (Quanten) abgegeben wird. E = hf.",
  },
  {
    year: "1905",
    name: "Albert Einstein",
    event: "Erklärt den Photoelektrischen Effekt mit Photonen. Nobelpreis 1921.",
  },
  {
    year: "1924",
    name: "Louis de Broglie",
    event: "Stellt die Materiewellen-Hypothese auf: Jedes Teilchen hat eine Wellenlänge.",
  },
  {
    year: "1927",
    name: "Werner Heisenberg",
    event: "Formuliert das Unschärfeprinzip: Δx · Δp ≥ ℏ/2.",
  },
  {
    year: "1935",
    name: "Erwin Schrödinger",
    event: "Entwickelt das Gedankenexperiment der Katze zur Kritik an der Superposition.",
  },
];

// Einzelner Eintrag: Punkt + vertikale Linie 
function TimelineItem({ item, index, total }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-5 mb-6"
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="rounded-full flex-shrink-0"
          style={{
            width: 14,
            height: 14,
            background: "#ff9664",
            boxShadow: "0 0 10px rgba(255,150,100,0.6)",
            marginTop: 4,
          }}
          whileInView={{ scale: [0.5, 1.2, 1] }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        />
        {!isLast && (
          <div
            style={{
              width: 1,
              flexGrow: 1,
              background: "rgba(255,150,100,0.2)",
              marginTop: 4,
            }}
          />
        )}
      </div>

      <div className="pb-4">
        <div className="flex gap-3 items-baseline mb-1">
          <span
            className="font-bold text-base"
            style={{ color: "#ff9664", fontFamily: "monospace" }}
          >
            {item.year}
          </span>
          <span
            className="text-sm font-semibold"
            style={{ color: "#e8e4f8", fontFamily: "monospace" }}
          >
            {item.name}
          </span>
        </div>
        <p
          className="text-sm"
          style={{ color: "rgba(232,228,248,0.55)", fontFamily: "monospace" }}
        >
          {item.event}
        </p>
      </div>
    </motion.div>
  );
}


export default function QuantumTimeline({ milestones = DEFAULT_MILESTONES }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <div
          className="text-xs tracking-widest uppercase mb-2"
          style={{ color: "rgba(255,150,100,0.5)", fontFamily: "monospace" }}
        >
          Geschichte
        </div>
        <h2
          className="text-2xl font-bold"
          style={{ color: "#e8e4f8", fontFamily: "monospace" }}
        >
          Meilensteine
        </h2>
      </motion.div>

      {milestones.map((item, i) => (
        <TimelineItem key={item.year} item={item} index={i} total={milestones.length} />
      ))}
    </section>
  );
}

export { DEFAULT_MILESTONES };
