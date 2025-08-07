import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const valores = [
  {
    titulo: "Proximidade",
    descricao: "Estamos sempre próximos, entendendo suas necessidades e acompanhando cada etapa do processo."
  },
  {
    titulo: "Empatia",
    descricao: "Colocamos-nos no seu lugar para criar soluções que realmente fazem sentido para seu negócio."
  },
  {
    titulo: "Personalização",
    descricao: "Cada solução é única, desenvolvida especificamente para suas necessidades e objetivos."
  },
  {
    titulo: "Confiança",
    descricao: "Construímos relacionamentos duradouros baseados em transparência e resultados comprovados."
  },
  {
    titulo: "Visão de futuro",
    descricao: "Pensamos no amanhã, criando soluções escaláveis que crescem junto com seu negócio."
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

const Sobre = () => {
  return (
    <section id="sobre" className="py-20">
      <div className="container max-w-6xl">
        <motion.header 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full border border-[#F8F8FF]/30 px-3 py-1 text-xs tracking-wide text-[#F8F8FF]/70">
            Sobre nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8F8FF]">
            Onde sua visão encontra forma, função e alma
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#F8F8FF]/80">
            Aqui, cada solução tem propósito, clareza e é construída junto com você. Conectamos estratégia, tecnologia e pessoas para gerar resultados reais.
          </p>
        </motion.header>

        {/* Pirâmide invertida layout */}
        <motion.div 
          className="flex flex-col items-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Primeira linha - 3 cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
            variants={cardVariants}
          >
            {valores.slice(0, 3).map((valor, index) => (
              <motion.div
                key={valor.titulo}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group cursor-pointer"
              >
                <Card className="bg-background/30 border-border/30 h-full relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F8F8FF]/5 to-[#F8F8FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Border effect on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F8F8FF]/30 rounded-lg transition-colors duration-300" />
                  
                  <CardContent className="p-6 relative">
                    <h3 className="text-xl font-semibold mb-3 text-[#F8F8FF] group-hover:text-[#F8F8FF]/80 transition-colors duration-300">
                      {valor.titulo}
                    </h3>
                    <p className="text-[#F8F8FF]/70 leading-relaxed group-hover:text-[#F8F8FF]/90 transition-colors duration-300">
                      {valor.descricao}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Segunda linha - 2 cards centralizados */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
            variants={cardVariants}
          >
            {valores.slice(3, 5).map((valor, index) => (
              <motion.div
                key={valor.titulo}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group cursor-pointer"
              >
                <Card className="bg-background/30 border-border/30 h-full relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F8F8FF]/5 to-[#F8F8FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Border effect on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F8F8FF]/30 rounded-lg transition-colors duration-300" />
                  
                  <CardContent className="p-6 relative">
                    <h3 className="text-xl font-semibold mb-3 text-[#F8F8FF] group-hover:text-[#F8F8FF]/80 transition-colors duration-300">
                      {valor.titulo}
                    </h3>
                    <p className="text-[#F8F8FF]/70 leading-relaxed group-hover:text-[#F8F8FF]/90 transition-colors duration-300">
                      {valor.descricao}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#F8F8FF]/10 to-[#F8F8FF]/5 border border-[#F8F8FF]/20">
            <div className="w-3 h-3 bg-[#F8F8FF] rounded-full animate-pulse"></div>
            <p className="text-lg font-medium text-[#F8F8FF]">
              Feito com propósito, empatia e inovação.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sobre;
