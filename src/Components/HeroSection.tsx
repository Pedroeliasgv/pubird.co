import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  X,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const benefits = [
  "Diagnóstico estratégico gratuito",
  "Plano claro para aquisição",
  "Análise de tráfego, funil e conversão",
];

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [faturamento, setFaturamento] = useState("");
  const [segmento, setSegmento] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        setIsFormOpen(true);
      }, 500);
    };

    window.addEventListener("open-diagnosis-modal", handleOpen);

    return () => {
      window.removeEventListener("open-diagnosis-modal", handleOpen);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCarregando(true);

    const { error } = await supabase.from("leads").insert([
      {
        nome,
        nome_completo: nomeCompleto,
        telefone,
        email,
        faturamento,
        segmento,
      },
    ]);

    setCarregando(false);

    if (!error) {
      setEnviado(true);
      setNome("");
      setNomeCompleto("");
      setTelefone("");
      setEmail("");
      setFaturamento("");
      setSegmento("");

      setTimeout(() => {
        setIsFormOpen(false);
        setEnviado(false);
      }, 2200);

      return;
    }

    console.error(error);
    alert("Erro ao enviar. Tente novamente!");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-24 md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.22),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.18),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.1),hsl(var(--background)))]" />
      <div className="absolute left-1/2 top-1/3 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px] animate-pulse" />
      <div className="absolute -right-40 top-28 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="absolute -left-40 bottom-10 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="section-container relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-16 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="text-center lg:text-left">
          <div className="mb-10 flex justify-center lg:justify-start opacity-0 animate-fade-in">
            <img
              src="/logo-pubird.png"
              alt="Pubird"
              className="w-[250px] max-w-[80vw] opacity-95 drop-shadow-[0_0_45px_rgba(139,92,246,0.48)] transition duration-500 hover:scale-105 md:w-[330px]"
            />
          </div>

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 shadow-[0_0_35px_hsl(var(--primary)/0.18)] backdrop-blur-xl opacity-0 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Marketing, tecnologia e crescimento
            </span>
          </div>

          <h1
            className="mx-auto max-w-5xl text-5xl font-extrabold leading-[1.03] tracking-[-0.045em] text-foreground opacity-0 animate-fade-in sm:text-6xl md:text-7xl lg:mx-0"
            style={{ animationDelay: "0.12s" }}
          >
            Transformamos atenção em{" "}
            <span className="text-gradient">receita previsível.</span>
          </h1>

          <p
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground opacity-0 animate-fade-in-slow md:text-xl lg:mx-0"
            style={{ animationDelay: "0.24s" }}
          >
            A Pubird cria sistemas de aquisição com tráfego, funis, automação,
            dados e tecnologia para empresas que querem crescer com controle.
          </p>

          <div
            className="mt-9 flex flex-col justify-center gap-4 opacity-0 animate-fade-in-slow sm:flex-row lg:justify-start"
            style={{ animationDelay: "0.36s" }}
          >
            <Button
              variant="hero"
              size="lg"
              className="group h-auto rounded-xl px-8 py-6 text-base font-semibold shadow-[0_0_45px_hsl(var(--primary)/0.3)] transition duration-300 hover:scale-[1.03]"
              onClick={() => setIsFormOpen(true)}
            >
              Receber diagnóstico gratuito
              <ArrowRight className="ml-2 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              variant="hero-outline"
              size="lg"
              className="h-auto rounded-xl px-8 py-6 text-base font-semibold backdrop-blur-xl transition duration-300 hover:scale-[1.03]"
              asChild
            >
              <a href="#processo">Ver como funciona</a>
            </Button>
          </div>

          <div
            className="mt-8 grid gap-3 text-left opacity-0 animate-fade-in-slow sm:grid-cols-3"
            style={{ animationDelay: "0.48s" }}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-2 rounded-xl border border-border/40 bg-card/35 p-3 backdrop-blur-xl transition duration-300 hover:border-primary/40 hover:bg-primary/10"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-[490px] opacity-0 animate-fade-in-slow lg:mx-0"
          style={{ animationDelay: "0.42s" }}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/20 blur-3xl animate-pulse" />

          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-card/70 p-6 shadow-2xl backdrop-blur-2xl">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/25 blur-3xl" />

            <div className="mb-6 flex items-center justify-between border-b border-border/40 pb-5">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Growth Dashboard
                </p>
                <p className="text-xs text-muted-foreground">
                  Visão estratégica em tempo real
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Live
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border/40 bg-background/55 p-5 transition duration-300 hover:border-primary/40">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Aquisição qualificada
                  </span>
                  <span className="text-sm font-bold text-primary">+38%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-primary to-purple-300 shadow-[0_0_24px_hsl(var(--primary)/0.5)]" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-border/40 bg-background/45 p-4 text-center">
                  <Target className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-lg font-extrabold text-foreground">
                    Funil
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    otimizado
                  </p>
                </div>

                <div className="rounded-2xl border border-border/40 bg-background/45 p-4 text-center">
                  <Zap className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-lg font-extrabold text-foreground">ROI</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    rastreado
                  </p>
                </div>

                <div className="rounded-2xl border border-border/40 bg-background/45 p-4 text-center">
                  <Sparkles className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-lg font-extrabold text-foreground">
                    360°
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    estratégia
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                <p className="text-sm font-semibold text-foreground">
                  Próxima ação recomendada
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Mapear gargalos, priorizar canais, estruturar CRM e criar uma
                  esteira de conversão com métricas reais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md rounded-[28px] border border-primary/20 bg-card/95 p-7 md:p-8 shadow-[0_0_90px_rgba(139,92,246,0.3)] backdrop-blur-2xl">
            <button
              type="button"
              aria-label="Fechar formulário"
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setIsFormOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>

            {!enviado ? (
              <>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Diagnóstico gratuito
                </p>

                <h2 className="mb-7 text-2xl font-extrabold text-foreground">
                  Receba uma análise do seu negócio
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                    placeholder="Qual é o seu nome e sobrenome?"
                    required
                    className="h-14 w-full rounded-lg border border-border/50 bg-background/80 px-4 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Qual seu e-mail corporativo?"
                    required
                    className="h-14 w-full rounded-lg border border-border/50 bg-background/80 px-4 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />

                  <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Qual o nome da sua empresa?"
                    required
                    className="h-14 w-full rounded-lg border border-border/50 bg-background/80 px-4 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />

                  <input
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="🇧🇷 Qual seu telefone?"
                    required
                    className="h-14 w-full rounded-lg border border-border/50 bg-background/80 px-4 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />

                  <select
                    value={faturamento}
                    onChange={(e) => setFaturamento(e.target.value)}
                    required
                    className={`h-14 w-full cursor-pointer rounded-lg border border-border/50 bg-background/80 px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                      faturamento ? "text-white" : "text-muted-foreground"
                    }`}
                  >
                    <option value="">
                      Qual o faturamento mensal da sua empresa?
                    </option>
                    <option value="Até 10 mil">Até R$10 mil</option>
                    <option value="De 10 mil a 50 mil">
                      De R$10 mil a R$50 mil
                    </option>
                    <option value="De 50 mil a 100 mil">
                      De R$50 mil a R$100 mil
                    </option>
                    <option value="De 100 mil a 300 mil">
                      De R$100 mil a R$300 mil
                    </option>
                    <option value="Acima de 300 mil">Acima de R$300 mil</option>
                  </select>

                  <select
                    value={segmento}
                    onChange={(e) => setSegmento(e.target.value)}
                    required
                    className={`h-14 w-full cursor-pointer rounded-lg border border-border/50 bg-background/80 px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                      segmento ? "text-white" : "text-muted-foreground"
                    }`}
                  >
                    <option value="">Qual o seu segmento?</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Serviços">Serviços</option>
                    <option value="Infoproduto">Infoproduto</option>
                    <option value="Negócio local">Negócio local</option>
                    <option value="Outro">Outro</option>
                  </select>

                  <button
                    type="submit"
                    disabled={carregando}
                    className="mt-2 h-14 w-full rounded-lg bg-primary px-5 text-base font-bold text-white shadow-[0_0_35px_rgba(139,92,246,0.35)] transition hover:scale-[1.02] hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {carregando ? "Enviando..." : "Receber mais informações"}
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
                  ✓
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  Enviado com sucesso!
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  Nosso time entrará em contato em breve.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;