"use client";

import { useEffect, useRef } from "react";

export const SurfaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = (() => { try { return canvas?.getContext("2d"); } catch { return null; } })();
    if (!canvas || !context) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse), (max-width: 700px)");
    let width = 0, height = 0, frame = 0;
    let x = -1000, y = -1000, targetX = x, targetY = y;
    let strength = 0, targetStrength = 0;

    function draw() {
      frame = 0;
      if (!canvas || !context) return;
      x += (targetX - x) * .16;
      y += (targetY - y) * .16;
      strength += (targetStrength - strength) * .12;
      context.clearRect(0, 0, width, height);
      canvas.dataset.ready = "true";
      const radius = width < 700 ? 62 : 104;
      const stepY = Math.sqrt(3) * radius;
      for (let col = -1; col < width / (radius * 1.5) + 1; col++) {
        for (let row = -1; row < height / stepY + 1; row++) {
          const cx = col * radius * 1.5;
          const cy = row * stepY + (col % 2 ? stepY / 2 : 0);
          const edge = Math.abs(cx - width / 2) / (width / 2);
          let proximity = Math.max(0, 1 - Math.hypot(cx - x, cy - y) / 310) * strength;
          const visibility = Math.max(0, (edge - .48) / .52) * (cx / width > .5 ? .8 + cy / height * .4 : .45) * 1.35;
          proximity *= Math.min(1, visibility) * .85;
          if (visibility < .03 && proximity < .02) continue;
          const settle = 0;
          context.beginPath();
          for (let point = 0; point < 6; point++) {
            const angle = point * Math.PI / 3;
            const px = cx + Math.cos(angle) * (radius - 3);
            const py = cy + Math.sin(angle) * (radius - 3) + settle;
            if (point === 0) context.moveTo(px, py); else context.lineTo(px, py);
          }
          context.closePath();
          const light = context.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
          light.addColorStop(0, `rgba(${88 + proximity * 90},${90 + proximity * 55},${94 + proximity * 30},${.52 * visibility + proximity * .3})`);
          light.addColorStop(1, `rgba(39,41,45,${.65 * visibility + proximity * .2})`);
          context.fillStyle = light;
          context.fill();
          if (visibility > .3) {
            context.save(); context.clip();
            const edgeLight = context.createLinearGradient(cx-radius, cy-radius, cx+radius, cy+radius);
            edgeLight.addColorStop(0, 'rgba(223,178,145,' + (.20 * visibility + proximity * .18) + ')');
            edgeLight.addColorStop(.22, 'rgba(213,205,195,0)');
            context.fillStyle = edgeLight;
            context.fillRect(cx-radius, cy-radius, radius*2, radius*2);
            context.restore();
          }
        }
      }
      if (!preference.matches && !document.hidden &&
          (Math.abs(targetX - x) > .2 || Math.abs(targetY - y) > .2 || Math.abs(targetStrength - strength) > .002)) {
        frame = requestAnimationFrame(draw);
      }
    }
    function schedule() { if (!frame && !document.hidden) frame = requestAnimationFrame(draw); }
    function resize() {
      if (!canvas || !context) return;
      width = window.innerWidth; height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      schedule();
    }
    function move(event: PointerEvent) {
      if (preference.matches || event.pointerType === "touch") return;
      targetX = event.clientX; targetY = event.clientY; targetStrength = 1; schedule();
    }
    function leave() { targetStrength = 0; schedule(); }
    function reset() {
      targetStrength = strength = 0;
      if (frame) cancelAnimationFrame(frame);
      frame = 0; schedule();
    }
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    document.addEventListener("visibilitychange", reset);
    preference.addEventListener("change", reset);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
      document.removeEventListener("visibilitychange", reset);
      preference.removeEventListener("change", reset);
    };
  }, []);

  return <div className="surface-layer" aria-hidden="true"><canvas ref={canvasRef} className="surface-background" /><div className="surface-fallback" /></div>;
};
