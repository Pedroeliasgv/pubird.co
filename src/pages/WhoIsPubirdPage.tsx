
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WhoIsPubirdPage = () => {
  const { language } = useLanguage();
  const isPortuguese = language === "pt";
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#050505] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8 lg:px-16">
        <button
          type="button"
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/");
            }
          }}
          className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          {isPortuguese ? "Voltar" : "Go back"}
        </button>

        <Link
          to="/"
          className="font-sequel text-sm tracking-[0.15em] transition-opacity hover:opacity-60"
        >
          PUBIRD
        </Link>
      </header>

      {/* Main content */}
      <section className="flex flex-1 flex-col justify-center px-6 pb-24 pt-16 md:px-12 md:pb-32 md:pt-20 lg:px-16">
        <article className="mx-auto w-full max-w-6xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-8 bg-white/50" />
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/45">
              Independent Film Production
            </p>
          </div>

          <h1 className="font-sequel text-[clamp(3.5rem,10vw,9rem)] font-light leading-[0.82] tracking-[-0.075em]">
            WHO IS
            <br />
            PUBIRD<span className="text-white/35">?!</span>
          </h1>

          <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-[1fr_2fr] md:gap-16 lg:gap-28">
            <div className="hidden md:block">
              <p className="max-w-[180px] text-[10px] uppercase leading-6 tracking-[0.22em] text-white/35">
                {isPortuguese
                  ? "Uma produtora independente. Uma visão própria."
                  : "An independent production. A vision of our own."}
              </p>
            </div>

            <div className="space-y-8 text-base leading-8 text-white/60 md:text-lg md:leading-9">
              {isPortuguese ? (
                <>
                  <p>
                    Somos a Pubird. Uma produtora audiovisual independente
                    fundada pelos irmãos Pedro Elias e Lucas José.
                  </p>

                  <p>
                    Trabalhamos com projetos automotivos, ação e esporte,
                    criando filmes para marcas, equipes e pessoas com algo que
                    vale a pena mostrar ao mundo. Da primeira ideia ao corte
                    final, estamos envolvidos em cada etapa do processo,
                    sempre buscando a história certa, a sensação certa e
                    aquele take que faz tudo se encaixar.
                  </p>

                  <p>
                    Para nós, fazer filmes vai além de apontar uma câmera e
                    apertar REC. É o ronco de um motor, a poeira voando numa
                    especial de rally, os detalhes que a maioria não percebe
                    e os momentos que fazem você parar e assistir de novo.
                    É isso que nos move a criar filmes que não apenas mostram
                    algo, mas fazem você sentir.
                  </p>

                  <p>
                    Não estamos aqui para fazer sempre a mesma coisa. Cada
                    projeto é uma oportunidade de explorar novas ideias,
                    evoluir nosso trabalho e criar algo que tenhamos orgulho
                    de assinar. Estamos construindo a Pubird filme por filme,
                    trabalhando com pessoas que compartilham dessa mesma
                    vontade.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    We're Pubird. An independent film production company
                    founded by brothers Pedro Elias and Lucas José.
                  </p>

                  <p>
                    We work across automotive, action and sports, creating
                    films for brands, teams and people with something worth
                    showing the world. From the first idea to the final cut,
                    we're involved in every step of the process, always
                    looking for the right story, the right feeling and the
                    shot that makes it all come together.
                  </p>

                  <p>
                    For us, filmmaking is more than pointing a camera and
                    pressing record. It's the roar of an engine, the dust
                    flying across a rally stage, the details most people
                    miss and the moments that make you stop and watch again.
                    That's what drives us to create films that don't just
                    show something, but make you feel it.
                  </p>

                  <p>
                    We're not here to do the same thing over and over. Every
                    project is a chance to explore new ideas, push our craft
                    further and create something we're proud to put our name
                    on. We're building Pubird one film at a time, working
                    with people who share that same drive.
                  </p>
                </>
              )}

              <div className="!mt-14 border-t border-white/15 pt-8 md:!mt-20 md:pt-10">
                <p className="max-w-2xl font-sequel text-2xl leading-snug tracking-[-0.04em] text-white md:text-4xl md:leading-tight">
                  {isPortuguese
                    ? "Somos Pedro Elias e Lucas José. E esta é a Pubird."
                    : "We're Pedro Elias and Lucas José. And This is Pubird."}
                </p>
              </div>

              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 pt-4 text-[10px] uppercase tracking-[0.22em] text-white/65 transition hover:text-white"
              >
                {isPortuguese ? "Explore nossos filmes" : "Explore our films"}
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-6 md:px-12 lg:px-16">
        <div className="flex flex-col gap-4 text-[9px] uppercase tracking-[0.16em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="font-sequel tracking-[0.15em] text-white/65 transition hover:text-white"
          >
            PUBIRD®
          </Link>

          <p>
            © {new Date().getFullYear()} Pubird.{" "}
            {isPortuguese
              ? "Todos os direitos reservados."
              : "All rights reserved."}
          </p>

          <Link
            to="/portfolio"
            className="transition hover:text-white"
          >
            {isPortuguese ? "Portfólio" : "Portfolio"}
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default WhoIsPubirdPage;
