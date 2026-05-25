import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CtaSection = () => {
  const { t } = useLanguage();

  const openDiagnosisModal = () => {
    window.dispatchEvent(new Event("open-diagnosis-modal"));
  };

  return (
    <section className="relative overflow-hidden border-t border-border/20 py-28 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,hsl(var(--primary)/0.18),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(168,85,247,0.12),transparent_35%)]" />
      <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-primary/20 bg-card/60 shadow-[0_0_90px_rgba(139,92,246,0.16)] backdrop-blur-2xl">
          <div className="relative p-8 md:p-12 lg:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center animate-fade-up">
              <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.24em] text-primary">
                {t.cta.eyebrow}
              </p>

              <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-foreground md:text-6xl">
                {t.cta.titleStart}{" "}
                <span className="text-gradient">{t.cta.titleHighlight}</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {t.cta.subtitle}
              </p>
            </div>

            <div className="relative mt-12 grid gap-4 md:grid-cols-3">
              {t.cta.benefits.map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-border/40 bg-background/45 p-6 text-left backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_45px_rgba(139,92,246,0.18)] animate-fade-up"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition group-hover:scale-110 group-hover:bg-primary/20">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <h3 className="text-base font-extrabold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-12 flex flex-col items-center justify-center gap-5 text-center">
              <Button
                variant="hero"
                size="lg"
                onClick={openDiagnosisModal}
                className="group relative h-auto overflow-hidden rounded-full border border-primary/30 px-10 py-6 text-base font-extrabold shadow-[0_0_55px_rgba(139,92,246,0.35)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_75px_rgba(139,92,246,0.48)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition duration-500 group-hover:translate-x-full group-hover:opacity-100" />

                <span className="relative flex items-center">
                  {t.cta.button}
                  <ArrowRight className="ml-2 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                </span>
              </Button>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>{t.cta.timeText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;