import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react";

const languages = {
  pt: {
    label: "Português",
    flag: "/flags/br.svg",
    alt: "Bandeira do Brasil",
  },
  en: {
    label: "English",
    flag: "/flags/us.svg",
    alt: "United States flag",
  },
};

type LanguageKey = keyof typeof languages;

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const openDiagnosisModal = () => {
    window.dispatchEvent(new Event("open-diagnosis-modal"));
  };

  const currentLanguage = languages[language as LanguageKey];

  const handleLanguageChange = (selectedLanguage: LanguageKey) => {
    setLanguage(selectedLanguage);
    setIsLanguageOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label={t.navbar.homeAria}
        >
          <img
            src="/logo-pubird-icon.png"
            alt="Pubird"
            className="h-10 w-auto drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#servicos"
            className="text-sm font-medium text-muted-foreground transition hover:text-white"
          >
            {t.navbar.services}
          </a>

          <a
            href="#processo"
            className="text-sm font-medium text-muted-foreground transition hover:text-white"
          >
            {t.navbar.process}
          </a>

          <a
            href="#resultados"
            className="text-sm font-medium text-muted-foreground transition hover:text-white"
          >
            {t.navbar.results}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLanguageOpen((prev) => !prev)}
              aria-label="Selecionar idioma"
              aria-expanded={isLanguageOpen}
              className="flex h-9 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 text-sm font-medium text-white backdrop-blur-xl transition hover:border-primary/40 hover:bg-primary/10"
            >
              <img
                src={currentLanguage.flag}
                alt={currentLanguage.alt}
                className="h-4 w-6 rounded-sm object-cover"
              />

              <span className="hidden sm:inline">
                {currentLanguage.label}
              </span>

              <ChevronDown
                className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 top-11 z-50 w-40 overflow-hidden rounded-lg border border-white/10 bg-background/95 p-1 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <button
                  type="button"
                  onClick={() => handleLanguageChange("pt")}
                  className={`flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm transition ${
                    language === "pt"
                      ? "bg-primary/15 text-white"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <img
                    src="/flags/br.svg"
                    alt="Bandeira do Brasil"
                    className="h-4 w-6 rounded-sm object-cover"
                  />

                  <span>Português</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleLanguageChange("en")}
                  className={`flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm transition ${
                    language === "en"
                      ? "bg-primary/15 text-white"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <img
                    src="/flags/us.svg"
                    alt="United States flag"
                    className="h-4 w-6 rounded-sm object-cover"
                  />

                  <span>English</span>
                </button>
              </div>
            )}
          </div>

          <Button
            variant="hero"
            size="sm"
            className="hidden h-auto px-5 py-2 text-sm font-semibold shadow-[0_0_25px_rgba(139,92,246,0.4)] sm:inline-flex"
            onClick={openDiagnosisModal}
          >
            {t.navbar.diagnosis}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;