import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Target, Users, Shield, TrendingUp } from "lucide-react";

interface Step {
  title: string;
  desc: string;
  icon: JSX.Element;
  color: string;
}

const steps: Step[] = [
  {
    title: "Descoberta",
    desc: "Entendemos profundamente seus desafios, objetivos e contexto de negócio através de workshops e entrevistas.",
    icon: <Target className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Estratégia",
    desc: "Definimos a melhor abordagem técnica e criamos um roadmap claro com milestones e entregáveis.",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Desenvolvimento",
    desc: "Construímos sua solução com qualidade, agilidade e transparência usando metodologias ágeis.",
    icon: <Zap className="w-5 h-5" />,
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Entrega",
    desc: "Implementamos, testamos e garantimos que tudo funcione perfeitamente antes do deploy.",
    icon: <CheckCircle className="w-5 h-5" />,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Evolução",
    desc: "Acompanhamos, otimizamos e evoluímos sua solução continuamente baseado em dados e feedback.",
    icon: <Users className="w-5 h-5" />,
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Suporte",
    desc: "Oferecemos suporte contínuo e melhorias baseadas em feedback e necessidades emergentes.",
    icon: <Shield className="w-5 h-5" />,
    color: "from-teal-500 to-green-600"
  }
];

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const Fluxo = () => {
  return (
    <section id="fluxo" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/3 rounded-full blur-2xl" />
      </div>

      <div className="container max-w-7xl relative">
        <motion.header 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">
            Processo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Como trabalhamos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Um processo transparente e colaborativo que garante resultados excepcionais
          </p>
        </motion.header>

        {/* Process Path Visual */}
        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent transform -translate-y-1/2" />
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-accent">Jornada de Desenvolvimento</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.title} 
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Connection lines for desktop */}
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent/30 to-transparent transform -translate-y-1/2 z-0" />
              <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-0.5 bg-gradient-to-l from-accent/30 to-transparent transform -translate-y-1/2 z-0" />
              
              <div className="relative rounded-2xl border border-border/20 bg-background/30 p-6 h-full cursor-pointer overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Border effect on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-2xl transition-colors duration-300" />
                
                <div className="relative flex items-start gap-4">
                  {/* Step number with icon */}
                  <motion.div 
                    className={`flex-none h-12 w-12 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex items-center justify-center">
                      {step.icon}
                    </div>
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-accent/60">Etapa {index + 1}</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-accent/20 to-transparent"></div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <p className="text-lg font-medium text-accent">
              Pronto para começar sua jornada?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Fluxo;
