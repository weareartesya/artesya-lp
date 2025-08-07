import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      'A Artesya trouxe clareza e velocidade. Em poucas semanas tínhamos um protótipo validado e um roadmap sólido. O processo foi transparente e os resultados superaram nossas expectativas.',
    author: 'Marina A.',
    role: 'COO em edtech',
    company: 'EduTech Solutions'
  },
  {
    quote:
      'Reduzimos retrabalho e custos significativamente. O modelo modular nos deu previsibilidade sem engessar a operação. A equipe da Artesya entendeu perfeitamente nossos desafios.',
    author: 'Rafael S.',
    role: 'Diretor de Operações',
    company: 'TechConsult'
  },
  {
    quote:
      'A solução desenvolvida pela Artesya transformou completamente nossa operação. Conseguimos automatizar processos críticos e melhorar a experiência dos nossos clientes.',
    author: 'Ana L.',
    role: 'CEO',
    company: 'InnovateLab'
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const ProvaSocial = () => {
  return (
    <section id="depoimentos" className="py-20">
      <div className="container max-w-6xl">
        <motion.header 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">Prova Social</span>
          <h2 className="text-3xl md:text-4xl font-bold">O que dizem nossos clientes</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Empresas que confiaram na Artesya e transformaram seus desafios em resultados reais.
          </p>
        </motion.header>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-background/30 border-border/30 h-full cursor-pointer">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <p className="text-base leading-relaxed text-muted-foreground">"{t.quote}"</p>
                  </div>
                  <div className="border-t border-border/20 pt-4">
                    <p className="font-semibold text-foreground">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                    <p className="text-xs text-accent">{t.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProvaSocial;
