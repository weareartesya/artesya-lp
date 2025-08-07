import { motion } from "framer-motion";

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

const Fluxo = () => {
  return (
    <section id="fluxo" className="py-20">
      <div className="container max-w-5xl">
        <motion.header 
          className="text-center mb-10 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">Processo</span>
          <h2 className="text-2xl md:text-3xl font-semibold">Como trabalhamos</h2>
        </motion.header>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((s, i) => (
            <motion.div 
              key={s.title} 
              className="rounded-lg border border-border/20 bg-background/30 p-6 cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="flex-none h-9 w-9 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {i + 1}
                </motion.div>
                <div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Fluxo;
