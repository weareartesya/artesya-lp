import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Como funciona o processo de desenvolvimento?",
    a: "Nosso processo é dividido em etapas claras: descoberta, estratégia, desenvolvimento, entrega e evolução. Cada fase tem entregas específicas e validação contínua para garantir que estamos no caminho certo."
  },
  {
    q: "Quanto tempo leva para desenvolver uma solução?",
    a: "O tempo varia conforme a complexidade. Protótipos levam de 2-4 semanas, desenvolvimentos completos de 2-6 meses. Sempre trabalhamos com sprints e entregas incrementais para você ver o progresso."
  },
  {
    q: "Vocês oferecem suporte após o lançamento?",
    a: "Sim! Oferecemos planos de suporte contínuo que incluem monitoramento, atualizações de segurança, melhorias de performance e evolução da solução conforme seu negócio cresce."
  },
  {
    q: "Como garantem a qualidade do código?",
    a: "Utilizamos boas práticas de desenvolvimento, testes automatizados, code reviews e documentação completa. Nossas soluções são escaláveis, seguras e seguem padrões de mercado."
  },
  {
    q: "Posso ver exemplos de trabalhos anteriores?",
    a: "Claro! Temos casos de sucesso documentados e podemos agendar uma conversa para mostrar exemplos relevantes para seu setor. Alguns clientes também estão disponíveis para referência."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container max-w-3xl">
        <motion.header 
          className="text-center mb-8 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full border border-[#F8F8FF]/30 px-3 py-1 text-xs tracking-wide text-[#F8F8FF]/70">
            Tire dúvidas
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#F8F8FF]">
            FAQ
          </h2>
        </motion.header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <AccordionItem value={`item-${idx}`}>
                  <AccordionTrigger className="text-left hover:text-[#F8F8FF] transition-colors duration-200 text-[#F8F8FF]/90">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#F8F8FF]/70">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
