import { useEffect, useRef } from "react";

// Wie viele Punkte pro Welle gezeichnet werden
const WAVE_POINTS = 80;


export default function WaveCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const t = useRef(0); 

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = 200;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t.current += 0.015;

      // Welle 1  und Welle 2  mit je eigener Frequenz und Amplitude
      for (let wave = 0; wave < 2; wave++) {
        ctx.beginPath();
        const freq = wave === 0 ? 2 : 3;
        const amp = wave === 0 ? 45 : 30;
        const phase = wave === 0 ? 0 : Math.PI / 3; // Phasenversatz 
        const color =
          wave === 0 ? "rgba(99,252,241,0.55)" : "rgba(186,120,255,0.45)";

        for (let i = 0; i <= WAVE_POINTS; i++) {
          const x = (i / WAVE_POINTS) * w;
          const y =
            h / 2 +
            amp *
              Math.sin(freq * (i / WAVE_POINTS) * Math.PI * 2 - t.current + phase);
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 18;
        ctx.shadowColor = color;
        ctx.stroke();
      }

      // Überlagerung: y1 + y2 ergibt die resultierende Welle 
      ctx.beginPath();
      for (let i = 0; i <= WAVE_POINTS; i++) {
        const x = (i / WAVE_POINTS) * w;
        const y1 = 45 * Math.sin(2 * (i / WAVE_POINTS) * Math.PI * 2 - t.current);
        const y2 =
          30 *
          Math.sin(
            3 * (i / WAVE_POINTS) * Math.PI * 2 - t.current + Math.PI / 3
          );
        const y = h / 2 + y1 + y2;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(255,235,100,0.9)";
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 24;
      ctx.shadowColor = "rgba(255,235,100,0.7)";
      ctx.stroke();

      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} className="w-full" style={{ height: 200 }} />
      <div className="flex justify-center gap-8 mt-3 text-xs tracking-wider"
        style={{ color: "rgba(255,255,255,0.45)", fontFamily: "monospace" }}>
        <span style={{ color: "rgba(99,252,241,0.7)" }}>── Welle 1</span>
        <span style={{ color: "rgba(186,120,255,0.7)" }}>── Welle 2</span>
        <span style={{ color: "rgba(255,235,100,0.85)" }}>── Überlagerung</span>
      </div>
    </div>
  );
}