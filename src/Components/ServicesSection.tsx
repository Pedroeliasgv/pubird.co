import {
  Megaphone,
  MousePointerClick,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceIcons = [Megaphone, MousePointerClick, Workflow, Sparkles];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="servicos"
      className="scroll-mt-24 py-24 border-t border-border/20"
    >
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-primary mb-4">
            {t.services.eyebrow}
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-foreground">
            {t.services.titleStart}{" "}
            <span className="text-gradient">{t.services.titleHighlight}</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[i];

            return (
              <div
                key={service.title}
                className="group flex h-full flex-col rounded-3xl border border-border/40 bg-card/55 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_45px_rgba(139,92,246,0.18)] animate-fade-up"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition group-hover:scale-110 group-hover:bg-primary/20">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-extrabold text-foreground">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;