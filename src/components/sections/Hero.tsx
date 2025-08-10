import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / 20;
      const moveY = (y - centerY) / 20;
      
      containerRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      
      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full opacity-60" 
          animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
        />
        <motion.div 
          className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full opacity-40" 
          animate={{ y: [0, 15, 0], opacity: [0.4, 0.8, 0.4] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
        />
      </div>

      {/* Mouse animation in corner */}
      <div className="absolute top-8 right-8 w-16 h-16 pointer-events-none">
        <motion.div 
          className="w-full h-full border-2 border-accent/30 rounded-full flex items-center justify-center"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <div className="w-2 h-2 bg-accent rounded-full" />
        </motion.div>
      </div>

      <div className="relative container text-center space-y-4 sm:space-y-6 pt-20 sm:pt-24 px-4">
        {/* Badge with animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F8F8FF]/30 bg-[#F8F8FF]/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#F8F8FF]">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#F8F8FF] rounded-full animate-pulse"></span>
            Transformando desafios em soluções
          </span>
        </motion.div>

        <motion.div 
          className="font-serif text-2xl sm:text-3xl md:text-4xl opacity-90 select-none"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Artesya
        </motion.div>

        <motion.h1 
          className="mx-auto max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Transformamos os desafios da sua empresa em{" "}
          <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
            soluções digitais
          </span>{" "}
          sob medida, prontas para escalar.
        </motion.h1>

        <motion.p 
          className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          A Artesya resolve o improviso técnico e conecta estratégia, tecnologia e pessoas para gerar eficiência, agilidade e resultados de verdade.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto"
          >
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg font-semibold min-h-[48px] sm:min-h-[56px]"
              asChild
            >
              <Link to="/agora-qualificacao">
                <span className="text-center">Agende um diagnóstico gratuito</span>
              </Link>
            </Button>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg font-semibold min-h-[48px] sm:min-h-[56px]"
            >
              <span className="text-center">Veja nossos casos de sucesso</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Resposta em até 24 horas
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Diagnóstico gratuito
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Sem compromisso
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }} 
              transition={{ duration: 2, repeat: Infinity }} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
