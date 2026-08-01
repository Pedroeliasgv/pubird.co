import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const languages: Record<
  Language,
  {
    label: string;
    flag: string;
    alt: string;
  }
> = {
  en: {
    label: "EN",
    flag: "/flags/us.svg",
    alt: "English",
  },

  pt: {
    label: "PT",
    flag: "/flags/br.svg",
    alt: "Português",
  },
};

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);

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

    const section = document.getElementById(id);

    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 90,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    setIsMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  const currentLanguage = languages[language];

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "border-b border-white/5 bg-black/60 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-8 md:px-12 lg:px-20">

          {/* Logo */}

          <button
            onClick={scrollToTop}
            className="transition duration-300 hover:opacity-70"
          >
            <img
              src="/logo-pubird-icon.png"
              alt="Pubird"
              draggable={false}
              className="h-7 w-auto select-none"
            />
          </button>

          {/* Desktop */}

          <div className="hidden items-center gap-14 lg:flex">

            <button
              onClick={() => scrollToSection("projects")}
              className="text-[11px] uppercase tracking-[0.35em] text-white/55 transition hover:text-white"
            >
              {t.navbar.portfolio}
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="text-[11px] uppercase tracking-[0.35em] text-white/55 transition hover:text-white"
            >
              {t.navbar.about}
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="text-[11px] uppercase tracking-[0.35em] text-white/55 transition hover:text-white"
            >
              {t.navbar.services}
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-[11px] uppercase tracking-[0.35em] text-white/55 transition hover:text-white"
            >
              {t.navbar.contact}
            </button>

          </div>

          {/* Right */}

          <div className="flex items-center gap-8">
            {/* Language */}

<div className="relative hidden lg:block">

  <button
    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
    className="flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-white/55 transition hover:text-white"
  >
    {currentLanguage.label}

    <ChevronDown
      size={14}
      className={`transition duration-300 ${
        isLanguageOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {isLanguageOpen && (

    <div className="absolute right-0 top-9 w-28 overflow-hidden rounded-xl border border-white/10 bg-black/95 backdrop-blur-xl">

      {(["en", "pt"] as Language[]).map((lang) => (

        <button
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

{/* Mobile Button */}

<button
  onClick={() => setIsMenuOpen(true)}
  className="text-white transition hover:opacity-70 lg:hidden"
>
  <Menu size={24} />
</button>

</div>

</div>

</nav>

{/* ================= MOBILE MENU ================= */}

<div
  className={`fixed inset-0 z-[60] bg-[#050505] transition-all duration-700 ${
    isMenuOpen
      ? "pointer-events-auto opacity-100"
      : "pointer-events-none opacity-0"
  }`}
>

  {/* Header */}

  <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-8 md:px-12 lg:px-20">

    <img
      src="/logo-pubird-icon.png"
      alt="Pubird"
      className="h-7 w-auto"
    />

    <button
      onClick={() => setIsMenuOpen(false)}
      className="text-white/70 transition hover:text-white"
    >
      <X size={24} />
    </button>

  </div>

  {/* Navigation */}

  <div className="flex h-[calc(100%-80px)] flex-col justify-center px-8 md:px-12">

    <button
      onClick={() => scrollToSection("projects")}
      className="border-b border-white/10 py-8 text-left font-sequel text-[42px] font-light tracking-[-0.05em] text-white transition duration-500 hover:translate-x-4"
    >
      {t.navbar.portfolio}
    </button>

    <button
      onClick={() => scrollToSection("about")}
      className="border-b border-white/10 py-8 text-left font-sequel text-[42px] font-light tracking-[-0.05em] text-white transition duration-500 hover:translate-x-4"
    >
      {t.navbar.about}
    </button>

    <button
      onClick={() => scrollToSection("services")}
      className="border-b border-white/10 py-8 text-left font-sequel text-[42px] font-light tracking-[-0.05em] text-white transition duration-500 hover:translate-x-4"
    >
      {t.navbar.services}
    </button>

    <button
      onClick={() => scrollToSection("contact")}
      className="border-b border-white/10 py-8 text-left font-sequel text-[42px] font-light tracking-[-0.05em] text-white transition duration-500 hover:translate-x-4"
    >
      {t.navbar.contact}
    </button>

    {/* Mobile Language */}

    <div className="mt-16 flex items-center gap-8">

      {(["en", "pt"] as Language[]).map((lang) => (

        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`text-sm uppercase tracking-[0.3em] transition ${
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

</>
);
};

export default Navbar;