import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SelectedWorksSection from "@/components/SelectedWorksSection";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <Navbar />

      <main>

        <HeroSection />

        <SelectedWorksSection />

        <AboutSection />

        <WhatWeDoSection />

      </main>

      <Footer />

    </div>
  );
};

export default Index;