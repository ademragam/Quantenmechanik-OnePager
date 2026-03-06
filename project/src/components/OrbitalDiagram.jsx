
import { motion } from "framer-motion";


export default function OrbitalDiagram({ size = 220 }) {
  const center = size / 2;

  const radii = [center * 0.64, center * 0.86, center];

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Atomkern puls */}
      <motion.div
        className="absolute rounded-full z-10"
        style={{
          width: 32,
          height: 32,
          background: "radial-gradient(circle, #fff8aa, #ffcc00)",
          boxShadow: "0 0 24px 8px rgba(255,204,0,0.7)",
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      />

      {/*  */}
      {radii.map((r, i) => {
        const colors = ["rgba(99,252,241,0.4)", "rgba(186,120,255,0.35)", "rgba(255,150,100,0.3)"];
        const electrons = ["#63fcf1", "#ba78ff", "#ff9664"];
        const speeds = [4, 6, 8]; 

        return (
          <motion.div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: r * 2,
              height: r * 2,
              borderColor: colors[i],
              borderStyle: "dashed",
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: speeds[i], ease: "linear" }}
          >
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 10,
                height: 10,
                top: -5,
                left: r - 5,
                background: electrons[i],
                boxShadow: `0 0 12px 4px ${electrons[i]}`,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}