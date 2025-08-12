import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#sobre", label: "Sobre nós" },
    { href: "#produtos", label: "Soluções" },
    { href: "#resultados", label: "Resultados" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <motion.header
      className={`w-full fixed top-0 left-0 z-40 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 shadow-lg border-[#F8F8FF]/30'
          : 'bg-background/60 border-[#F8F8FF]/20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between h-16">
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.2 }}
        >
          <Link to="#home" className="font-serif text-xl tracking-wide font-semibold text-[#F8F8FF]">
            Artesya
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative group text-sm font-medium text-[#F8F8FF]/70 hover:text-[#F8F8FF] transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F8F8FF] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.div 
            className="hidden md:block" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            transition={{ duration: 0.2 }}
          >
            <Button variant="hero" size="sm" className="font-medium" asChild>
              <Link to="/agora-qualificacao">Fale conosco</Link>
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden p-2 text-[#F8F8FF]" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-[#F8F8FF]/20 ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container py-4 space-y-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="block text-sm font-medium text-[#F8F8FF]/70 hover:text-[#F8F8FF] transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: navItems.length * 0.1 }} 
            className="pt-4"
          >
            <Button variant="hero" size="sm" className="w-full font-medium" asChild>
              <Link to="/agora-qualificacao">Fale conosco</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
