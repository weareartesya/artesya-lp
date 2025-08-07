import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Qual é o diferencial da Artesya em relação a outras software houses?",
    a: "Unimos estratégia, design e engenharia com um processo claro em etapas – da descoberta à evolução contínua – evitando escopos nebulosos e garantindo previsibilidade.",
  },
  {
    q: "Vocês oferecem soluções de inteligência artificial e automação?",
    a: "Sim. Implementamos automações e modelos de IA quando são adequados ao problema, sempre focando em eficiência operacional e resultados mensuráveis.",
  },
  {
    q: "Como a Artesya garante a qualidade das entregas?",
    a: "Trabalhamos com validação contínua, prototipação prévia, revisão técnica e testes de usabilidade, performance e segurança antes de cada entrega.",
  },
  {
    q: "A Artesya trabalha com preços fixos ou modelos flexíveis?",
    a: "Adotamos modelos flexíveis por ciclos/modulares, alinhados a objetivos e métricas. Quando faz sentido, fechamos escopos fixos para etapas específicas.",
  },
  {
    q: "Existe um plano de manutenção ou suporte contínuo após a entrega?",
    a: "Sim. Oferecemos planos de evolução e suporte contínuos para monitorar, aprimorar e dar longevidade às soluções entregues.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container max-w-3xl">
        <header className="text-center mb-8 space-y-3">
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">Tire dúvidas</span>
          <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        </header>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
