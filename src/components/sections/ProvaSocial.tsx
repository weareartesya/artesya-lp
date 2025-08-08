import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "El resultado final ha superado nuestras expectativas. Sin duda, recomendaría a Artesya a cualquier empresa que busque un equipo comprometido, talentoso y con una gran capacidad de adaptación.",
    author: "Aridane Castillo",
    role: "CEO",
    company: "Lookby"
  },
  {
    quote: "O serviço atendeu o que estava proposto e a equipe sempre solicita para resolver eventualidades, além de ensinar como manipular o software,  total suporte na troca de conhecimento.",
    author: "Junior Gemaque",
    role: "Ex-Engenheiro Florestal",
    company: "Unifloresta"
  },
  {
    quote: "A equipe da Artesya foi muito atenciosa comigo, sanaram todas as minhas duvidas e me deixaram muito confortavel para seguirmos o projeto. Estou extremamente satisfeita!",
    author: "Cláudia Valle",
    role: "CEO",
    company: "Alquimia do Cheff"
  },
  {
    quote: "Extremamente profissionais, atenciosos em todos os detalhes do que pedi. Estou muito satisfeito.",
    author: "Paulo Rivelino",
    role: "Diretor",
    company: "AVERTEX"
  }
];

const ProvaSocial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl relative">
        <motion.header 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full border border-border/30 px-3 py-1 text-xs tracking-wide text-muted-foreground">
            Prova Social
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            O que dizem nossos clientes
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Empresas que confiaram na Artesya e transformaram seus desafios em resultados reais.
          </p>
        </motion.header>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/20 text-foreground hover:text-accent transition-colors duration-200 shadow-lg"
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/20 text-foreground hover:text-accent transition-colors duration-200 shadow-lg"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          {/* Carousel Slides */}
          <div className="relative h-80 overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0"
              >
                <Card className="bg-background/30 border-border/30 h-full cursor-pointer relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-50" />
                  
                  <CardContent className="p-8 h-full flex flex-col justify-center relative">
                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 text-accent/20">
                      <Quote className="w-8 h-8" />
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-lg leading-relaxed text-foreground/90 italic">
                        "{testimonials[currentIndex].quote}"
                      </p>
                    </div>
                    
                    <div className="border-t border-border/20 pt-4 mt-auto">
                      <p className="font-semibold text-foreground">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-xs text-accent">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent scale-125' 
                    : 'bg-border/30 hover:bg-border/50'
                }`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

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
              Junte-se aos nossos clientes satisfeitos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProvaSocial;
