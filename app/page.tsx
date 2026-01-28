"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, BookOpen } from "lucide-react";
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-indigo-500 selection:text-white">
      {/* --- Header Section --- */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-indigo-500">
              Full-stack Developer Portfolio.
            </span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Hi, I’m <span className="text-blue-500">Yoo Jong Hwa</span>. I build
            things for the web.
            <br />
            Recording my process from backend API architecture to frontend
            implementation.
          </p>

          <div className="flex gap-4">
            <SocialLink
              href="https://github.com/MateAndGit"
              icon={<Github size={20} />}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/jonghwa03/"
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />
          </div>
        </motion.div>
      </section>

      {/* --- Unified Projects Grid --- */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {/* 그리드: PC에서는 3열, 태블릿 2열, 모바일 1열 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 flex flex-col"
            >
              {/* 이미지 영역 */}
              <div className="relative h-48 overflow-hidden bg-neutral-800">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* 호버 시 살짝 어두워지는 효과 */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* 내용 영역 */}
              <div className="p-6 flex flex-col flex-1">
                {/* 태그 */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[11px] font-medium bg-neutral-800 text-neutral-400 border border-neutral-700/50 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-sm mb-6 leading-relaxed line-clamp-3 flex-1">
                  {project.desc}
                </p>

                {/* 버튼 영역 */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-neutral-800/50">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-2.5 rounded-lg text-sm font-bold hover:bg-neutral-200 transition-colors"
                    >
                      <ExternalLink size={16} />
                      {project.customLinkText || "Live Demo"}
                    </a>
                  )}
                  {project.notionUrl && (
                    <a
                      href={project.notionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-neutral-800 text-white border border-neutral-700 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors"
                    >
                      <BookOpen size={16} /> Dev Log
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-neutral-600 py-12 text-sm border-t border-neutral-900">
        © 2026 Jong hwa. All rights reserved.
      </footer>
    </main>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:bg-indigo-600 hover:text-white transition-all border border-neutral-800 hover:border-transparent"
    >
      {icon}
    </a>
  );
}
