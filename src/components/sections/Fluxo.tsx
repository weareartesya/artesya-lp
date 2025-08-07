const steps = [
  {
    title: 'Diagnóstico e entendimento do desafio',
    desc: 'Alinhamos objetivos, contexto e restrições para priorizar o que gera mais impacto.'
  },
  {
    title: 'Prototipação rápida (Essentia)',
    desc: 'Validamos a solução com clareza visual e critérios objetivos em até 30 dias.'
  },
  {
    title: 'Desenvolvimento modular (Fabrica Modularis)',
    desc: 'Entrega por módulos, com governança, previsibilidade e evolução contínua.'
  },
  {
    title: 'Evolução e suporte (Continuum Care)',
    desc: 'Monitoramento, melhorias e roadmap vivo para sustentar o crescimento.'
  }
];

const Fluxo = () => {
  return (
    <section id="fluxo" className="py-20">
      <div className="container max-w-5xl">
        <header className="text-center mb-10 space-y-3">
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">Processo</span>
          <h2 className="text-2xl md:text-3xl font-semibold">Como trabalhamos</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-lg border border-border/20 bg-background/30 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-none h-9 w-9 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">{i + 1}</div>
                <div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fluxo;
