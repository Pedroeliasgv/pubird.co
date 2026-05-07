const stats = [
  { value: "4.2M+", label: "Contas alcançadas" },
  { value: "72K+", label: "Receita gerada" },
  { value: "10x", label: "ROI médio" },
  { value: "150+", label: "Empresas atendidas" },
];

const clients = [
  "Vitor Becker",
  "Kibon",
  "Profeta Evanio Vale",
  "Sr. Souza",
  "IEADPE",
  "Gama Laser",
  "Léo Diniz",
];

const SocialProofSection = () => {
  return (
    <section
      id="resultados"
      className="scroll-mt-24 py-24 border-b border-border/20 overflow-hidden"
    >
      <div className="section-container text-center mb-14 animate-fade-up">
        <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-primary mb-4">
          Resultados comprovados
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Projetos construídos para {" "}
          <span className="text-gradient">crescimento real</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Campanhas, páginas e operações digitais aplicadas em negócios reais.
        </p>
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mt-16">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="marquee-wrapper">
          <div className="marquee-group">
            {stats.map((item) => (
              <div key={item.label} className="card-marquee">
                <p className="text-5xl font-extrabold text-gradient">
                  {item.value}
                </p>
                <span className="text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="marquee-group" aria-hidden="true">
            {stats.map((item) => (
              <div key={`${item.label}-copy`} className="card-marquee">
                <p className="text-5xl font-extrabold text-gradient">
                  {item.value}
                </p>
                <span className="text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container text-center mt-20">
        <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-muted-foreground mb-8">
          Empresas e projetos atendidos
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="rounded-full border border-border/40 bg-card/50 px-5 py-3 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
