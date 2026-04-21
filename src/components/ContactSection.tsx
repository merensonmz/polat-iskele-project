import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+90 538 519 0189" },
  { icon: MessageCircle, label: "WhatsApp", value: "+90 538 519 0189" },
  { icon: Mail, label: "E-posta", value: "polatiskele@gmail.com" },
  { icon: MapPin, label: "Adres", value: "25 Aralık, 33032. Sk. No:17/A-Kat:3, 27100 Şahinbey/Gaziantep, Türkiye" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", company: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Teklif Talebi - Polat İskele");
    const body = encodeURIComponent(
      `Ad Soyad: ${formData.name}\n` +
      `Telefon: ${formData.phone}\n` +
      `E-posta: ${formData.email || "-"}\n` +
      `Firma Adı: ${formData.company || "-"}\n` +
      `Hizmet Türü: ${formData.service || "-"}\n` +
      `Mesaj:\n${formData.message}`,
    );

    window.location.href = `mailto:polatiskele@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="iletisim" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">İletişim</span>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mt-3 text-foreground">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Projeleriniz için ücretsiz keşif ve teklif almak isterseniz formu doldurun, en kısa sürede size ulaşalım.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{c.label}</p>
                  <p className="font-semibold text-foreground">{c.value}</p>
                </div>
              </div>
            ))}

            <div className="mt-6 overflow-hidden rounded-sm border border-border">
              <iframe
                title="Polat İskele Google Harita"
                src="https://www.google.com/maps?q=25+Aralık,+33032.+Sk.+No:17,+27100+Şahinbey/Gaziantep,+Türkiye&output=embed"
                className="w-full h-48"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=25+Aralık,+33032.+Sk.+No:17,+27100+Şahinbey/Gaziantep,+Türkiye"
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-3 text-sm font-medium text-accent hover:text-accent-foreground bg-background"
              >
                Haritada Gör
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card border border-border rounded-sm p-8 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-foreground mb-1.5 block">Ad Soyad</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full border border-input rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="text-sm font-medium text-foreground mb-1.5 block">Telefon</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full border border-input rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-foreground mb-1.5 block">E-posta</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full border border-input rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="contact-company" className="text-sm font-medium text-foreground mb-1.5 block">Firma Adı</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="w-full border border-input rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="contact-service" className="text-sm font-medium text-foreground mb-1.5 block">Hizmet Türü</label>
              <select
                id="contact-service"
                name="service"
                className="w-full border border-input rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                required
              >
                <option value="">Seçiniz</option>
                <option value="iskele-kiralama">İskele Kiralama</option>
                <option value="cephe-iskelesi">H Tipi Cephe İskelesi</option>
                <option value="diger">Diğer</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="contact-message" className="text-sm font-medium text-foreground mb-1.5 block">Mesaj</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                className="w-full border border-input rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base">
              Teklif Gönder
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
