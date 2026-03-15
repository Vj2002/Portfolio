"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Programming",
    items: ["C++", "JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Web Development",
    items: [
      "HTML / CSS",
      "React JS",
      "Redux",
      "Redux Toolkit",
      "Redux Saga",
      "Tailwind CSS",
      "React Hook Form",
      "Bootstrap",
      "REST APIs",
      "Node.js",
    ],
  },
  {
    title: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    title: "Other",
    items: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "Operating Systems",
      "Git",
      "DBMS",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-accent"
        >
          Skills
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-3xl font-bold sm:text-4xl"
        >
          Tech stack
        </motion.h3>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="glass card-hover rounded-2xl border p-6"
            >
              <h4 className="font-semibold text-white">{group.title}</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.02 * j }}
                    className="rounded-lg border border-surfaceBorder bg-surface/80 px-3 py-1.5 text-sm text-textMuted transition hover:border-accent/40 hover:text-accent cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
