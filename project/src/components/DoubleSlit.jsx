import { useRef } from "react";
import { motion, useInView } from "framer-motion";


export default function DoubleSlit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="max-w-5xl mx-auto px-6 py-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 48 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          whileHover={{ boxShadow: "0 0 40px 4px rgba(99,252,241,0.08)" }}
          className="rounded-2xl p-6"
          style={{
            background: "rgba(13,8,30,0.85)",
            border: "1.5px solid rgba(99,252,241,0.33)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "rgba(99,252,241,0.5)", fontFamily: "monospace" }}
          >
            Das berühmteste Experiment der Physik
          </div>
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: "#63fcf1", fontFamily: "monospace" }}
          >
            Das Doppelspaltexperiment
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Aufbau: Elektronenquelle → zwei Spalten → Muster auf dem Schirm */}
            <div className="flex-shrink-0">
              <svg width="240" height="140" viewBox="0 0 240 140">
                {/* Elektronenquelle */}
                <circle cx="18" cy="70" r="8" fill="#ffd166" opacity="0.9" />
                <text
                  x="8" y="90"
                  fill="rgba(255,209,102,0.6)"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  Quelle
                </text>

                {/* Trennwand mit zwei Öffnungen */}
                <rect x="75" y="10" width="6" height="44" fill="rgba(99,252,241,0.5)" rx="2" />
                <rect x="75" y="86" width="6" height="44" fill="rgba(99,252,241,0.5)" rx="2" />
                <text
                  x="60" y="130"
                  fill="rgba(99,252,241,0.45)"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  Doppelspalt
                </text>

                {/* Intensitätsmuster hellere Balken = konstruktive Interferenz */}
                {[20, 35, 50, 70, 85, 100, 115, 120].map((y, i) => {
                  const brightness = Math.cos(((y - 70) / 50) * Math.PI * 2.5);
                  const op = Math.max(0, brightness);
                  return (
                    <rect
                      key={i}
                      x="200" y={y}
                      width="22" height="10" rx="3"
                      fill={`rgba(99,252,241,${op * 0.85})`}
                      style={{
                        filter:
                          op > 0.5
                            ? "drop-shadow(0 0 4px rgba(99,252,241,0.6))"
                            : "none",
                      }}
                    />
                  );
                })}
                <text
                  x="198" y="136"
                  fill="rgba(99,252,241,0.4)"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  Schirm
                </text>

                {/* Gestrichelte Kurven zeigen den Wellenausbreitungsweg */}
                {[-1, 0, 1].map((offset, i) => (
                  <path
                    key={i}
                    d={`M 26 70 Q 52 ${70 + offset * 16} 78 54`}
                    stroke="rgba(255,209,102,0.25)"
                    strokeWidth="1.2"
                    fill="none"
                    strokeDasharray="3 3"
                  />
                ))}
                {[-1, 0, 1].map((offset, i) => (
                  <path
                    key={i + 10}
                    d={`M 26 70 Q 52 ${70 + offset * 16} 78 86`}
                    stroke="rgba(255,209,102,0.25)"
                    strokeWidth="1.2"
                    fill="none"
                    strokeDasharray="3 3"
                  />
                ))}
              </svg>
            </div>

            {/* Erklärungstext mit Merksatz */}
            <div
              className="flex-1 text-sm leading-relaxed"
              style={{ color: "rgba(232,228,248,0.65)", fontFamily: "monospace" }}
            >
              <p className="mb-3">
                Einzelne Elektronen werden nacheinander auf eine Wand mit zwei
                Spalten geschossen. Auf dem Schirm dahinter entsteht kein
                Zwei-Streifen-Muster — sondern ein{" "}
                <strong style={{ color: "#63fcf1" }}>Interferenzmuster</strong>.
              </p>
              <p className="mb-3">
                Das Elektron muss{" "}
                <em>gleichzeitig durch beide Spalten</em> gegangen sein — als
                Welle. Erst wenn man misst, welchen Spalt es genommen hat,
                verhält es sich wie ein Teilchen und das Interferenzmuster{" "}
                <strong style={{ color: "#ff9664" }}>verschwindet</strong>.
              </p>
              <div
                className="text-xs px-3 py-2 rounded-lg"
                style={{
                  background: "rgba(99,252,241,0.05)",
                  border: "1px solid rgba(99,252,241,0.2)",
                  color: "#63fcf1",
                }}
              >
                💡 Merksatz:{" "}
                <em>Beobachtung verändert das beobachtete System.</em>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
