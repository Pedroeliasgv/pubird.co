
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const languages: Record<Language, { label: string; flag: string; alt: string }> = {
  en: { label: "EN", flag: "/flags/us.svg", alt: "English" },
  pt: { label: "PT", flag: "/flags/br.svg", alt: "Português" },
};

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLanguageOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 88,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  const currentLanguage = languages[language];

  const navLinkClass =
    "whitespace-nowrap text-[10px] uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-white xl:text-[11px] xl:tracking-[0.3em]";

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          isScrolled
            ? "border-b border-white/5 bg-black/80 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1800px] items-center justify-between px-5 sm:h-20 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao início"
            className="shrink-0 transition-opacity hover:opacity-70"
          >
            <img
              src="/logo-pubird-icon.png"
              alt="Pubird"
              draggable={false}
              className="h-6 w-auto select-none sm:h-7"
            />
          </button>

          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            <Link to="/portfolio" className={navLinkClass}>
              {t.navbar.portfolio}
            </Link>

            <Link
              to="/who-is-pubird"
              className={navLinkClass}
            >
              WHO IS PUBIRD?!
            </Link>

            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className={navLinkClass}
            >
              {t.navbar.about}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("services")}
              className={navLinkClass}
            >
              {t.navbar.services}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className={navLinkClass}
            >
              {t.navbar.contact}
            </button>
          </div>

          <div className="flex shrink-0 items-center gap-4 sm:gap-6 lg:gap-7">
            <div className="relative hidden lg:block">
              <button
                type="button"
                aria-expanded={isLanguageOpen}
                onClick={() => setIsLanguageOpen((open) => !open)}
                className={`flex items-center gap-2 ${navLinkClass}`}
              >
                {currentLanguage.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 top-9 z-50 w-28 overflow-hidden rounded-xl border border-white/10 bg-black/95 backdrop-blur-xl">
                  {(["en", "pt"] as Language[]).map((lang) => (
                    <button
                      type="button"
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`flex w-full items-center justify-between px-4 py-3 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                        language === lang
                          ? "bg-white/5 text-white"
                          : "text-white/45 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{languages[lang].label}</span>
                      <img
                        src={languages[lang].flag}
                        alt={languages[lang].alt}
                        className="h-3.5 w-5 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={isMenuOpen}
              className="shrink-0 text-white transition-opacity hover:opacity-70 lg:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-[#050505] transition-opacity duration-300 ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex h-16 shrink-0 items-center justify-between px-5 sm:h-20 sm:px-8 md:px-12">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Pubird - início"
          >
            <img
              src="/logo-pubird-icon.png"
              alt="Pubird"
              draggable={false}
              className="h-6 w-auto sm:h-7"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
            className="p-2 text-white/70 transition-colors hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-5 pb-8 sm:px-8 md:px-12">
          <div className="my-auto w-full py-6">
            <Link
              to="/portfolio"
              onClick={() => setIsMenuOpen(false)}
              className="block border-b border-white/10 py-4 font-sequel text-[clamp(1.8rem,7vw,2.6rem)] font-light leading-tight tracking-[-0.05em] text-white transition-colors hover:text-white/60 sm:py-5"
            >
              {t.navbar.portfolio}
            </Link>

            <Link
              to="/who-is-pubird"
              onClick={() => setIsMenuOpen(false)}
              className="block border-b border-white/10 py-4 font-sequel text-[clamp(1.8rem,7vw,2.6rem)] font-light leading-tight tracking-[-0.05em] text-white transition-colors hover:text-white/60 sm:py-5"
            >
              WHO IS PUBIRD?!
            </Link>

            {(["about", "services", "contact"] as const).map((id) => (
              <button
                type="button"
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full border-b border-white/10 py-4 text-left font-sequel text-[clamp(1.8rem,7vw,2.6rem)] font-light leading-tight tracking-[-0.05em] text-white transition-colors hover:text-white/60 sm:py-5"
              >
                {t.navbar[id]}
              </button>
            ))}

            <div className="mt-8 flex items-center gap-6">
              {(["en", "pt"] as Language[]).map((lang) => (
                <button
                  type="button"
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  aria-pressed={language === lang}
                  className={`text-xs uppercase tracking-[0.3em] transition-colors ${
                    language === lang
                      ? "text-white"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {languages[lang].label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
