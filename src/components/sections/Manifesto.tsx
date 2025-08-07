import { Badge } from "@/components/ui/badge";

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-20">
      <div className="container max-w-5xl">
        <header className="text-center space-y-4 mb-8">
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">Manifesto</span>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Onde sua visão encontra forma, função e alma. Aqui, cada solução tem propósito, clareza e é construída junto com você.
          </h2>
        </header>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['Proximidade', 'empatia', 'personalização', 'confiança', 'visão de futuro'].map((v) => (
            <Badge key={v} variant="secondary" className="capitalize">
              {v}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
