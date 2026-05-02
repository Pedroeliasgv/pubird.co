import {
  ArrowRight,
  BrainCircuit,
  Bot,
  Check,
  Cpu,
  Database,
  LineChart,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const bullets = [
  "Mapeamos onde você está perdendo dinheiro hoje — e corrigimos isso rápido.",
  "Estruturamos aquisição, funil e conversão como um sistema previsível.",
  "Transformamos dados em decisões que aumentam lucro, não só métricas.",
];

const aiTools = [
  { icon: Bot, label: "GPT", className: "left-[8%] top-[18%] h-28 w-28 md:h-32 md:w-32" },
  { icon: Sparkles, label: "Gemini", className: "right-[16%] top-[20%] h-24 w-24 md:h-28 md:w-28" },
  { icon: BrainCircuit, label: "AI", className: "left-[0%] top-[46%] h-20 w-20 md:h-24 md:w-24" },
  { icon: Database, label: "Data", className: "right-[0%] top-[42%] h-20 w-20 md:h-24 md:w-24" },
  { icon: Workflow, label: "Auto", className: "left-[14%] bottom-[8%] h-20 w-20 md:h-24 md:w-24" },
  { icon: LineChart, label: "Ads", className: "right-[13%] bottom-[10%] h-20 w-20 md:h-24 md:w-24" },
  { icon: Target, label: "CRM", className: "left-[43%] top-[2%] h-16 w-16 md:h-20 md:w-20" },
  { icon: Cpu, label: "Tech", className: "left-[46%] bottom-[0%] h-16 w-16 md:h-20 md:w-20" },
];

const ProcessSection = () => {
  return (
    <section
      id="processo"
      className="relative overflow-hidden border-t border-border/20 py-28 md:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,hsl(var(--primary)/0.18),transparent_34%),radial-gradient(circle_at_100%_80%,rgba(168,85,247,0.12),transparent_35%)]" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/10 to-transparent" />

      <div className="section-container relative z-10 grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary animate-fade-up">
            Inteligência Artificial e Tecnologia
          </p>

          <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-foreground md:text-6xl">
            Transformamos tráfego, dados e tecnologia em crescimento previsível.{" "}
            <span className="text-gradient">crescimento.</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">
            Não usamos ferramentas por usar. Criamos sistemas de aquisição e conversão
            que escalam com controle, previsibilidade e margem.
          </p>

          <div className="mt-9 space-y-5">
            {bullets.map((item) => (
              <div key={item} className="flex gap-3 animate-fade-up">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <p className="max-w-xl text-sm leading-6 text-muted-foreground md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <Button
              variant="hero"
              size="lg"
              className="group mt-10 h-auto rounded-full px-8 py-6 text-base font-semibold shadow-[0_0_45px_hsl(var(--primary)/0.3)] animate-fade-up"
              onClick={() => {
                window.dispatchEvent(new Event("open-diagnosis-modal"));
              }}
            >
            Saber mais
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-[620px]">
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[90px]" />

          <div className="absolute left-1/2 top-1/2 z-20 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/20 bg-foreground shadow-[0_0_80px_rgba(139,92,246,0.28)] md:h-52 md:w-52">
            <img
              src="/logo-pubird-icon.png"
              alt="Pubird"
              className="w-28 md:w-36 animate-float-soft"
            />
          </div>

          {aiTools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.label}
                className={`absolute z-10 ${tool.className}`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="group flex h-full w-full animate-float-soft flex-col items-center justify-center rounded-full border border-white/10 bg-card/80 shadow-[inset_0_0_0_10px_rgba(255,255,255,0.03),0_0_45px_rgba(139,92,246,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:bg-primary/15 hover:shadow-[0_0_55px_rgba(139,92,246,0.3)]">
                  <Icon className="h-8 w-8 text-primary md:h-10 md:w-10" />
                  <span className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                    {tool.label}
                  </span>
                </div>
              </div>
            );
          })}

          <div className="absolute left-1/2 top-1/2 h-[1px] w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[72%] w-[1px] -translate-y-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;