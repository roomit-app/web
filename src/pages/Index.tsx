
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WaitlistSection from "@/components/WaitlistSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PasswordProtection from "@/components/PasswordProtection";

const Index = () => {
  return (
    <PasswordProtection>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <HowItWorksSection />
        <WaitlistSection />
        <FAQSection />
        <Footer />
      </div>
    </PasswordProtection>
  );
};

export default Index;
