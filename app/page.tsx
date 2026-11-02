import Image from "next/image";
import React, { Suspense } from "react";
import LeadForm from "./LeadForm";

const benefits = [
  {
    title: "Sem placa no telhado. Sem obra. Sem dor de cabeça.",
    desc: "Sabe aquela ideia de que pra economizar precisa instalar painel solar? Esquece. Aqui é só cadastrar sua conta e pronto: 35% de economia na primeira fatura chegou.",
    asset: "/assets/3.png",
  },
  {
    title: "E se nessa Black você guardasse dinheiro em vez de gastar?",
    desc: "Tem oferta que você aproveita uma vez. E tem escolha que ajuda você a economizar todos os meses. 35% off na primeira fatura, zero investimento.",
    asset: "/assets/5.png",
  },
  {
    title: "Pagar o valor total ou economizar 35%? A escolha é simples.",
    desc: "Na primeira fatura Vantage você já sente a diferença: 35% de economia. Nos meses seguintes, até 26%. Tudo isso sem obras, sem contrato de fidelidade e 100% digital.",
    asset: "/assets/7.png",
  },
  {
    title: "A energia vem das nossas usinas. A economia vai direto pra você.",
    desc: "Não precisa mudar nada na sua casa. A gente gera a energia limpa nas nossas usinas e repassa a economia pra sua conta. Simples assim.",
    asset: "/assets/14.png",
  },
];

const steps = [
  {
    title: "Contato",
    desc: "Após preencher o formulário, entraremos em contato com você por ligação ou WhatsApp.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m4.912 10.541l2.64-2.64a2.08 2.08 0 0 0 .507-2.064a27 27 0 0 1-.49-1.844C7.453 3.45 6.976 3 6.42 3H4.912c-1.11 0-2.023.904-1.901 2.008c.926 8.392 7.59 15.055 15.981 15.981c1.104.122 2.008-.79 2.008-1.9v-1.51c0-.554-.452-1.01-.998-1.11a15 15 0 0 1-1.774-.459c-.767-.244-1.619-.072-2.188.496l-2.581 2.582" />
      </svg>
    ),
  },
  {
    title: "Análise",
    desc: "Vamos analisar sua conta de luz e te apresentar uma simulação do seu desconto.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2.5V3c0 2.828 0 4.243.879 5.121C14.757 9 16.172 9 19 9h.5m.5 1.657V14c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14V9.456c0-3.245 0-4.868.886-5.967a4 4 0 0 1 .603-.603C6.59 2 8.211 2 11.456 2c.705 0 1.058 0 1.381.114q.1.036.197.082c.31.148.559.397 1.058.896l4.736 4.736c.579.578.867.868 1.02 1.235c.152.368.152.776.152 1.594" />
        <path d="M13.5 16.5L15 18m-1-3.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" />
      </svg>
    ),
  },
  {
    title: "Assinatura",
    desc: "Ao concordar com a simulação, encaminharemos nosso Termo de Adesão para a assinatura digital.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12.634c-4 3.512-4.572-2.013-6.65-1.617c-2.35.447-3.85 5.428-2.35 5.428s-.5-5.945-2.5-3.89s-2.64 4.74-4.265 2.748C-1.5 5.813 5-1.15 8.163 3.457C10.165 6.373 6.5 16.977 2 22m7-1h10" />
      </svg>
    ),
  },
  {
    title: "Checagem",
    desc: "Após assinatura, faremos uma checagem para confirmar se está tudo certo com o processo de adesão.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M11 6h10m-10 6h10m-10 6h10" />
        <path strokeLinejoin="round" d="M3 7.393S4 8.045 4.5 9C4.5 9 6 5.25 8 4M3 18.393S4 19.045 4.5 20c0 0 1.5-3.75 3.5-5" />
      </svg>
    ),
  },
  {
    title: "Ativação",
    desc: "Pronto! Em até 90 dias você passa a economizar na conta de luz e a consumir energia renovável!",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5.226 11.33l6.998-8.983c.547-.703 1.573-.266 1.573.67V9.97c0 .56.402 1.015.899 1.015H18.1c.773 0 1.185 1.03.674 1.686l-6.998 8.983c-.547.702-1.573.265-1.573-.671V14.03c0-.56-.403-1.015-.899-1.015H5.9c-.773 0-1.185-1.03-.674-1.686" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Preciso instalar alguma coisa em casa?",
    a: "Não. Zero obras, zero equipamentos, zero manutenção. A adesão é toda feita pelo celular ou computador, em poucos minutos.",
  },
  {
    q: "Minha distribuidora muda? Fico sem luz?",
    a: "Nada disso. Você continua sendo atendido pela mesma distribuidora, com a mesma qualidade. Só a fonte da energia muda — e o preço cai.",
  },
  {
    q: "Quem garante que isso é seguro?",
    a: "A Vantage atua no modelo de geração distribuída, regulamentado pela ANEEL e amparado pela Lei nº 14.300/2022, o Marco Legal da Geração Distribuída. Essa lei estabelece as regras para gerar energia e utilizar créditos na conta de luz.",
  },
  {
    q: "Tem fidelidade? Multa se eu quiser sair?",
    a: "Não. Sem contrato de fidelidade, sem multa. Você fica porque quer, não porque está preso.",
  },
];

export default function Page() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "#000000",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="mx-auto flex max-w-[1140px] items-center justify-center px-[var(--space-md)] py-[var(--space-sm)] sm:py-[var(--space-md)]">
          <Image
            src="/assets/logo-vantage.png"
            alt="Vantage Energia"
            width={270}
            height={68}
            priority
            className="animate-fade-up h-12 w-auto brightness-0 invert sm:h-14"
          />
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden px-[var(--space-md)] pt-[var(--space-md)] pb-[var(--space-xl)] sm:pt-[var(--space-lg)] sm:pb-[var(--space-2xl)]"
        style={{ background: "linear-gradient(to bottom, #131212, #000000)" }}
      >
        <div className="mx-auto grid max-w-[1140px] gap-[var(--space-lg)] lg:grid-cols-2 lg:items-center lg:gap-[var(--space-xl)]">
          <div className="text-center lg:text-left">
            <Image
              src="/assets/ImagemLogo.png"
              alt="Black Vantage"
              width={480}
              height={160}
              priority
              className="animate-fade-up mx-auto mb-[var(--space-xs)] w-full max-w-[420px] object-contain lg:mx-0"
            />
            <h1
              className="animate-fade-up mb-[var(--space-lg)] text-[clamp(24px,6vw,28px)] font-bold leading-[1.0] text-white"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.02em",
              }}
            >
              35% de economia na primeira fatura.<br />
              E até 26% nos meses seguintes.
            </h1>
            <p
              className="animate-fade-up-delay mb-[var(--space-lg)] mx-auto max-w-[65ch] text-[16px] leading-[1.5] sm:text-[18px] lg:mx-0 text-white"
            >
              A Black Friday passa. A economia na sua conta de luz continua. Aproveite a condição especial da Black Friday para reduzir uma despesa que faz parte da sua rotina.
            </p>
            <ul className="animate-fade-up-delay-2 mx-auto max-w-sm space-y-[var(--space-md)] text-left text-[14px] text-white lg:mx-0">
              <li className="flex items-start gap-[var(--space-sm)]">
                <Image src="/assets/4.png" alt="" width={20} height={20} className="mt-[2px] h-5 w-5 shrink-0 object-contain" />
                Sem obras
              </li>
              <li className="flex items-start gap-[var(--space-sm)]">
                <Image src="/assets/4.png" alt="" width={20} height={20} className="mt-[2px] h-5 w-5 shrink-0 object-contain" />
                Sem investimento
              </li>
              <li className="flex items-start gap-[var(--space-sm)]">
                <Image src="/assets/4.png" alt="" width={20} height={20} className="mt-[2px] h-5 w-5 shrink-0 object-contain" />
                Sem fidelidade
              </li>
            </ul>
          </div>

          {/* Form */}
          <div
            className="animate-fade-up-delay relative w-full max-w-md mx-auto overflow-hidden p-[var(--space-lg)] sm:p-[var(--space-lg)]"
            style={{
              background: "var(--bg)",
              borderRadius: "var(--radius-container)",
              border: "1px solid var(--border)",
            }}
          >
            <h2
              className="mb-[var(--space-xs)] text-[22px] font-medium leading-[1.3]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--fg)",
              }}
            >
              Quero meus 35% OFF na 1ª fatura*
            </h2>
            <p
              className="mb-[var(--space-md)] text-[14px] leading-[1.4]"
              style={{ color: "var(--muted)" }}
            >
              Condição exclusiva de Black Friday para novos clientes em GO.
              Cadastre sua conta agora — leva menos de 2 minutos.
            </p>
            <Suspense
              fallback={
                <div className="h-[320px] w-full animate-pulse rounded-[var(--radius-input)] bg-[var(--surface)]" />
              }
            >
              <LeadForm />
            </Suspense>

            </div>
        </div>

        
      </section>

      {/* Como funciona — replaces old Stats section */}
      <section className="px-[var(--space-md)] py-[var(--space-xl)] sm:py-[var(--space-2xl)]" style={{ background: "#f2f2f2" }}>
        <div className="mx-auto max-w-[1140px]">
          <div className="mb-[var(--space-lg)] text-center">
            <h2
              className="text-[30px] font-bold sm:text-[40px]"
              style={{
                fontFamily: "var(--font-display)",
                color: "#000000",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              Como funciona o<br />processo de adesão?
            </h2>
          </div>

          {/* Step cards */}
          <div className="flex flex-col items-stretch gap-[var(--space-md)] sm:flex-row sm:items-center sm:gap-0">
            {steps.map((s, i) => (
              <React.Fragment key={s.title}>
                <div
                  className="group flex flex-1 flex-col p-[var(--space-md)] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(to bottom, #131212, #000000)",
                    borderRadius: "var(--radius-card)",
                  }}
                >
                  <div
                    className="mx-auto mb-[var(--space-sm)] flex h-12 w-12 items-center justify-center text-white"
                  >
                    {s.icon}
                  </div>
                  <h3
                    className="mb-[var(--space-xs)] text-center text-[16px] font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-center text-[13px] leading-[1.5] text-white">
                    {s.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden items-center justify-center self-center px-[var(--space-xs)] sm:flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#000000" }} className="h-7 w-7">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — each card with its own campaign asset */}
      <section
        className="px-[var(--space-md)] py-[var(--space-xl)] sm:py-[var(--space-2xl)]"
        style={{ background: "linear-gradient(to bottom, #131212, #000000)" }}
      >
        <div className="mx-auto max-w-[1140px]">
          <h2
            className="mb-[var(--space-lg)] text-center text-[30px] font-bold text-white sm:text-[40px]"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            Por que tanta gente está trocando pra Vantage?
          </h2>
          <div className="grid gap-[var(--space-md)] sm:grid-cols-2 sm:gap-[var(--space-lg)]">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group relative overflow-hidden rounded-2xl p-[var(--space-lg)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(47,107,255,0.15)]"
                style={{
                  background: "linear-gradient(145deg, rgba(19,18,18,0.9), rgba(0,0,0,0.95))",
                  border: "1px solid rgba(47,107,255,0.3)",
                }}
              >
                <div
                  className="absolute left-0 top-[var(--space-md)] bottom-[var(--space-md)] w-[3px] rounded-full opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "#2f6bff" }}
                />
                <h3
                  className="mb-[var(--space-sm)] pl-[var(--space-md)] text-[20px] font-bold leading-[1.3] tracking-tight text-white sm:text-[22px]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {b.title}
                </h3>
                <p
                  className="pl-[var(--space-md)] text-[15px] leading-[1.6] sm:text-[16px]"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section
        className="px-[var(--space-md)] py-[var(--space-xl)] sm:py-[var(--space-2xl)]"
        style={{ background: "#f2f2f2" }}
      >
        <div className="mx-auto grid max-w-[1140px] items-center gap-[var(--space-lg)] lg:grid-cols-2 lg:gap-[var(--space-xl)]">
          <div className="overflow-hidden rounded-[var(--radius-card)]">
            <Image
              src="/assets/12 (1).png"
              alt="Black Friday Vantage Empresas"
              width={560}
              height={380}
              className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          <div className="space-y-[var(--space-md)]">
            <h2
              className="text-[30px] font-bold sm:text-[40px]"
              style={{
                fontFamily: "var(--font-display)",
                color: "#000000",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              Seu negócio também merece essa Black Friday.
            </h2>
            <p
              className="text-[16px] font-medium leading-[1.5] sm:text-[18px]"
              style={{ color: "#333333" }}
            >
              Energia é um dos custos mais pesados de qualquer operação. Nesta
              Black Friday, você pode aliviar essa conta sem mudar nada na
              estrutura do seu negócio.
            </p>
            <p
              className="text-[16px] font-bold leading-[1.5]"
              style={{ color: "#000000" }}
            >
              35% de economia na primeira fatura Vantage*. Sem obras. Sem
              investimento. Sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* Renters / Apartments Section */}
      <section
        className="px-[var(--space-md)] py-[var(--space-xl)] sm:py-[var(--space-2xl)]"
        style={{ background: "linear-gradient(to bottom, #131212, #000000)" }}
      >
        <div className="mx-auto grid max-w-[1140px] items-center gap-[var(--space-lg)] lg:grid-cols-2 lg:gap-[var(--space-xl)]">
          <div className="order-2 lg:order-1 space-y-[var(--space-md)]">
            <h2
              className="text-[30px] font-bold sm:text-[40px]"
              style={{
                fontFamily: "var(--font-display)",
                color: "#ffffff",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              Mora de aluguel ou em apartamento? A economia é sua.
            </h2>
            <p
              className="text-[16px] leading-[1.5] sm:text-[18px]"
              style={{ color: "#ffffff" }}
            >
              Não precisa mexer na estrutura do imóvel. Garanta 35% de economia
              na primeira fatura* com um processo rápido e 100% online.
            </p>
            <p
              className="rounded-[var(--radius-input)] border p-[var(--space-sm)] px-[var(--space-md)] text-[14px] leading-[1.5] italic"
              style={{
                color: "#ffffff",
                borderColor: "rgba(47,107,255,0.4)",
                background: "rgba(47,107,255,0.08)",
              }}
            >
              A assinatura de energia está vinculada à sua conta, não às paredes
              da casa. Mudou de endereço? Leva a economia junto. Aproveite a
              Black Friday Vantage.
            </p>
          </div>
          <div className="order-1 lg:order-2 overflow-hidden rounded-[var(--radius-card)]">
            <Image
              src="/assets/13 (1).png"
              alt="Prédio residencial de apartamentos"
              width={560}
              height={380}
              className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="px-[var(--space-md)] py-[var(--space-xl)] sm:py-[var(--space-2xl)]"
        style={{ background: "linear-gradient(to bottom, #131212, #000000)" }}
      >
        <div className="mx-auto max-w-[800px] space-y-[var(--space-md)]">
          <h2
            className="text-center text-[30px] font-bold sm:text-[40px]"
            style={{
              fontFamily: "var(--font-display)",
              color: "#ffffff",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            Perguntas que todo mundo faz
          </h2>
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group [&_summary::-webkit-details-marker]:hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "var(--radius-container)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-[var(--space-md)] p-[var(--space-md)] text-[16px] font-medium sm:text-[18px]"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#ffffff",
                }}
              >
                {f.q}
                <span
                  className="ml-auto shrink-0 text-[18px] transition-transform duration-200 group-open:rotate-45"
                  style={{ color: "#ffffff" }}
                >
                  +
                </span>
              </summary>
              <p
                className="px-[var(--space-md)] pb-[var(--space-md)] text-[16px] leading-[1.5]"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-[var(--space-md)] py-[var(--space-lg)] text-center sm:py-[var(--space-xl)]"
        style={{ background: "#f2f2f2" }}
      >
        <Image
          src="/assets/logo-vantage.png"
          alt="Vantage Energia"
          width={234}
          height={58}
          className="mx-auto mb-[var(--space-md)] h-10 w-auto opacity-80 sm:h-12"
        />
        <div
          className="mb-[var(--space-md)] flex flex-wrap justify-center gap-x-[var(--space-lg)] gap-y-[var(--space-xs)] text-[14px]"
          style={{ color: "#333333" }}
        >
          <a
            href="https://www.instagram.com/vantageenergia/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/vantageenergia"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/vantage-energia"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black"
          >
            LinkedIn
          </a>
          <a
            href="/politica-de-privacidade"
            className="transition-colors hover:text-black"
          >
            Política de Privacidade
          </a>
        </div>
        <p
          className="mx-auto mb-[var(--space-sm)] max-w-[700px] text-[11px] leading-[1.5]"
          style={{ color: "#555555" }}
        >
          *Oferta válida para contratos assinados até 30/11/2026. Economia de 35% aplicada na primeira fatura; a partir da segunda, vale o percentual contratado. Consulte todas as condições na página da oferta.
        </p>
        <p className="text-[12px]" style={{ color: "#666666" }}>
          © 2026 Vantage Energia. Todos os direitos reservados. Seus dados
          estão protegidos conforme a LGPD.
        </p>
      </footer>
    </main>
  );
}