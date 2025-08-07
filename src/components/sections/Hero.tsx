import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--mouse-x", `${x}px`);
      el.style.setProperty("--mouse-y", `${y}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        ref={ref}
        className="pointer-glow absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background" />
      <div className="relative container text-center space-y-6 pt-24">
        <div className="font-serif text-3xl md:text-4xl opacity-90 select-none">Artesya</div>
        <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Transformamos seus desafios em soluções digitais sob medida.
        </h1>
        <p className="mx-auto max-w-3xl text-base md:text-lg text-muted-foreground">
          Design e tecnologia com propósito, combinando inovação, empatia e resultados reais: eficiência, performance e impacto estratégico.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button variant="hero" size="lg">
            Participe da transformação — agende uma consultoria gratuita de 30 minutos.
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
