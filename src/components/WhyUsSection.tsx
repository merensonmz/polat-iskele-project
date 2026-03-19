import { motion } from "framer-motion";
import { Users, Award, Lightbulb, Headphones } from "lucide-react";

const features = [
  { icon: Users, title: "Tecrübeli ve Uzman Kadro", desc: "Alanında deneyimli mühendis ve teknisyen ekibimizle projelerinize profesyonel destek sağlıyoruz." },
  { icon: Award, title: "Kalite Standartlarına Uygun Sistemler", desc: "Tüm iskele sistemlerimiz ulusal ve uluslararası güvenlik standartlarına uygun olarak üretilmektedir." },
  { icon: Lightbulb, title: "Projeye Özel Çözümler", desc: "Her projenin kendine özgü ihtiyaçlarını analiz ederek en uygun iskele çözümünü tasarlıyoruz." },
  { icon: Headphones, title: "Hızlı Destek ve Operasyon", desc: "7/24 teknik destek ve hızlı lojistik operasyonlarımızla projelerinizin aksamadan ilerlemesini sağlıyoruz." },
];

const WhyUsSection = () => (
  <section className="py-20 lg:py-28 bg-surface-dark">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Neden Biz?</span>
        <h2 className="font-display text-3xl lg:text-4xl font-extrabold mt-3 text-surface-dark-foreground">
          Polat İskele'yi Tercih Etmeniz İçin 4 Neden
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-foreground/5 border border-foreground/10 rounded-sm p-8 text-center hover:border-accent/40 transition-colors"
          >
            <div className="w-14 h-14 bg-accent/15 rounded-sm flex items-center justify-center mx-auto mb-5">
              <f.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-lg font-bold text-surface-dark-foreground mb-3">{f.title}</h3>
            <p className="text-surface-dark-foreground/70 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
