import { motion } from "framer-motion";
import { Phone, FileText, Shield, Users, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-scaffolding.jpg";

const badges = [
  { icon: Shield, label: "Güvenli Sistemler" },
  { icon: Users, label: "Uzman Ekip" },
  { icon: Zap, label: "Hızlı Kurulum" },
  { icon: Award, label: "Kaliteli Malzeme" },
];

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center pt-20">
    <div className="absolute inset-0">
      <img src={heroImg} alt="İnşaat iskelesi" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1.5 rounded-sm mb-6">
          Güvenlik & Kalite Önceliğimiz
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground mb-6">
          İnşaat İskelelerinde{" "}
          <span className="text-accent">Güvenli</span> ve Profesyonel Çözümler
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed">
          Polat İskele olarak projelerinize güvenli, dayanıklı ve kaliteli iskele sistemleri sunuyoruz. Uzman ekibimizle hızlı kurulum, güçlü destek ve müşteri memnuniyeti odaklı hizmet sağlıyoruz.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base px-8">
            <Phone className="w-5 h-5" />
            Hemen Ara
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 text-base px-8">
            <FileText className="w-5 h-5" />
            Teklif Al
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-sm px-4 py-3"
            >
              <b.icon className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm font-medium text-primary-foreground">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
