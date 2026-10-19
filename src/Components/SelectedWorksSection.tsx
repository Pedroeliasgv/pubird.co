
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import WorkCard from "./WorkCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const SelectedWorksSection = () => {
  const { language } = useLanguage();

  // Destaca os três projetos hospedados no YouTube.
  const featuredProjects = projects
    .filter((project) => Boolean(project.youtubeId))
    .slice(0, 3);

  return (
    <section
      id="projects"
      className="bg-[#050505] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-8 px-8 md:mb-16 md:flex-row md:items-end md:px-12 lg:px-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.55em] text-white/35">
              PUBIRD FILM PRODUCTION
            </p>

            <h2 className="mt-6 font-sequel text-4xl font-light leading-none tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
              {language === "pt" ? "Filmes em destaque." : "Selected films."}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/45 md:text-base">
              {language === "pt"
                ? "Velocidade, movimento e histórias capturadas através da nossa perspectiva."
                : "Speed, movement and stories captured through our perspective."}
            </p>
          </div>

          <Link
            to="/portfolio"
            className="group hidden w-fit items-center gap-3 border-b border-white/25 pb-3 text-[10px] uppercase tracking-[0.3em] text-white/70 transition hover:border-white hover:text-white md:inline-flex"
          >
            {language === "pt" ? "Ver mais trabalhos" : "View all work"}

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Featured YouTube projects */}
        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <WorkCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        ) : (
          <p className="px-8 text-sm text-white/50 md:px-12 lg:px-20">
            {language === "pt"
              ? "Os filmes em destaque serão exibidos aqui."
              : "Featured films will appear here."}
          </p>
        )}

        {/* Mobile button */}
        <div className="mt-10 flex justify-center px-8 md:hidden">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-[10px] uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-black"
          >
            {language === "pt" ? "Ver mais trabalhos" : "View all work"}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorksSection;
