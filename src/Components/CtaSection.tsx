import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Análise objetiva",
    desc: "Entendemos seu cenário sem enrolação.",
  },
  {
    title: "Próximos passos claros",
    desc: "Você entende onde agir primeiro.",
  },
  {
    title: "Contato direto",
    desc: "Uma conversa prática com visão estratégica.",
  },
];

const CtaSection = () => {
  const openDiagnosisModal = () => {
    window.dispatchEvent(new Event("open-diagnosis-modal"));
  };

  return (
    <section className="relative overflow-hidden border-t border-border/20 py-28 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,hsl(var(--primary)/0.18),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(168,85,247,0.12),transparent_35%)]" />
      <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px] animate-pulse" />

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-primary/20 bg-card/60 p-8 shadow-[0_0_80px_rgba(139,92,246,0.16)] backdrop-blur-2xl md:p-12 animate-glow">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Próximo passo
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-foreground md:text-6xl">
              Vamos analisar o potencial do {" "}
              <span className="text-gradient">seu negócio.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Receba uma análise rápida e descubra os próximos passos para escalar.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {benefits.map((item, index) => (
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

          <div className="mt-12 flex flex-col items-center justify-center gap-5 text-center">
            <Button
              variant="hero"
              size="lg"
              onClick={openDiagnosisModal}
              className="group h-auto rounded-full px-9 py-6 text-base font-bold shadow-[0_0_45px_rgba(139,92,246,0.35)] transition duration-300 hover:scale-[1.03]"
            >
              Solicitar diagnóstico
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </Button>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              Leva menos de 5 minutos para solicitar.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
