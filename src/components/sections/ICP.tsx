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
    <section id="icp" className="py-12 sm:py-16 lg:py-20">
      <div className="container max-w-6xl px-4">
        <motion.header 
          className="text-center mb-12 sm:mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">
            Quem atendemos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Especialistas em resolver dores reais
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-muted-foreground px-4">
            Somos especialistas em resolver dores de pequenas e médias empresas de tecnologia, consultorias, profissionais digitais e negócios de serviços operacionais que precisam sair do improviso, automatizar processos e escalar sem perder controle.
          </p>
        </motion.header>

        {/* Layout responsivo com melhor distribuição */}
        <motion.div 
          className="flex flex-col items-center space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Layout para mobile: 1 coluna, tablet: 2 colunas, desktop: 3 colunas */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
            variants={cardVariants}
          >
            {setores.slice(0, 3).map((setor, index) => (
              <motion.div
                key={setor.titulo}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
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
                  
                  <CardContent className="p-4 sm:p-6 relative">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-accent group-hover:text-accent/80 transition-colors duration-300">
                      {setor.titulo}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {setor.descricao}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Últimos dois itens em layout centralizado */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl"
            variants={cardVariants}
          >
            {setores.slice(3, 5).map((setor, index) => (
              <motion.div
                key={setor.titulo}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
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
                  
                  <CardContent className="p-4 sm:p-6 relative">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-accent group-hover:text-accent/80 transition-colors duration-300">
                      {setor.titulo}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
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
