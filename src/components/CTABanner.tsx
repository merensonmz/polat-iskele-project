import { motion } from "framer-motion";
import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-surface-dark-foreground mb-6">
          Projeniz İçin Güvenilir İskele Çözümü Mü Arıyorsunuz?
        </h2>
        <p className="text-surface-dark-foreground/70 text-lg mb-10 leading-relaxed">
          Polat İskele ile hemen iletişime geçin, projenize en uygun sistemi birlikte planlayalım.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base px-8">
            <Phone className="w-5 h-5" />
            Hemen Ara
          </Button>
          <Button size="lg" variant="outline" className="border-surface-dark-foreground/30 text-surface-dark-foreground hover:bg-surface-dark-foreground/10 gap-2 text-base px-8">
            <FileText className="w-5 h-5" />
            Teklif Talep Et
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
