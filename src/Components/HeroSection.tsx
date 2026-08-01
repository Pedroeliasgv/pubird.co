import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const HERO_VIDEOS = [
  "/videos/CarHaus.MP4",
  "/videos/Motocross.MP4",
  "/videos/BMW.MP4",
];

const HeroSection = () => {
  const { t } = useLanguage();

  const videoRef = useRef<HTMLVideoElement>(null);

  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen overflow-hidden bg-[#050505]">
      {/* Background Video */}

      <video
        ref={videoRef}
        key={currentVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        onEnded={handleVideoEnd}
        onError={() => console.warn("Erro ao carregar o vídeo do Hero")}
        className="absolute inset-0 h-full w-full scale-[1.08] object-cover brightness-[0.55] contrast-125 saturate-[0.9]"
      >
        <source
          src={HERO_VIDEOS[currentVideo]}
          type="video/mp4"
        />
        Seu navegador não suporta vídeos HTML5.
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Top Gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />

      {/* Bottom Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

      {/* Cinematic Vignette */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,.82)_100%)]" />

      {/* Film Grain */}

      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-soft-light"
        style={{
          backgroundImage: "url('/textures/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}

      <div className="relative z-20 flex h-full items-center justify-center px-8">
        <div className="max-w-6xl text-center">
          {/* Logo */}

          <img
            src="/logo-pubird.png"
            alt="Pubird"
            className="mx-auto mb-10 h-5 opacity-80"
          />

          <p className="mb-6 text-[11px] uppercase tracking-[0.55em] text-white/40">
            {t.hero.badge}
          </p>

          <h1 className="font-sequel text-center font-light leading-[1.05] tracking-[-0.02em] text-white">
            <span className="block text-[24px] md:text-[32px] lg:text-[40px]">
              {t.hero.title}
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
            {t.hero.subtitle}
          </p>

          <div className="mt-20 flex justify-center">
            <div className="h-14 w-px animate-pulse bg-white/20" />
          </div>

          {/* CTA */}

          <div className="mt-16 flex justify-center">
            <Button
              onClick={scrollToProjects}
              className="group h-14 rounded-full border border-white/15 bg-white px-8 text-black transition-all duration-500 hover:scale-[1.03] hover:bg-white"
            >
              {t.hero.cta}

              <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Scroll */}

          <div className="mt-24 flex flex-col items-center">
            <span className="mb-4 text-[10px] uppercase tracking-[0.45em] text-white/35">
              Scroll
            </span>

            <div className="relative h-16 w-px overflow-hidden bg-white/15">
              <div className="absolute left-0 top-0 h-8 w-full animate-bounce bg-gradient-to-b from-white to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Fade para a próxima seção */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};

export default HeroSection;