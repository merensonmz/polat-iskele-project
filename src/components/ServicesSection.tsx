import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import Htipi1 from "@/assets/services-optimized/Htipi_1.jpeg";
import Htipi2 from "@/assets/services-optimized/Htipi_2.jpeg";
import Htipi3 from "@/assets/services-optimized/Htipi_3.jpeg";
import Htipi4 from "@/assets/services-optimized/Htipi_4.jpeg";
import Htipi5 from "@/assets/services-optimized/Htipi_5.jpeg";
import Htipi6 from "@/assets/services-optimized/Htipi_6.jpeg";
import YeniGorsel1 from "@/assets/services-optimized/yeni_gorsel_1.jpeg";
import YeniGorsel2 from "@/assets/services-optimized/yeni_gorsel_2.jpeg";
import YeniGorsel3 from "@/assets/services-optimized/yeni_gorsel_3.jpeg";
import YeniGorsel4 from "@/assets/services-optimized/yeni_gorsel_4.jpeg";
import YeniGorsel5 from "@/assets/services-optimized/yeni_gorsel_5.jpeg";
import YeniGorsel6 from "@/assets/services-optimized/yeni_gorsel_6.jpeg";
import YeniGorsel7 from "@/assets/services-optimized/yeni_gorsel_7.jpeg";
import YeniGorsel8 from "@/assets/services-optimized/yeni_gorsel_8.jpeg";
import YeniGorsel9 from "@/assets/services-optimized/yeni_gorsel_9.jpeg";
import YeniGorsel10 from "@/assets/services-optimized/yeni_gorsel_10.jpeg";
import YeniGorsel11 from "@/assets/services-optimized/yeni_gorsel_11.jpeg";
import YeniGorsel12 from "@/assets/services-optimized/yeni_gorsel_12.jpeg";
import YeniGorsel13 from "@/assets/services-optimized/yeni_gorsel_13.jpeg";
import YeniGorsel14 from "@/assets/services-optimized/yeni_gorsel_14.jpeg";
import YeniGorsel15 from "@/assets/services-optimized/yeni_gorsel_15.jpeg";

const newServiceImages = [
  YeniGorsel1,
  YeniGorsel2,
  YeniGorsel3,
  YeniGorsel4,
  YeniGorsel5,
  YeniGorsel6,
  YeniGorsel7,
  YeniGorsel8,
  YeniGorsel9,
  YeniGorsel10,
  YeniGorsel11,
  YeniGorsel12,
  YeniGorsel13,
  YeniGorsel14,
  YeniGorsel15,
];

const slides = [
  {
    img: Htipi1,
    title: "H Tipi İskele Projesi",
  },
  {
    img: Htipi2,
    title: "Üst Kattan Geniş Görünüm",
  },
  {
    img: Htipi3,
    title: "Cephe Sistemi Detayları",
  },
  {
    img: Htipi4,
    title: "Proje Sahası",
  },
  {
    img: Htipi5,
    title: "Malzeme Yerleşimi",
  },
  {
    img: Htipi6,
    title: "H Tipi İskele Detayı",
  },
  ...newServiceImages.map((img, index) => ({
    img,
    title: `H Tipi İskele Uygulaması ${index + 1}`,
  })),
];

const ServicesSection = () => {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const selectedSlide = activeSlide !== null ? slides[activeSlide] : null;

  const showPrevious = () => {
    setActiveSlide((current) => (current === null ? slides.length - 1 : (current - 1 + slides.length) % slides.length));
  };

  const showNext = () => {
    setActiveSlide((current) => (current === null ? 0 : (current + 1) % slides.length));
  };

  useEffect(() => {
    if (activeSlide === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveSlide((current) => (current === null ? slides.length - 1 : (current - 1 + slides.length) % slides.length));
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveSlide((current) => (current === null ? 0 : (current + 1) % slides.length));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide]);

  return (
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
              {slides.map((slide, index) => (
                <CarouselItem key={`${slide.title}-${index}`} className="w-full sm:w-[calc(100%-1rem)]">
                  <button
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className="group relative block w-full overflow-hidden rounded-3xl bg-slate-950/5 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    aria-label={`${slide.title} görselini büyüt`}
                  >
                    <img src={slide.img} alt={slide.title} className="w-full h-[380px] object-cover" loading="lazy" />
                    <span className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/85 text-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                      <Maximize2 className="h-5 w-5" />
                    </span>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 sm:-left-2" />
            <CarouselNext className="right-3 sm:-right-2" />
          </Carousel>
        </motion.div>

        <div className="mt-8 text-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-8">
            <Link to="/h-tipi">Detayları İncele</Link>
          </Button>
        </div>

        <Dialog open={activeSlide !== null} onOpenChange={(open) => !open && setActiveSlide(null)}>
          <DialogContent className="max-w-[94vw] border-0 bg-slate-950 p-0 text-white sm:rounded-sm">
            {selectedSlide && (
              <div className="relative">
                <DialogTitle className="sr-only">{selectedSlide.title}</DialogTitle>
                <DialogDescription className="sr-only">Hizmetlerimiz galeri görseli.</DialogDescription>
                <div className="flex h-[82vh] items-center justify-center bg-slate-950 p-4 sm:p-8">
                  <img
                    src={selectedSlide.img}
                    alt={selectedSlide.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-950/70 px-4 py-2">
                  <p className="text-sm text-white/70">
                    {activeSlide !== null ? activeSlide + 1 : 1} / {slides.length}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={showPrevious}
                  className="absolute left-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-white/15 text-white hover:bg-white/25 hover:text-white"
                  aria-label="Önceki görsel"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-white/15 text-white hover:bg-white/25 hover:text-white"
                  aria-label="Sonraki görsel"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ServicesSection;
