import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import ProjectVideo from "@/components/ProjectVideo";
import NextProject from "@/components/NextProject";

import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const WorkPage = () => {
  const { slug } = useParams();

  const { language, t } = useLanguage();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug]);

  const project = projects.find(
    (item) => item.slug === slug
  );

  const currentIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const nextProject =
    projects[(currentIndex + 1) % projects.length];
    if (!project) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
      <h1 className="text-3xl font-light">
        {t.project.notFound}
      </h1>
    </main>
  );
}

return (
  <main className="min-h-screen bg-[#050505] text-white">

    {/* Header */}

    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mx-auto flex max-w-[1800px] items-center justify-between px-8 py-8 md:px-12 lg:px-20"
    >

      <Link
        to="/"
        className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.45em] text-white/35 transition hover:text-white"
      >

        <ArrowLeft
          size={16}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />

        {t.project.back}

      </Link>

    </motion.header>

    {/* Hero */}

    <section className="mx-auto max-w-[1800px] px-8 md:px-12 lg:px-20">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-16"
      >

        <p className="text-[11px] uppercase tracking-[0.45em] text-white/30">
          {project.category[language]} • {project.year}
        </p>

        <h1 className="mt-5 font-sequel text-[54px] font-light leading-[0.9] tracking-[-0.06em] text-white md:text-[84px] lg:text-[120px]">
          {project.title}
        </h1>

      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <ProjectVideo
          key={project.video}
          src={project.video}
        />

      </motion.div>

    </section>

    {/* About */}

    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto mt-32 max-w-[1800px] px-8 md:px-12 lg:px-20"
    >

      <div className="grid gap-16 lg:grid-cols-[220px_1fr]">

        <span className="text-[11px] uppercase tracking-[0.45em] text-white/30">
          {t.project.about}
        </span>

        <p className="max-w-3xl text-2xl font-light leading-relaxed text-white/70">
          {project.description[language]}
        </p>

      </div>

    </motion.section>
        {/* Information */}

    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto mt-32 max-w-[1800px] px-8 pb-40 md:px-12 lg:px-20"
    >

      <div className="border-t border-white/10">

        <div className="grid grid-cols-2 gap-y-16 py-16 md:grid-cols-4">

          <div>

            <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-white/25">
              {t.project.client}
            </p>

            <p className="text-lg text-white">
              {project.client}
            </p>

          </div>

          <div>

            <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-white/25">
              {t.project.category}
            </p>

            <p className="text-lg text-white">
              {project.category[language]}
            </p>

          </div>

          <div>

            <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-white/25">
              {t.project.year}
            </p>

            <p className="text-lg text-white">
              {project.year}
            </p>

          </div>

          <div>

            <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-white/25">
              {t.project.services}
            </p>

            <div className="space-y-2">

              {project.services[language].map((service) => (

                <p
                  key={service}
                  className="text-lg text-white"
                >
                  {service}
                </p>

              ))}

            </div>

          </div>

        </div>

      </div>

    </motion.section>

    {/* Next Project */}

    <NextProject
      project={nextProject}
    />

  </main>
);

};

export default WorkPage;