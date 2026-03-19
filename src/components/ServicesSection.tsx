import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";

const services = [
  { img: service1, title: "İskele Kiralama", desc: "Her ölçekte projeye uygun, güvenli ve ekonomik iskele kiralama hizmetleri." },
  { img: service2, title: "Sac Pano", desc: "Yüksek dayanıklılığa sahip, endüstriyel standartlarda sac pano çözümleri." },
  { img: service2, title: "H Tipi Cephe İskelesi", desc: "Dış cephe çalışmalarında güvenli erişim sağlayan H tipi iskele sistemleri." },
  { img: service3, title: "H Çerçeve Ağır Beton Kalıp İskelesi", desc: "Ağır yük taşıma kapasiteli beton kalıp iskele çözümleri." },
  { img: service4, title: "Teleskopik Dikme", desc: "Yükseklik ayarlı, esnek ve dayanıklı teleskopik dikme sistemleri." },
  { img: service1, title: "Örümcek İskele", desc: "Dar ve zorlu alanlarda güvenli çalışma imkânı sunan örümcek iskele." },
  { img: service3, title: "Dış Cephe Asansörü", desc: "Dış cephe işlerinde güvenli personel ve malzeme taşıma çözümleri." },
  { img: service2, title: "Endüstriyel Güvenlikli İskele", desc: "Endüstriyel tesisler için güvenlik standartlarına uygun iskele sistemleri." },
  { img: service4, title: "Alüminyum İskele", desc: "Hafif, taşınabilir ve hızlı montajlı alüminyum iskele çözümleri." },
  { img: service3, title: "Trio Kalıp", desc: "Hızlı ve güvenilir beton kalıplama için trio kalıp sistemleri." },
  { img: service1, title: "Geçici Kenar Koruma Sistemi", desc: "İş güvenliği standartlarına uygun geçici kenar koruma çözümleri." },
];

const ServicesSection = () => (
  <section id="hizmetler" className="py-20 lg:py-28 bg-surface-section">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Hizmetlerimiz</span>
        <h2 className="font-display text-3xl lg:text-4xl font-extrabold mt-3 text-foreground">
          Profesyonel İskele Çözümleri
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Farklı ihtiyaçlara yönelik geniş ürün yelpazemizle projelerinize en uygun iskele çözümlerini sunuyoruz.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group bg-card rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
              <Button variant="ghost" size="sm" className="text-accent hover:text-accent hover:bg-accent/10 gap-1 p-0">
                Detayları İncele <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
