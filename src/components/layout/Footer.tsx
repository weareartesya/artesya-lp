import { Mail, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigationItems = [
    { href: "#sobre", label: "Sobre nós" },
    { href: "#produtos", label: "Soluções Digitais" },
    { href: "#resultados", label: "Resultados" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#fluxo", label: "Etapas do desenvolvimento" },
    { href: "#faq", label: "Tire dúvidas" }
  ];

  const socialLinks = [
    {
      href: "mailto:weareartesya@gmail.com",
      icon: <Mail size={18} />,
      label: "Email",
      color: "hover:text-red-400"
    },
    {
      href: "https://www.linkedin.com/company/weareartesya/",
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      href: "https://www.instagram.com/weareartesya/",
      icon: <Instagram size={18} />,
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      href: "https://contra.com/artesya_32d00iac?referralExperimentNid=SOCIAL_REFERRAL_PROGRAM&referrerUsername=artesya_32d00iac",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      ),
      label: "Contra",
      color: "hover:text-teal-400"
    }
  ];

  return (
    <>
      {/* Scroll to top button */}
      <motion.button
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-accent text-white shadow-lg backdrop-blur-sm border border-accent/20 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <footer className="border-t border-border/20 py-16 mt-10 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Company Information */}
            <div className="space-y-6">
              <motion.div 
                className="font-serif text-2xl tracking-wide font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Artesya
              </motion.div>
              
              <p className="text-muted-foreground max-w-sm leading-relaxed">
                Artesya — Onde sua visão encontra forma, função e alma.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-2 rounded-lg bg-background/30 border border-border/20 text-muted-foreground transition-all duration-200 ${social.color}`}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="md:justify-self-end">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-4">Navegação</h3>
                  <nav className="space-y-3">
                    {navigationItems.map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <span className="relative">
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                        </span>
                      </motion.a>
                    ))}
                  </nav>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-4">Contato</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <motion.a
                      href="mailto:weareartesya@gmail.com"
                      className="flex items-center gap-2 hover:text-foreground transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="w-4 h-4" />
                      weareartesya@gmail.com
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom section with CNPJ and Copyright */}
          <motion.div 
            className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span>© 2025 Artesya. Todos os direitos reservados.</span>
              <span className="hidden sm:inline">•</span>
              <span>CNPJ: 39.789.155/0001-94</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
