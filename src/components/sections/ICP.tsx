const ICP = () => {
  return (
    <section id="icp" className="py-20">
      <div className="container max-w-5xl">
        <header className="text-center mb-10 space-y-3">
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">ICP</span>
          <h2 className="text-2xl md:text-3xl font-semibold">Quem atendemos</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas em resolver dores de pequenas e médias empresas de tecnologia, consultorias, profissionais digitais e negócios de serviços operacionais que precisam sair do improviso, automatizar processos e escalar sem perder controle.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Software houses',
            'Consultorias de TI e negócios',
            'Startups',
            'Profissionais digitais (advogados, contadores, arquitetos, criativos)',
            'Academias, escolas, alimentação e varejo',
          ].map((item) => (
            <div key={item} className="rounded-lg border border-border/20 bg-background/30 p-5">
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ICP;
