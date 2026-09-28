"use client";

import { useEffect, useRef } from "react";

export const ProjectVideo = () => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () => {
      if (visible && !document.hidden && !preference.matches) {
        video.muted = true;
        void video.play().catch(() => {});
      } else {
        video.pause();
        if (preference.matches) video.load();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    }, { threshold: 0.1 });
    observer.observe(video);
    preference.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      video.pause();
      preference.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster="/davetli-poster.webp"
      width={1900}
      height={812}
      aria-label="Animated preview of the Davetli Misafir homepage"
      style={{ display: "block", width: "100%", height: "auto", aspectRatio: "1415 / 894", objectFit: "cover" }}
    >
      <source src="/davetli-demo.webm" type="video/webm" />
    </video>
  );
};
