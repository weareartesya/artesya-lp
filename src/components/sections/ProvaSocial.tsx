import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      'A Artesya trouxe clareza e velocidade. Em poucas semanas tínhamos um protótipo validado e um roadmap sólido.',
    author: 'Marina A., COO em edtech'
  },
  {
    quote:
      'Reduzimos retrabalho e custos. O modelo modular nos deu previsibilidade sem engessar a operação.',
    author: 'Rafael S., Diretor de Operações em consultoria'
  }
];

const ProvaSocial = () => {
  return (
    <section id="depoimentos" className="py-20">
      <div className="container max-w-5xl">
        <header className="text-center mb-10 space-y-3">
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">Prova Social</span>
          <h2 className="text-2xl md:text-3xl font-semibold">O que dizem nossos clientes</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <Card key={t.author} className="bg-background/30 border-border/30">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed">“{t.quote}”</p>
                <p className="mt-4 text-sm text-muted-foreground">{t.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center opacity-70">
          {['Tecnologia', 'Consultorias', 'Educação', 'Serviços'].map((s) => (
            <div key={s} className="text-center text-sm border border-border/20 rounded-md py-4">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;
