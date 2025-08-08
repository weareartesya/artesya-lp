import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

interface Metric {
  value: string;
  label: string;
  icon: JSX.Element;
  color: string;
}

const metrics: Metric[] = [
  { 
    value: "+\u00A074\u00A0%", 
    label: "de eficiência operacional", 
    icon: <TrendingUp className="w-6 h-6" />, 
    color: "from-green-500 to-emerald-600" 
  },
  { 
    value: "–\u00A045\u00A0%", 
    label: "nos custos diretos", 
    icon: <Zap className="w-6 h-6" />, 
    color: "from-blue-500 to-cyan-600" 
  },
  { 
    value: "ROI positivo", 
    label: "em até 12 meses", 
    icon: <Target className="w-6 h-6" />, 
    color: "from-purple-500 to-pink-600" 
  },
  { 
    value: "+\u00A0300\u00A0%", 
    label: "em conversão", 
    icon: <Users className="w-6 h-6" />, 
    color: "from-orange-500 to-red-600" 
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

const Metrics = () => {
  return (
    <section id="resultados" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground mb-4">
            Resultados Comprovados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Números que falam por si
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Resultados reais que nossos clientes alcançaram com nossas soluções
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {metrics.map((m, index) => (
            <motion.div 
              key={m.value} 
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.3 } 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative rounded-2xl border border-border/20 bg-background/30 p-8 text-center shadow-elegant overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative mb-4 flex justify-center">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${m.color} text-white shadow-lg`}>
                    {m.icon}
                  </div>
                </div>
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {m.value}
                  </div>
                  <div className="text-muted-foreground text-sm leading-relaxed">
                    {m.label}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-8 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="#plano" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-200 font-medium"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Receba um plano estratégico sem compromisso
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;
