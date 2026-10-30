import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Vantage Energia",
  description:
    "Política de Privacidade da Vantage Energia. Saiba como coletamos, usamos e protegemos seus dados pessoais conforme a LGPD.",
};

export default function PrivacyPolicyPage() {
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
        <div className="mx-auto flex max-w-[800px] items-center justify-center px-[var(--space-md)] py-[var(--space-sm)] sm:py-[var(--space-md)]">
          <Link href="/" className="animate-fade-up text-[16px] font-medium text-white transition-colors hover:text-[var(--accent-light)]">
            ← Voltar ao início
          </Link>
        </div>
      </header>

      <section className="px-[var(--space-md)] py-[var(--space-xl)] sm:py-[var(--space-2xl)]">
        <div className="mx-auto max-w-[800px] space-y-[var(--space-lg)]">
          <h1
            className="text-[clamp(28px,4vw,40px)] font-bold leading-[1.1]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--fg)",
              letterSpacing: "-0.02em",
            }}
          >
            Política de Privacidade
          </h1>
          <p className="text-[14px]" style={{ color: "var(--muted)" }}>
            Última atualização: outubro de 2026
          </p>

          <div className="space-y-[var(--space-md)] text-[16px] leading-[1.7]" style={{ color: "var(--fg)" }}>
            <h2 className="mt-[var(--space-lg)] text-[22px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              1. Quem somos
            </h2>
            <p>
              A Vantage Energia é uma empresa do mercado livre de energia elétrica, autorizada pela ANEEL, que atua na comercialização e distribuição de energia renovável para consumidores residenciais e empresariais em Goiás.
            </p>

            <h2 className="mt-[var(--space-lg)] text-[22px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              2. Quais dados coletamos
            </h2>
            <p>
              Ao preencher o formulário de cadastro nesta landing page, coletamos os seguintes dados pessoais:
            </p>
            <ul className="list-disc space-y-[var(--space-xs)] pl-[var(--space-lg)]">
              <li>Nome completo</li>
              <li>Número de telefone</li>
              <li>Endereço de e-mail</li>
              <li>Valor médio da conta de luz (opcional)</li>
              <li>Parâmetros UTM de origem da visita</li>
            </ul>

            <h2 className="mt-[var(--space-lg)] text-[22px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              3. Por que coletamos seus dados
            </h2>
            <p>
              Utilizamos seus dados exclusivamente para:
            </p>
            <ul className="list-disc space-y-[var(--space-xs)] pl-[var(--space-lg)]">
              <li>Analisar a viabilidade da adesão ao programa de desconto</li>
              <li>Entrar em contato para apresentar uma proposta personalizada</li>
              <li>Mensurar a eficácia das nossas campanhas de marketing</li>
            </ul>

            <h2 className="mt-[var(--space-lg)] text-[22px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              4. Base legal
            </h2>
            <p>
              O tratamento dos seus dados tem como base legal o seu consentimento explícito, dado no momento do envio do formulário, conforme o artigo 7º, inciso I, da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
            </p>

            <h2 className="mt-[var(--space-lg)] text-[22px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              5. Com quem compartilhamos seus dados
            </h2>
            <p>
              Seus dados podem ser compartilhados apenas com:
            </p>
            <ul className="list-disc space-y-[var(--space-xs)] pl-[var(--space-lg)]">
              <li>Equipe comercial da Vantage Energia, para elaboração da proposta</li>
              <li>Ferramentas de automação de marketing e CRM, sob contrato de confidencialidade</li>
              <li>Autoridades competentes, quando exigido por lei ou ordem judicial</li>
            </ul>
            <p>
              Não vendemos, alugamos ou cedemos seus dados para terceiros fora dessas finalidades.
            </p>

            <h2 className="mt-[var(--space-lg)] text-[22px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              6. Por quanto tempo guardamos seus dados
            </h2>
            <p>
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta política ou enquanto houver obrigação legal. Após esse período, os dados são anonimizados ou excluídos de forma segura.
            </p>

            <h2 className="mt-[var(--space-lg)] text-[22px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              7. Seus direitos
            </h2>
            <p>
              Conforme a LGPD, você tem direito a:
            </p>
            <ul className="list-disc space-y-[var(--space-xs)] pl-[var(--space-lg)]">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar, corrigir ou atualizar seus dados</li>
              <li>Solicitar a exclusão dos dados tratados com base no consentimento</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Portar seus dados a outro fornecedor de serviço</li>
            </ul>
            <p>
              Para exercer qualquer desses direitos, entre em contato pelo e-mail{" "}
              <a href="mailto:privacidade@vantageenergia.com.br" className="underline transition-colors hover:text-[var(--accent)]">
                privacidade@vantageenergia.com.br
              </a>.
            </p>

            <h2 className="mt-[var(--space-lg)] text-[22px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              8. Segurança dos dados
            </h2>
            <p>
              Adotamos medidas técnicas e administrativas adequadas para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida. Os dados trafegam criptografados (HTTPS) e são armazenados em servidores seguros.
            </p>

            <h2 className="mt-[var(--space-lg)] text-[22px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              9. Cookies e rastreamento
            </h2>
            <p>
              Esta página utiliza Google Tag Manager e Facebook Pixel exclusivamente para mensuração de campanhas publicitárias. Nenhum dado pessoal é enviado diretamente a essas plataformas sem o seu consentimento prévio.
            </p>

            <h2 className="mt-[var(--space-lg)] text-[22px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              10. Alterações nesta política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível nesta página, com a data da última atualização indicada no topo.
            </p>

            <h2 className="mt-[var(--space-lg)] text-[22px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              11. Contato
            </h2>
            <p>
              Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados pessoais, entre em contato:
            </p>
            <ul className="list-none space-y-[var(--space-xs)]">
              <li><strong>E-mail:</strong> privacidade@vantageenergia.com.br</li>
              <li><strong>Instagram:</strong> @vantageenergiaoficial</li>
              <li><strong>LinkedIn:</strong> Vantage Energia</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-[var(--space-md)] py-[var(--space-lg)] text-center sm:py-[var(--space-xl)]"
        style={{ background: "var(--navy-deep)" }}
      >
        <p className="text-[12px]" style={{ color: "oklch(0.5 0.01 252)" }}>
          © 2026 Vantage Energia. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}