import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-12 mt-10">
      <div className="container">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.div 
              className="font-serif text-xl tracking-wide"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Artesya
            </motion.div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">Artesya — Onde sua visão encontra forma, função e alma.</p>
            <div className="mt-4 flex items-center gap-3 text-muted-foreground">
              <motion.a 
                href="mailto:contato@artesya.com" 
                aria-label="Enviar e-mail" 
                className="hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1, opacity: 0.8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="LinkedIn" 
                className="hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1, opacity: 0.8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </div>
          <nav className="md:justify-self-end grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">Navegação</div>
              {[
                { href: "#produtos", label: "Soluções Digitais" },
                { href: "#depoimentos", label: "Depoimentos" },
                { href: "#fluxo", label: "Etapas do desenvolvimento" },
                { href: "#faq", label: "Tire dúvidas" }
              ].map((link, index) => (
                <motion.a 
                  key={link.href}
                  href={link.href} 
                  className="block hover:underline underline-offset-4 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </nav>
        </motion.div>
        <motion.div 
          className="mt-10 text-center text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Artesya. Todos os direitos reservados.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
