import { motion } from "framer-motion";

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container max-w-4xl">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossa Missão
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Transformamos desafios complexos em soluções digitais elegantes e eficientes.
              Conectamos estratégia, tecnologia e pessoas para gerar resultados mensuráveis
              e impacto real no seu negócio.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Por que escolher a Artesya?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Processo Transparente</h4>
                <p className="text-muted-foreground">
                  Trabalhamos com etapas claras e validação contínua, evitando surpresas e garantindo previsibilidade.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Soluções Escaláveis</h4>
                <p className="text-muted-foreground">
                  Desenvolvemos sistemas que crescem junto com seu negócio, pensando no futuro desde o início.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Suporte Contínuo</h4>
                <p className="text-muted-foreground">
                  Oferecemos acompanhamento e evolução contínua para manter sua solução sempre atualizada.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Resultados Mensuráveis</h4>
                <p className="text-muted-foreground">
                  Focamos em métricas e KPIs que demonstram o valor real das nossas soluções.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
