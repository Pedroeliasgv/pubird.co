import WorkCard from "./WorkCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const SelectedWorksSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="bg-black py-40"
    >
      <div className="mx-auto max-w-[1800px]">

        {/* Header */}

        <div className="mb-24 px-8 md:px-12 lg:px-20">

          <p className="text-[10px] uppercase tracking-[0.55em] text-white/35">
            {t.portfolio.eyebrow}
          </p>

          <h2 className="mt-6 font-sequel text-[34px] font-light leading-none tracking-[-0.04em] text-white md:text-[46px] lg:text-[58px]">
            {t.portfolio.title}
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/45">
            {t.portfolio.subtitle}
          </p>

        </div>

        {/* Projects */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (
            <WorkCard
              key={project.slug}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default SelectedWorksSection;