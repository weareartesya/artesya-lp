import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
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

      <section id="praxis" className="py-16">
        <div className="container text-center space-y-3">
          <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide text-muted-foreground">Práxis</span>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Cada projeto passa por etapas claras, com nome, propósito e responsabilidade — nada de escopos nebulosos.
          </h2>
        </div>
      </section>

      <Metrics />
    </main>
  );
};

export default Index;
