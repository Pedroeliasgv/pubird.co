
import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const ShowreelSection = () => {
  const { language } = useLanguage();
  const isPortuguese = language === "pt";

  return (
    <section className="relative w-full overflow-hidden bg-[#080808] py-20 sm:py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1800px] px-5 sm:px-8 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="min-w-0"
        >
          {/* Heading */}
          <div className="mb-9 flex min-w-0 flex-col justify-between gap-6 sm:mb-10 md:mb-14 md:flex-row md:items-end md:gap-10">
            <div className="min-w-0">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/45 sm:text-[10px] sm:tracking-[0.45em] md:tracking-[0.55em]">
                PUBIRD ORIGINAL FILM · 001
              </p>

              <h2 className="mt-5 break-words font-sequel text-[clamp(3rem,12vw,6.25rem)] font-light leading-[0.9] tracking-[-0.065em] text-white sm:mt-6 md:text-7xl lg:text-[100px]">
                WE ARE
                <br />
                <span className="text-white/40">PUBIRD.</span>
              </h2>
            </div>

            <div className="w-full min-w-0 max-w-sm md:pb-2">
              <p className="text-sm leading-6 text-white/55 sm:text-base sm:leading-relaxed">
                {isPortuguese
                  ? "Mais do que o resultado final. Uma visão criativa, o processo e tudo o que acontece por trás de cada filme."
                  : "More than the final result. A creative vision, the process and everything behind every film."}
              </p>

              <p className="mt-4 text-[9px] uppercase tracking-[0.22em] text-white/40 sm:text-[10px] sm:tracking-[0.3em]">
                THIS IS HOW WE SEE IT.
              </p>
            </div>
          </div>

          {/* Showreel thumbnail */}
          <Link
            to="/showreel"
            aria-label={
              isPortuguese
                ? "Assistir ao showreel da Pubird"
                : "Watch the Pubird showreel"
            }
            className="group relative block aspect-video w-full min-w-0 overflow-hidden bg-[#151515]"
          >
            <img
              src="https://img.youtube.com/vi/AF4Y-mASgio/maxresdefault.jpg"
              alt="Showreel — Who is Pubird?"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src =
                  "https://img.youtube.com/vi/AF4Y-mASgio/hqdefault.jpg";
              }}
              className="absolute inset-0 h-full w-full max-w-none object-cover opacity-65 transition-[opacity,transform] duration-700 group-hover:opacity-80 motion-safe:group-hover:scale-[1.03]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

            {/* Play button */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white backdrop-blur-sm transition duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black sm:h-16 sm:w-16 md:h-24 md:w-24">
                <Play
                  size={21}
                  fill="currentColor"
                  className="ml-0.5 sm:h-6 sm:w-6 md:ml-1 md:h-8 md:w-8"
                />
              </div>
            </div>

            {/* Thumbnail information */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:gap-4 sm:p-5 md:p-10">
              <div className="min-w-0 flex-1">
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/70 sm:text-[9px] sm:tracking-[0.35em] md:text-[10px] md:tracking-[0.4em]">
                  PUBIRD PRESENTS
                </p>

                <h3 className="mt-2 break-words font-sequel text-[clamp(0.85rem,4vw,1.875rem)] font-light leading-tight tracking-[-0.03em] text-white sm:mt-3 md:text-3xl lg:text-5xl">
                  WHO IS PUBIRD?!
                </h3>
              </div>

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black sm:h-10 sm:w-10 md:h-11 md:w-11">
                <ArrowUpRight size={17} className="sm:h-5 sm:w-5" />
              </div>
            </div>
          </Link>

          {/* Caption */}
          <div className="mt-4 flex min-w-0 flex-col justify-between gap-2 text-[8px] uppercase tracking-[0.18em] text-white/40 sm:mt-5 sm:flex-row sm:items-center sm:gap-4 sm:text-[9px] sm:tracking-[0.25em]">
            <span className="max-w-full">
              {isPortuguese
                ? "Uma produção original Pubird"
                : "An original Pubird production"}
            </span>

            <span className="max-w-full">
              {isPortuguese
                ? "Assista ao filme completo ↗"
                : "Watch the full film ↗"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowreelSection;
