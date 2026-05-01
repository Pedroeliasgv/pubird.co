import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden border-t border-border/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-primary mb-4">Próximo Passo</p>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-foreground mb-6">
              Descubra como escalar seu negócio
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Receba um diagnóstico profissional e personalizado. Sem compromisso. Sem surpresas.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-start mb-12">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">Análise customizada</p>
                <p className="text-sm text-muted-foreground">Específica para seu negócio</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">Plano de ação claro</p>
                <p className="text-sm text-muted-foreground">Próximos passos definidos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">Conversa com especialista</p>
                <p className="text-sm text-muted-foreground">Responda todas suas dúvidas</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" className="text-base font-semibold px-8 py-3 h-auto">
              Quero meu diagnóstico gratuito
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <p className="text-xs text-muted-foreground mt-4">⏱️ Leva menos de 5 minutos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
