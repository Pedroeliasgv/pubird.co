
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

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 90,
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
    "text-[11px] uppercase tracking-[0.35em] text-white/55 transition hover:text-white";

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "border-b border-white/5 bg-black/70 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-8 md:px-12 lg:px-20">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao início"
            className="transition duration-300 hover:opacity-70"
          >
            <img
              src="/logo-pubird-icon.png"
              alt="Pubird"
              draggable={false}
              className="h-7 w-auto select-none"
            />
          </button>

          <div className="hidden items-center gap-10 lg:flex xl:gap-14">
            <Link to="/portfolio" className={navLinkClass}>
              {t.navbar.portfolio}
            </Link>

            <button onClick={() => scrollToSection("about")} className={navLinkClass}>
              {t.navbar.about}
            </button>

            <button onClick={() => scrollToSection("services")} className={navLinkClass}>
              {t.navbar.services}
            </button>

            <button onClick={() => scrollToSection("contact")} className={navLinkClass}>
              {t.navbar.contact}
            </button>
          </div>

          <div className="flex items-center gap-8">
            <div className="relative hidden lg:block">
              <button
                type="button"
                onClick={() => setIsLanguageOpen((open) => !open)}
                className={`flex items-center gap-2 ${navLinkClass}`}
              >
                {currentLanguage.label}
                <ChevronDown
                  size={14}
                  className={`transition duration-300 ${isLanguageOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 top-9 w-28 overflow-hidden rounded-xl border border-white/10 bg-black/95 backdrop-blur-xl">
                  {(["en", "pt"] as Language[]).map((lang) => (
                    <button
                      type="button"
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`flex w-full items-center justify-between px-4 py-3 text-[11px] uppercase tracking-[0.25em] transition ${
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
              className="text-white transition hover:opacity-70 lg:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-[#050505] transition-all duration-500 ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-8 md:px-12">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src="/logo-pubird-icon.png" alt="Pubird" className="h-7 w-auto" />
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
            className="text-white/70 transition hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex h-[calc(100%-80px)] flex-col justify-center overflow-y-auto px-8 md:px-12">
          <Link
            to="/portfolio"
            onClick={() => setIsMenuOpen(false)}
            className="border-b border-white/10 py-6 font-sequel text-4xl font-light tracking-[-0.05em] text-white transition duration-300 hover:translate-x-2 md:py-8 md:text-[42px]"
          >
            {t.navbar.portfolio}
          </Link>

          {(["about", "services", "contact"] as const).map((id) => (
            <button
              type="button"
              key={id}
              onClick={() => scrollToSection(id)}
              className="border-b border-white/10 py-6 text-left font-sequel text-4xl font-light tracking-[-0.05em] text-white transition duration-300 hover:translate-x-2 md:py-8 md:text-[42px]"
            >
              {t.navbar[id]}
            </button>
          ))}

          <div className="mt-12 flex items-center gap-8">
            {(["en", "pt"] as Language[]).map((lang) => (
              <button
                type="button"
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`text-sm uppercase tracking-[0.3em] transition ${
                  language === lang ? "text-white" : "text-white/40 hover:text-white"
                }`}
              >
                {languages[lang].label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
