import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/optimized/hakkimizda-iskele.jpeg";

const highlights = [
  "Güvenilir Hizmet",
  "Kaliteli Ekipman",
  "Zamanında Teslimat",
];

const AboutSection = () => (
  <section id="hakkimizda" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={aboutImg}
            alt="Polat İskele hakkında"
            className="w-full rounded-sm shadow-2xl object-cover aspect-[4/3]"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-sm hidden lg:flex items-center justify-center">
            <span className="font-display text-2xl font-extrabold text-accent-foreground">15+</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Hakkımızda</span>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mt-3 mb-6 text-foreground">
            Polat İskele Hakkında
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Polat İskele, inşaat sektörüne güvenli, kaliteli ve profesyonel iskele çözümleri sunarak hizmet vermektedir. Müşteri memnuniyetini ve iş güvenliğini ön planda tutarak, her ölçekte projeye uygun sistemler geliştirmekteyiz.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Deneyimli ekibimiz ve geniş ürün yelpazemizle Türkiye genelinde birçok prestijli projede yer almaktan gurur duyuyoruz. Kalite standartlarına uygunluk ve zamanında teslimat, çalışma prensiplerimizin temelini oluşturmaktadır.
          </p>

          <div className="space-y-3 mb-8">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="font-medium text-foreground">{h}</span>
              </div>
            ))}
          </div>

          <div className="mb-8 rounded-sm border border-border bg-card px-5 py-6 text-center shadow-sm">
            <div className="mx-auto max-w-xl">
              <h3 className="font-display text-xl font-bold text-foreground">
                Üstün Kalite
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                TÜV SÜD onaylı ISO 9001/14001/45001, TS EN 12810/12813, EN ISO 3834-2 ve EN 1090 standartlarına uygun belgeli kalite.
              </p>
            </div>
          </div>

          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-8">
            <a href="#iletisim">Bizimle İletişime Geçin</a>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
