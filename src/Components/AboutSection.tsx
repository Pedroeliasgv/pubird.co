
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { language } = useLanguage();
  const isPortuguese = language === "pt";

  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-[#050505] py-20 sm:py-24 md:py-36 lg:py-44"
    >
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-10 px-5 sm:gap-12 sm:px-8 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-16 xl:gap-28 xl:px-20">
        <div className="group relative w-full min-w-0 overflow-hidden">
          <img
            src="/founders.jpg"
            alt="Pedro Elias e Lucas José, fundadores da Pubird"
            loading="lazy"
            className="block aspect-[4/5] w-full max-w-full object-cover grayscale transition-[filter,transform] duration-[1200ms] group-hover:grayscale-0 motion-safe:group-hover:scale-[1.02]"
          />
        </div>

        <div className="min-w-0 py-2 sm:py-4 lg:py-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 sm:text-[11px] sm:tracking-[0.4em] md:tracking-[0.5em]">
            {isPortuguese ? "Sobre a Pubird" : "About Pubird"}
          </p>

          <h2 className="mt-6 max-w-full break-words font-sequel text-[clamp(2.35rem,8.5vw,5.5rem)] font-light leading-[0.94] tracking-[-0.06em] text-white sm:mt-7 md:text-[clamp(3.5rem,5.5vw,5.5rem)]">
            WE MAKE FILMS.
            <br />
            NOT JUST CONTENT.
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 [overflow-wrap:anywhere] sm:mt-8 sm:text-base sm:leading-8 md:mt-10 md:text-lg md:leading-9">
            {isPortuguese
              ? "Somos a Pubird, uma produtora independente fundada pelos irmãos Pedro Elias e Lucas José. Criamos filmes para marcas, equipes e projetos que merecem ser vistos de outra forma — com identidade, intenção e uma visão cinematográfica."
              : "We're Pubird, an independent film production company founded by brothers Pedro Elias and Lucas José. We create films for brands, teams and projects that deserve to be seen differently — with identity, intention and a cinematic vision."}
          </p>

          <Link
            to="/who-is-pubird"
            className="group/link mt-8 inline-flex max-w-full items-center gap-3 border-b border-white/25 pb-3 text-[10px] uppercase tracking-[0.18em] text-white transition-colors hover:border-white sm:mt-10 sm:gap-4 sm:tracking-[0.22em] md:mt-12"
          >
            <span>
              {isPortuguese ? "Quem é a Pubird?" : "Who is Pubird?"}
            </span>

            <ArrowUpRight
              size={15}
              className="shrink-0 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
