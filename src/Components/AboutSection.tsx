const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#050505] py-52"
    >
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-24 px-8 md:px-12 lg:grid-cols-2 lg:px-20">

        {/* Image */}

        <div className="group overflow-hidden">

          <img
            src="/founders.jpg"
            alt="Pubird Founders"
            className="aspect-[4/5] w-full object-cover grayscale transition-all duration-[1800ms] group-hover:scale-[1.03] group-hover:grayscale-0"
          />

        </div>

        {/* Content */}

        <div>

          <p className="text-[11px] uppercase tracking-[0.55em] text-white/30">

            WHO WE ARE

          </p>

          <h2 className="mt-8 font-sequel text-[42px] font-light leading-[0.92] tracking-[-0.05em] text-white md:text-[64px] lg:text-[86px]">

            We don't just
            <br />
            make videos.

          </h2>

          <p className="mt-10 max-w-xl text-lg leading-9 text-white/55">

            Pubird is an independent creative studio focused on cinematic storytelling.
            Every frame is designed with intention, emotion and visual precision.
            We create films that strengthen brands, tell authentic stories and leave
            a lasting impression.

          </p>

          <div className="mt-16 h-px w-24 bg-white/10" />

          <div className="mt-12 flex flex-wrap gap-10">

            <span className="text-[11px] uppercase tracking-[0.45em] text-white/35">
              Brand Films
            </span>

            <span className="text-[11px] uppercase tracking-[0.45em] text-white/35">
              Commercials
            </span>

            <span className="text-[11px] uppercase tracking-[0.45em] text-white/35">
              Documentary
            </span>

            <span className="text-[11px] uppercase tracking-[0.45em] text-white/35">
              Automotive
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;