# Ferramentas e custos

A operação da Revisa usa uma stack de ferramentas integradas — algumas pagas, outras gratuitas. Esta seção lista cada uma, o que faz, quanto custa e o status atual.

---

## Resumo financeiro

**Custo operacional mensal de software:** aproximadamente **R$ 320/mês**.

Isso não inclui:
- Verba de mídia paga no Meta Ads (à parte, varia conforme a estratégia)
- Telefonia / discadora (à definir na próxima etapa)
- Eventuais upgrades de plano

---

## Stack completa

### Prospecção e automação de funil

| Ferramenta | Função | Custo | Status |
|---|---|---|---|
| **Apollo.io** | Prospecção, sequências de email e LinkedIn, tracking | ~R$ 270/mês | Em uso |
| **Make** (antigo Integromat) | Automação entre Google Sheets, Apollo e Chatwoot | ~R$ 50/mês | Planejado |
| **Chatwoot** | CRM e atendimento WhatsApp | Já em uso | Em uso |
| **Brevo** | Email marketing, automações, pixel de visualização | Gratuito até 300/dia | Configurado |

### Anúncios e tráfego

| Ferramenta | Função | Custo | Status |
|---|---|---|---|
| **Meta Business Manager** | Gestão de páginas, anúncios, pixel | Gratuito | Configurado |
| **Meta Ads** | Campanhas pagas (Facebook + Instagram) | Verba à parte | Próxima etapa |
| **Pixel Meta** | Rastreio de conversões no site | Gratuito | Instalado |

### Redes sociais e automação

| Ferramenta | Função | Custo | Status |
|---|---|---|---|
| **Dripify** | Automação LinkedIn (conexões, mensagens) | ~US$ 39/mês | Descontinuado |
| **ManyChat** | Automação de DMs e follow no Instagram | Gratuito até 1.000 leads | Planejado |

### WhatsApp

| Ferramenta | Função | Custo | Status |
|---|---|---|---|
| **Zapi / Wati / Evolution API** | WhatsApp Blast, validação de números | ~R$ 97/mês | A contratar |

A ferramenta exata ainda não foi escolhida — três opções compatíveis estão em estudo.

### Site e desenvolvimento

| Ferramenta | Função | Custo | Status |
|---|---|---|---|
| **Vercel** | Hospedagem do site | Gratuito (plano Hobby) | Em uso |
| **GitHub** | Repositório de código | Gratuito | Em uso |
| **Porkbun** | Registro do domínio revisaoficial.com | ~R$ 50/ano | Em uso |

### Operação interna

| Ferramenta | Função | Custo | Status |
|---|---|---|---|
| **Google Sheets** | Planilha-mestre de leads | Gratuito | Em uso |
| **Google Drive** | Documentação e arquivos | Gratuito | Em uso |
| **Google Workspace** (se aplicável) | Email corporativo | A definir | A confirmar |

### Design e edição

| Ferramenta | Função | Custo | Status |
|---|---|---|---|
| **Canva** | Design de posts, carrosséis, banners | Gratuito ou R$ 55/mês (Pro) | Em uso |
| **CapCut** | Edição de vídeo (reels) | Gratuito | Em uso |
| **Ideogram.ai** | Geração de visuais com IA | Gratuito | Usado pontualmente |

### Assistente de conteúdo

| Ferramenta | Função | Custo | Status |
|---|---|---|---|
| **Claude Code Skill "revisa-content"** | IA configurada para gerar conteúdo respeitando o manual da marca | Gratuito (skill local) | Configurado |

Esta ferramenta merece explicação à parte (próxima seção).

---

## Sobre a ferramenta de IA configurada para a Revisa

Foi criada uma **skill personalizada do Claude Code** que internaliza:

- O manual da marca completo
- O vocabulário oficial (palavras a usar e a evitar)
- A estrutura do funil (Inicial → Identificação → Objeções → Follow-ups → Encerramento)
- Todas as empresas-alvo
- Os bancos de objeções e respostas

**O que ela faz na prática:**

Quando alguém com acesso ao Claude Code pede algo como *"gera um WhatsApp para ex-funcionários da Hypera"* ou *"reescreve esse roteiro de reels com gancho de dor"*, a IA gera o conteúdo respeitando todas as regras da marca, sem precisar repetir as instruções.

**Onde a skill vive:**

- Versão de trabalho (para edição): `revisa_skill/` no repositório
- Versão registrada (compilada): `context/revisa_skill/`

**Quem pode usar:**

Qualquer pessoa com acesso ao repositório e ao Claude Code pode acionar a skill. Não há custo adicional (a skill é local, faz parte do projeto).

**Quando atualizar:**

- Quando adicionar uma empresa-alvo nova
- Quando mudar o tom ou vocabulário oficial
- Quando criar novos formatos de copy padrão

---

## Bloqueadores e próximas decisões

Algumas ferramentas estão marcadas como "Planejado" ou "A contratar" porque dependem de decisões da próxima etapa do projeto (Fase 5 — Ativação):

- **Ferramenta de WhatsApp Blast** — escolher entre Zapi, Wati ou Evolution API. Diferem em preço, qualidade da API e suporte
- **Discadora automática** — fornecedor ainda não definido (próxima etapa do roadmap)
- **ManyChat** — depende de iniciar a automação Instagram (Fase 4.4, ainda pendente)
- **Plano da Vercel** — atualmente Hobby (gratuito). Tecnicamente o Hobby é "non-commercial" segundo os termos da Vercel. Para uso comercial estrito, o ideal é assinar Pro (US$ 20/mês por membro). Na prática a Vercel raramente enforça isso em sites pequenos e estáticos.

---

## Onde estão os acessos

Os logins, senhas, tokens e chaves de API de cada uma destas ferramentas estão (ou serão) registrados em um documento à parte de **Acessos e senhas**. Este documento foi deixado em formato de template para preenchimento manual e seguro, separando o registro das credenciais propriamente ditas (que devem viver em um cofre como 1Password ou Bitwarden, nunca em texto puro).
