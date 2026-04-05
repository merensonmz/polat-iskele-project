import { useState } from "react";
import { Menu, X, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetlerimiz", href: "/#hizmetler" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Referanslar", href: "/#referanslar" },
  { label: "İletişim", href: "/#iletisim" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-800/95 backdrop-blur-md border-b border-slate-600/40">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Polat İskele"
            className="h-16 md:h-20 w-auto object-contain shadow-xl"
          />
        </a>

        <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-surface-dark-foreground/80 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block w-36" />

        <button
          className="lg:hidden text-surface-dark-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-slate-800/95 border-t border-slate-600/40">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-surface-dark-foreground/80 hover:text-accent transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-3 border-t border-foreground/10">
              <Button asChild variant="outline" size="sm" className="border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground gap-2 flex-1">
              <a href="#iletisim" onClick={() => setMobileOpen(false)}>
                <Phone className="w-4 h-4" />
                Hemen Ara
              </a>
            </Button>
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 flex-1">
              <a href="#iletisim" onClick={() => setMobileOpen(false)}>
                <FileText className="w-4 h-4" />
                Teklif Al
              </a>
            </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
