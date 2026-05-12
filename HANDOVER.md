# Repasse — Projeto Revisa

> Documento mestre de transferência. Pensado para ser lido em ~10 minutos por qualquer pessoa (técnica ou gestora) que precise entender o que existe, onde está e como funciona.

**Última atualização:** 2026-05-08

---

## 1. O que é a Revisa

A Revisa é uma **plataforma de revisão técnica de direitos trabalhistas** voltada a ex-funcionários de grandes empresas (Unilever, Coca-Cola, Nestlé, PepsiCo, Mondelez, Danone, J&J, Colgate, Cimed, Marilan e adjacentes).

**Promessa central:** *"Entenda se você deixou valores para trás ao sair da empresa."*

**Posicionamento:** consultivo, humano, técnico sem juridiquês, sigiloso. Mensagens evitam "processar", "litígio" e "ação judicial" — o vocabulário oficial é "revisão", "análise", "clareza", "valores".

**Diferencial competitivo:** especialização **por empresa-alvo**. O lead recebe uma abordagem que reconhece padrões específicos da empresa onde trabalhou, em vez de revisão genérica.

**Relação com MFG Advogados:** a Revisa é a frente consultiva (porta de entrada). MFG é o aprofundamento jurídico, **nunca mencionado no topo do funil**.

---

## 2. Mapa do repositório

| Pasta | Conteúdo | Anexo |
|---|---|---|
| [site/](site/) | Site institucional Next.js (estático) | [01-site.md](docs/handover/01-site.md) |
| [context/leads/](context/leads/) | Bases de prospecção (Apollo, Dripify legado) | [02-leads-prospeccao.md](docs/handover/02-leads-prospeccao.md) |
| [context/copies/](context/copies/) | Mensagens por canal (WhatsApp, Email, LinkedIn, Ligação, Reels) | [03-funil-copies.md](docs/handover/03-funil-copies.md) |
| [context/Posts/](context/Posts/) | Posts e carrosséis Instagram prontos | [04-marca-conteudo.md](docs/handover/04-marca-conteudo.md) |
| [context/id_visual/](context/id_visual/) e [id_visual/](id_visual/) | Manual da marca, logos, banners, templates | [04-marca-conteudo.md](docs/handover/04-marca-conteudo.md) |
| [context/landing page/](context/landing%20page/) | Landing page HTML standalone (versão alternativa) | [04-marca-conteudo.md](docs/handover/04-marca-conteudo.md) |
| [context/planejamento/](context/planejamento/) | Roadmap operacional + estratégia de captura Apollo | seção 3 deste documento |
| [context/descricoes_empresa/](context/descricoes_empresa/) | Documentos formais (marca, landing, versão por empregador) | [04-marca-conteudo.md](docs/handover/04-marca-conteudo.md) |
| [revisa_skill/](revisa_skill/) e [context/revisa_skill/](context/revisa_skill/) | Claude Code Skill que gera conteúdo no tom da marca | [05-skill-claude.md](docs/handover/05-skill-claude.md) |
| [context/docs/superpowers/specs/](context/docs/superpowers/) | Spec técnica do deploy Next.js | [01-site.md](docs/handover/01-site.md) |

---

## 3. Status do projeto por fase

Fonte: [context/planejamento/fluxo_trabalho.md](context/planejamento/fluxo_trabalho.md).

### Fase 1 — Fundação (bloqueante)
- ✅ 1.1 Manual da Marca
- ✅ 1.2 Validação Jurídica das Copies

### Fase 2 — Presença Digital
- ✅ 2.1 Site Institucional
- ✅ 2.2 Perfis LinkedIn e Instagram
- ✅ 2.3 Selo Azul (WhatsApp e Instagram)

### Fase 3 — Conteúdo
- ✅ 3.1 Blog Posts (5 artigos no roadmap; **7 publicados** atualmente)
- ✅ 3.2 Pré-popular LinkedIn
- ✅ 3.3 Pré-popular Instagram
- ✅ 3.4 Conteúdo recorrente (fluxo contínuo)

### Fase 4 — Infraestrutura Técnica
- ✅ 4.1 Pixel Meta + Eventos de Conversão
- ✅ 4.2 Funil de Email Marketing
- ✅ 4.3 Funil LinkedIn
- ⏳ 4.4 Automação Instagram

### Fase 5 — Ativação
- ⏳ 5.1 Campanhas de Tráfego (Meta Ads)
- ⏳ 5.2 Remarketing
- ⏳ 5.3 Testes A/B WhatsApp
- ⏳ 5.4 Discadora

---

## 4. Stack operacional e custos recorrentes

Resumo das ferramentas referenciadas no projeto. Detalhe completo (incluindo onde estão guardadas as credenciais) em [06-acessos-e-ferramentas.md](docs/handover/06-acessos-e-ferramentas.md).

| Ferramenta | Função | Custo aproximado |
|---|---|---|
| Apollo.io | Prospecção, sequências email + LinkedIn, tracking | ~R$ 270/mês |
| Make | Automação entre Google Sheets, Apollo e Chatwoot | ~R$ 50/mês |
| Chatwoot | CRM e atendimento WhatsApp | já em uso |
| Brevo | Email marketing, automações, pixel | gratuito até 300/dia |
| Meta Business / Ads | Tráfego, remarketing, pixel | verba à parte |
| Dripify | Automação LinkedIn | ~US$ 39/mês (descontinuado — ver anexo 02) |
| ManyChat | Automação Instagram DM | gratuito até 1k leads |
| Zapi / Wati | WhatsApp Blast e validação de números | ~R$ 97/mês |
| Vercel | Hospedagem do site | gratuito |
| Google Sheets | Planilha-mestre de leads | gratuito |
| Canva, CapCut, Ideogram.ai | Design e edição | gratuito / R$ 55/mês |

**Custo operacional de software:** ~R$ 320/mês (sem incluir verba de mídia paga e telefonia).

---

## 5. Como pedir ajuda à IA para gerar conteúdo da marca

Existe uma **Claude Code Skill** chamada `revisa-content` que gera mensagens, copies, posts e variações no tom oficial da marca, respeitando vocabulário, posicionamento e abordagem por empresa-alvo.

- Source: [revisa_skill/](revisa_skill/)
- Versão registrada: [context/revisa_skill/](context/revisa_skill/)
- Detalhe completo de uso e atualização: [05-skill-claude.md](docs/handover/05-skill-claude.md)

A skill é acionada automaticamente em qualquer geração de conteúdo Revisa, mesmo quando a marca não é citada explicitamente, contanto que o contexto seja direitos trabalhistas / revisão técnica / vendas consultivas para ex-funcionários.

---

## 6. Índice dos anexos

| # | Anexo | Para quem |
|---|---|---|
| 01 | [Site institucional](docs/handover/01-site.md) | Quem for mexer no código do site |
| 02 | [Leads e prospecção](docs/handover/02-leads-prospeccao.md) | Quem operar prospecção e Apollo |
| 03 | [Funil e copies](docs/handover/03-funil-copies.md) | Quem disparar mensagens em qualquer canal |
| 04 | [Marca e conteúdo](docs/handover/04-marca-conteudo.md) | Designer, social media, redator |
| 05 | [Claude Code Skill](docs/handover/05-skill-claude.md) | Quem for usar IA para conteúdo Revisa |
| 06 | [Acessos e ferramentas](docs/handover/06-acessos-e-ferramentas.md) | Quem assumir contas e credenciais |

---

## 7. Glossário rápido

- **ICP** — perfil ideal de cliente (ex-funcionário CLT de FMCG, comercial/operacional, desligado nos últimos 24 meses)
- **Funil D+0/D+2/D+7** — sequência padrão de mensagens em todos os canais (primeiro contato, reforço, último aviso)
- **A/B/C** — convenção dos testes de copy: A direta com urgência, B curiosidade + prova social, C agressiva sem marca
- **Empresa-alvo** — empresa onde o lead trabalhou (Unilever, Coca-Cola, etc.); chave da personalização
- **Selo azul** — verificação oficial Meta concedida ao perfil
