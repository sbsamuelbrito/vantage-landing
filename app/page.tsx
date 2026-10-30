import Image from "next/image";
import React, { Suspense } from "react";
import LeadForm from "./LeadForm";

const benefits = [
  {
    title: "Sem placa no telhado. Sem obra. Sem dor de cabeça.",
    desc: "Sabe aquela ideia de que pra economizar precisa instalar painel solar? Esquece. Aqui é só cadastrar sua conta e pronto: 35% de desconto na primeira fatura chegou.",
    asset: "/assets/3.png",
  },
  {
    title: "E se nessa Black você guardasse dinheiro em vez de gastar?",
    desc: "Todo mundo aproveita a Black Friday pra comprar coisa. Que tal usar esse momento pra aliviar uma conta que chega todo mês? 35% off na primeira fatura, zero investimento.",
    asset: "/assets/5.png",
  },
  {
    title: "Pagar cheio ou economizar 35%? A escolha é simples.",
    desc: "Na primeira fatura Vantage você já sente a diferença: 35% de economia. Nos meses seguintes, até 26%. Tudo isso sem obras, sem contrato de fidelidade e 100% digital.",
    asset: "/assets/7.png",
  },
  {
    title: "A energia vem das nossas usinas. O desconto vai direto pra você.",
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
    desc: "Após assinatura, nosso time fará um trabalho de checagem para confirmar se está tudo certo com o processo de adesão.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M11 6h10m-10 6h10m-10 6h10" />
        <path strokeLinejoin="round" d="M3 7.393S4 8.045 4.5 9C4.5 9 6 5.25 8 4M3 18.393S4 19.045 4.5 20c0 0 1.5-3.75 3.5-5" />
      </svg>
    ),
  },
  {
    title: "Ativação",
    desc: "Prontinho! Em até 90 dias você passa a economizar na conta de luz e a consumir energia renovável!",
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
    a: "A ANEEL regula e fiscaliza todo o mercado livre de energia no Brasil. A Vantage opera dentro de todas as normas.",
  },
  {
    q: "Tem fidelidade? Multa se eu quiser sair?",
    a: "Não. Sem contrato de fidelidade, sem multa, sem carência. Você fica porque quer, não porque está preso.",
  },
];

export default function Page() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "var(--navy-deep)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="mx-auto flex max-w-[1140px] items-center justify-center px-[var(--space-md)] py-[var(--space-sm)] sm:py-[var(--space-md)]">
          <Image
            src="https://economiapravoce.vantageenergia.com.br/assets/logo-vantage-DnNZBk6N.png"
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
        style={{ background: "var(--navy-deep)" }}
      >
        <div className="mx-auto grid max-w-[1140px] gap-[var(--space-lg)] lg:grid-cols-2 lg:items-center lg:gap-[var(--space-xl)]">
          <div className="space-y-[var(--space-md)] text-center lg:text-left">
            <h1
              className="animate-fade-up text-[clamp(28px,5vw,57px)] font-bold leading-[1.0] text-white"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.02em",
              }}
            >
              <span className="hero-title-highlight">35% de economia</span>{" "}
              na sua primeira fatura.
            </h1>
            <p
              className="animate-fade-up-delay mx-auto max-w-[65ch] text-[16px] leading-[1.5] sm:text-[18px] lg:mx-0"
              style={{ color: "oklch(0.85 0.01 252)" }}
            >
              Economize na conta de energia sem investir um real e sem fazer
              obra nenhuma. Cadastre sua conta e garanta o desconto nessa Black
              Friday. É simples, rápido e 100% digital.
            </p>
            <ul className="animate-fade-up-delay-2 mx-auto max-w-sm space-y-[var(--space-sm)] text-left text-[14px] text-white lg:mx-0">
              <li className="flex items-start gap-[var(--space-sm)]">
                <Image src="/assets/4.png" alt="" width={20} height={20} className="mt-[2px] h-5 w-5 shrink-0 object-contain" />
                35% de desconto garantido na 1ª fatura*
              </li>
              <li className="flex items-start gap-[var(--space-sm)]">
                <Image src="/assets/4.png" alt="" width={20} height={20} className="mt-[2px] h-5 w-5 shrink-0 object-contain" />
                Zero obras, zero investimento
              </li>
              <li className="flex items-start gap-[var(--space-sm)]">
                <Image src="/assets/4.png" alt="" width={20} height={20} className="mt-[2px] h-5 w-5 shrink-0 object-contain" />
                Processo rápido e 100% online
              </li>
            </ul>
          </div>

          {/* Form */}
          <div
            className="animate-fade-up-delay relative w-full max-w-md mx-auto overflow-hidden p-[var(--space-lg)] sm:p-[var(--space-lg)] animate-pulse-glow"
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
      <section className="px-[var(--space-md)] py-[var(--space-xl)] sm:py-[var(--space-2xl)]">
        <div className="mx-auto max-w-[1140px]">
          <div className="mb-[var(--space-lg)] text-center">
            <h2
              className="text-[30px] font-semibold sm:text-[40px]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--fg)",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              Como funciona o<br />processo de adesão?
            </h2>
          </div>

          {/* Step cards */}
          <div className="flex flex-col items-stretch gap-[var(--space-md)] sm:flex-row sm:items-start sm:gap-0">
            {steps.map((s, i) => (
              <React.Fragment key={s.title}>
                <div
                  className="group flex flex-1 flex-col p-[var(--space-md)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-card)",
                  }}
                >
                  <div
                    className="mx-auto mb-[var(--space-sm)] flex h-12 w-12 items-center justify-center rounded-[var(--radius-input)]"
                    style={{ background: "var(--accent-light)", color: "var(--accent)" }}
                  >
                    {s.icon}
                  </div>
                  <h3
                    className="mb-[var(--space-xs)] text-center text-[16px] font-semibold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[13px] leading-[1.5]" style={{ color: "var(--muted)" }}>
                    {s.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden items-center justify-center px-[var(--space-xs)] sm:flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "var(--accent)" }}>
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
        style={{ background: "var(--surface)" }}
      >
        <div className="mx-auto max-w-[1140px]">
          <h2
            className="mb-[var(--space-lg)] text-center text-[30px] font-semibold sm:text-[40px]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--fg)",
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
                className="group relative overflow-hidden p-[var(--space-lg)] transition-shadow duration-300 hover:shadow-[var(--shadow-hover)]"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-card)",
                }}
              >
                <h3
                  className="mb-[var(--space-sm)] text-[22px] font-medium leading-[1.3]"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--fg)",
                  }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-[16px] leading-[1.5]"
                  style={{ color: "var(--muted)" }}
                >
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="px-[var(--space-md)] py-[var(--space-xl)] sm:py-[var(--space-2xl)]">
        <div className="mx-auto grid max-w-[1140px] items-center gap-[var(--space-lg)] lg:grid-cols-2 lg:gap-[var(--space-xl)]">
          <div className="overflow-hidden rounded-[var(--radius-card)]">
            <Image
              src="/assets/10.png"
              alt="Prédio comercial moderno"
              width={560}
              height={380}
              className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          <div className="space-y-[var(--space-md)]">
            <h2
              className="text-[30px] font-semibold sm:text-[40px]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--fg)",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              Seu negócio também merece essa Black Friday.
            </h2>
            <p
              className="text-[16px] leading-[1.5] sm:text-[18px]"
              style={{ color: "var(--muted)" }}
            >
              Energia é um dos custos mais pesados de qualquer operação. Nesta
              Black Friday, você pode aliviar essa conta sem mudar nada na
              estrutura do seu negócio.
            </p>
            <p
              className="text-[16px] font-medium leading-[1.5]"
              style={{ color: "var(--fg)" }}
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
        style={{ background: "var(--surface)" }}
      >
        <div className="mx-auto grid max-w-[1140px] items-center gap-[var(--space-lg)] lg:grid-cols-2 lg:gap-[var(--space-xl)]">
          <div className="order-2 lg:order-1 space-y-[var(--space-md)]">
            <h2
              className="text-[30px] font-semibold sm:text-[40px]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--fg)",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              Mora de aluguel ou em apartamento? A economia é sua.
            </h2>
            <p
              className="text-[16px] leading-[1.5] sm:text-[18px]"
              style={{ color: "var(--muted)" }}
            >
              Não precisa mexer na estrutura do imóvel. Garanta 35% de economia
              na primeira fatura* com um processo rápido e 100% online.
            </p>
            <p
              className="rounded-[var(--radius-input)] border-l-4 p-[var(--space-sm)] pl-[var(--space-md)] text-[14px] leading-[1.5] italic"
              style={{
                color: "var(--muted)",
                borderColor: "var(--accent)",
                background: "var(--accent-light)",
              }}
            >
              A assinatura de energia está vinculada à sua conta, não às paredes
              da casa. Mudou de endereço? Leva a economia junto. Aproveite a
              Black Friday Vantage.
            </p>
          </div>
          <div className="order-1 lg:order-2 overflow-hidden rounded-[var(--radius-card)]">
            <Image
              src="/assets/11.png"
              alt="Prédio residencial de apartamentos"
              width={560}
              height={380}
              className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-[var(--space-md)] py-[var(--space-xl)] sm:py-[var(--space-2xl)]">
        <div className="mx-auto max-w-[800px] space-y-[var(--space-md)]">
          <h2
            className="text-center text-[30px] font-semibold sm:text-[40px]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--fg)",
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
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-container)",
                background: "var(--bg)",
              }}
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-[var(--space-md)] p-[var(--space-md)] text-[16px] font-medium sm:text-[18px]"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--fg)",
                }}
              >
                {f.q}
                <span
                  className="ml-auto shrink-0 text-[18px] transition-transform duration-200 group-open:rotate-45"
                  style={{ color: "var(--accent)" }}
                >
                  +
                </span>
              </summary>
              <p
                className="px-[var(--space-md)] pb-[var(--space-md)] text-[16px] leading-[1.5]"
                style={{ color: "var(--muted)" }}
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
        style={{ background: "var(--navy-deep)" }}
      >
        <Image
          src="https://economiapravoce.vantageenergia.com.br/assets/logo-vantage-DnNZBk6N.png"
          alt="Vantage Energia"
          width={234}
          height={58}
          className="mx-auto mb-[var(--space-md)] h-10 w-auto brightness-0 invert opacity-70 sm:h-12"
        />
        <div
          className="mb-[var(--space-md)] flex flex-wrap justify-center gap-x-[var(--space-lg)] gap-y-[var(--space-xs)] text-[14px]"
          style={{ color: "oklch(0.7 0.01 252)" }}
        >
          <a
            href="https://www.instagram.com/vantageenergiaoficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/vantageenergia"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/vantage-energia"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="/politica-de-privacidade"
            className="transition-colors hover:text-white"
          >
            Política de Privacidade
          </a>
        </div>
        <p
          className="mx-auto mb-[var(--space-sm)] max-w-[700px] text-[11px] leading-[1.5]"
          style={{ color: "oklch(0.55 0.01 252)" }}
        >
          *Oferta válida para contratos assinados até 30/11/2026. Economia de 35% aplicada na primeira fatura; a partir da segunda, vale o percentual contratado. Consulte todas as condições na página da oferta.
        </p>
        <p className="text-[12px]" style={{ color: "oklch(0.5 0.01 252)" }}>
          © 2026 Vantage Energia. Todos os direitos reservados. Seus dados
          estão protegidos conforme a LGPD.
        </p>
      </footer>
    </main>
  );
}