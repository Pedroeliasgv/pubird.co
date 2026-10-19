
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import ProjectVideo from "@/components/ProjectVideo";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const WorkPage = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const project = projects.find((item) => item.slug === slug);

  const homeLabel =
    language === "pt" ? "Voltar para a Home" : "Back to Home";

  const portfolioLabel =
    language === "pt" ? "Voltar para o Portfólio" : "Back to Portfolio";

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-8 text-white">
        <div className="text-center">
          <h1 className="font-sequel text-3xl font-light">
            {t.project.notFound}
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-3 border border-white/15 px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-white/60 transition hover:border-white hover:bg-white hover:text-black"
            >
              <ArrowLeft size={15} />
              {homeLabel}
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 border border-white/15 px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-white/60 transition hover:border-white hover:bg-white hover:text-black"
            >
              <ArrowLeft size={15} />
              {portfolioLabel}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navegação */}
      <motion.header
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto flex max-w-[1800px] flex-col gap-6 px-8 py-8 sm:flex-row sm:items-center sm:justify-between md:px-12 lg:px-20"
      >
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-white/65 transition hover:border-white hover:bg-white hover:text-black sm:gap-3 sm:px-5"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            {homeLabel}
          </Link>

          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-white/65 transition hover:border-white hover:bg-white hover:text-black sm:gap-3 sm:px-5"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            {portfolioLabel}
          </Link>
        </div>

        <Link
          to="/"
          className="w-fit text-[10px] uppercase tracking-[0.35em] text-white/35 transition hover:text-white"
        >
          Pubird
        </Link>
      </motion.header>

      {/* Título do projeto */}
      <section className="mx-auto max-w-[1800px] px-8 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 md:mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.45em] text-white/30">
            {project.category[language]} • {project.year}
          </p>

          <h1 className="mt-5 break-words font-sequel text-[54px] font-light leading-[0.9] tracking-[-0.06em] text-white md:text-[84px] lg:text-[120px]">
            {project.title}
          </h1>
        </motion.div>

        {/* Vídeo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {project.youtubeId ? (
            <div className="aspect-video w-full overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?rel=0`}
                title={project.title}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : project.video ? (
            <ProjectVideo key={project.video} src={project.video} />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center bg-[#101010]">
              <p className="text-sm text-white/40">
                {language === "pt"
                  ? "Vídeo indisponível."
                  : "Video unavailable."}
              </p>
            </div>
          )}
        </motion.div>
      </section>

      {/* Sobre o projeto */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-24 max-w-[1800px] px-8 md:mt-32 md:px-12 lg:px-20"
      >
        <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-16">
          <span className="text-[11px] uppercase tracking-[0.45em] text-white/30">
            {t.project.about}
          </span>

          <p className="max-w-3xl text-xl font-light leading-relaxed text-white/70 md:text-2xl">
            {project.description[language]}
          </p>
        </div>
      </motion.section>

      {/* Informações do projeto */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-24 max-w-[1800px] px-8 pb-32 md:mt-32 md:px-12 md:pb-40 lg:px-20"
      >
        <div className="border-t border-white/10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-12 md:grid-cols-4 md:gap-y-16 md:py-16">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-white/25 md:tracking-[0.45em]">
                {t.project.client}
              </p>

              <p className="text-base text-white md:text-lg">
                {project.client}
              </p>
            </div>

            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-white/25 md:tracking-[0.45em]">
                {t.project.category}
              </p>

              <p className="text-base text-white md:text-lg">
                {project.category[language]}
              </p>
            </div>

            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-white/25 md:tracking-[0.45em]">
                {t.project.year}
              </p>

              <p className="text-base text-white md:text-lg">
                {project.year}
              </p>
            </div>

            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-white/25 md:tracking-[0.45em]">
                {t.project.services}
              </p>

              <div className="space-y-2">
                {project.services[language].map((service) => (
                  <p
                    key={service}
                    className="text-base text-white md:text-lg"
                  >
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navegação no final da página */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 border border-white/15 px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-white/65 transition hover:border-white hover:bg-white hover:text-black"
          >
            <ArrowLeft size={15} />
            {homeLabel}
          </Link>

          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-3 border border-white/15 px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-white/65 transition hover:border-white hover:bg-white hover:text-black"
          >
            <ArrowLeft size={15} />
            {portfolioLabel}
          </Link>
        </div>
      </motion.section>
    </main>
  );
};

export default WorkPage;
