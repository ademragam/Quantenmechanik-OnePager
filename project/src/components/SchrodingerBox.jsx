import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function SchrodingerBox({ showExplanation = true }) {
  const [open, setOpen] = useState(false);
  const [catState, setCatState] = useState(null);

 
  const observe = () => {
    setOpen(true);
    setCatState(Math.random() > 0.5 ? "alive" : "dead");
  };

  // Kiste zurücksetzen, Superposition beginnt wieder
  const reset = () => {
    setOpen(false);
    setCatState(null);
  };

  return (
    <div
      className="rounded-2xl p-6 flex flex-col lg:flex-row items-center gap-10"
      style={{
        background: "rgba(13,8,30,0.85)",
        border: "1.5px solid rgba(186,120,255,0.33)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Linke Seite Kontext zum Gedankenexperiment */}
      {showExplanation && (
        <div className="flex-1">
          <div
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "rgba(186,120,255,0.5)", fontFamily: "monospace" }}
          >
            Gedankenexperiment · 1935
          </div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#ba78ff" }}>
            Schrödingers Katze
          </h2>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "rgba(232,228,248,0.65)", fontFamily: "monospace" }}
          >
            Eine Katze in einer geschlossenen Kiste, ein radioaktives Atom, ein
            Geigerzähler und Gift. Solange niemand hineinschaut, ist die Katze in
            einer{" "}
            <strong style={{ color: "#ba78ff" }}>Superposition</strong> aus
            lebendig und tot zugleich.
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(232,228,248,0.5)", fontFamily: "monospace" }}
          >
            Erst der <em>Kollaps der Wellenfunktion</em> durch Beobachtung
            entscheidet den Zustand.
          </p>
        </div>
      )}

      {/* Rechte Seite: die Kiste die man beobachten kann */}
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="relative rounded-2xl border-2 flex items-center justify-center cursor-pointer select-none overflow-hidden"
          style={{
            width: 180,
            height: 130,
            borderColor: open
              ? catState === "alive"
                ? "#63fcf1"
                : "#ff6464"
              : "rgba(186,120,255,0.6)",
            background: "rgba(15,10,35,0.8)",
          }}
          whileHover={{ scale: 1.04 }}
        >
          {/* Deckel der Kiste hebt sich beim Öffnen */}
          <motion.div
            className="absolute top-0 left-0 w-full rounded-t-xl"
            style={{
              height: 28,
              background: "rgba(186,120,255,0.18)",
              borderBottom: "1.5px solid rgba(186,120,255,0.4)",
            }}
            animate={{ y: open ? -32 : 0, opacity: open ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />

          <AnimatePresence>
            {!open && (
              <motion.div
                key="question"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-4xl"
              >
                <span style={{ filter: "blur(1px)" }}>🐱</span>
                <span
                  className="text-lg font-bold ml-1"
                  style={{
                    color: "rgba(186,120,255,0.8)",
                    fontFamily: "monospace",
                  }}
                >
                  ?
                </span>
              </motion.div>
            )}
            {open && catState && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-4xl">
                  {catState === "alive" ? "😺" : "💀"}
                </span>
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{
                    color: catState === "alive" ? "#63fcf1" : "#ff6464",
                    fontFamily: "monospace",
                  }}
                >
                  {catState === "alive" ? "Lebt!" : "Tot."}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="flex gap-3">
          {!open ? (
            <motion.button
              onClick={observe}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2 rounded-xl text-sm font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(186,120,255,0.18)",
                border: "1.5px solid rgba(186,120,255,0.5)",
                color: "#ba78ff",
                fontFamily: "monospace",
              }}
            >
              Beobachten
            </motion.button>
          ) : (
            <motion.button
              onClick={reset}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2 rounded-xl text-sm font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(99,252,241,0.1)",
                border: "1.5px solid rgba(99,252,241,0.4)",
                color: "#63fcf1",
                fontFamily: "monospace",
              }}
            >
              ↩ Reset
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
