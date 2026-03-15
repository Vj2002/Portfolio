"use client";

import { motion } from "framer-motion";

const JOBS = [
  {
    company: "Veersa Technologies",
    role: "Software Engineer - II (Frontend)",
    period: "Jan 2026 – Present",
    stack: "ReactJS, TypeScript, Javascript, Tailwind CSS, HTML, CSS, Redux Toolkit, Redux Saga",
    bullets: [
      "Implemented idle-based session timeout and optimized polling intervals for near real-time case status updates, reducing redundant API calls by 35%.",
      "Enhanced frontend performance through route-level code splitting and lazy loading, reducing initial bundle size and improving first load time by 30%.",
      "Designed a config-driven UI architecture enabling dynamic layout rendering via injected client-specific scripts, reducing new client onboarding effort by ~70%.",
      "Built 10+ multi-step enrollment flows using React Hook Form, reducing form validation errors by ~25%.",
      "Ensured 100% responsive, cross-browser compatibility across major devices.",
    ],
  },
  {
    company: "Veersa Technologies",
    role: "Software Engineer (Frontend)",
    period: "Aug 2024 – Jan 2026",
    stack: "ReactJS, TypeScript, Javascript, Tailwind CSS, HTML, CSS, Redux Toolkit, Redux Saga",
    bullets: [
      "Designed and developed scalable, reusable React components using TypeScript, supporting 20+ production pages with consistent UI behavior.",
      "Built a configuration-driven UI framework enabling backend-controlled layouts, validations, and conditional rendering, reducing client-specific frontend changes by 60%.",
      "Implemented runtime configuration patterns using window-level configurations to dynamically control UI behavior without redeployments.",
      "Developed complex, form-heavy user flows using React Hook Form across 15+ forms with strong validation and accessibility.",
      "Integrated 25+ REST APIs using a centralized axios abstraction; collaborated with backend, design, and product for 25% performance improvement.",
    ],
  },
  {
    company: "Veersa Technologies",
    role: "Software Engineering Intern",
    period: "Sep 2023 – Aug 2024",
    stack: "HTML, CSS, Javascript, ChartJS, ReactJS, TypeScript",
    bullets: [
      "Created an interactive data visualization module using Chart.js, improving user engagement by 20%.",
      "Contributed to a large-scale Investor Relations portal, integrating 20+ REST APIs and ensuring accurate data rendering.",
      "Investigated and resolved frontend–backend integration issues, improving application stability.",
    ],
  },
  {
    company: "Solar Secure Solutions",
    role: "Software Engineering Intern",
    period: "Jun 2022 – Sep 2022",
    stack: "HTML, CSS, Javascript, ReactJS, TypeScript",
    bullets: [
      "Optimized an existing frontend codebase to improve page load performance by 30% and enhance responsiveness.",
      "Built and enhanced UI features using HTML, CSS, JavaScript, and React, contributing to improved user engagement.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-accent"
        >
          Experience
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-3xl font-bold sm:text-4xl"
        >
          Work
        </motion.h3>
        <div className="mt-12 space-y-10">
          {JOBS.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="glass card-hover rounded-2xl border p-6 md:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {job.role}
                  </h4>
                  <p className="mt-1 text-accent">{job.company}</p>
                </div>
                <span className="font-mono text-sm text-textMuted">
                  {job.period}
                </span>
              </div>
              <p className="mt-3 font-mono text-xs text-textMuted">
                {job.stack}
              </p>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm text-textMuted before:mt-1.5 before:shrink-0 before:content-['▹'] before:text-accent"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
