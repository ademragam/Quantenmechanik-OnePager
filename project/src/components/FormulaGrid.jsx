import { useRef } from "react";
import { motion, useInView } from "framer-motion";


const DEFAULT_FORMULAS = [
  { label: "Plancksche Strahlungsformel", formula: "E = h · f" },
  { label: "De-Broglie-Wellenlänge", formula: "λ = h / p" },
  { label: "Unschärferelation", formula: "Δx · Δp ≥ ℏ/2" },
  { label: "Schrödinger-Gl. (zeitunabh.)", formula: "Ĥψ = Eψ" },
  { label: "Wahrscheinlichkeit", formula: "P = |ψ|² · dx" },
  { label: "Energie-Zeit-Unschärfe", formula: "ΔE · Δt ≥ ℏ/2" },
];


export default function FormulaGrid({
  formulas = DEFAULT_FORMULAS,
  accentColor = "#ffd166",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="max-w-5xl mx-auto px-6 py-8 pb-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 48 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          whileHover={{ boxShadow: `0 0 40px 4px ${accentColor}11` }}
          className="rounded-2xl p-6"
          style={{
            background: "rgba(13,8,30,0.85)",
            border: `1.5px solid ${accentColor}33`,
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: `${accentColor}80`, fontFamily: "monospace" }}
          >
            Klausur-Essentials
          </div>
          <h2
            className="text-xl font-bold mb-6"
            style={{ color: accentColor, fontFamily: "monospace" }}
          >
            Wichtige Formeln
          </h2>

          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            {formulas.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl p-3"
                style={{
                  background: `${accentColor}0a`,
                  border: `1px solid ${accentColor}33`,
                }}
              >
                <div
                  className="text-xs mb-1"
                  style={{ color: `${accentColor}80`, fontFamily: "monospace" }}
                >
                  {f.label}
                </div>
                <div
                  className="text-lg font-bold font-mono"
                  style={{ color: accentColor }}
                >
                  {f.formula}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export { DEFAULT_FORMULAS };
