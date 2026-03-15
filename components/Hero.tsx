"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,212,170,0.08),transparent_50%)]" />
      <motion.div
        className="relative z-10 max-w-4xl text-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          hidden: {},
        }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="font-mono text-accent"
        >
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Vaibhav{" "}
          <span className="gradient-text">Jain</span>
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-4 text-lg text-textMuted sm:text-xl md:text-2xl"
        >
        Software Engineer - II (Frontend)
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mx-auto mt-6 max-w-xl text-base text-textMuted/90"
        >
          Building scalable, performant UIs with React, TypeScript & Tailwind.
          <br/>Former intern → Software Engineer → SWE - II (Frontend) at Veersa Technologies.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-lg bg-accent px-6 py-3 font-medium text-surface transition hover:bg-accentDim hover:shadow-[0_0_24px_-4px_rgba(0,212,170,0.5)]"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="rounded-lg border border-surfaceBorder bg-surfaceElevated/80 px-6 py-3 font-medium transition hover:border-accent/50 hover:text-accent"
          >
            View projects
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-textMuted/60">↓</span>
      </motion.div>
    </section>
  );
}
