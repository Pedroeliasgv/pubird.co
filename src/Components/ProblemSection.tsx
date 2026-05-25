import {
  AlertTriangle,
  BarChart3,
  TrendingDown,
  Workflow,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const problemIcons = [BarChart3, TrendingDown, AlertTriangle, Workflow];

const ProblemSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-28 border-t border-border/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.14),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(168,85,247,0.10),transparent_35%)]" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

      <div className="section-container relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-up">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.24em] text-primary">
            {t.problem.eyebrow}
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-[-0.04em] text-foreground">
            {t.problem.titleStart}{" "}
            <span className="text-gradient">{t.problem.titleHighlight}</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t.problem.subtitle}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {t.problem.items.map((problem, i) => {
            const Icon = problemIcons[i];

            return (
              <div
                key={problem.label}
                className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card/55 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_55px_rgba(139,92,246,0.22)] animate-fade-up"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />

                <div className="relative z-10 flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_0_35px_rgba(139,92,246,0.16)] transition group-hover:scale-110 group-hover:bg-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-primary">
                      {problem.label}
                    </p>

                    <h3 className="text-xl font-extrabold leading-snug text-foreground">
                      {problem.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {problem.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;