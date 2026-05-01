import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="section-container flex items-center justify-between h-16">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/logo-pubird-icon.png"
            alt="Pubird"
            className="h-10 w-auto drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          />
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-sm font-medium text-muted-foreground hover:text-white transition">
            Serviços
          </a>
          <a href="#processo" className="text-sm font-medium text-muted-foreground hover:text-white transition">
            Processo
          </a>
          <a href="#resultados" className="text-sm font-medium text-muted-foreground hover:text-white transition">
            Resultados
          </a>
        </div>

        {/* CTA */}
        <Button
          variant="hero"
          size="sm"
          className="text-sm font-semibold px-5 py-2 h-auto shadow-[0_0_25px_rgba(139,92,246,0.4)]"
        >
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com especialista
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;