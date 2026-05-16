import { Button } from "@/components/ui/button";
import { useState } from "react";

const translations = {
  pt: {
    services: "Serviços",
    process: "Processo",
    results: "Resultados",
    diagnosis: "Solicitar diagnóstico",
    ariaHome: "Voltar ao início",
  },
  en: {
    services: "Services",
    process: "Process",
    results: "Results",
    diagnosis: "Request diagnosis",
    ariaHome: "Back to home",
  },
};

type Language = "pt" | "en";

const Navbar = () => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = translations[language];

  const openDiagnosisModal = () => {
    window.dispatchEvent(new Event("open-diagnosis-modal"));
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("pubird-language", lang);

    window.dispatchEvent(
      new CustomEvent("language-change", {
        detail: { language: lang },
      })
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3" aria-label={t.ariaHome}>
          <img
            src="/logo-pubird-icon.png"
            alt="Pubird"
            className="h-10 w-auto drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#servicos"
            className="text-sm font-medium text-muted-foreground hover:text-white transition"
          >
            {t.services}
          </a>

          <a
            href="#processo"
            className="text-sm font-medium text-muted-foreground hover:text-white transition"
          >
            {t.process}
          </a>

          <a
            href="#resultados"
            className="text-sm font-medium text-muted-foreground hover:text-white transition"
          >
            {t.results}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => changeLanguage("pt")}
              className={`h-8 w-8 rounded-full text-lg transition ${
                language === "pt"
                  ? "bg-white/15 shadow-[0_0_15px_rgba(139,92,246,0.35)]"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-label="Alterar idioma para português"
              title="Português"
            >
              🇧🇷
            </button>

            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className={`h-8 w-8 rounded-full text-lg transition ${
                language === "en"
                  ? "bg-white/15 shadow-[0_0_15px_rgba(139,92,246,0.35)]"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-label="Change language to English"
              title="English"
            >
              🇺🇸
            </button>
          </div>

          <Button
            variant="hero"
            size="sm"
            className="hidden sm:inline-flex text-sm font-semibold px-5 py-2 h-auto shadow-[0_0_25px_rgba(139,92,246,0.4)]"
            onClick={openDiagnosisModal}
          >
            {t.diagnosis}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;