
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { language } = useLanguage();
  const isPortuguese = language === "pt";

  return (
    <section
      id="about"
      className="bg-[#050505] py-28 md:py-36 lg:py-44"
    >
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-12 px-6 sm:px-8 md:px-12 lg:grid-cols-2 lg:gap-20 lg:px-20 xl:gap-28">

        {/* Founders image */}
        <div className="group relative overflow-hidden">
          <img
            src="/founders.jpg"
            alt="Pedro Elias e Lucas José, fundadores da Pubird"
            className="aspect-[4/5] w-full object-cover grayscale transition-all duration-[1200ms] group-hover:scale-[1.03] group-hover:grayscale-0"
            loading="lazy"
          />
        </div>

        {/* About content */}
        <div className="py-4 lg:py-10">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 md:text-[11px] md:tracking-[0.5em]">
            {isPortuguese ? "Sobre a Pubird" : "About Pubird"}
          </p>

          <h2 className="mt-7 max-w-3xl font-sequel text-[clamp(2.5rem,5.5vw,5.5rem)] font-light leading-[0.92] tracking-[-0.06em] text-white">
            WE MAKE FILMS.
            <br />
            NOT JUST CONTENT.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/60 md:mt-10 md:text-lg md:leading-9">
            {isPortuguese
              ? "Somos a Pubird, uma produtora independente fundada pelos irmãos Pedro Elias e Lucas José. Criamos filmes para marcas, equipes e projetos que merecem ser vistos de outra forma — com identidade, intenção e uma visão cinematográfica."
              : "We're Pubird, an independent film production company founded by brothers Pedro Elias and Lucas José. We create films for brands, teams and projects that deserve to be seen differently — with identity, intention and a cinematic vision."}
          </p>

          <Link
            to="/who-is-pubird"
            className="group/link mt-10 inline-flex items-center gap-4 border-b border-white/25 pb-3 text-[10px] uppercase tracking-[0.22em] text-white transition-colors hover:border-white md:mt-12"
          >
            {isPortuguese ? "Quem é a Pubird?" : "Who is Pubird?"}

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
