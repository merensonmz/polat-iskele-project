import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/services-optimized/Htipi_1.jpeg";
import Htipi2 from "@/assets/services-optimized/Htipi_2.jpeg";
import Htipi3 from "@/assets/services-optimized/Htipi_3.jpeg";
import Htipi4 from "@/assets/services-optimized/Htipi_4.jpeg";
import Htipi5 from "@/assets/services-optimized/Htipi_5.jpeg";
import Htipi6 from "@/assets/services-optimized/Htipi_6.jpeg";

const galleryImages = [
  {
    img: Htipi2,
    title: "H Tipi İskele Montajı",
    description: "Dış cephe çalışmalarına uygun, güvenli montaj sistemleri.",
  },
  {
    img: Htipi3,
    title: "Cephe İskele Yapısı",
    description: "H tipi sistemlerle hızlı ve dayanıklı cephe erişimi.",
  },
  {
    img: Htipi4,
    title: "Çalışma Katları",
    description: "İş güvenliğini sağlayan geniş çalışma alanları.",
  },
  {
    img: Htipi5,
    title: "İskelenin Üst Detayları",
    description: "Yüksek kalite malzeme kullanımı ve düzenli yerleşim.",
  },
  {
    img: Htipi6,
    title: "Proje Sahası",
    description: "Gerçek proje alanında H tipi iskele çözümleri.",
  },
];

const HTipiIskele = () => (
  <>
    <Header />
    <main>
      <section className="relative overflow-hidden pt-20">
        <img
          src={heroImg}
          alt="H Tipi Cephe İskele"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-surface-dark/70" />
        <div className="relative container mx-auto px-4 py-28">
          <div className="max-w-3xl text-center mx-auto">
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
              Sadece H Tipi İskele
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              H Tipi Cephe İskele Çözümleri
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Polat İskele olarak yalnızca H tipi cephe iskele sistemleri üretir, kurar ve bakımını yaparız. Dış cephe boya, mantolama, cephe yenileme ve beton işleri için ideal çözüm.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-8">
                <a href="tel:+905385190189">Hemen Ara</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent/30 text-accent hover:bg-accent/10 gap-2 px-8">
                <a href="mailto:polatiskele@gmail.com">Teklif Al</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Hizmetimiz</span>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mt-3 text-foreground">
              H tipi iskelede uzman üretim ve montaj
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed text-lg">
              Sadece H tipi cephe iskelesi hizmeti veriyoruz; bu sayede iş gücümüz, malzememiz ve deneyimimiz tamamen tek bir sistem üzerine odaklanmış durumda. Yüksek dayanım, hızlı kurulum ve maksimum iş güvenliği sağlarız.
            </p>
            <div className="mt-10 space-y-4">
              <div className="flex gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">1</span>
                <p className="text-foreground">H tipi iskele montajı ve demontajı tamamen sahada uzman ekip tarafından yapılır.</p>
              </div>
              <div className="flex gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">2</span>
                <p className="text-foreground">Dış cephe boya, mantolama ve cephe restorasyon projeleri için standartlara uygun çözümler.</p>
              </div>
              <div className="flex gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">3</span>
                <p className="text-foreground">Her projede iş güvenliği, rijitlik ve kullanım kolaylığı önceliğimizdir.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {galleryImages.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <img src={item.img} alt={item.title} className="w-full h-56 object-cover" loading="lazy" />
                <div className="p-5 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
            Neden sadece H tipi iskele?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-lg font-semibold text-foreground mb-3">Uzmanlık odaklı üretim</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tek bir sistemde uzmanlaşarak kaliteyi yükseltiyor ve montaj hatalarını en aza indiriyoruz.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-lg font-semibold text-foreground mb-3">Güvenlik ve standart</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tüm malzemelerimiz TSE ve EN standartlarına uygundur, işçi güvenliği için düzenli denetim yapılır.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-lg font-semibold text-foreground mb-3">Hızlı uygulama</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                H tipi sistemler hızlı montaj sağladığından iş planlarınıza tam uyum sağlar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-foreground mb-4">Hızlı teklif almak ister misiniz?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sahip olduğumuz tek hizmet H tipi cephe iskele olduğu için size daha hızlı ve net teklif sunuyoruz. Hemen arayın veya teklif isteyin.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-8 py-3">
                  <a href="tel:+905385190189">Hemen Ara</a>
                </Button>
                <Button asChild variant="outline" className="border-accent/30 text-accent hover:bg-accent/10 gap-2 px-8 py-3">
                  <a href="mailto:polatiskele@gmail.com">Teklif İste</a>
                </Button>
              </div>
            </div>
            <div className="text-sm text-muted-foreground space-y-3">
              <div>
                <p className="font-semibold text-foreground">E-posta</p>
                <p>polatiskele@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Telefon</p>
                <p>+90 538 519 0189</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Adres</p>
                <p>25 Aralık Mah. 33032 Nolu Sok. 17/A-KAT:3 Şahinbey/Gaziantep</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default HTipiIskele;
