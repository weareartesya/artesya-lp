import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-40 bg-background/60 backdrop-blur-md border-b border-border/20">
      <div className="container flex items-center justify-between h-14">
        <Link to="#home" className="font-serif text-xl tracking-wide">Artesya</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#solucoes" className="hover:text-foreground transition-colors">Soluções Digitais</a>
          <a href="#depoimentos" className="hover:text-foreground transition-colors">Depoimentos</a>
          <a href="#etapas" className="hover:text-foreground transition-colors">Etapas do desenvolvimento</a>
          <a href="#duvidas" className="hover:text-foreground transition-colors">Tire dúvidas</a>
        </nav>
        <div className="hidden md:block">
          <Button variant="hero" size="sm">Vamos conversar!</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
