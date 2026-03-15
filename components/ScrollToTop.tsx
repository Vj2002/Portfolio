"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function updateRouteToHero() {
  const url = `${window.location.pathname}${window.location.search}#hero`;
  window.history.replaceState(null, "", url);
}

function smoothScrollToTop(durationMs = 450) {
  const startY = window.scrollY || document.documentElement.scrollTop || 0;
  if (startY <= 0) {
    updateRouteToHero();
    return;
  }

  updateRouteToHero();

  // Prefer native smooth scrolling when available.
  try {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return;
  } catch {
    // ignore and use RAF fallback
  }

  const start = performance.now();
  const tick = (now: number) => {
    const elapsed = now - start;
    const t = Math.min(1, elapsed / durationMs);
    const y = Math.round(startY * (1 - easeInOutCubic(t)));
    window.scrollTo(0, y);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const thresholdPx = useMemo(() => {
    // Show after user scrolls beyond above-the-fold area.
    // Uses viewport height when available; falls back to 700px.
    if (typeof window === "undefined") return 700;
    return Math.max(0.6 * window.innerHeight, 420);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setVisible(y > thresholdPx);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [thresholdPx]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          onClick={() => smoothScrollToTop()}
          className="fixed bottom-6 right-6 z-50 rounded-2xl border border-surfaceBorder/70 bg-surfaceElevated/70 p-3 text-accent shadow-[0_12px_40px_-18px_rgba(0,0,0,0.8)] backdrop-blur-xl transition hover:border-accent/50 hover:text-accentDim focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          <span className="sr-only">Scroll to top</span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

