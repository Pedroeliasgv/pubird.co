
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import WorkCard from "./WorkCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const SelectedWorksSection = () => {
  const { language } = useLanguage();
  const isPortuguese = language === "pt";

  const featuredProjects = projects
    .filter((project) => Boolean(project.youtubeId))
    .slice(0, 3);

  return (
    <section
      id="projects"
      className="w-full bg-[#050505] py-20 sm:py-24 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1800px]">
        {/* Section heading */}
        <div className="mb-10 flex min-w-0 flex-col justify-between gap-7 px-5 sm:mb-12 sm:px-8 md:mb-16 md:flex-row md:items-end md:gap-8 md:px-12 lg:px-20">
          <div className="min-w-0">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 sm:text-[10px] sm:tracking-[0.45em] md:tracking-[0.55em]">
              PUBIRD FILM PRODUCTION
            </p>

            <h2 className="mt-5 max-w-full break-words font-sequel text-[clamp(2.25rem,7.5vw,4.5rem)] font-light leading-[0.98] tracking-[-0.055em] text-white sm:mt-6 md:text-6xl lg:text-7xl">
              {isPortuguese ? "Filmes em destaque." : "Selected films."}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/50 [overflow-wrap:anywhere] sm:mt-6 sm:text-base sm:leading-relaxed">
              {isPortuguese
                ? "Velocidade, movimento e histórias capturadas através da nossa perspectiva."
                : "Speed, movement and stories captured through our perspective."}
            </p>
          </div>

          <Link
            to="/portfolio"
            className="group hidden w-fit max-w-full shrink-0 items-center gap-3 border-b border-white/25 pb-3 text-[10px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:border-white hover:text-white md:inline-flex md:tracking-[0.25em]"
          >
            <span>
              {isPortuguese ? "Ver mais trabalhos" : "View all work"}
            </span>

            <ArrowRight
              size={15}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Featured projects */}
        {featuredProjects.length > 0 ? (
          <div className="grid min-w-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="min-w-0">
                <WorkCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <p className="px-5 text-sm leading-6 text-white/50 sm:px-8 md:px-12 lg:px-20">
            {isPortuguese
              ? "Os filmes em destaque serão exibidos aqui."
              : "Featured films will appear here."}
          </p>
        )}

        {/* Mobile button */}
        <div className="mt-9 flex justify-center px-5 sm:mt-10 sm:px-8 md:hidden">
          <Link
            to="/portfolio"
            className="inline-flex min-h-12 max-w-full items-center justify-center gap-3 border border-white/20 px-5 py-3 text-center text-[9px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black sm:px-6 sm:text-[10px] sm:tracking-[0.25em]"
          >
            <span>
              {isPortuguese ? "Ver mais trabalhos" : "View all work"}
            </span>
            <ArrowRight size={15} className="shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorksSection;
