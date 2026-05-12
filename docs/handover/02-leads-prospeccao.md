# Anexo 02 — Leads e Prospecção

> Bases de prospecção, estratégia de captura no Apollo, regras de higienização e segmentação. Fonte primária: [context/planejamento/captura_leads_apollo.md](../../context/planejamento/captura_leads_apollo.md).

---

## 1. Bases existentes

Localização: [context/leads/](../../context/leads/).

| Arquivo | Linhas | Conteúdo | Uso |
|---|---|---|---|
| [apollo-contacts-export.csv](../../context/leads/apollo-contacts-export.csv) | 785 | Export completo do Apollo (70+ colunas: emails, telefones, LinkedIn, títulos, empresas) | Fonte bruta — origem de tudo |
| [leads_apollo.csv](../../context/leads/leads_apollo.csv) | 625 | Nome, sobrenome, email, empresa, título, telefone, **campo Retorno** (tracking) | Lista mestre histórica (com tracking de retorno) |
| [leads_apollo_corrigido.csv](../../context/leads/leads_apollo_corrigido.csv) | 625 | Versão limpa/deduplicada da mestre | Versão higienizada |
| [leads_apollo_para_disparo.csv](../../context/leads/leads_apollo_para_disparo.csv) | 587 | Sub-conjunto pronto para sequências email + LinkedIn + WhatsApp | Lista operacional de disparo |
| [leads_blast_nome_numero.csv](../../context/leads/leads_blast_nome_numero.csv) | 581 | Apenas Nome + Telefone | Formato mínimo para WhatsApp/SMS Blast |
| [leads_dripify.csv](../../context/leads/leads_dripify.csv) | 426 | Nome, sobrenome, LinkedIn, empresa, título | Lista paralela usada com Dripify (descontinuado) |
| [Leads Refina para Revisa.csv](../../context/leads/Leads%20Refina%20para%20Revisa.csv) | 692 | Lista anterior do projeto Refina (predecessor da Revisa) com campos extras úteis (LinkedIn, data de saída, cidade) | Histórico — referência |
| [Leads Refina para Revisa.xlsx](../../context/leads/Leads%20Refina%20para%20Revisa.xlsx) | — | Versão Excel da mesma lista | Backup |

**Pipeline lógico:** `apollo-contacts-export.csv` → filtrar/limpar → `leads_apollo.csv` (mestre com retorno) → `leads_apollo_corrigido.csv` → recorte para disparo → `leads_apollo_para_disparo.csv` ou `leads_blast_nome_numero.csv`.

---

## 2. Diagnóstico da base atual (de `leads_apollo.csv`)

| Métrica | Valor |
|---|---|
| Total de leads | 624 |
| Com telefone | 599 (96%) |
| Já contatados (campo `Retorno` preenchido) | ~50 (8%) |

**Empresas dominantes:** Unilever (113), PepsiCo (93), Nestlé (82), Coca-Cola (75), CIMED (46), Mondelez (45), Marilan (39), Kraft-Heinz (38), Danone (29).

**Cargos dominantes:** Vendedor, Promotor de vendas, Gerente/Executivo/Coordenador de vendas, Representante comercial — todos perfis comerciais/operacionais com meta e variável (alto match com o ICP).

---

## 3. ICP (Ideal Customer Profile)

- **Vínculo:** ex-funcionário CLT
- **Tempo desde desligamento:** 12 a 24 meses (questão de prescrição — exigência do manual)
- **Setor:** FMCG, multinacionais, grandes empresas brasileiras
- **Cargos de alta aderência:** comercial/vendas, trade & merchandising, operacional com jornada pesada
- **País:** Brasil
- **Canal:** preferencialmente com celular ativo (WhatsApp)

---

## 4. Estratégia de captura no Apollo

### 4.1 Filtros obrigatórios

| Filtro | Valor | Justificativa |
|---|---|---|
| **Past Company** (não Current) | Empresas-alvo (ver 4.3) | Só pega quem já saiu |
| **Country / Location** | Brazil | Lead PT-BR |
| **Job change date** ou **Time at current company** | "Started new job in last 24 months" / "Last 1–2 years at current company" | Saída recente (prazo de prescrição) |
| **Title** (whitelist) | Lista comercial/operacional (ver 4.2) | Filtra alta aderência |
| **Has Mobile Phone** | Yes | WhatsApp blast precisa de celular |

> **Atenção crítica:** sempre **Past Company**, nunca Current. Disparar para quem ainda trabalha na empresa-alvo gera risco direto para o lead (chefe pode ver) e o roteiro de ligação manda encerrar imediatamente nesses casos.

### 4.2 Whitelist de cargos

**Comercial/vendas (núcleo):**
Vendedor, Vendedora, Salesperson, Promotor de vendas, Promotora de vendas, Executivo de vendas, Executivo de negócios, Representante comercial, Representante de vendas, Coordenador de vendas, Supervisor de vendas, Gerente de vendas, Gerente comercial, Gestor de vendas, Gerente executivo de vendas, Consultor de vendas.

**Trade & merchandising:**
Promotor de merchandising, Profissional de merchandising, Trade Marketing, Supervisor de Trade, Propagandista (farma).

**Operacional com jornada pesada:**
Operador de produção, Líder de produção, Técnico de manutenção, Auxiliar de logística, Operador de logística, Motorista, Entregador (CLT, não app).

**Cargos a evitar nessa primeira leva:** C-level/Diretor/VP, TI/Engenharia de software, Estagiário/trainee/jovem aprendiz.

### 4.3 Empresas-alvo

**Já presentes na base:** Unilever, PepsiCo, Coca-Cola FEMSA / Coca-Cola Brasil, Nestlé, Mondelez, Kraft-Heinz, Danone, Mars, CIMED, Marilan, Itambé, Britvic, Correios.

**Adjacentes para expandir** (mesmo perfil FMCG/grande empresa com vendedor CLT):
- Ambev, BRF, JBS, Seara, Sadia, Perdigão
- M. Dias Branco, Bunge, Cargill, Cocamar
- Ypê, Bombril, Reckitt, Colgate-Palmolive
- L'Oréal, P&G, Johnson & Johnson Consumer
- Hypera, Eurofarma, EMS (farma — propagandista é cargo de altíssima aderência)

### 4.4 Excluir leads já contatados

Antes de exportar, subir a lista de 624 leads atuais no Apollo como **Saved List** e usar o filtro **"Exclude leads in saved list"**. Alternativa: anti-join pós-export por email/telefone via `COUNTIF` no Sheets.

---

## 5. Higienização pós-export

Sequência obrigatória antes de subir em qualquer ferramenta de blast:

1. **Padronizar telefone em E.164** (`+55DDDNUMERO`, sem espaços nem parênteses).
2. **Validar formato celular** — celular brasileiro válido tem 11 dígitos com 9 inicial após DDD. Descartar fixos.
3. **Deduplicar por telefone** — telefone é chave única (mesmo lead pode ter 2 emails).
4. **Cruzar com lista master** ([leads_apollo.csv](../../context/leads/leads_apollo.csv) + [Leads Refina para Revisa.csv](../../context/leads/Leads%20Refina%20para%20Revisa.csv) + [leads_dripify.csv](../../context/leads/leads_dripify.csv)) para excluir já contatados em qualquer canal.
5. **Validar WhatsApp ativo** via endpoint da ferramenta de blast (Zapi, Wati, Evolution API). Disparo para número sem WhatsApp = strike de spam imediato.

---

## 6. Segmentação para testes A/B/C

Volume-alvo do primeiro teste de WhatsApp Blast: **600 leads novos**, divididos:

| Variante | Volume | Copy | Identidade |
|---|---|---|---|
| **A — Direta com urgência** | 250 | Ver [03-funil-copies.md](03-funil-copies.md) | Marca Revisa |
| **B — Curiosidade + prova social** | 250 | Ver [03-funil-copies.md](03-funil-copies.md) | Marca Revisa |
| **C — Agressiva** | 100 | Sem identidade da marca | Chip e número separados |

Randomização feita **antes** do disparo e mantida (não trocar leads de variante no meio do teste).

**Métricas mínimas para concluir o A/B com significância:**
- ≥ 200 disparos efetivos por variante (entregue + número válido)
- ≥ 7 dias de janela de resposta
- Tracking: disparado, entregue, visualizado, respondido, agendado, denunciado/bloqueado

---

## 7. Cuidados de LGPD e canal

**Base legal usada:** interesse legítimo (Art. 7º, IX da LGPD) para prospecção B2B.

**Mitigações obrigatórias:**
- Mensagem precisa ter opt-out claro ("se não quiser mais receber, é só responder PARA").
- Logar todos os opt-outs e nunca disparar de novo para o mesmo número.

**Cuidados com o número de WhatsApp:**
- Não usar o número oficial da marca para o primeiro teste — se for banido, queima o canal principal.
- Esquentar chip 1–2 semanas com volume baixo antes de escalar.
- Limite seguro de disparos no início: 50–100/dia por chip.
- Variante C **sempre em chip separado** de A e B.

---

## 8. Checklist operacional (antes de disparar)

- [ ] Past Company configurado (não Current)
- [ ] Job change last 24 months
- [ ] Title whitelist aplicada
- [ ] Country = Brazil
- [ ] Has Mobile Phone = Yes
- [ ] Lista atual de 624 excluída do export
- [ ] Telefones padronizados em E.164
- [ ] Números fixos descartados (manter só celular)
- [ ] Deduplicação por telefone feita
- [ ] Validação de WhatsApp ativo passada
- [ ] 3 listas finais (A/B/C) com leads aleatorizados e marcados
- [ ] Chip de disparo aquecido há ≥ 7 dias
- [ ] Opt-out implementado na ferramenta de blast
- [ ] Métricas e dashboard de tracking prontos
- [ ] Copies A/B/C validadas pelo advogado (especialmente C)

---

## Referência cruzada

- [03-funil-copies.md](03-funil-copies.md) — copies A/B/C, sequências D+0/D+2/D+7
- [05-skill-claude.md](05-skill-claude.md) — skill que ajuda a gerar variações de copy por empresa-alvo
- [06-acessos-e-ferramentas.md](06-acessos-e-ferramentas.md) — Apollo, Zapi/Wati, Chatwoot
