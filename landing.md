# Vantage Energia — Landing Page Black Friday

## Propósito

Landing page de campanha Black Friday para captação de leads da Vantage Energia em Goiás (GO). A oferta principal é **35% de economia na primeira fatura** de energia, sem obras, sem investimento e sem fidelidade. O público-alvo inclui consumidores residenciais, inquilinos, moradores de apartamentos e empresas.

## Stack Técnico

- **Framework:** Next.js 16.4.3 (App Router, Turbopack)
- **Renderização:** Static Site Generation (SSG) — todas as páginas são prerenderizadas
- **Styling:** Tailwind CSS com design tokens customizados (`--space-*`, `--radius-*`, `--font-display`)
- **Formulário:** Server Actions (`app/actions.ts`) com validação server-side
- **Integração:** Webhook n8n para captura de leads

## Estrutura das Seções

### 1. Header
- **Background:** `#000000` sólido
- **Logo:** Externa (`economiapravoce.vantageenergia.com.br`), tamanho `h-12 sm:h-14`
- **Posição:** Sticky no topo com borda sutil

### 2. Hero Section
- **Background:** Gradiente `linear-gradient(to bottom, #131212, #000000)`
- **Layout:** Grid 2 colunas no desktop (texto esquerda, formulário direita)
- **Imagem:** `/assets/ImagemLogo.png` acima do título com espaçamento `mb-[var(--space-xs)]`
- **Título:** `clamp(24px, 6vw, 28px)` para legibilidade mobile-first
- **Formulário:** Captura nome, telefone, email, valor da fatura + aceitação LGPD + UTMs
- **Bullets:** Sem obras, sem investimento, sem fidelidade

### 3. Como Funciona (Seção Clara)
- **Background:** `#f2f2f2`
- **Cards:** 3 steps com ícones SVG, fundo gradiente escuro, setas conectoras entre cards
- **Títulos:** Texto branco sobre cards escuros, título da seção em preto

### 4. Benefits (Seção Escura)
- **Background:** Gradiente `linear-gradient(to bottom, #131212, #000000)`
- **Cards:** Grid 2 colunas com borda azul sutil (`rgba(47,107,255,0.3)`), linha decorativa vertical à esquerda, hover com elevação e glow
- **Conteúdo:** 4 benefícios com imagens de campanha (`/assets/3.png`, `/assets/5.png`, `/assets/7.png`, `/assets/11.png`)

### 5. B2B (Seção Clara)
- **Background:** `#f2f2f2` para contraste visual
- **Layout:** Grid 2 colunas (imagem esquerda, texto direita)
- **Imagem:** `/assets/12 (1).png` com hover scale
- **Texto:** Título preto, parágrafos em `#333333` e destaque em preto

### 6. Renters/Apartments (Seção Escura)
- **Background:** Gradiente `linear-gradient(to bottom, #131212, #000000)`
- **Layout:** Grid 2 colunas invertido no desktop (texto esquerda, imagem direita)
- **Callout:** Box com borda azul sutil e fundo `rgba(47,107,255,0.08)` para destacar a mensagem sobre mudança de endereço
- **Imagem:** `/assets/13 (1).png`

### 7. FAQ
- **Background:** Gradiente `linear-gradient(to bottom, #131212, #000000)`
- **Componente:** `<details>` nativo com animação de rotação no ícone `+`
- **Perguntas:** 6 FAQs cobrindo obras, fidelidade, segurança, prazo, cobertura geográfica e cancelamento

### 8. Footer
- **Background:** `#f2f2f2`
- **Logo:** Mesma URL externa do header, sem filtro invert
- **Links:** Instagram (`vantageenergia`), Facebook, LinkedIn, Política de Privacidade
- **Texto:** Cores escuras (`#333333`, `#555555`, `#666666`) para contraste
- **Disclaimer:** Condições da oferta Black Friday em texto pequeno

## Fluxo de Captura de Leads

### 1. Preenchimento do Formulário
O usuário preenche os campos obrigatórios (nome, telefone, email) e opcionais (valor da fatura) na Hero Section, aceita os termos LGPD e clica em "Quero economizar".

### 2. Validação Server-Side
A Server Action `submitLead` em `app/actions.ts` valida:
- Campos obrigatórios preenchidos
- Aceitação LGPD (`lgpd === 'on'`)

### 3. Envio ao Webhook
O payload é enviado via POST para:
```
https://n8n.vantage.top/webhook/entradalpblack01
```

**Payload:**
```json
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "billValue": "string | null",
  "lgpdAccepted": true,
  "utm_source": "string | null",
  "utm_medium": "string | null",
  "utm_campaign": "string | null",
  "utm_term": "string | null",
  "utm_content": "string | null",
  "createdAt": "ISO 8601 timestamp"
}
```

### 4. Resposta
- **Sucesso (HTTP 200):** Usuário vê mensagem de confirmação
- **Erro:** Usuário vê mensagem de erro genérica ("Erro ao enviar dados. Tente novamente.")

### 5. UTMs
Os UTMs são capturados automaticamente da URL via `useSearchParams()` no componente `LeadForm` e enviados como hidden inputs.

## Decisões de Design

### Mobile-First
- Tipografia responsiva com `clamp()` para títulos
- Grid de 1 coluna no mobile, 2 colunas no desktop (`sm:grid-cols-2`, `lg:grid-cols-2`)
- Espaçamentos baseados em tokens (`--space-sm`, `--space-md`, `--space-lg`, `--space-xl`, `--space-2xl`)
- Imagens com `max-w` e `object-contain` para evitar overflow

### Contraste Visual
- Alternância entre seções claras (`#f2f2f2`) e escuras (gradiente) para ritmo visual
- Texto branco sobre fundos escuros, texto preto/cinza sobre fundos claros
- Bordas sutis (`rgba(47,107,255,0.3)`) para destacar cards sem poluição visual

### Performance
- **Static Generation:** Todas as páginas são prerenderizadas em build time
- **Turbopack:** Compilação rápida (~15-60ms em dev mode)
- **Next.js Image:** Otimização automática de imagens com `priority` em imagens above-the-fold
- **Server Actions:** Validação e envio server-side sem JavaScript client-side

### Acessibilidade
- Contraste WCAG AA em todos os textos
- `<details>` nativo para FAQ (semântico e acessível)
- Labels explícitos em todos os inputs do formulário
- Checkbox LGPD com label descritivo

## Variáveis de Ambiente

- `WEBHOOK_URL` (opcional): Override da URL do webhook. Se não definida, usa `https://n8n.vantage.top/webhook/entradalpblack01`

## Deploy

- **Hospedagem:** Vercel (recomendado para Next.js)
- **Domínio:** `economiapravoce.vantageenergia.com.br`
- **Build:** `next build` gera páginas estáticas em `.next/`
- **CI/CD:** GitHub Actions ou Vercel auto-deploy on push

## Manutenção

### Atualizar Copy
- Editar strings diretamente em `app/page.tsx`
- FAQs no array `faqs` no topo do arquivo
- Benefits no array `benefits` no topo do arquivo

### Trocar Imagens
- Substituir arquivos em `public/assets/`
- Manter mesmos nomes ou atualizar referências em `app/page.tsx`

### Alterar Webhook
- Modificar `WEBHOOK_URL` em `.env.local` ou `app/actions.ts`
- Testar com `curl -X POST <url> -H "Content-Type: application/json" -d '{"test":true}'`

### Ajustar Cores
- Backgrounds: inline `style={{ background: "..." }}`
- Textos: inline `style={{ color: "..." }}` ou classes Tailwind
- Design tokens: `app/globals.css`

---

**Última atualização:** 2026-11-03  
**Versão:** 1.0  
**Autor:** Luis + AI Assistant