import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const openDiagnosisModal = () => {
    window.dispatchEvent(new Event("open-diagnosis-modal"));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="section-container flex items-center justify-between h-16">
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

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#servicos"
            className="text-sm font-medium text-muted-foreground hover:text-white transition"
          >
            {t.navbar.services}
          </a>

          <a
            href="#processo"
            className="text-sm font-medium text-muted-foreground hover:text-white transition"
          >
            {t.navbar.process}
          </a>

          <a
            href="#resultados"
            className="text-sm font-medium text-muted-foreground hover:text-white transition"
          >
            {t.navbar.results}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setLanguage("pt")}
              aria-label={t.navbar.portugueseAria}
              title="Português"
              className={`flex h-8 w-8 items-center justify-center rounded-full text-lg transition ${
                language === "pt"
                  ? "bg-white/15 shadow-[0_0_18px_rgba(139,92,246,0.45)]"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              🇧🇷
            </button>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label={t.navbar.englishAria}
              title="English"
              className={`flex h-8 w-8 items-center justify-center rounded-full text-lg transition ${
                language === "en"
                  ? "bg-white/15 shadow-[0_0_18px_rgba(139,92,246,0.45)]"
                  : "opacity-50 hover:opacity-100"
              }`}
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
            {t.navbar.diagnosis}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;