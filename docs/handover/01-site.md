# Anexo 01 — Site Institucional

> Site público da Revisa em [site/](../../site/). Estático, otimizado para performance e SEO, com personalização por empresa-alvo.

---

## Stack

- **Next.js 15.5.14** com `output: 'export'` (build estático puro — HTML/CSS/JS)
- **React 19** + **TypeScript 5** (strict)
- **MDX** via `next-mdx-remote` para artigos do blog
- **Estilo:** CSS global em [site/app/globals.css](../../site/app/globals.css) (~2500 linhas; sem Tailwind nem CSS-in-JS)
- **Tipografia:** Nunito (padrão), Instrument Serif e DM Sans como variáveis CSS, todas via Google Fonts
- **Hospedagem:** Vercel (deploy estático)

Spec original do deploy: [context/docs/superpowers/specs/2026-03-27-nextjs-deploy-design.md](../../context/docs/superpowers/specs/).

---

## Estrutura de rotas

| Rota | Origem | Observação |
|---|---|---|
| `/` | [site/app/page.tsx](../../site/app/page.tsx) | Homepage institucional |
| `/blog` | [site/app/blog/](../../site/app/blog/) | Listagem de artigos com destaque |
| `/blog/[slug]` | [site/app/blog/[slug]/](../../site/app/blog/) | Artigo individual em MDX |
| `/para/[empresa]` | [site/app/para/[empresa]/](../../site/app/para/) | Página dinâmica por empresa-alvo (geração estática) |
| `/privacidade` | [site/app/privacidade/](../../site/app/privacidade/) | Política de privacidade |
| `/termos` | [site/app/termos/](../../site/app/termos/) | Termos de uso |

**Páginas de empresa geradas estaticamente** (via `generateStaticParams`): Unilever, Nestlé, Coca-Cola, PepsiCo, Danone, J&J, Colgate, Cimed, Marilan.

---

## Componentes principais

Localizados em [site/components/](../../site/components/):

- `Nav.tsx` — navegação fixa, dropdown "Para quem", scroll-spy, menu mobile (hamburguer com scroll-lock)
- `Hero.tsx` — headline + 4 cards de value props (Sigilo, Sem juridiquês, Análise técnica, Você decide)
- `EmpresaSections.tsx` — 6 seções reutilizadas nas páginas `/para/[empresa]`
- `ComoFunciona.tsx`, `Depoimentos.tsx`, `Faq.tsx`, `ArtigosBlog.tsx`
- `CtaFinal.tsx`, `CtaInline.tsx` — chamadas para WhatsApp
- `Footer.tsx` — quatro colunas (marca, site, artigos, por empresa) + links legais
- `CopyLinkButton.tsx`, `ReadingProgress.tsx`, `ScrollReveal.tsx`

---

## Conteúdo (blog)

Posts em MDX em [site/content/posts/](../../site/content/posts/):

- `o-que-verificar-na-rescisao.mdx` (destaque, 8 min)
- `horas-extras-representante-comercial.mdx` (6 min)
- `comissao-meta-calculo-rescisao.mdx` (5 min)
- `prazo-para-revisar-direitos.mdx` (4 min)
- `ex-funcionario-unilever-rescisao.mdx` (5 min, específico)
- `erros-calculo-fgts.mdx` (4 min)
- `ex-funcionario-cocacola-rescisao.mdx` (5 min, específico)

**Frontmatter padrão (YAML):**
```yaml
---
titulo: ...
excerpt: ...
tag: ...
empresas: [unilever, coca-cola]
tempoLeitura: 5 min
destaque: true
dataPublicacao: 2026-03-15
---
```

Parser de frontmatter, slugify e extração de TOC: [site/lib/posts.ts](../../site/lib/posts.ts).

---

## Dados estáticos

[site/data/empresas.ts](../../site/data/empresas.ts):
```ts
type Empresa = {
  slug: string
  nome: string
  preposicao: string  // "da Unilever", etc.
}
```

[site/data/posts.ts](../../site/data/posts.ts) — espelho TS dos posts MDX (mantido em sincronia manual).

---

## Integração com WhatsApp

Número e mensagem padrão centralizados em [site/lib/wa.ts](../../site/lib/wa.ts):

```ts
const MSG = encodeURIComponent('Olá! Gostaria de entender se tenho valores a receber da minha rescisão.')
export const WA = `https://wa.me/5511990066495?text=${MSG}`
```

Para mudar o número de atendimento, alterar **apenas este arquivo**.

---

## Como rodar localmente

```bash
cd site
npm install
npm run dev   # http://localhost:3000
```

## Como buildar e exportar

```bash
cd site
npm run build       # gera /out com HTML/CSS/JS estáticos
```

A pasta [site/out/](../../site/out/) contém o último build estático (última build registrada: 30 mar 2026).

## Como adicionar uma nova empresa

1. Adicionar o slug em [site/data/empresas.ts](../../site/data/empresas.ts) com `slug`, `nome` e `preposicao` (ex: `"da Marilan"`).
2. Rodar build — a rota `/para/<slug>` é gerada automaticamente.
3. Atualizar referências de empresas no resto do projeto (skill, copies por empresa, dropdown do site se houver).

## Como adicionar um novo post

1. Criar arquivo `.mdx` em [site/content/posts/](../../site/content/posts/) com frontmatter padrão.
2. Adicionar entrada espelho em [site/data/posts.ts](../../site/data/posts.ts).
3. Rebuild.

---

## Histórico recente do site

Últimos commits que afetam `site/`:

```
709a204  fix: Hamburguer nao estava funcionando como deveria
308510d  mudancas
6389585  reorganize: merge revisa context and site into single repo
```

---

## Referência cruzada

- [02-leads-prospeccao.md](02-leads-prospeccao.md) — bases que alimentam o funil cujo destino final é o WhatsApp do site
- [03-funil-copies.md](03-funil-copies.md) — copies usadas em campanhas que apontam para o site
- [04-marca-conteudo.md](04-marca-conteudo.md) — manual da marca que rege o visual e tom do site
