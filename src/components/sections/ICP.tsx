import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const setores = [
  {
    titulo: "Software Houses",
    descricao: "Empresas de desenvolvimento que precisam otimizar processos internos, melhorar a experiência do cliente e escalar suas operações com tecnologia."
  },
  {
    titulo: "Consultorias de TI",
    descricao: "Consultorias que buscam automatizar processos de gestão de projetos, melhorar a comunicação com clientes e otimizar suas entregas."
  },
  {
    titulo: "Startups",
    descricao: "Startups em crescimento que precisam de soluções digitais escaláveis para automatizar processos, melhorar a experiência do usuário e acelerar o crescimento."
  },
  {
    titulo: "Profissionais Digitais",
    descricao: "Advogados, contadores, arquitetos e criativos que precisam digitalizar seus processos, melhorar a gestão de clientes e otimizar suas operações."
  },
  {
    titulo: "Varejo e Serviços",
    descricao: "Academias, escolas, restaurantes e varejistas que buscam soluções para gestão de clientes, automação de processos e melhoria da experiência do usuário."
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

const ICP = () => {
  return (
    <section id="icp" className="py-20">
      <div className="container max-w-6xl">
        <motion.header 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">
            Quem atendemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Especialistas em resolver dores reais
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Somos especialistas em resolver dores de pequenas e médias empresas de tecnologia, consultorias, profissionais digitais e negócios de serviços operacionais que precisam sair do improviso, automatizar processos e escalar sem perder controle.
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
            {setores.slice(0, 3).map((setor, index) => (
              <motion.div
                key={setor.titulo}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Border effect on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-lg transition-colors duration-300" />
                  
                  <CardContent className="p-6 relative">
                    <h3 className="text-xl font-semibold mb-3 text-accent group-hover:text-accent/80 transition-colors duration-300">
                      {setor.titulo}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {setor.descricao}
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
            {setores.slice(3, 5).map((setor, index) => (
              <motion.div
                key={setor.titulo}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Border effect on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-lg transition-colors duration-300" />
                  
                  <CardContent className="p-6 relative">
                    <h3 className="text-xl font-semibold mb-3 text-accent group-hover:text-accent/80 transition-colors duration-300">
                      {setor.titulo}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {setor.descricao}
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
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <p className="text-lg font-medium">
              Não se vê na lista? Fale conosco sobre sua necessidade específica.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ICP;
