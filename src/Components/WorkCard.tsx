import { Link } from "react-router-dom";
import { useRef } from "react";
import { Play } from "lucide-react";

type WorkCardProps = {
  project: {
    slug: string;
    title: string;
    category: string;
    video: string;
    thumbnail: string;
  };
};

const WorkCard = ({ project }: WorkCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime = 0;
    videoRef.current.play();
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
        alt={project.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          ease-out
          group-hover:scale-[1.04]
          group-hover:opacity-0
        "
      />

      {/* Video */}

      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-0
          scale-[1.04]
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

      <div className="absolute inset-0 bg-black/20 transition duration-700 group-hover:bg-black/40" />

      {/* Play */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            backdrop-blur-xl
          "
        >
          <Play
            size={22}
            fill="white"
            className="ml-1 text-white"
          />
        </div>
      </div>

      {/* Content */}

      <div
        className="
          absolute
          bottom-8
          left-8
          right-8
          translate-y-6
          opacity-0
          transition-all
          duration-700
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <h3 className="font-sequel text-[34px] font-light text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-[11px] uppercase tracking-[0.45em] text-white/65">
          {project.category}
        </p>
      </div>

      {/* Bottom line */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-white
          transition-all
          duration-700
          group-hover:w-full
        "
      />
    </Link>
  );
};

export default WorkCard;