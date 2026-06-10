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

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  company: "",
  service: "",
  message: "",
  website: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [kvkkApproved, setKvkkApproved] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) nextErrors.name = "Ad Soyad alanı zorunludur.";
    if (!formData.phone.trim()) nextErrors.phone = "Telefon alanı zorunludur.";
    if (!formData.email.trim()) {
      nextErrors.email = "E-posta alanı zorunludur.";
    } else if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = "Geçerli bir e-posta adresi giriniz.";
    }
    if (!formData.service) nextErrors.service = "Hizmet Türü alanı zorunludur.";
    if (!formData.message.trim()) nextErrors.message = "Mesaj alanı zorunludur.";
    if (!kvkkApproved) {
      nextErrors.kvkk = "Devam etmek için KVKK Aydınlatma Metni’ni onaylamanız gerekmektedir.";
    }

    return nextErrors;
  };

  const updateField = (field: keyof typeof initialFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const { [field]: _removed, ...rest } = current;
      return rest;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website.trim()) return;

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const subject = encodeURIComponent("Teklif Talebi - Polat İskele");
    const body = encodeURIComponent(
      `Ad Soyad: ${formData.name.trim()}\n` +
        `Telefon: ${formData.phone.trim()}\n` +
        `E-posta: ${formData.email.trim()}\n` +
        `Firma Adı: ${formData.company.trim() || "-"}\n` +
        `Hizmet Türü: ${formData.service}\n` +
        `Mesaj:\n${formData.message.trim()}`,
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
            noValidate
            className="lg:col-span-3 bg-card border border-border rounded-sm p-8 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-foreground mb-1.5 block">
                  Ad Soyad
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full border border-input rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-phone" className="text-sm font-medium text-foreground mb-1.5 block">
                  Telefon
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full border border-input rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-foreground mb-1.5 block">
                  E-posta
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full border border-input rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="contact-company" className="text-sm font-medium text-foreground mb-1.5 block">
                  Firma Adı
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="w-full border border-input rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  value={formData.company}
                  onChange={(e) => updateField("company", e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="contact-service" className="text-sm font-medium text-foreground mb-1.5 block">
                Hizmet Türü
              </label>
              <select
                id="contact-service"
                name="service"
                className="w-full border border-input rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                value={formData.service}
                onChange={(e) => updateField("service", e.target.value)}
                aria-invalid={Boolean(errors.service)}
              >
                <option value="">Seçiniz</option>
                <option value="İskele Kiralama">İskele Kiralama</option>
                <option value="H Tipi Cephe İskelesi">H Tipi Cephe İskelesi</option>
                <option value="Diğer">Diğer</option>
              </select>
              {errors.service && <p className="mt-1.5 text-xs text-red-600">{errors.service}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="contact-message" className="text-sm font-medium text-foreground mb-1.5 block">
                Mesaj
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                className="w-full border border-input rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition resize-none"
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
            </div>

            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(e) => updateField("website", e.target.value)}
              />
            </div>

            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
              Bu form aracılığıyla paylaştığınız ad, soyad, telefon, e-posta, firma adı ve mesaj bilgileriniz yalnızca
              teklif talebinize dönüş yapılması amacıyla kullanılacaktır. Bilgileriniz üçüncü kişilerle paylaşılmaz ve
              pazarlama amacıyla kullanılmaz.
            </p>

            <div className="mb-6">
              <label htmlFor="contact-kvkk" className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                <input
                  id="contact-kvkk"
                  type="checkbox"
                  checked={kvkkApproved}
                  onChange={(e) => {
                    setKvkkApproved(e.target.checked);
                    if (e.target.checked) {
                      setErrors((current) => {
                        const { kvkk: _removed, ...rest } = current;
                        return rest;
                      });
                    }
                  }}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-input text-accent accent-accent focus:ring-2 focus:ring-accent/50"
                  aria-invalid={Boolean(errors.kvkk)}
                />
                <span>
                  Kişisel verilerimin, talebime dönüş yapılması amacıyla işlenmesine ilişkin{" "}
                  <a href="/kvkk-aydinlatma-metni" className="font-medium text-accent underline underline-offset-2 hover:text-accent/80">
                    KVKK Aydınlatma Metni
                  </a>
                  ’ni okudum ve anladım.
                </span>
              </label>
              {errors.kvkk && <p className="mt-2 text-xs text-red-600">{errors.kvkk}</p>}
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
