"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    name: "Chat It",
    description:
      "Real-time chat application with live messaging and persistent data storage. Responsive React frontend, Socket.IO for real-time communication, user profiles with avatar support.",
    stack: "ReactJS, NodeJS, Socket.IO, MongoDB",
    codeLink: "https://github.com/Vj2002/Realtime_Chat_App",
    codeLinkLabel: "Code",
    link: "https://realtime-chat-app-pied.vercel.app/",
    linkLabel: "Live",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-accent"
        >
          Projects
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-3xl font-bold sm:text-4xl"
        >
          What I&apos;ve built
        </motion.h3>
        <div className="mt-12 grid gap-6 sm:grid-cols-1">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="glass card-hover group rounded-2xl border p-6 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h4 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                  {project.name}
                </h4>
                <div className="flex gap-2">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-accent transition hover:text-accentDim"
                    >
                      {project.codeLinkLabel} →
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-accent transition hover:text-accentDim"
                    >
                      {project.linkLabel} →
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-3 text-textMuted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.split(", ").map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-surfaceBorder bg-surface/80 px-2.5 py-1 font-mono text-xs text-textMuted cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
