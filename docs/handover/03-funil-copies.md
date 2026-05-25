# Anexo 03 — Funil e Copies

> Funil de prospecção multi-canal e mensagens prontas. Localização das copies: [context/copies/](../../context/copies/).

---

## 1. Estrutura do funil

Todos os canais seguem a sequência **D+0 / D+2 / D+7**, com o mesmo posicionamento (especialização por empresa-alvo, sigilo, análise de 10 minutos). A ligação entra em **D+12** quando WhatsApp e SMS não tiveram resposta.

```
D+0  → LinkedIn (pedido de conexão + apresentação)
D+0  → Email 1 (apresentação)
D+2  → LinkedIn (aprofundamento)
D+2  → Email 2 (aprofundamento)
D+7  → LinkedIn (urgência leve)
D+7  → Email 3 (último recado)
D+11 → WhatsApp + SMS
D+12 → Ligação (se nada acima respondeu)
```

---

## 2. Copies por canal

### 2.1 Email — [emails_prospeccao.md](../../context/copies/emails_prospeccao.md)

Três emails da sequência D+0 / D+2 / D+7:

| Email | Assunto | Ângulo |
|---|---|---|
| **D+0** | "`[NOME]`, você sabe se todos os seus direitos foram pagos corretamente ao sair da `[EMPRESA]`?" | Apresentação + CTA WhatsApp |
| **D+2** | "`[NOME]`, uma revisão genérica raramente encontra o que importa" | Reforço de especialização por empresa |
| **D+7** | "`[NOME]`, último recado da Revisa" | Urgência leve com prazo de 2 anos |

**Variáveis a preencher:** `[NOME]`, `[EMPRESA DO DESTINATÁRIO]`, `[NOME DO REMETENTE]`, `[Link WhatsApp]`.

**Variantes em HTML inline (prontas para Apollo/Brevo):** [copies_email/email1_apollo_inline.html](../../context/copies/copies_email/email1_apollo_inline.html), [email2_apollo_inline.html](../../context/copies/copies_email/email2_apollo_inline.html), [email3_apollo_inline.html](../../context/copies/copies_email/email3_apollo_inline.html).

**Variantes texto puro A/B:** [copies_email/emails_plain_text_AB.txt](../../context/copies/copies_email/emails_plain_text_AB.txt).

### 2.2 LinkedIn — [linkedin_prospeccao.md](../../context/copies/linkedin_prospeccao.md)

Quatro mensagens:

| Etapa | Tipo | Limite |
|---|---|---|
| **Pedido de conexão** (antes do D+0) | Pedido de conexão personalizado | 300 caracteres |
| **D+0** | Apresentação após aceitar | sem limite |
| **D+2** | Aprofundamento | sem limite |
| **D+7** | Urgência leve | sem limite |

Mesmas variáveis dos emails.

Cópia em [copies_linkedin/linkedin_prospeccao.md](../../context/copies/copies_linkedin/linkedin_prospeccao.md).

### 2.3 WhatsApp Blast — [copies_whatsapp_blast.md](../../context/copies/copies_whatsapp_blast.md)

Inclui:
- **Script de vídeo de 37s** estruturado em hook → padrão+autoridade → escassez → CTA → fechamento
- **Mensagem de texto WhatsApp** (versão escrita)

Tema central: *"Não é exceção — é o padrão"* + escassez temporal (cada mês prescreve) + análise de 10 minutos gratuita/sigilosa.

PDF para envio externo: [copies_whatsapp_blast.pdf](../../context/copies/copies_whatsapp_blast.pdf).

### 2.4 Roteiro de ligação — [roteiro_ligacao.md](../../context/copies/roteiro_ligacao.md)

Documento completo da operação de ligação, com:

- **Princípios** — falar o que o lead ganha (clareza, descoberta, sigilo, controle), nunca o que a Revisa faz; vocabulário permitido vs. proibido
- **§1 Abertura + qualificação obrigatória** — pergunta "faz quanto tempo saiu?" determina se a ligação avança
- **§2 Diagnóstico por perguntas** (máx 3) — sobre saída, jornada, remuneração variável, conferência da rescisão
- **§3 Espelhar e ancorar ganhos** — pitch só depois do "faz sentido?" explícito
- **§4 Oferta da reunião** — 4 cenários (A agenda, B WhatsApp, C pensar, D não)
- **Banco de objeções** estruturado em **Validar → Reformular → Reativar** (Desconfiança, Valor, Identidade, Timing, Custo, Ainda na empresa)
- **Mensagens de WhatsApp pós-ligação** (A1 agendou, A2 não agendou, B não atendeu, C só mensagem, D desligou)
- **Registro no Chatwoot** — etiquetas, campos, opt-out
- **Indicadores** — taxa de atendimento, conversa completa, aceite, opt-out, objeção recorrente

### 2.5 Instagram — Reels e Stories

- **Posts educacionais (carrossel/feed):** [copies_instagram_posts.md](../../context/copies/copies_instagram_posts.md) — 7 posts sobre rescisão, FGTS, metas, prazo, horas extras (versões específicas para Unilever e Coca-Cola)
- **Reels de retargeting + sequência de stories:** [Instagram-Reels/revisa_retargeting_reels_stories.md](../../context/copies/Instagram-Reels/revisa_retargeting_reels_stories.md)
  - Reels 25–35s (topo frio): gancho → dor → reframe (Revisão ≠ Conflito) → CTA *"Manda 'revisão' no WhatsApp"*
  - Stories: funil de 4 etapas (reforço dor → autoridade empresa → quebra de objeção → urgência)
  - Estrutura A/B/C de ganchos: A Dor / B Dado / C Empresa
- **Briefing visual de stories:** [Instagram-Reels/revisa_briefing_visual_stories.md](../../context/copies/Instagram-Reels/revisa_briefing_visual_stories.md)
- **Mockups HTML:** [story_revisa_mockup.html](../../context/copies/Instagram-Reels/story_revisa_mockup.html), [story_revisa_mockup - v2.html](../../context/copies/Instagram-Reels/story_revisa_mockup%20-%20v2.html)

---

## 3. Variáveis padrão das copies

Todas as copies de prospecção usam o mesmo conjunto de placeholders:

| Variável | Origem |
|---|---|
| `[NOME]` | Banco de leads (Apollo) |
| `[EMPRESA DO DESTINATÁRIO]` ou `[EMPRESA]` | Banco de leads (Apollo) |
| `[NOME DO REMETENTE]` ou `[NOME DO ATENDENTE]` | Definido por quem opera |
| `[Link WhatsApp]` | URL do WhatsApp da Revisa |
| `[LINK AGENDA]` | Link da agenda do atendente |
| `[HORÁRIOS DISPONÍVEIS]` | 3 slots nas próximas 48h |

---

## 4. Vocabulário oficial da marca

| Usar | Evitar |
|---|---|
| revisão, análise, direitos, valores, especialistas, clareza, histórico, rotina | processar, ação, justiça, indenização, condenação, litígio, briga |

**Tom:** consultivo, calmo, pausado, sem jargão jurídico. Promessa entregue é **clareza**, não recebimento de valor.

**MFG Advogados:** nunca mencionar no topo do funil (primeira mensagem em qualquer canal). Pode aparecer a partir de D+2 ou após interesse demonstrado.

---

## 6. Indicadores do funil

Por canal:
- Email: taxa de abertura, clique, resposta
- LinkedIn: taxa de aceitação, resposta
- WhatsApp Blast: disparado, entregue, visualizado, respondido, agendado, denunciado/bloqueado
- Ligação: atendimento, conversa completa, aceite da análise, opt-out, objeção recorrente

---

## 7. Como gerar variações de copy

A skill `revisa-content` (ver [05-skill-claude.md](05-skill-claude.md)) está treinada no manual de marca, vocabulário e abordagem por empresa. Use-a para:

- Adaptar copies por empresa-alvo nova (ex.: P&G, Hypera, Eurofarma)
- Gerar variantes A/B mantendo tom de voz
- Reescrever roteiros de reels com gancho específico
- Criar follow-ups com base no banco de objeções

---

## Referência cruzada

- [02-leads-prospeccao.md](02-leads-prospeccao.md) — bases que recebem essas copies
- [04-marca-conteudo.md](04-marca-conteudo.md) — manual da marca, identidade visual
- [05-skill-claude.md](05-skill-claude.md) — geração assistida de variações
