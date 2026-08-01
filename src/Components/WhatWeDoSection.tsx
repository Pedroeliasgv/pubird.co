import { useLanguage } from "@/i18n/LanguageContext";

const WhatWeDoSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="bg-[#050505] py-52"
    >
      <div className="mx-auto max-w-[1800px] px-8 md:px-12 lg:px-20">

        {/* Header */}

        <div className="mb-28">

          <p className="text-[11px] uppercase tracking-[0.55em] text-white/30">
            {t.services.eyebrow}
          </p>

          <h2 className="mt-8 font-sequel text-[48px] font-light leading-[0.92] tracking-[-0.05em] text-white md:text-[72px] lg:text-[100px]">
            {t.services.title}
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/45">
            {t.services.subtitle}
          </p>

        </div>

        {/* Services */}

        <div className="border-t border-white/10">

          {t.services.items.map((service) => (

            <div
              key={service.number}
              className="grid grid-cols-1 gap-8 border-b border-white/10 py-12 transition duration-500 hover:bg-white/[0.02] md:grid-cols-[120px_1fr_420px]"
            >

              <span className="text-sm tracking-[0.35em] text-white/30">
                {service.number}
              </span>

              <h3 className="font-sequel text-[34px] font-light text-white md:text-[44px]">
                {service.title}
              </h3>

              <p className="leading-8 text-white/50">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhatWeDoSection;