# Deploy Revisa — Next.js Static Export + Vercel

**Data:** 2026-03-27
**Status:** Aprovado

---

## Contexto

A landing page da Revisa existe hoje como um único arquivo HTML (`landing page/revisa-landing.html`, 901 linhas). O objetivo é migrar esse arquivo para Next.js, habilitando:

1. Deploy automático via Vercel (conectado ao GitHub)
2. Primeiro load instantâneo via static export (páginas pré-geradas no build)
3. Páginas específicas por ex-empregador (`/para/unilever`, `/para/nestle`, etc.), com estrutura já definida nos documentos da marca

---

## Decisões de arquitetura

| Decisão | Escolha | Motivo |
|---|---|---|
| Framework | Next.js (App Router) | Padrão atual, suporte nativo a static export |
| Estratégia de render | Static Export (`output: 'export'`) | Primeiro load instantâneo, sem servidor |
| Hospedagem | Vercel | Integração nativa com Next.js e GitHub, plano gratuito suficiente |
| Dados de empresa | Arquivo TypeScript (`data/empresas.ts`) | Simples, sem CMS, conteúdo das páginas é >95% template |
| Domínio | Vercel subdomain por agora (`*.vercel.app`), domínio próprio futuro | Usuário ainda não tem domínio |

---

## Estrutura de arquivos

```
revisa/
├── app/
│   ├── layout.tsx              # Shell HTML, fonte Nunito, meta padrão
│   ├── page.tsx                # Página principal (/)
│   └── para/
│       └── [empresa]/
│           └── page.tsx        # Template por empresa (/para/unilever etc.)
│
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx                # Recebe props: nome? (string | null)
│   ├── Empresas.tsx
│   ├── ComoFunciona.tsx
│   ├── Depoimentos.tsx
│   ├── Faq.tsx
│   └── CtaFinal.tsx            # Recebe props: nome? (string | null)
│
├── data/
│   └── empresas.ts             # Lista de empresas-alvo com slug e nome
│
├── public/
│   └── logo.png
│
├── next.config.ts              # output: 'export'
├── package.json
└── tsconfig.json
```

---

## Dados das empresas

```ts
// data/empresas.ts

export type Empresa = {
  slug: string   // usado na URL: /para/unilever
  nome: string   // usado no copy: "Unilever"
}

export const empresas: Empresa[] = [
  { slug: 'unilever',  nome: 'Unilever'  },
  { slug: 'nestle',    nome: 'Nestlé'    },
  { slug: 'cocacola',  nome: 'Coca-Cola' },
  { slug: 'pepsico',   nome: 'PepsiCo'   },
  { slug: 'danone',    nome: 'Danone'    },
  { slug: 'jj',        nome: 'J&J'       },
  { slug: 'colgate',   nome: 'Colgate'   },
  { slug: 'cimed',     nome: 'Cimed'     },
  { slug: 'marilan',   nome: 'Marilan'   },
]
```

---

## Páginas geradas

| Rota | Arquivo | Empresa injetada |
|---|---|---|
| `/` | `app/page.tsx` | nenhuma (genérico) |
| `/para/unilever` | `app/para/[empresa]/page.tsx` | "Unilever" |
| `/para/nestle` | idem | "Nestlé" |
| `/para/cocacola` | idem | "Coca-Cola" |
| `/para/pepsico` | idem | "PepsiCo" |
| `/para/danone` | idem | "Danone" |
| `/para/jj` | idem | "J&J" |
| `/para/colgate` | idem | "Colgate" |
| `/para/cimed` | idem | "Cimed" |
| `/para/marilan` | idem | "Marilan" |

Total: **10 páginas estáticas pré-geradas.**

---

## O que muda por empresa (conforme documento formal da marca)

| Elemento | Página principal | Página por empresa |
|---|---|---|
| `<title>` | "Revisa · Entenda se há valores a receber ao sair da empresa" | "Revisa · Ex-funcionários da [EMPRESA]" |
| Hero headline | "...ao sair da empresa" | "...ao sair da [EMPRESA]" |
| Hero subheadline | "...para ex-funcionários de grandes empresas" | "...para ex-funcionários da [EMPRESA]" |
| Bloco de autoridade | genérico | "...padrões recorrentes em ex-funcionários da [EMPRESA]..." |
| Nav CTA | "Entenda se há valores a receber" | "Entenda se há valores a receber da [EMPRESA]" |
| CTA final | idem | idem |

**Não muda entre páginas:** FAQ, depoimentos, "Como funciona", lista de empresas, footer, cores, tipografia.

---

## Fluxo de deploy

```
Edita código local
        ↓
git push → GitHub
        ↓
Vercel detecta automaticamente
        ↓
Roda `next build` (gera 10 páginas estáticas, ~1 min)
        ↓
Publica nos servidores globais da Vercel (CDN)
        ↓
Site no ar com load instantâneo
```

Para adicionar nova empresa no futuro: adicionar entrada em `data/empresas.ts` → push → redeploy automático.

---

## Fora do escopo desta spec

- Domínio próprio (a conectar depois, quando adquirido)
- Analytics / pixel de rastreamento
- Formulário com backend (CTA atual é WhatsApp)
- CMS para edição de conteúdo sem código
