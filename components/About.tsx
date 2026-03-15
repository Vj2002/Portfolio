"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-accent"
        >
          About
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-3xl font-bold sm:text-4xl"
        >
          From algorithms to interfaces
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
          className="mt-6 space-y-4 text-textMuted"
        >
          <p>
            I&apos;m a <strong className="text-white">Software Engineer - II (Frontend)</strong> at Veersa Technologies with a B.Tech in Computer Science from Maharaja Surajmal Institute of Technology (CGPA 9.64/10). I focus on building scalable, accessible UIs with React, TypeScript, and Tailwind CSS.
          </p>
          <p>
            I&apos;ve progressed from Intern to Software Engineer to SWE - II (Frontend) at Veersa—shipping configuration-driven UIs, cutting bundle size with code splitting, and improving performance and release velocity. I also enjoy coding and have solved 1300+ problems across platforms.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="https://www.linkedin.com/in/vaibhav-jain-2b34ab202/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-surfaceBorder px-4 py-2 text-sm transition hover:border-accent/50 hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Vj2002"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-surfaceBorder px-4 py-2 text-sm transition hover:border-accent/50 hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/Vj2002"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-surfaceBorder px-4 py-2 text-sm transition hover:border-accent/50 hover:text-accent"
          >
            LeetCode
          </a>
          <a
            href="https://codeforces.com/profile/HA_007"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-surfaceBorder px-4 py-2 text-sm transition hover:border-accent/50 hover:text-accent"
          >
            CodeForces
          </a>
        </motion.div>
      </div>
    </section>
  );
}
