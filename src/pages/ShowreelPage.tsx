
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const ShowreelPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Cabeçalho */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto flex max-w-[1800px] items-center justify-between px-8 py-8 md:px-12 lg:px-20"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-3 border border-white/15 px-5 py-4 text-[10px] uppercase tracking-[0.25em] text-white/65 transition hover:border-white hover:bg-white hover:text-black"
        >
          <ArrowLeft size={14} />
          {language === "pt" ? "Voltar para a Home" : "Back to Home"}
        </Link>

        <Link
          to="/"
          className="text-[10px] uppercase tracking-[0.35em] text-white/40 transition hover:text-white"
        >
          PUBIRD
        </Link>
      </motion.header>

      {/* Apresentação do showreel */}
      <section className="mx-auto max-w-[1800px] px-8 pb-24 pt-12 md:px-12 md:pb-32 md:pt-20 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/35">
            PUBIRD ORIGINAL FILM · 001
          </p>

          <h1 className="mt-6 font-sequel text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-[110px]">
            WHO IS
            <br />
            <span className="text-white/40">PUBIRD?!</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            {language === "pt"
              ? "Conheça a visão, o processo criativo e as histórias por trás das produções da Pubird. Cada frame faz parte de algo maior."
              : "Discover the vision, creative process and stories behind Pubird productions. Every frame is part of something bigger."}
          </p>
        </motion.div>

        {/* Player do YouTube */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-12 aspect-video w-full overflow-hidden bg-black md:mt-16"
        >
          <iframe
            src="https://www.youtube-nocookie.com/embed/AF4Y-mASgio?rel=0"
            title="Showreel — Who is Pubird?!"
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </motion.div>

        {/* Informações e contato */}
        <div className="mt-8 flex flex-col justify-between gap-5 border-b border-white/10 pb-10 md:flex-row md:items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/35">
              THIS IS HOW WE SEE IT.
            </p>

            <p className="mt-3 text-sm text-white/55">
              Automotive · Action · Sports
            </p>
          </div>

          <a
            href="https://www.instagram.com/pubird.br/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-3 border border-white/20 px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-white/75 transition hover:border-white hover:bg-white hover:text-black"
          >
            {language === "pt" ? "Fale com a Pubird" : "Contact Pubird"}
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Retorno para a Home */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40 transition hover:text-white"
          >
            <ArrowLeft size={14} />
            {language === "pt" ? "Voltar para a Home" : "Back to Home"}
          </Link>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-white/10 px-8 py-7 text-[9px] uppercase tracking-[0.3em] text-white/30 md:px-12 lg:px-20">
        © {new Date().getFullYear()} PUBIRD FILM PRODUCTION
      </footer>
    </main>
  );
};

export default ShowreelPage;
