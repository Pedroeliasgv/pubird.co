import { Link } from "react-router-dom";
import { useRef } from "react";
import { Play } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

type WorkCardProps = {
  project: {
    slug: string;
    title: string;
    category: {
      en: string;
      pt: string;
    };
    video: string;
    thumbnail: string;
  };
};

const WorkCard = ({ project }: WorkCardProps) => {
  const { language } = useLanguage();

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <Link
      to={`/work/${project.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative block aspect-[16/10] overflow-hidden bg-black"
    >
      {/* Thumbnail */}

      <img
        src={project.thumbnail}
        alt={`Thumbnail do projeto ${project.title}`}
        loading="lazy"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          ease-out
          group-hover:scale-105
          group-hover:opacity-0
        "
      />

      {/* Video */}

      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        onError={() =>
          console.warn(`Erro ao carregar o vídeo: ${project.video}`)
        }
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-0
          scale-105
          transition-all
          duration-700
          ease-out
          group-hover:opacity-100
          group-hover:scale-100
        "
      >
        <source
          src={project.video}
          type="video/mp4"
        />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/25 transition duration-500 group-hover:bg-black/5" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Play Icon */}

      <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/20 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100">

        <Play
          size={18}
          fill="white"
          className="text-white"
        />

      </div>

      {/* Text */}

      <div className="absolute bottom-8 left-8">

        <h3 className="font-sequel text-[30px] font-light text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-[11px] uppercase tracking-[0.45em] text-white/60">
          {project.category[language]}
        </p>

      </div>

      {/* Bottom Line */}

      <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />

    </Link>
  );
};

export default WorkCard;