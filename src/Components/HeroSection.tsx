
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
      block: "start",
    });
  };

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#050505]">
      {/* Background video */}
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
        className="absolute inset-0 h-full w-full scale-[1.04] object-cover brightness-[0.55] contrast-125 saturate-[0.9] sm:scale-[1.06] md:scale-[1.08]"
      >
        <source src={HERO_VIDEOS[currentVideo]} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-black/45" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,.82)_100%)]" />

      {/* Film grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-soft-light"
        style={{
          backgroundImage: "url('/textures/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] w-full items-center justify-center px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 md:px-12 md:pb-24 md:pt-32">
        <div className="mx-auto w-full min-w-0 max-w-6xl text-center">
          <img
            src="/logo-pubird.png"
            alt="Pubird"
            draggable={false}
            className="mx-auto mb-7 h-5 w-auto max-w-full object-contain opacity-80 sm:mb-10"
          />

          <p className="mx-auto mb-5 max-w-full text-[9px] uppercase tracking-[0.28em] text-white/50 sm:mb-6 sm:text-[11px] sm:tracking-[0.45em] md:tracking-[0.55em]">
            {t.hero.badge}
          </p>

          <h1 className="mx-auto max-w-full break-words font-sequel text-center font-light leading-[1.05] tracking-[-0.035em] text-white">
            <span className="block text-[clamp(1.4rem,5.5vw,2.5rem)]">
              {t.hero.title}
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/65 [overflow-wrap:anywhere] sm:mt-7 sm:text-base sm:leading-7 md:mt-8 md:text-lg md:leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Scroll indicator */}
          <div className="mt-9 flex justify-center sm:mt-12 md:mt-16">
            <div className="h-10 w-px animate-pulse bg-white/25 sm:h-14" />
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center sm:mt-10">
            <Button
              onClick={scrollToProjects}
              className="group inline-flex h-auto min-h-12 max-w-full items-center justify-center whitespace-normal rounded-full border border-white/15 bg-white px-5 py-3 text-center text-xs text-black transition-colors duration-300 hover:bg-white/90 sm:min-h-14 sm:px-8 sm:text-sm"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:ml-3" />
            </Button>
          </div>

          {/* Scroll label */}
          <div className="mt-10 flex flex-col items-center sm:mt-14 md:mt-16">
            <span className="mb-3 text-[9px] uppercase tracking-[0.35em] text-white/40 sm:mb-4 sm:text-[10px] sm:tracking-[0.45em]">
              Scroll
            </span>

            <div className="relative h-10 w-px overflow-hidden bg-white/15 sm:h-16">
              <div className="absolute left-0 top-0 h-5 w-full animate-bounce bg-gradient-to-b from-white to-transparent sm:h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Fade into the next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] to-transparent sm:h-40"
      />
    </section>
  );
};

export default HeroSection;
