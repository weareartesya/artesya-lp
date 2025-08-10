import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Shield, Star, Zap, Users, TrendingUp } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const CTAs = () => {
  return (
    <section id="ctas" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/3 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-accent/4 rounded-full blur-xl" />
      </div>

      <div className="container relative">
        <motion.header 
          className="text-center mb-16 space-y-6"
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

        {/* Trust indicators with enhanced design */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Clock className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-foreground">Resposta em até 24 horas</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Shield className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-foreground">Diagnóstico gratuito</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-500/20"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <CheckCircle className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium text-foreground">Sem compromisso</span>
          </motion.div>
        </motion.div>

        {/* Main CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.15 }}
          viewport={{ once: true }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full max-w-sm sm:w-auto"
          >
            <Button 
              variant="hero" 
              size="lg" 
              className="text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-semibold w-full sm:w-auto group relative overflow-hidden min-h-[56px]"
              asChild
            >
              <Link to="/agora-qualificacao">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-center leading-tight">Agende um diagnóstico gratuito</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                </span>
              </Link>
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full max-w-sm sm:w-auto"
          >
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-semibold w-full sm:w-auto group relative overflow-hidden min-h-[56px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-center leading-tight">Fale com um especialista</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Additional CTA */}
        <motion.div 
          className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-accent/10 border border-accent/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <h3 className="text-xl font-semibold text-accent">Projeto urgente?</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Temos slots disponíveis para projetos prioritários. Entre em contato e vamos acelerar seu projeto com nossa equipe dedicada.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full sm:w-auto group"
                >
                  <span className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5" />
                    Solicitar orçamento urgente
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>
              </motion.div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Prioridade garantida</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom trust statement */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20">
            <Shield className="w-4 h-4 text-accent" />
            <p className="text-sm text-muted-foreground">
              Seus dados estão 100% seguros. Não compartilhamos com terceiros.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAs;
