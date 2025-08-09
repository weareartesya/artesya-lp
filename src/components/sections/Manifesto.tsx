import { motion } from "framer-motion";

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container max-w-4xl px-4">
        <motion.div 
          className="text-center space-y-6 sm:space-y-8"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Nossa Missão
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
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
            className="pt-6 sm:pt-8"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Por que escolher a Artesya?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left max-w-4xl mx-auto">
              <div className="space-y-2 sm:space-y-3 p-4 rounded-lg bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
                <h4 className="font-semibold text-accent text-sm sm:text-base">Processo Transparente</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Trabalhamos com etapas claras e validação contínua, evitando surpresas e garantindo previsibilidade.
                </p>
              </div>
              <div className="space-y-2 sm:space-y-3 p-4 rounded-lg bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
                <h4 className="font-semibold text-accent text-sm sm:text-base">Soluções Escaláveis</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Desenvolvemos sistemas que crescem junto com seu negócio, pensando no futuro desde o início.
                </p>
              </div>
              <div className="space-y-2 sm:space-y-3 p-4 rounded-lg bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
                <h4 className="font-semibold text-accent text-sm sm:text-base">Suporte Contínuo</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Oferecemos acompanhamento e evolução contínua para manter sua solução sempre atualizada.
                </p>
              </div>
              <div className="space-y-2 sm:space-y-3 p-4 rounded-lg bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
                <h4 className="font-semibold text-accent text-sm sm:text-base">Resultados Mensuráveis</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
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
