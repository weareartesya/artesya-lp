import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import ICP from "@/components/sections/ICP";
import Manifesto from "@/components/sections/Manifesto";
import Produtos from "@/components/sections/Produtos";
import Metrics from "@/components/sections/Metrics";
import Fluxo from "@/components/sections/Fluxo";
import ProvaSocial from "@/components/sections/ProvaSocial";
import FAQ from "@/components/sections/FAQ";
import CTAs from "@/components/sections/CTAs";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Artesya — Soluções digitais sob medida";
    const desc = "Transformamos seus desafios em soluções digitais sob medida. Design e tecnologia com propósito para eficiência, performance e impacto.";
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta("description", desc);

    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.href;
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Sobre />
      <ICP />
      <Manifesto />
      <Produtos />
      <Metrics />
      <Fluxo />
      <ProvaSocial />
      <FAQ />
      <CTAs />
      <Footer />
    </main>
  );
};

export default Index;
