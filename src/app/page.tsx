import Hero from "@/components/Hero";
import QuemSomos from "@/components/QuemSomos";
import Planos from "@/components/Planos";
import Servicos from "@/components/Servicos";
import FAQ from "@/components/FAQ";
import WhatsAppSection from "@/components/WhatsAppSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <QuemSomos />
      <Planos />
      <Servicos />
      <FAQ />
      <WhatsAppSection />
    </main>
  );
}