type Metric = {
  value: string;
  label: string;
};

const metrics: Metric[] = [
  { value: "+\u00A074\u00A0%", label: "de eficiência operacional" },
  { value: "–\u00A045\u00A0%", label: "nos custos diretos" },
  { value: "ROI positivo", label: "em até 12 meses" },
];

const Metrics = () => {
  return (
    <section id="resultados" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div key={m.value} className="rounded-lg border border-border/20 bg-background/20 p-8 text-center shadow-elegant">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{m.value}</div>
              <div className="text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-sm text-muted-foreground">Feito com propósito, empatia e inovação.</p>
        <div className="mt-8 flex items-center justify-center">
          <a href="#plano" className="underline underline-offset-4 hover:text-foreground">Receba um plano estratégico sem compromisso.</a>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
