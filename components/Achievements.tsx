"use client";

import { motion } from "framer-motion";

const ACHIEVEMENTS = [
  "Global rank 128, 276 & 298 in LeetCode contest",
  "Global rank 415/35,000 in CodeForces educational round",
  "Guardian at LeetCode & Specialist at CodeForces",
  "Solved 1300+ questions across platforms",
  "1000+ questions on LeetCode, 200+ on GeeksForGeeks, 150+ on CodeStudio",
];

export function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-accent"
        >
          Achievements
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-3xl font-bold sm:text-4xl"
        >
          Competitive & problem solving
        </motion.h3>
        <ul className="mt-12 space-y-4">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              className="glass card-hover flex items-center gap-3 rounded-xl border px-5 py-4"
            >
              <span className="text-accent">★</span>
              <span className="text-textMuted">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
