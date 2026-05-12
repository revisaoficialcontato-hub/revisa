# Anexo 05 — Claude Code Skill (`revisa-content`)

> Skill que ensina o Claude a gerar conteúdo no tom, vocabulário e abordagem oficial da Revisa. Funciona em qualquer ambiente Claude Code, automaticamente, quando o contexto da conversa envolve a marca.

---

## 1. O que a skill faz

A skill `revisa-content` está treinada com:
- Manual da marca (posicionamento, dor central, diferenciais)
- Vocabulário oficial (termos a usar e a evitar)
- Estrutura do funil (Inicial → Identificação → Objeções → Follow-ups → Encerramento)
- Empresas-alvo e como adaptar mensagens por empresa
- Regras de geração para cada tipo de canal (WhatsApp, Email, LinkedIn, Instagram, Landing Page)

Ela é acionada automaticamente quando a conversa envolve qualquer um destes temas, **mesmo que o usuário não cite a Revisa explicitamente**:
- Direitos trabalhistas
- Revisão técnica de rescisão
- Ex-funcionários de grandes empresas
- Funil de vendas jurídico

---

## 2. Onde a skill mora

Existem dois locais com a mesma skill:

| Local | Papel |
|---|---|
| [revisa_skill/](../../revisa_skill/) | **Source** — versão de trabalho/edição |
| [context/revisa_skill/](../../context/revisa_skill/) | **Versão registrada** — inclui `revisa-content.skill` (arquivo compilado/empacotado) |

Estrutura de cada uma:

```
revisa-content/
└── revisa-skill/
    ├── SKILL.md
    └── references/
        ├── abordagem_por_empresa.md
        ├── instagram_posts.md
        ├── landing_page.md
        └── marca.md
```

A `context/revisa_skill/` contém adicionalmente o arquivo [revisa-content.skill](../../context/revisa_skill/revisa-content.skill) (formato registrado/distribuível).

---

## 3. Conteúdo de cada arquivo

| Arquivo | Conteúdo |
|---|---|
| [SKILL.md](../../revisa_skill/revisa-content/revisa-skill/SKILL.md) | Manifesto da skill — quando acionar, contexto do negócio, tom de voz, dor central, diferenciais, estrutura do funil, regras de geração por tipo de output |
| [references/marca.md](../../revisa_skill/revisa-content/revisa-skill/references/marca.md) | Identidade, posicionamento e arquitetura de comunicação |
| [references/abordagem_por_empresa.md](../../revisa_skill/revisa-content/revisa-skill/references/abordagem_por_empresa.md) | Copies de WhatsApp por empresa-alvo + bancos de objeção (Encontrou meu contato, Não tenho interesse, Não quero processar, Já tenho advogado) |
| [references/landing_page.md](../../revisa_skill/revisa-content/revisa-skill/references/landing_page.md) | Estrutura completa da landing institucional e por empregador |
| [references/instagram_posts.md](../../revisa_skill/revisa-content/revisa-skill/references/instagram_posts.md) | Posts inaugurais e linha editorial |

---

## 4. Como usar a skill

Em qualquer sessão de Claude Code dentro deste repositório, basta pedir geração de conteúdo Revisa:

**Exemplos de prompts que acionam a skill automaticamente:**
- *"Gera um WhatsApp para ex-funcionários da Unilever"*
- *"Quero 3 variações A/B do email D+0 para ex-Coca-Cola"*
- *"Reescreve esse roteiro de reels com gancho de dor"*
- *"Como respondo a objeção 'já tenho advogado'?"*
- *"Adapta a landing page para ex-Mondelez"*

A skill carrega automaticamente o arquivo de referência relevante antes de gerar o output.

---

## 5. Regras importantes que a skill aplica

A skill já internaliza estas regras — não é necessário repeti-las nos prompts:

- Sempre adaptar `[EMPRESA]` quando fornecida
- Manter variáveis entre colchetes quando não fornecidas: `[NOME]`, `[EMPRESA]`, `[LINK WHATSAPP]`
- **Nunca** mencionar MFG Advogados em mensagens de topo de funil
- MFG Advogados pode aparecer a partir do D+2 ou em WhatsApp após interesse
- Nunca prometer resultado ou garantir êxito
- Nunca citar valores de honorários
- Sempre terminar com CTA claro (WhatsApp ou agendamento de 10 min)

---

## 6. Como atualizar a skill

Para mudar tom, vocabulário, regras ou adicionar empresas-alvo:

1. **Editar a versão source** em [revisa_skill/revisa-content/revisa-skill/](../../revisa_skill/revisa-content/revisa-skill/)
   - `SKILL.md` para metadados, regras gerais e quando acionar
   - `references/*.md` para conhecimento específico (marca, empresas, formatos)
2. **Sincronizar com a versão registrada** em [context/revisa_skill/revisa-content/revisa-skill/](../../context/revisa_skill/revisa-content/revisa-skill/) — copiar os arquivos editados.
3. **Recompilar o `.skill`** se a plataforma usada exigir (a versão registrada inclui [revisa-content.skill](../../context/revisa_skill/revisa-content.skill)).

Ao adicionar uma empresa-alvo nova:
- Atualizar a lista de empresas-alvo em `SKILL.md`
- Adicionar copies específicas em `references/abordagem_por_empresa.md`
- Espelhar a empresa em [site/data/empresas.ts](../../site/data/empresas.ts) (ver [01-site.md](01-site.md))

---

## Referência cruzada

- [03-funil-copies.md](03-funil-copies.md) — copies que a skill consegue gerar e adaptar
- [04-marca-conteudo.md](04-marca-conteudo.md) — manual da marca que alimenta a skill
- [01-site.md](01-site.md) — adicionar empresas no site requer mudança paralela na skill
