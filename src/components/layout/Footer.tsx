import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-12 mt-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="font-serif text-xl tracking-wide">Artesya</div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">Artesya — Onde sua visão encontra forma, função e alma.</p>
            <div className="mt-4 flex items-center gap-3 text-muted-foreground">
              <a href="mailto:contato@artesya.com" aria-label="Enviar e-mail" className="hover:text-foreground transition-colors"><Mail size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>
          <nav className="md:justify-self-end grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">Navegação</div>
              <a href="#produtos" className="block hover:underline underline-offset-4">Soluções Digitais</a>
              <a href="#depoimentos" className="block hover:underline underline-offset-4">Depoimentos</a>
              <a href="#fluxo" className="block hover:underline underline-offset-4">Etapas do desenvolvimento</a>
              <a href="#faq" className="block hover:underline underline-offset-4">Tire dúvidas</a>
            </div>
          </nav>
        </div>
        <div className="mt-10 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Artesya. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;
