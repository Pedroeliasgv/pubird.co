import {
  ArrowRight,
  Check,
  Cpu,
  LineChart,
  MousePointerClick,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const bullets = [
  "Entendemos o cenário atual e os principais gargalos.",
  "Definimos prioridades com base no que pode gerar retorno mais rápido.",
  "Executamos, medimos e ajustamos continuamente.",
];

const processCards = [
  {
    icon: Target,
    title: "Diagnóstico",
    desc: "Mapeamos dores, canais, oferta e oportunidades.",
  },
  {
    icon: Workflow,
    title: "Estratégia",
    desc: "Criamos um plano claro para aquisição e conversão.",
  },
  {
    icon: Zap,
    title: "Execução",
    desc: "Colocamos campanhas, páginas e processos para rodar.",
  },
  {
    icon: LineChart,
    title: "Escala",
    desc: "Otimizamos o que funciona e cortamos desperdícios.",
  },
];

const techStack = [
  { icon: Cpu, label: "IA" },
  { icon: MousePointerClick, label: "Tráfego" },
  { icon: Workflow, label: "Funil" },
  { icon: LineChart, label: "Dados" },
];

const ProcessSection = () => {
  const openDiagnosisModal = () => {
    window.dispatchEvent(new Event("open-diagnosis-modal"));
  };

  return (
    <section
      id="processo"
      className="relative overflow-hidden border-t border-border/20 py-28 md:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,hsl(var(--primary)/0.18),transparent_34%),radial-gradient(circle_at_10%_80%,rgba(168,85,247,0.10),transparent_35%)]" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/10 to-transparent" />

      <div className="section-container relative z-10 grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Processo Pubird
            </span>
          </div>

          <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-foreground md:text-6xl">
            Um processo claro para escalar com {" "}
            <span className="text-gradient">consistência.</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">
            Diagnóstico, estratégia, execução e otimização contínua. Sem ações soltas.
          </p>

          <div className="mt-9 space-y-5">
            {bullets.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 animate-fade-up"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-4 w-4" />
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
            className="group mt-10 h-auto rounded-full px-8 py-6 text-base font-semibold shadow-[0_0_45px_hsl(var(--primary)/0.3)]"
            onClick={openDiagnosisModal}
          >
            Solicitar diagnóstico
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-full bg-primary/10 blur-[120px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-card/60 p-6 shadow-[0_0_80px_rgba(139,92,246,0.16)] backdrop-blur-2xl">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />

            <div className="mb-7 flex items-center justify-between border-b border-border/30 pb-5">
              <div>
                <p className="text-sm font-bold text-foreground">
                  Growth System
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Caminho simples do diagnóstico à escala
                </p>
              </div>

              <img
                src="/logo-pubird-icon.png"
                alt="Pubird"
                className="h-12 w-auto drop-shadow-[0_0_28px_rgba(139,92,246,0.45)]"
              />
            </div>

            <div className="grid gap-4">
              {processCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="group rounded-3xl border border-border/40 bg-background/45 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_45px_rgba(139,92,246,0.18)] animate-fade-up"
                    style={{ animationDelay: `${index * 0.14}s` }}
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <p className="text-base font-extrabold text-foreground">
                          {String(index + 1).padStart(2, "0")} · {card.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {techStack.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center rounded-2xl border border-border/40 bg-background/40 p-4 text-center"
                  >
                    <Icon className="mb-2 h-5 w-5 text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
