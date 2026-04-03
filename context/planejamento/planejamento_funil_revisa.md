# Planejamento — Funil de Vendas Ativo | Revisa

> **Objetivo:** Automatizar a prospecção de ex-funcionários de grandes empresas, centralizando touchpoints e disparos em uma stack integrada, com rastreamento de comportamento e escala para centenas de leads por mês.

---

## Contexto do projeto

A Revisa precisa de uma ferramenta que faça duas coisas:

1. **Registrar** em quais canais e etapas cada lead já foi contactado
2. **Disparar** automaticamente os touchpoints do funil (LinkedIn, email, WhatsApp, SMS, ligação) no momento certo

Hoje os leads estão em uma planilha Google Sheets. O CRM em uso é o **Chatwoot** (open source), que tem API completa e suporte nativo a WhatsApp Business — prospecção via WhatsApp já está ativa no Chatwoot.

---

## O funil mapeado (Ativo)

### Fase 1 — Conhecer a marca

| Etapa | Ação | Timing |
|---|---|---|
| 1 | Seguir lead no LinkedIn e Instagram (escritório/correspondente) | D+0 |
| 2 | Email + LinkedIn | D+0 → CTA WhatsApp |
| 3 | Email + LinkedIn | D+2 → CTA WhatsApp |
| 4 | Email + LinkedIn | D+7 → CTA WhatsApp |
| 5 | Se visualizou: Tráfego com base direcionada (Meta Ads) | D+2 após visualização → CTA WhatsApp |
| 6 | Se visualizou o anúncio: Remarketing no tráfego | Contínuo → CTA WhatsApp |

### Fase 2 — Pontos de contato direto

| Etapa | Ação | Timing |
|---|---|---|
| 7 | WhatsApp + SMS | Após 4 dias sem interação |
| 8 | Ligação via discadora | D+1 após WhatsApp sem resposta |

---

## Stack de ferramentas

### Visão geral

```
Google Sheets (origem dos leads)
        ↓
Make (automação — detecta novos leads)
        ↓
Apollo.io (sequência email + LinkedIn)
        ↓
Chatwoot (CRM + atendimento)
        ↓
Meta Ads (tráfego e remarketing — semi-manual)
```

### Detalhamento por ferramenta

| Ferramenta | Função | Custo estimado |
|---|---|---|
| Apollo.io | Sequências de email + LinkedIn, rastreamento de abertura e clique, tarefas manuais | ~R$ 270/mês (Basic) |
| Make | Automação: detecta novos leads na planilha e alimenta o Apollo e o Chatwoot | ~R$ 50/mês |
| Chatwoot | CRM central, histórico de conversas, atendimento ao lead que responde | Já em uso |
| Meta Ads | Tráfego e remarketing com base direcionada (upload de lista manual) | Verba de mídia separada |
| **Total operacional** | | **~R$ 320/mês** |

---

## Plano de implementação

### Fase 1 — Organizar a base

- [ ] Criar conta no Apollo.io (plano gratuito para começar)
- [ ] Exportar planilha de leads como CSV
- [ ] Importar leads no Apollo, mapeando campos: nome, email, empresa, cargo, telefone
- [ ] Instalar extensão do Apollo no Chrome (para LinkedIn)
### Fase 2 — Montar a sequência do funil

- [ ] Criar sequência no Apollo com as etapas abaixo:
  - LinkedIn D+0 (convite de conexão)
  - Email D+0
  - Email D+2
  - LinkedIn D+2 (mensagem após aceitar conexão)
  - Email D+7
  - LinkedIn D+7
  - Tarefa manual D+11: "Enviar WhatsApp"
  - Tarefa manual D+12: "Ligação via discadora"
- [ ] Escrever os copies de cada etapa no tom da Revisa
- [ ] Testar a sequência com 5 leads antes de escalar

### Fase 3 — Automação com Make

- [ ] Criar conta no Make (make.com)
- [ ] Cenário 1: novo lead na planilha → cria contato no Apollo → insere na sequência
- [ ] Cenário 2: lead responde no Apollo → cria/atualiza contato no Chatwoot com histórico
- [ ] Cenário 3: lead chega na etapa de WhatsApp → dispara mensagem via Chatwoot
- [ ] Testar fluxo completo de ponta a ponta com 10 leads

### Fase 4 — Meta Ads

- [ ] Criar Pixel da Meta instalado na página da Revisa
- [ ] Criar audiência customizada no Meta com a lista de leads do Apollo
- [ ] Montar campanha de tráfego direcionado (D+2 após visualização)
- [ ] Montar campanha de remarketing para quem visualizou o anúncio
- [ ] Definir orçamento diário e CTA dos criativos (→ WhatsApp)

---

## O que o Apollo rastreia (métricas do funil)

| Métrica | O que mede |
|---|---|
| Taxa de abertura de email | Quantos leads abriram cada email da sequência |
| Taxa de clique | Quantos clicaram no link do email |
| Taxa de resposta | Quantos responderam ao email ou mensagem LinkedIn |
| Taxa de aceitação LinkedIn | Quantos aceitaram o convite de conexão |
| Conversão por etapa | Onde os leads travam no funil |
| Leads ativos vs concluídos | Quantos estão em andamento vs saíram do funil |

---

## O que estudar (em ordem de prioridade)

1. **Apollo.io — Sequences** → núcleo do projeto, usar todo dia
   - Documentação: apollo.io/help
   - Foco: criar sequência, adicionar etapas, configurar delays, tarefas manuais

2. **Make — Automações básicas** → conecta as ferramentas sem programação
   - Documentação: make.com/en/help
   - Foco: módulo Google Sheets, módulo Apollo, criação de cenários

3. **WhatsApp Business API** → necessário para disparar em escala de forma oficial
   - Documentação: developers.facebook.com/docs/whatsapp
   - Foco: configuração de número, aprovação de templates, limites de envio

4. **Chatwoot — Atendimento e API** → seu CRM já está aqui, aprender a usar bem
   - Documentação: developers.chatwoot.com
   - Foco: caixas de entrada, etiquetas, automações internas, webhooks

---

*Projeto: Funil de Vendas Ativo — Revisa*
