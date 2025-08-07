import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const produtos = [
  {
    name: 'Essentia',
    desc: 'Prototipação rápida e estratégica em até 30 dias. Visualize antes de investir.'
  },
  {
    name: 'Fabrica Modularis',
    desc: 'Desenvolvimento por ciclos, com módulos: Structura, Expansio, Evolutio, Nexus. Adapte, evolua e integre seu sistema conforme seu crescimento.',
    modules: ['Structura', 'Expansio', 'Evolutio', 'Nexus']
  },
  {
    name: 'Continuum Care',
    desc: 'Suporte, melhorias e acompanhamento de longo prazo com planos Initium, Modus e Continuum Pro.'
  }
];

const Produtos = () => {
  return (
    <section id="produtos" className="py-20">
      <div className="container">
        <header className="text-center mb-10 space-y-3">
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">Produtos</span>
          <h2 className="text-2xl md:text-3xl font-semibold">Nossos Produtos</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {produtos.map((p) => (
            <Card key={p.name} className="bg-background/30 border-border/30">
              <CardHeader>
                <CardTitle>{p.name}</CardTitle>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              {p.modules && (
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {p.modules.map((m: string) => (
                      <span key={m} className="text-xs rounded-full border border-border/40 px-2 py-1 text-muted-foreground">
                        {m}
                      </span>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produtos;
