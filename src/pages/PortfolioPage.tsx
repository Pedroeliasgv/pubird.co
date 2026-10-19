
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import WorkCard from "@/components/WorkCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const PortfolioPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Primeiro, os três filmes do YouTube.
  // Depois, os projetos com vídeos hospedados no próprio site.
  const orderedProjects = [
    ...projects.filter((project) => Boolean(project.youtubeId)),
    ...projects.filter((project) => !project.youtubeId),
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Cabeçalho */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto flex max-w-[1800px] items-center justify-between px-8 py-8 md:px-12 lg:px-20"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/45 transition hover:text-white"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          {language === "pt" ? "Voltar para a Home" : "Back to Home"}
        </Link>

        <Link
          to="/"
          className="text-[10px] uppercase tracking-[0.35em] text-white/40 transition hover:text-white"
        >
          Pubird
        </Link>
      </motion.header>

      {/* Introdução */}
      <section className="mx-auto max-w-[1800px] px-8 pb-16 pt-12 md:px-12 md:pb-24 md:pt-20 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.55em] text-white/35">
            PUBIRD FILM PRODUCTION
          </p>

          <h1 className="mt-6 max-w-5xl font-sequel text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-[110px]">
            {language === "pt" ? (
              <>
                Histórias
                <br />
                em movimento.
              </>
            ) : (
              <>
                Stories
                <br />
                in motion.
              </>
            )}
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/45 md:text-base">
            {language === "pt"
              ? "Uma seleção dos nossos filmes, projetos automotivos e produções cinematográficas."
              : "A selection of our films, automotive projects and cinematic productions."}
          </p>
        </motion.div>
      </section>

      {/* Grade de projetos */}
      <section className="mx-auto max-w-[1800px] pb-24 md:pb-36">
        <div className="mb-6 flex items-center justify-between border-y border-white/10 px-8 py-5 md:px-12 lg:px-20">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
            {language === "pt" ? "Trabalhos selecionados" : "Selected work"}
          </p>

          <p className="text-[10px] tracking-[0.2em] text-white/30">
            {String(orderedProjects.length).padStart(2, "0")}{" "}
            {language === "pt" ? "PROJETOS" : "PROJECTS"}
          </p>
        </div>

        {orderedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {orderedProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.08,
                }}
              >
                <WorkCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="px-8 py-16 text-sm text-white/45 md:px-12 lg:px-20">
            {language === "pt"
              ? "Os projetos serão exibidos aqui em breve."
              : "Projects will appear here soon."}
          </p>
        )}
      </section>

      {/* Chamada para contato */}
      <section className="border-t border-white/10 px-8 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/35">
            PUBIRD FILM PRODUCTION
          </p>

          <h2 className="mt-6 max-w-4xl font-sequel text-4xl font-light leading-tight tracking-[-0.05em] md:text-6xl lg:text-7xl">
            {language === "pt"
              ? "Vamos criar algo juntos."
              : "Let's create something together."}
          </h2>

          <a
            href="https://www.instagram.com/pubird.br/"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 border border-white/20 px-7 py-5 text-[10px] uppercase tracking-[0.3em] text-white/75 transition hover:border-white hover:bg-white hover:text-black"
          >
            {language === "pt" ? "Entre em contato" : "Get in touch"}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="flex flex-col gap-4 border-t border-white/10 px-8 py-7 text-[9px] uppercase tracking-[0.25em] text-white/30 sm:flex-row sm:items-center sm:justify-between md:px-12 lg:px-20">
        <span>© {new Date().getFullYear()} PUBIRD</span>

        <Link to="/" className="transition hover:text-white">
          {language === "pt" ? "Voltar para a Home" : "Back to Home"}
        </Link>
      </footer>
    </main>
  );
};

export default PortfolioPage;
