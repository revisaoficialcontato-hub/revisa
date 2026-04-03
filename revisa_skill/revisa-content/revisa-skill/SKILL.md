---
name: revisa-content
description: >
  Use esta skill sempre que precisar gerar qualquer tipo de conteúdo para a marca Revisa —
  incluindo emails de prospecção, mensagens de WhatsApp, mensagens LinkedIn, posts de Instagram,
  copies de landing page, scripts de reels, follow-ups por empresa-alvo, respostas a objeções,
  blog posts, ou qualquer outro material de comunicação. Use também quando o usuário pedir para
  adaptar conteúdo para uma empresa-alvo específica (ex: "gera o WhatsApp para ex-funcionários
  da Unilever"), refinar tom de voz, criar variações A/B, ou revisar copies existentes.
  Deve ser acionada para qualquer saída textual relacionada à Revisa, mesmo que o usuário
  não mencione explicitamente a marca — se o contexto envolver direitos trabalhistas, revisão
  técnica, ex-funcionários de grandes empresas ou funil de vendas jurídico, use esta skill.
---

# Skill: Revisa Content Generator

## O que é a Revisa

A Revisa é uma plataforma de revisão técnica de direitos trabalhistas para ex-funcionários de grandes empresas. Ela atua como frente de comunicação da operação — a Revisa capta o lead, realiza triagem e conecta com o escritório parceiro **MFG Advogados** para aprofundamento jurídico.

A Revisa **não é** um escritório de advocacia. É a marca de entrada do funil — consultiva, humana e técnica.

---

## Contexto do negócio

- **Público:** ex-funcionários CLT de grandes empresas, desligados nos últimos 24 meses
- **Perfis de cargo prioritários:** Executivo de Negócios, Promotor de Merchandise, Repositor, Representante Comercial
- **Empresas-alvo:** Unilever, Coca-Cola, Nestlé, Colgate, Marilan, PepsiCo, Danone, Johnson & Johnson, Cimed, Mars, Kraft-Heinz, Mondelez, Britvic, Itambé
- **Escritório parceiro:** MFG Advogados (não mencionar no topo do funil — entra após interesse demonstrado)
- **CTA principal:** Falar com especialista via WhatsApp
- **CTA secundário:** Agendar análise de 10 minutos

---

## Tom de voz

- Claro, objetivo, humano, discreto, consultivo, seguro
- **Sem juridiquês** — o público não é jurídico
- **Sem linguagem agressiva** no topo do funil
- **Evitar no topo do funil:** processar, ação, indenização, justiça, condenação, litígio
- **Usar:** revisão, análise, direitos, valores, empresa, ex-funcionário, sigilo, especialistas

---

## Dor central da comunicação

> "Muita gente deixa dinheiro para trás ao sair da empresa sem perceber."

Pontos de dor a explorar:
- Horas extras, pagamentos variáveis, metas, bônus, comissões e reflexos tratados incorretamente
- Rescisão calculada de forma errada
- Práticas recorrentes em grandes empresas que passam despercebidas
- O tempo reduz a capacidade de recuperação (lei permite revisar apenas os últimos 5 anos)
- A pessoa sente que foi prejudicada mas não sabe quantificar

---

## Diferenciais da marca

- Especialização por empresa-alvo (não é abordagem genérica)
- MFG Advogados tem advogados que trabalharam dentro das próprias empresas-alvo
- Processo sigiloso, sem confronto imediato
- Análise inicial gratuita e sem compromisso
- Proposta: revisão técnica, não briga

---

## Estrutura do funil de abordagem

```
INICIAL → IDENTIFICAÇÃO → [objeções] → FOLLOW UPs → ENCERRAMENTO
```

### Colunas do funil por empresa (xlsx de referência):
1. INICIAL — primeira mensagem
2. IDENTIFICAÇÃO — como encontrou o contato
3. ENCONTROU MEU CONTATO — resposta a essa objeção
4. NÃO TENHO INTERESSE — contorno de objeção
5. NÃO TENHO INTERESSE EM PROCESSAR — contorno de objeção
6. JÁ TENHO ADVOGADO — contorno de objeção
7. FOLLOW UP PADRÃO
8. FOLLOW UP 1 (2 dias depois)
9. FOLLOW UP 2 (4 dias depois)
10. ENCERRAMENTO (7 dias depois)

Para detalhes de copies por empresa, consulte: `references/abordagem_por_empresa.md`

---

## Regras de geração de conteúdo

### Para qualquer output:
1. Sempre adaptar `[EMPRESA]` para a empresa-alvo quando fornecida
2. Manter variáveis entre colchetes quando não fornecidas: `[NOME]`, `[EMPRESA]`, `[LINK WHATSAPP]`
3. Nunca mencionar o MFG Advogados em comunicações de topo de funil (emails, LinkedIn D+0)
4. O MFG Advogados pode aparecer a partir do D+2 ou em mensagens de WhatsApp após interesse demonstrado
5. Nunca prometer resultado ou garantir êxito
6. Nunca citar valores de honorários
7. Sempre terminar com CTA claro para WhatsApp ou agendamento de 10 minutos

### Para posts de Instagram:
- Tom consultivo e educativo
- Evitar linguagem de confronto
- CTA: "Entenda se há valores a receber"
- Consulte estrutura em: `references/instagram_posts.md`

### Para landing pages:
- Seguir estrutura: Hero → Dor → O que fazemos → Para quem → Diferencial → Como funciona → FAQ → CTA
- Versão institucional usa `[EMPRESA]` genérico
- Versão por empregador adapta headline e seção de especialização para empresa específica
- Consulte estrutura em: `references/landing_page.md`

### Para copies de WhatsApp/SMS:
- Máximo 3 parágrafos curtos
- Tom conversacional
- Sempre incluir abertura personalizada com `[NOME]`
- CTA direto no final

---

## Empresas-alvo e variáveis específicas

Ao gerar conteúdo para uma empresa específica, use o padrão:
- "Vi pelo seu LinkedIn que você trabalhou na `[EMPRESA]`"
- "ex-colaboradores da `[EMPRESA]`"
- "nosso time acompanha padrões recorrentes em ex-funcionários da `[EMPRESA]`"

Para detalhes de copies testadas por empresa, consulte: `references/abordagem_por_empresa.md`

---

## Referências disponíveis

| Arquivo | Conteúdo |
|---|---|
| `references/abordagem_por_empresa.md` | Copies de WhatsApp por empresa-alvo e tipo de objeção |
| `references/instagram_posts.md` | Posts inaugurais e linha editorial do Instagram |
| `references/landing_page.md` | Estrutura completa da landing page institucional e por empregador |
| `references/marca.md` | Identidade, posicionamento e arquitetura de comunicação da Revisa |

Leia o arquivo de referência relevante antes de gerar o output solicitado.
