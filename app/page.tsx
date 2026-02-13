import Header from "@/components/header";
import Hero from "@/components/hero";
import PromocoesSection from "@/components/promocoes-section";
import CategoriesSection from "@/components/categories-section";
import AboutSection from "@/components/about-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      
      <main>
      <CategoriesSection />
      <PromocoesSection />
      <AboutSection />
      <CtaSection />
      <Footer />
      </main>
    </>
  );
}
