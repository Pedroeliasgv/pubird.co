const problems = [
  { icon: "📊", text: "Você investe em marketing, mas não consegue rastrear o retorno.", label: "Sem visibilidade" },
  { icon: "🎲", text: "Seu crescimento depende mais de sorte do que de estratégia.", label: "Sem previsibilidade" },
  { icon: "💸", text: "Seus custos de aquisição estão altos e o ticket médio caiu.", label: "Margens apertadas" },
  { icon: "🔥", text: "A equipe fica presa em demandas urgentes, sem tempo para escalar.", label: "Operação reativa" },
];

const ProblemSection = () => {
  return (
    <section className="py-24 border-t border-border/20">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-primary mb-4">O Desafio</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-foreground mb-6">
            Se você se identifica com{" "}
            <span className="text-gradient">algum desses problemas</span>, é hora de agir
          </h2>
          <p className="text-lg text-muted-foreground">A maioria das empresas com faturamento de 70k+ está deixando dinheiro sobre a mesa.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 p-6 rounded-lg border border-border/40 bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex-shrink-0 text-3xl mt-0.5">{problem.icon}</div>
              <div className="flex-1">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{problem.label}</p>
                <p className="text-foreground/85 font-medium leading-relaxed">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
