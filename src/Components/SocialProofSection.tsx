const stats = [
  { value: "4.2M+", label: "Contas alcançadas" },
  { value: "2.1M+", label: "Engajamento", unit: "reais em receita gerada" },
  { value: "150+", label: "Clientes" },
  { value: "10x", label: "ROI médio" },
];

const clients = ["Pr. Alexandre Meneghini", "Profeta Evanio Vale", "VortexAI", "Growthly", "NeoPay"];

const SocialProofSection = () => {
  return (
    <section id="resultados" className="scroll-mt-24 py-24 border-b border-border/20">
      <div className="section-container">
        {/* Stats */}
        <div className="mb-20">
          <p className="text-xs md:text-sm uppercase tracking-widest font-600 text-primary mb-12 text-center">Resultados Comprovados</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">{stat.value}</p>
                <p className="text-sm font-600 text-muted-foreground mb-1">{stat.label}</p>
                {stat.unit && <p className="text-xs text-muted-foreground/70">{stat.unit}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div className="text-center">
          <p className="text-xs md:text-sm uppercase tracking-widest font-600 text-muted-foreground mb-8">
            Empresas que confiam na Pubird
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {clients.map((client, i) => (
              <div
                key={i}
                className="text-sm md:text-base font-600 text-muted-foreground/60 hover:text-muted-foreground/100 transition-colors duration-300"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;