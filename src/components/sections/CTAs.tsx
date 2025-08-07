import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";

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

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const CTAs = () => {
  return (
    <section id="ctas" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container text-center space-y-12">
        <motion.header 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">
            Próximos passos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para avançar?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Vamos conversar sobre como podemos transformar seus desafios em soluções digitais eficientes.
          </p>
        </motion.header>

        {/* Trust indicators */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-500" />
            Resposta em até 24 horas
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-blue-500" />
            Diagnóstico gratuito
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-purple-500" />
            Sem compromisso
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={buttonVariants} className="w-full sm:w-auto">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-base px-10 py-7 text-lg font-semibold w-full sm:w-auto group"
            >
              Agende um diagnóstico gratuito
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} className="w-full sm:w-auto">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-base px-10 py-7 text-lg font-semibold w-full sm:w-auto group"
            >
              Fale com um especialista
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Additional CTA */}
        <motion.div 
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-3">
            Precisa de uma solução urgente?
          </h3>
          <p className="text-muted-foreground mb-6">
            Temos slots disponíveis para projetos prioritários. Entre em contato e vamos acelerar seu projeto.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
            >
              Solicitar orçamento urgente
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            Seus dados estão 100% seguros. Não compartilhamos com terceiros.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAs;
