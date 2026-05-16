import { useLanguage } from "@/i18n/LanguageContext";

const clients = [
  "Vitor Becker",
  "Kibon",
  "Profeta Evanio Vale",
  "Sr. Souza",
  "IEADPE",
  "Gama Laser",
  "DSM Multimarcas",
  "Léo Diniz",
];

const featuredClients = [
  "Profeta Evanio Vale",
  "Vitor Becker",
  "Kibon",
  "Gama Laser",
  "DSM Multimarcas",
];

const SocialProofSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="resultados"
      className="scroll-mt-24 py-24 border-b border-border/20 overflow-hidden"
    >
      <div className="section-container text-center mb-14 animate-fade-up">
        <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-primary mb-4">
          {t.socialProof.eyebrow}
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          {t.socialProof.titleStart}{" "}
          <span className="text-gradient">{t.socialProof.titleHighlight}</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          {t.socialProof.subtitle}
        </p>
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mt-16">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="marquee-wrapper">
          <div className="marquee-group">
            {t.socialProof.stats.map((item) => (
              <div key={item.label} className="card-marquee">
                <p className="text-5xl font-extrabold text-gradient">
                  {item.value}
                </p>
                <span className="text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="marquee-group" aria-hidden="true">
            {t.socialProof.stats.map((item) => (
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
          {t.socialProof.clientsTitle}
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {clients.map((client) => {
            const isFeatured = featuredClients.includes(client);

            return (
              <div
                key={client}
                className={`
                  rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300
                  ${
                    isFeatured
                      ? "border border-primary/40 bg-primary/10 text-foreground shadow-[0_0_35px_rgba(139,92,246,0.18)]"
                      : "border border-border/40 bg-card/50 text-muted-foreground hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                  }
                `}
              >
                {client}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;