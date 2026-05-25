# Conteúdo e redes sociais

## Site institucional

**URL:** revisaoficial.com

O site é a vitrine pública da marca e o destino final de todas as campanhas. É um site estático otimizado para performance e SEO, hospedado na Vercel.

### Estrutura do site

- **Página inicial** (`/`) — hero com a promessa central, valor proposto em 4 cards (sigilo, sem juridiquês, análise técnica, decisão do lead), como funciona, depoimentos, FAQ, blog em destaque, CTAs para WhatsApp
- **Blog** (`/blog`) — listagem de todos os artigos
- **Artigo individual** (`/blog/[slug]`) — cada artigo do blog
- **Página por empresa** (`/para/[empresa]`) — uma página dedicada para cada empresa-alvo (Unilever, Nestlé, Coca-Cola, PepsiCo, Danone, J&J, Colgate, Cimed, Marilan). Adapta o título e a seção principal para a empresa.
- **Privacidade** e **Termos** — páginas legais

### Blog — 7 artigos publicados

Todos os posts ficam em `site/content/posts/` no repositório:

| Artigo | Tempo de leitura | Destaque |
|---|---|---|
| O que verificar na rescisão | 8 min | Sim |
| Horas extras do representante comercial | 6 min | |
| Comissão, meta e cálculo na rescisão | 5 min | |
| Prazo para revisar direitos | 4 min | |
| Ex-funcionário Unilever — rescisão | 5 min | Específico para Unilever |
| Erros no cálculo do FGTS | 4 min | |
| Ex-funcionário Coca-Cola — rescisão | 5 min | Específico para Coca-Cola |

**Como adicionar um post novo:** o redator escreve em formato Markdown com cabeçalho (título, resumo, tag, empresas relacionadas, tempo de leitura), e o site é rebuildado. Quem cuidar do site técnico saberá fazer.

### Hospedagem e domínio

- **Hospedagem:** Vercel (deploy automático a cada commit no GitHub)
- **Domínio:** revisaoficial.com, registrado na Porkbun
- **Última build do site:** 30 de março de 2026

---

## LinkedIn

Posts pré-prontos para LinkedIn, com texto e imagens correspondentes, estão na pasta `context/Posts/Linkedin Posts/` do repositório.

**Texto dos posts:** em formato Markdown e DOCX (`posts_linkedin_revisa.md` e `.docx`)

**Imagens anexas:**

- "Revisão genérica e o que importa"
- "Revisão e reflexão em harmonia"
- "Pontos esquecidos no desligamento"
- "Muita gente sai de grandes empresas"
- "Design moderno com tipografia ousada"

Esses posts foram criados para pré-popular o perfil do LinkedIn antes do início das automações de prospecção. Servem também como base para conteúdo recorrente.

---

## Instagram

### Carrosséis prontos

Quatro carrosséis (séries de slides) prontos para publicação, na pasta `context/Posts/Instagram_posts/carroseis_revisa_final/carroseis_final/`:

- Carrossel 1
- Carrossel 2
- Carrossel 3
- Carrossel 4

Cada pasta contém os slides em PNG. Há também um backup comprimido (`.zip`).

### Posts educacionais (texto)

Sete textos de posts educacionais, na pasta `context/copies/`, arquivo `copies_instagram_posts.md`. Cobrem temas como rescisão, FGTS, metas, prazo, horas extras, com versões específicas para Unilever e Coca-Cola.

### Reels e Stories — estratégia

Estratégia documentada para conteúdo de retargeting:

- **Reels de 25 a 35 segundos** (topo de funil frio): gancho → dor → reframe (revisão ≠ conflito) → CTA "manda 'revisão' no WhatsApp"
- **Sequência de 4 stories** (retargeting): reforço da dor → autoridade na empresa-alvo → quebra de objeção → urgência
- **Teste A/B/C de ganchos**: A = dor, B = dado, C = empresa específica. Roda 7 dias, escala o vencedor.

Os arquivos detalhados (briefing visual, mockups HTML de stories, estratégia completa) estão na pasta `context/copies/Instagram-Reels/`.

### Planejamento e mockups

Na pasta `context/Posts/Instagram_posts/Planejamentos/`:

- Briefing visual de stories
- Estratégia de reels e stories de retargeting
- Mockups HTML de carrosséis e stories (visualização da estrutura)

---

## Material visual disponível

Resumo dos assets prontos para criar peças novas:

- Logos (3 variações) — pasta `context/id_visual/logo/`
- Banner com gradiente teal — pasta `context/id_visual/Banner/`
- Template de WhatsApp — pasta `context/id_visual/`
- Manual da marca completo (PDF, HTML, DOCX) — pasta `context/id_visual/Manual da marca/`

Para criar peças novas, o ideal é seguir o manual da marca (cores, tipografia, espaçamento, tom).

---

## Frequência sugerida de publicação

Existe um "fluxo contínuo" de criação de conteúdo documentado como parte da operação (Fase 3.4 do roadmap). Não há cadência rígida, mas o ideal é:

- **Blog:** 1 artigo novo por semana, focando em uma empresa específica por mês
- **LinkedIn:** 2 a 3 posts por semana, mix de educacional + posicionamento
- **Instagram:** 1 carrossel por semana + reels semanal + stories diários (durante campanhas)

---

## Como pedir ajuda para gerar conteúdo

Existe uma **ferramenta de IA configurada** especialmente para a Revisa que respeita todas as regras de tom, vocabulário e marca. Detalhe na seção de Ferramentas. Ela pode:

- Adaptar copies para uma empresa-alvo nova
- Gerar variações A/B de mensagens
- Escrever roteiros de reels com gancho específico
- Criar follow-ups com base no banco de objeções
- Reescrever um texto que ficou com tom errado

---

## Onde os arquivos vivem

- Site (código) → `site/`
- Posts do blog → `site/content/posts/`
- Posts do LinkedIn → `context/Posts/Linkedin Posts/`
- Carrosséis Instagram → `context/Posts/Instagram_posts/`
- Reels e Stories (estratégia) → `context/copies/Instagram-Reels/`
- Identidade visual → `context/id_visual/`
- Manual da marca → `context/id_visual/Manual da marca/` e `id_visual/Manual da marca/`
