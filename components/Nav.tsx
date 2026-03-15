"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(15, 20, 25, 0)", "rgba(15, 20, 25, 0.9)"]
  );
  const border = useTransform(
    scrollY,
    [0, 80],
    ["rgba(45, 58, 77, 0)", "rgba(45, 58, 77, 0.6)"]
  );

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.header
      style={{ backgroundColor: bg, borderBottomColor: border }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-mono text-lg font-semibold text-accent transition hover:text-accentDim"
        >
          VJ
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-textMuted transition hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
            className="h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
            className="h-0.5 w-6 bg-white"
          />
        </button>
      </nav>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden border-t border-surfaceBorder/50 md:hidden"
      >
        <ul className="flex flex-col gap-2 px-6 py-4">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-textMuted transition hover:text-accent"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const id = link.href.slice(1);
                  const el = id ? document.getElementById(id) : null;
                  /* scroll after menu collapse so layout is stable and position is correct */
                  setTimeout(() => {
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 350);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
}
