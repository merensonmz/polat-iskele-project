import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Ana Sayfa", href: "/#hero" },
  { label: "Hizmetlerimiz", href: "/#hizmetler" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Referanslar", href: "/#referanslar" },
  { label: "İletişim", href: "/#iletisim" },
];

const services = [
  "İskele Kiralama",
  "H Tipi Cephe İskelesi",
];

const legalLinks = [
  { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" },
  { label: "Gizlilik ve Çerez Politikası", href: "/gizlilik-ve-cerez-politikasi" },
  { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
];

const Footer = () => (
  <footer className="bg-slate-800/95 pt-16 pb-8 border-t border-slate-700/40">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <span className="font-display text-xl font-extrabold text-accent">
            POLAT<span className="text-surface-dark-foreground"> İSKELE</span>
          </span>
          <p className="text-surface-dark-foreground/60 text-sm mt-4 leading-relaxed">
            İnşaat sektörüne güvenli, kaliteli ve profesyonel iskele çözümleri sunan güvenilir çözüm ortağınız.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-surface-dark-foreground mb-4">Hızlı Bağlantılar</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-surface-dark-foreground/60 hover:text-accent transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-surface-dark-foreground mb-4">Hizmetler</h4>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service}>
                <span className="text-sm text-surface-dark-foreground/60">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-surface-dark-foreground mb-4">İletişim</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-sm text-surface-dark-foreground/60">+90 538 519 0189</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-sm text-surface-dark-foreground/60">polatiskele@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm text-surface-dark-foreground/60">
                25 Aralık Mah. 33032 Nolu Sok. 17/A-KAT:3 Şahinbey/Gaziantep
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-dark-foreground/10 pt-8 text-center">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {legalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-surface-dark-foreground/55 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-surface-dark-foreground/40">
          © 2026 Polat İskele. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
