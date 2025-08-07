import { Button } from "@/components/ui/button";

const CTAs = () => {
  return (
    <section id="ctas" className="py-20">
      <div className="container text-center space-y-6">
        <header className="space-y-3">
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">Próximos passos</span>
          <h2 className="text-2xl md:text-3xl font-semibold">Pronto para avançar?</h2>
        </header>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild variant="hero" size="lg">
            <a href="#contato" aria-label="Agende um diagnóstico gratuito">Agende um diagnóstico gratuito</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#produtos" aria-label="Veja exemplos de protótipos">Veja exemplos de protótipos entregues</a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="#contato" aria-label="Fale com um especialista">Fale com um especialista</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAs;
