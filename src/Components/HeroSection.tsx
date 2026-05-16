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
  "Estratégia personalizada",
  "Aquisição com foco em conversão",
  "Diagnóstico rápido e objetivo",
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
        empresa: nome,
        nome_completo: nomeCompleto,
        telefone,
        email,
        faturamento,
        segmento,
      },
    ]);

    if (!error) {
      const { data: emailData, error: emailError } =
        await supabase.functions.invoke("send-lead-email", {
          body: {
            nome,
            nomeCompleto,
            telefone,
            email,
            faturamento,
            segmento,
              },
        });

      console.log("EMAIL DATA:", emailData);
      console.log("EMAIL ERROR:", emailError);

      setCarregando(false);
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

    setCarregando(false);
    console.error(error);
    alert("Erro ao enviar. Tente novamente!");
  };

  return (
    <section className="relative overflow-hidden bg-background pt-20 sm:pt-24 md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.22),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.18),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.1),hsl(var(--background)))]" />
      <div className="absolute left-1/2 top-1/3 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px] animate-pulse sm:h-[520px] sm:w-[520px] md:h-[620px] md:w-[620px] md:blur-[150px]" />
      <div className="absolute -right-40 top-28 h-[280px] w-[280px] rounded-full bg-purple-500/10 blur-[100px] md:h-[420px] md:w-[420px] md:blur-[120px]" />
      <div className="absolute -left-40 bottom-10 h-[260px] w-[260px] rounded-full bg-primary/10 blur-[100px] md:h-[360px] md:w-[360px] md:blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 md:bg-[size:80px_80px]" />

      <div className="section-container relative z-10 grid items-center gap-12 py-14 sm:py-16 md:py-20 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <div className="mb-8 flex justify-center opacity-0 animate-fade-in lg:mb-10 lg:justify-start">
            <img
              src="/logo-pubird.png"
              alt="Pubird"
              className="w-[210px] max-w-[78vw] opacity-95 drop-shadow-[0_0_45px_rgba(139,92,246,0.48)] transition duration-500 hover:scale-105 sm:w-[250px] md:w-[330px] animate-float-soft"
            />
          </div>

          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-2 shadow-[0_0_35px_hsl(var(--primary)/0.18)] backdrop-blur-xl opacity-0 animate-fade-in sm:px-4">
            <Sparkles className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.24em]">
              Estratégia, tráfego e tecnologia
            </span>
          </div>

          <h1
            className="mx-auto max-w-5xl text-[2.55rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-foreground opacity-0 animate-fade-up sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl"
            style={{ animationDelay: "0.12s" }}
          >
            Marketing e aquisição para empresas que querem{" "}
            <span className="text-gradient">crescer com clareza.</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground opacity-0 animate-fade-up sm:text-base md:mt-7 md:text-xl md:leading-8 lg:mx-0"
            style={{ animationDelay: "0.24s" }}
          >
            Estruturamos aquisição, posicionamento e conversão para transformar
            tráfego em clientes reais.
          </p>

          <div
            className="mt-8 flex flex-col justify-center gap-3 opacity-0 animate-fade-up sm:flex-row sm:gap-4 lg:justify-start"
            style={{ animationDelay: "0.36s" }}
          >
            <Button
              variant="hero"
              size="lg"
              className="group h-auto w-full rounded-xl px-7 py-5 text-sm font-semibold shadow-[0_0_45px_hsl(var(--primary)/0.3)] transition duration-300 hover:scale-[1.03] sm:w-auto sm:px-8 sm:py-6 sm:text-base"
              onClick={() => setIsFormOpen(true)}
            >
              Solicitar diagnóstico
              <ArrowRight className="ml-2 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              variant="hero-outline"
              size="lg"
              className="h-auto w-full rounded-xl px-7 py-5 text-sm font-semibold backdrop-blur-xl transition duration-300 hover:scale-[1.03] sm:w-auto sm:px-8 sm:py-6 sm:text-base"
              asChild
            >
              <a href="#servicos">Ver soluções</a>
            </Button>
          </div>

          <div
            className="mt-7 grid gap-3 text-left opacity-0 animate-fade-up sm:grid-cols-3 md:mt-8"
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
          className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[1.5rem] border border-primary/20 bg-card/70 p-4 shadow-2xl backdrop-blur-2xl animate-glow sm:rounded-[2rem] sm:p-6 lg:max-w-none"
          style={{ animationDelay: "0.42s" }}
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/25 blur-3xl" />

          <div className="relative overflow-hidden rounded-[1.35rem] border border-primary/20 bg-card/70 p-4 backdrop-blur-2xl sm:rounded-[2rem] sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-border/40 pb-5">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Growth Dashboard
                </p>
                <p className="text-xs text-muted-foreground">
                  Visão clara do funil
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Live
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border/40 bg-background/55 p-4 transition duration-300 hover:border-primary/40 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                    <TrendingUp className="h-4 w-4 shrink-0 text-primary" />
                    Aquisição qualificada
                  </span>

                  <span className="text-sm font-bold text-primary">+38%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-primary to-purple-300 shadow-[0_0_24px_hsl(var(--primary)/0.5)]" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 xs:grid-cols-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/40 bg-background/45 p-4 text-center">
                  <Target className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-base font-extrabold text-foreground sm:text-lg">
                    Funil
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    mais claro
                  </p>
                </div>

                <div className="rounded-2xl border border-border/40 bg-background/45 p-4 text-center">
                  <Zap className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-base font-extrabold text-foreground sm:text-lg">
                    Leads
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    qualificados
                  </p>
                </div>

                <div className="rounded-2xl border border-border/40 bg-background/45 p-4 text-center">
                  <Sparkles className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-base font-extrabold text-foreground sm:text-lg">
                    Marca
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    posicionada
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4 sm:p-5">
                <p className="text-sm font-semibold text-foreground">
                  Próxima ação recomendada
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Entender gargalos, priorizar canais e criar uma estrutura de
                  conversão com acompanhamento real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative my-6 w-full max-w-md rounded-[24px] border border-primary/20 bg-card/95 p-5 shadow-[0_0_90px_rgba(139,92,246,0.3)] backdrop-blur-2xl sm:rounded-[28px] sm:p-7 md:p-8">
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
                <p className="mb-3 pr-10 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Diagnóstico gratuito
                </p>

                <h2 className="mb-6 pr-8 text-xl font-extrabold text-foreground sm:mb-7 sm:text-2xl">
                  Receba uma análise do seu negócio
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                  <input
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                    placeholder="Qual é o seu nome e sobrenome?"
                    required
                    className="h-13 w-full rounded-lg border border-border/50 bg-background/80 px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:h-14 sm:text-base"
                  />

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Qual seu e-mail corporativo?"
                    required
                    className="h-13 w-full rounded-lg border border-border/50 bg-background/80 px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:h-14 sm:text-base"
                  />

                  <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Qual o nome da sua empresa?"
                    required
                    className="h-13 w-full rounded-lg border border-border/50 bg-background/80 px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:h-14 sm:text-base"
                  />

                  <input
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="🇧🇷 Qual seu telefone?"
                    required
                    className="h-13 w-full rounded-lg border border-border/50 bg-background/80 px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:h-14 sm:text-base"
                  />

                  <select
                    value={faturamento}
                    onChange={(e) => setFaturamento(e.target.value)}
                    required
                    className={`h-13 w-full cursor-pointer rounded-lg border border-border/50 bg-background/80 px-4 py-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:h-14 sm:text-base ${
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
                    <option value="Acima de 300 mil">
                      Acima de R$300 mil
                    </option>
                  </select>

                  <select
                    value={segmento}
                    onChange={(e) => setSegmento(e.target.value)}
                    required
                    className={`h-13 w-full cursor-pointer rounded-lg border border-border/50 bg-background/80 px-4 py-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:h-14 sm:text-base ${
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
                    className="mt-2 h-13 w-full rounded-lg bg-primary px-5 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(139,92,246,0.35)] transition hover:scale-[1.02] hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:h-14 sm:text-base"
                  >
                    {carregando ? "Enviando..." : "Receber análise"}
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