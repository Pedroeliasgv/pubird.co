import {
  ArrowUp,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
} from "lucide-react";

import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#050505]"
    >
      <div className="mx-auto max-w-[1800px] px-8 py-32 md:px-12 lg:px-20">

        {/* Contact */}

        <div className="max-w-5xl">

          <p className="mb-6 text-[11px] uppercase tracking-[0.55em] text-white/25">
            {t.footer.title}
          </p>

          <a
            href="mailto:contato.pubird@gmail.com"
            className="group inline-flex items-center gap-5 font-sequel text-[42px] font-light tracking-[-0.05em] text-white transition hover:opacity-80 md:text-[64px]"
          >
            contato.pubird@gmail.com

            <ArrowUpRight
              size={26}
              className="transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </div>

        {/* Social */}

        <div className="mt-20 flex items-center gap-8">

          <a
            href="https://www.instagram.com/pubird.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 transition hover:text-white"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://www.linkedin.com/company/pubird/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 transition hover:text-white"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://www.youtube.com/channel/UCDvFPUspf01GBDcE8TMPUEg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 transition hover:text-white"
          >
            <Youtube size={20} />
          </a>

          <a
            href="mailto:contato.pubird@gmail.com"
            className="text-white/35 transition hover:text-white"
          >
            <Mail size={20} />
          </a>

        </div>
                {/* Bottom */}

        <div className="mt-28 border-t border-white/10 pt-10">

          <div className="flex flex-col items-center gap-10">

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.45em] text-white/55 transition hover:text-white"
            >
              <ArrowUp
                size={16}
                className="transition-transform duration-500 group-hover:-translate-y-1"
              />

              <span className="relative">

                {t.footer.backToTop}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    w-0
                    bg-white
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

              </span>

            </button>

            <img
              src="/logo-pubird-icon.png"
              alt="Pubird"
              draggable={false}
              className="h-8 w-auto opacity-40 transition duration-300 hover:opacity-70"
            />

            <span className="text-[10px] uppercase tracking-[0.45em] text-white/20">
              © {year} PUBIRD STUDIO · {t.footer.copyright}
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;