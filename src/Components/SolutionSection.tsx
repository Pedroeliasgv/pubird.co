import { BarChart3, Target, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: BarChart3,
    title: "Dados em tempo real",
    description: "Dashboard centralizado com KPIs do seu negócio. Nada de planilhas ou achismos. Dados que realmente importam.",
  },
  {
    icon: Target,
    title: "Estratégia personalizada",
    description: "Cada negócio é diferente. Criamos a máquina de crescimento específica para seu mercado, produto e estágio.",
  },
  {
    icon: TrendingUp,
    title: "Execução com foco em ROI",
    description: "Cada real investido é rastreado e otimizado. Crescimento sem desperdício. Resultados previsíveis.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 border-t border-border/20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-primary mb-4">A Diferença</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-foreground mb-6">
            Transforme marketing em<br/>
            <span className="text-gradient">receita previsível</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A Pubird cria máquinas de crescimento. Não campanhas isoladas. Sistemas que escalam.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((item, i) => {
            const Icon = item.icon;
            return (
            <div
              key={i}
              className="group flex flex-col p-8 rounded-xl border border-border/40 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">{item.description}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
