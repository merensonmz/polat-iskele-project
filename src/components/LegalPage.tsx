import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LegalSection = {
  title: string;
  content: string;
};

type LegalPageProps = {
  title: string;
  description: string;
  sections: LegalSection[];
};

const LegalPage = ({ title, description, sections }: LegalPageProps) => {
  useEffect(() => {
    document.title = `${title} | Polat İskele`;
  }, [title]);

  return (
    <>
      <Header />
      <main className="bg-background pt-28 md:pt-32">
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Polat İskele</span>
              <h1 className="font-display text-3xl lg:text-4xl font-extrabold mt-3 text-foreground">{title}</h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>

              <div className="mt-10 space-y-8">
                {sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="font-display text-xl font-bold text-foreground">{section.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.content}</p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LegalPage;
