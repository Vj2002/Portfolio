"use client";

import { motion } from "framer-motion";

const LINKS = [
  { label: "Email", href: "mailto:vaibhav.jain20122002@gmail.com", value: "vaibhav.jain20122002@gmail.com" },
  { label: "Phone", href: "tel:+917428783431", value: "+91 7428783431" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vaibhav-jain-2b34ab202/", value: "https://www.linkedin.com/in/vaibhav-jain-2b34ab202/" },
  { label: "GitHub", href: "https://github.com/Vj2002", value: "github.com/Vj2002" },
  { label: "LeetCode", href: "https://leetcode.com/u/Vj2002", value: "leetcode.com/u/Vj2002" },
  { label: "CodeForces", href: "https://codeforces.com/profile/HA_007", value: "https://codeforces.com/profile/HA_007" },
  { label: "GeeksForGeeks", href: "https://www.geeksforgeeks.org/profile/vaibhavjain20122002", value: "https://www.geeksforgeeks.org/profile/vaibhavjain20122002" },
  { label: "Coding Ninjas", href: "https://www.naukri.com/code360/profile/84aa4f9a-8855-4f4f-96d9-eb11902a7d32", value: "https://www.naukri.com/code360/profile/84aa4f9a-8855-4f4f-96d9-eb11902a7d32" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-accent"
        >
          Contact
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-3xl font-bold sm:text-4xl"
        >
          Get in touch
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-textMuted"
        >
          Open to opportunities and conversations. Reach out via email or connect on socials.
        </motion.p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.03 * i }}
              className="glass card-hover flex flex-col rounded-xl border p-4 transition hover:border-accent/40"
            >
              <span className="text-xs font-medium text-accent">{link.label}</span>
              <span className="mt-1 text-sm text-textMuted break-all">{link.value}</span>
            </motion.a>
          ))}
        </div>
        {/* <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-surfaceBorder pt-8 text-center text-sm text-textMuted"
        >
          Designed & built with Next.js, TypeScript, Tailwind CSS & Framer Motion
        </motion.footer> */}
      </div>
    </section>
  );
}
