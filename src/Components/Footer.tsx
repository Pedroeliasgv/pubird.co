import {
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 bg-card/40 py-14 backdrop-blur-xl">
      <div className="section-container">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          
          {/* BRAND */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img
                src="/logo-pubird.png"
                alt="Pubird"
                className="h-10 w-auto"
              />
            </div>

            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              Estratégia, tecnologia e crescimento previsível para empresas
              que querem escalar com clareza e posicionamento.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-foreground">
              Navegação
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="#servicos"
                  className="transition-colors hover:text-primary"
                >
                  Serviços
                </a>
              </li>

              <li>
                <a
                  href="#processo"
                  className="transition-colors hover:text-primary"
                >
                  Processo
                </a>
              </li>

              <li>
                <a
                  href="#resultados"
                  className="transition-colors hover:text-primary"
                >
                  Resultados
                </a>
              </li>
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-foreground">
              Contato
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href="mailto:contato@pubird.com"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  contato@pubird.com
                </a>
              </li>
            </ul>
          </div>

          {/* REDES */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-foreground">
              Redes
            </h4>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/pubird/?viewAsMember=true" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/40 bg-background/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/pubird.br/" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/40 bg-background/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Pubird. Todos os direitos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;