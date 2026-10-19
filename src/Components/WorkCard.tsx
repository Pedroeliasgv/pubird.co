
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Play, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

type WorkCardProject = {
  slug: string;
  title: string;
  category: {
    en: string;
    pt: string;
  };
  video: string;
  thumbnail: string;
  youtubeId?: string;
};

type WorkCardProps = {
  project: WorkCardProject;
};

const WorkCard = ({ project }: WorkCardProps) => {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  const isYouTube = Boolean(project.youtubeId);

  const handleMouseEnter = () => {
    if (!videoRef.current || isYouTube || !project.video) return;

    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!videoRef.current || isYouTube || !project.video) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <Link
      to={`/work/${project.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`Ver projeto ${project.title}`}
      className="group relative block aspect-[16/10] w-full overflow-hidden bg-[#101010] text-left"
    >
      <img
        src={project.thumbnail}
        alt={`Capa do projeto ${project.title}`}
        loading="lazy"
        onError={(event) => {
          const image = event.currentTarget;

          if (image.dataset.fallbackApplied) return;

          image.dataset.fallbackApplied = "true";

          if (project.youtubeId) {
            image.src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
          }
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {!isYouTube && project.video && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          <source src={project.video} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/5" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition duration-300 group-hover:bg-white group-hover:text-black">
        {isYouTube ? (
          <ExternalLink size={17} />
        ) : (
          <Play size={17} fill="currentColor" />
        )}
      </div>

      <div className="absolute bottom-7 left-7 right-5">
        <h3 className="font-sequel text-2xl font-light text-white md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-white/60">
          {project.category[language]}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />
    </Link>
  );
};

export default WorkCard;
