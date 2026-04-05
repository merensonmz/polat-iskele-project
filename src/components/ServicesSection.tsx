import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Htipi1 from "@/assets/Htipi_1.jpeg";
import Htipi2 from "@/assets/Htipi_2.jpeg";
import Htipi3 from "@/assets/Htipi_3.jpeg";
import Htipi4 from "@/assets/Htipi_4.jpeg";
import Htipi5 from "@/assets/Htipi_5.jpeg";
import Htipi6 from "@/assets/Htipi_6.jpeg";

const slides = [
  {
    img: Htipi1,
    title: "H Tipi İskele Projesi",
    description: "Güvenli ve düzenli dış cephe iskele uygulaması.",
  },
  {
    img: Htipi2,
    title: "Üst Kattan Geniş Görünüm",
    description: "Çalışma platformları ve rijit H tipi iskele düzeni.",
  },
  {
    img: Htipi3,
    title: "Cephe Sistemi Detayları",
    description: "Yüksek kalite bağlantı elemanları ve güvenli merdiven erişimi.",
  },
  {
    img: Htipi4,
    title: "Proje Sahası",
    description: "H tipi sistemle hızlı kurulum ve sorunsuz iş akışı.",
  },
  {
    img: Htipi5,
    title: "Malzeme Yerleşimi",
    description: "Sağlam iskele düzeni, iş güvenliği öncelikli yaklaşım.",
  },
  {
    img: Htipi6,
    title: "H Tipi İskele Detayı",
    description: "Dış cephe işleri için ideal taşıma ve çalışma yüksekliği.",
  },
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
          H Tipi Cephe İskele
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Hizmetimiz H tipi cephe iskele sistemleri üzerine odaklanmıştır. Güvenlik, dayanım ve hızlı uygulama hedeflerimizle bu alanda uzmanlaşmış bir çözüm sunuyoruz.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <Carousel className="overflow-hidden rounded-3xl border border-border bg-card p-4">
          <CarouselContent className="flex">
            {slides.map((slide) => (
              <CarouselItem key={slide.title} className="w-full sm:w-[calc(100%-1rem)]">
                <div className="relative overflow-hidden rounded-3xl bg-slate-950/5 shadow-sm">
                  <img src={slide.img} alt={slide.title} className="w-full h-[380px] object-cover" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{slide.title}</h3>
                    <p className="text-sm text-muted-foreground">{slide.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2" />
          <CarouselNext className="-right-2" />
        </Carousel>
      </motion.div>

      <div className="mt-8 text-center">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-8">
          <a href="/h-tipi">Detayları İncele</a>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
