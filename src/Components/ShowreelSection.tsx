
import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const ShowreelSection = () => {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#080808] py-24 md:py-36">
      <div className="mx-auto max-w-[1800px] px-8 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.55em] text-white/40">
                PUBIRD ORIGINAL FILM · 001
              </p>

              <h2 className="mt-6 font-sequel text-5xl font-light leading-[0.95] tracking-[-0.06em] text-white md:text-7xl lg:text-[100px]">
                WE ARE
                <br />
                <span className="text-white/40">PUBIRD.</span>
              </h2>
            </div>

            <div className="max-w-sm md:pb-2">
              <p className="text-sm leading-relaxed text-white/55 md:text-base">
                {language === "pt"
                  ? "Mais do que o resultado final. Uma visão criativa, o processo e tudo o que acontece por trás de cada filme."
                  : "More than the final result. A creative vision, the process and everything behind every film."}
              </p>

              <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/35">
                THIS IS HOW WE SEE IT.
              </p>
            </div>
          </div>

          <Link
            to="/showreel"
            aria-label={
              language === "pt"
                ? "Assistir ao showreel da Pubird"
                : "Watch the Pubird showreel"
            }
            className="group relative block aspect-video w-full overflow-hidden bg-[#151515]"
          >
            <img
              src="https://img.youtube.com/vi/AF4Y-mASgio/maxresdefault.jpg"
              alt="Showreel — Who is Pubird?"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src =
                  "https://img.youtube.com/vi/AF4Y-mASgio/hqdefault.jpg";
              }}
              className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white backdrop-blur-sm transition duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black md:h-24 md:w-24">
                <Play
                  size={25}
                  fill="currentColor"
                  className="ml-1 md:h-8 md:w-8"
                />
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 md:bottom-10 md:left-10 md:right-10">
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/65 md:text-[10px]">
                  PUBIRD PRESENTS
                </p>

                <h3 className="mt-3 font-sequel text-xl font-light tracking-[-0.03em] text-white md:text-3xl lg:text-5xl">
                  WHO IS PUBIRD?!
                </h3>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>

          <div className="mt-5 flex flex-col justify-between gap-3 text-[9px] uppercase tracking-[0.3em] text-white/35 sm:flex-row sm:items-center">
            <span>
              {language === "pt"
                ? "Uma produção original Pubird"
                : "An original Pubird production"}
            </span>

            <span>
              {language === "pt" ? "Assista ao filme completo ↗" : "Watch the full film ↗"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowreelSection;
