import { motion } from "framer-motion";
import { Building2, ShoppingBag, Factory, Paintbrush } from "lucide-react";

const projects = [
  { icon: Building2, title: "Konut Projesi", desc: "Büyük ölçekli konut projelerinde güvenli iskele çözümleri sağladık." },
  { icon: ShoppingBag, title: "AVM Şantiyesi", desc: "Ticari merkezlerin inşaat süreçlerinde profesyonel destek verdik." },
  { icon: Factory, title: "Endüstriyel Tesis", desc: "Endüstriyel tesislerde yüksek güvenlikli iskele sistemleri kurduk." },
  { icon: Paintbrush, title: "Dış Cephe Uygulaması", desc: "Dış cephe yenileme ve restorasyon projelerinde iskele hizmeti sunduk." },
];

const ReferencesSection = () => (
  <section id="referanslar" className="py-20 lg:py-28 bg-surface-section">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Referanslarımız</span>
        <h2 className="font-display text-3xl lg:text-4xl font-extrabold mt-3 text-foreground">
          Başarıyla Tamamlanan Projeler
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Polat İskele olarak Türkiye genelinde birçok prestijli projede yer aldık. İşte başarılı çalışmalarımızdan bazıları.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-sm p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-sm flex items-center justify-center mx-auto mb-5">
              <p.icon className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReferencesSection;
