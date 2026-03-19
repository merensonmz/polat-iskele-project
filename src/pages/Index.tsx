import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import StatsSection from "@/components/StatsSection";
import ReferencesSection from "@/components/ReferencesSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyUsSection />
      <StatsSection />
      <ReferencesSection />
      <CTABanner />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
