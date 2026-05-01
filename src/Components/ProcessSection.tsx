const steps = [
    { number: "01", icon: "🔍", title: "Diagnóstico profundo", desc: "Mapeamos seu negócio, funis e identificamos os gargalos de crescimento." },
    { number: "02", icon: "📋", title: "Estratégia customizada", desc: "Criamos um roadmap específico para o seu estágio e mercado." },
    { number: "03", icon: "🚀", title: "Execução rápida", desc: "Implementamos campanhas, funis e automações com velocidade." },
    { number: "04", icon: "📈", title: "Otimização contínua", desc: "Medimos, testamos e otimizamos para multiplicar resultados." },
  ];
  
  const ProcessSection = () => {
    return (
      <section id="processo" className="scroll-mt-24 py-24 border-t border-border/20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-primary mb-4">Processo</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-foreground">
              Simples. Comprovado.<br/>
              <span className="text-gradient">Eficiente.</span>
            </h2>
          </div>
  
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative opacity-0 animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-primary/20 to-transparent" />
                )}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <span className="text-4xl font-extrabold text-primary/10 mb-2 block">{step.number}</span>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProcessSection;
  