import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

type Project = {
  slug: string;
  title: string;
  category: {
    en: string;
    pt: string;
  };
    thumbnail: string;
};

type NextProjectProps = {
  project: Project;
};

const NextProject = ({ project }: NextProjectProps) => {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black">

      <Link
        to={`/work/${project.slug}`}
        className="group block"
      >
        <div className="relative h-[80vh] min-h-[650px] w-full overflow-hidden">

          {/* Background */}

          <motion.img
            src={project.thumbnail}
            alt={project.title}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.06 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/60 transition duration-700 group-hover:bg-black/45" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/10" />

          {/* Content */}

          <div className="relative z-10 flex h-full items-end">

            <div className="mx-auto flex w-full max-w-[1800px] items-end justify-between px-8 pb-24 md:px-12 lg:px-20">
                              <div>

                <p className="mb-6 text-[11px] uppercase tracking-[0.5em] text-white/45">
                  {t.portfolio.nextProject}
                </p>

                <motion.h2
                  whileHover={{ x: 6 }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="font-sequel text-[56px] font-light leading-none tracking-[-0.06em] text-white md:text-[84px] lg:text-[120px]"
                >
                  {project.title}
                </motion.h2>

                <p className="mt-6 text-lg text-white/65">
                  {project.category[language]}
                </p>

                <div className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-white/80 transition duration-300 group-hover:gap-5">
                  <span>{t.portfolio.viewProject}</span>

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

              </div>

              {/* Circle */}

              <motion.div
                whileHover={{
                  x: 8,
                  y: -8,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="hidden md:flex"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">

                  <ArrowUpRight
                    size={34}
                    className="text-white"
                  />

                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </Link>

    </section>
  );
};

export default NextProject;