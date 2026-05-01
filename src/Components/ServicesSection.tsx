import { Megaphone, Users, BarChart4, Zap } from "lucide-react";

const services = [
  { icon: Megaphone, title: "Tráfego Pago", desc: "Campanhas otimizadas em Google Ads, Meta Ads e TikTok. Cada real gera retorno.", features: ["Setup especializado", "Otimização contínua", "Relatórios detalhados"] },
  { icon: Users, title: "Gestão e Atendimento", desc: "Processos que escalam. Sistemas de automação e CRM que capturam leads.", features: ["Automação de funis", "CRM integrado", "Chat estratégico"] },
  { icon: BarChart4, title: "Dashboard de Dados", desc: "Visualize tudo em um só lugar. Métricas reais. Decisões baseadas em dados.", features: ["Relatórios live", "KPIs customizados", "Projeções de ROI"] },
  { icon: Zap, title: "Automação de Processos", desc: "Escale sem aumentar custos. Processos automatizados e sistemáticos.", features: ["Workflows automáticos", "Integrações API", "Escalas lineares"] },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="scroll-mt-24 py-24 border-t border-border/20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-primary mb-4">Serviços</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-foreground">
            Tudo que você precisa para
            <br/>
            <span className="text-gradient">escalar rapidamente</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
            <div
              key={i}
              className="group flex flex-col h-full p-6 rounded-xl border border-border/40 bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{service.desc}</p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
