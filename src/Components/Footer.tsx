import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/20 bg-card/50">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-pubird-icon.png" alt="Pubird" className="h-8 w-auto" />
              <span className="text-lg font-bold text-gradient">Pubird</span>
            </div>
            <p className="text-sm text-muted-foreground">Growth engine para negócios ambiciosos. Crescimento previsível e escalável.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="#processo" className="hover:text-foreground transition-colors">Processo</a></li>
              <li><a href="#resultados" className="hover:text-foreground transition-colors">Resultados</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">WhatsApp</a></li>
              <li><a href="mailto:contato@pubird.com" className="hover:text-foreground transition-colors">contato@pubird.com</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Redes</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/20">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Pubird. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-primary" /> para negócios ambiciosos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;