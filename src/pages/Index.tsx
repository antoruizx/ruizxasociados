import { LanguageProvider } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
};

export default Index;
