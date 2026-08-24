"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compactViewport = window.matchMedia("(max-width: 760px)").matches;
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    root.classList.add("has-motion");

    if (reducedMotion || compactViewport || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => root.classList.remove("has-motion");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    let frame = 0;
    const updateScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        root.style.setProperty("--page-progress", `${Math.min(progress, 1)}`);
        root.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.08, 56)}px`);
        frame = 0;
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScroll);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("has-motion");
      root.style.removeProperty("--page-progress");
      root.style.removeProperty("--hero-shift");
    };
  }, [pathname]);

  return null;
}
