import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

const produtos = [
  {
    name: "Prototipação",
    desc: "Transformamos suas ideias em protótipos funcionais que validam conceitos e aceleram o desenvolvimento.",
    modules: ["Wireframes", "Mockups", "Protótipos interativos", "Testes de usabilidade"],
    features: [
      "Validação rápida de conceitos",
      "Feedback visual imediato",
      "Iteração baseada em dados",
      "Redução de custos de desenvolvimento"
    ],
    cta: "Ver exemplos",
    badge: "Popular",
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "Desenvolvimento",
    desc: "Criamos soluções digitais robustas e escaláveis, desde aplicações web até sistemas complexos.",
    modules: ["Frontend", "Backend", "API", "Banco de dados"],
    features: [
      "Arquitetura escalável",
      "Código limpo e documentado",
      "Testes automatizados",
      "Deploy contínuo"
    ],
    cta: "Solicitar orçamento",
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Evolução",
    desc: "Mantemos suas soluções sempre atualizadas e otimizadas para máximo desempenho.",
    modules: ["Manutenção", "Otimização", "Novas funcionalidades", "Suporte técnico"],
    features: [
      "Monitoramento contínuo",
      "Atualizações de segurança",
      "Melhorias de performance",
      "Suporte 24/7"
    ],
    cta: "Falar sobre evolução",
    color: "from-purple-500 to-pink-600"
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

const Produtos = () => {
  return (
    <section id="produtos" className="py-20">
      <div className="container">
        <motion.header 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">
            Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossas Soluções
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Oferecemos um ecossistema completo de soluções digitais, desde prototipação até evolução contínua.
          </p>
        </motion.header>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {produtos.map((p, index) => (
            <motion.div
              key={p.name}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group"
            >
              <Card className="relative bg-background/30 border-border/30 h-full cursor-pointer overflow-hidden flex flex-col">
                {p.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="text-xs">
                      {p.badge}
                    </Badge>
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardHeader className="pb-4 relative">
                  <CardTitle className="text-2xl mb-2">
                    {p.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {p.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative flex-1 flex flex-col">
                  {p.modules && (
                    <div>
                      <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Módulos:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {p.modules.map((m: string) => (
                          <span 
                            key={m} 
                            className="text-xs rounded-full border border-border/40 px-3 py-1 text-muted-foreground bg-background/50"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Principais benefícios:
                    </h4>
                    <ul className="space-y-2">
                      {p.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="pt-4 mt-auto"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full group/btn"
                    >
                      <span>{p.cta}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </motion.div>
                </CardContent>
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-accent/20 transition-colors duration-300" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-4">
            Não encontrou o que procura?
          </p>
          <motion.a 
            href="#contato" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-200 font-medium"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Fale conosco sobre sua necessidade específica
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Produtos;
