# Como construir a base de leads no Apollo — WhatsApp Blast

> **Objetivo:** montar uma lista qualificada de ex-funcionários de grandes empresas, com celular, pra testar o disparo em massa no WhatsApp.
>
> **Volume-alvo do primeiro teste:** 500–1.000 leads novos (fora os 624 já contatados em [leads_apollo.csv](../leads/leads_apollo.csv)).

---

## Diagnóstico da base atual (624 leads)

| Métrica | Status |
|---|---|
| Total | 624 leads |
| Com telefone | 599 (96%) |
| Empresas dominantes | Unilever (113), PepsiCo (93), Coca-Cola (75), Nestlé (82), CIMED (46), Marilan (39), Kraft-Heinz (38), Mondelez (45), Danone (29) |
| Cargos dominantes | Vendedor, Promotor de vendas, Gerente/Executivo/Coordenador de vendas, Representante comercial — **perfis comerciais/operacionais com meta e variável**, alinhados ao ICP do manual |
| Já contatados (Retorno preenchido) | ~50 (8%) |

**O que está bom:**
- Mix de empresas-alvo é exatamente FMCG/grande-empresa (perfil de jornada pesada, meta agressiva, variável complexa = aderência alta a revisão técnica).
- Cargos são quase todos comerciais/operacionais — o manual especifica isso como público de maior aderência.
- 96% com telefone resolve o input do WhatsApp blast.

**O que precisa melhorar:**
1. **Faltam campos críticos** pra qualificação: `LinkedIn URL`, `Data de saída da empresa` (ou "Tempo de empresa"), `Cidade/Estado`. A planilha [Leads Refina para Revisa.csv](../leads/Leads%20Refina%20para%20Revisa.csv) tinha esses campos — quem fez a primeira base soube qualificar; quem fez a do Apollo deixou pelado.
2. **Sem filtro de "ainda está na empresa"** — o Apollo lista emprego ATUAL por padrão. Sem o filtro de "Past Company" certo, parte da base provavelmente ainda trabalha lá (= zero aderência, conforme [roteiro_ligacao.md:67-74](../copies/roteiro_ligacao.md#L67-L74)).
3. **Sem filtro de janela temporal** — manual exige saída nos últimos 24 meses. Mais que isso, prescreve a maior parte da revisão.

---

## Como rodar a busca no Apollo (passo a passo)

### 1. Filtros obrigatórios

Na barra de filtros do Apollo (Search → People):

| Filtro | Valor | Por quê |
|---|---|---|
| **Past Company** (não Current!) | Lista das empresas-alvo | Só pega quem **já saiu** |
| **Country / Location** | Brazil | Só pega lead em PT-BR |
| **Job change date** ou **Time at current company** | "Started new job in last 24 months" / "Last 1–2 years at current company" | Garante saída recente da empresa-alvo |
| **Title** (whitelist) | Lista comercial/operacional (abaixo) | Filtra perfil de aderência alta |
| **Has Mobile Phone** | Yes | WhatsApp blast precisa de celular, não fixo |

**Observação crítica sobre "Past Company":** o Apollo separa `Current Employer` de `Past Employer`. Pra esse projeto **sempre use Past Employer**. Se usar Current, você vai disparar pra gente que ainda trabalha na empresa — risco direto pro lead (chefe vê), risco pra Revisa (o roteiro manda encerrar imediatamente nesse caso).

### 2. Lista de cargos pra whitelist (Title filter)

Baseado no que melhor performou na base atual + público do manual:

**Comercial/vendas (núcleo):**
- Vendedor, Vendedora, Salesperson
- Promotor de vendas, Promotora de vendas
- Executivo de vendas, Executivo de negócios
- Representante comercial, Representante de vendas
- Coordenador de vendas, Supervisor de vendas
- Gerente de vendas, Gerente comercial
- Gestor de vendas, Gerente executivo de vendas
- Consultor de vendas

**Trade & merchandising (alta aderência):**
- Promotor de merchandising, Profissional de merchandising
- Trade Marketing, Supervisor de Trade
- Propagandista (farma)

**Operacional com jornada pesada (alta aderência também):**
- Operador de produção
- Líder de produção
- Técnico de manutenção
- Auxiliar de logística, Operador de logística
- Motorista, Entregador (CLT, não app)

**Evitar nessa primeira leva:**
- C-level / Diretor / VP — perfil mais defensivo, baixa taxa de resposta a cold WhatsApp
- TI / Engenharia de software — perfil que já costuma ter rede, advogado próprio, baixa aderência ao pitch
- Estagiário, trainee, jovem aprendiz — pouco tempo de empresa = pouco a revisar

### 3. Empresas-alvo

Lista derivada da base atual (já validadas pelo time como aderentes) + completar com adjacentes:

**Já presentes na base** (priorizar pra completar volume sem disparo duplicado):
- Unilever, PepsiCo, Coca-Cola FEMSA / Coca-Cola Brasil, Nestlé, Mondelez, Kraft-Heinz, Danone, Mars, CIMED, Marilan, Itambé, Britvic, Correios

**Adjacentes pra expandir** (mesmo perfil de FMCG/grande-empresa-com-vendedor-CLT):
- Ambev, BRF, JBS, Seara, Sadia, Perdigão
- M. Dias Branco, Bunge, Cargill, Cocamar
- Ypê, Bombril, Reckitt, Colgate-Palmolive
- L'Oréal, P&G, Johnson & Johnson Consumer
- Hypera, Eurofarma, EMS (farma — propagandista é cargo de altíssima aderência)

### 4. Excluir leads já contatados

Antes de exportar, suba a lista de 624 leads atuais no Apollo como **Saved List** e use o filtro **"Exclude leads in saved list"**. Senão você dispara pro mesmo cara duas vezes — taxa de denúncia dispara, número queima.

Se o Apollo do plano que vocês usam não tem esse filtro, dá pra fazer o "anti-join" pós-export por email/telefone na planilha (script de 5 linhas em Python ou Google Sheets com `COUNTIF`).

### 5. Higienização pós-export

Antes de subir na ferramenta de WhatsApp blast:

1. **Padronizar telefone** pra E.164 (`+55DDDNUMERO`, sem espaço/parênteses).
2. **Validar formato celular** — número brasileiro válido tem 11 dígitos com 9 inicial após DDD (ex.: `+5521973252877`). Descartar números fixos (10 dígitos, sem 9 inicial).
3. **Deduplicar por telefone** — ex-funcionário pode aparecer com 2 emails diferentes, mas o telefone é a chave única do disparo.
4. **Cruzar com a lista master** ([leads_apollo.csv](../leads/leads_apollo.csv) + [Leads Refina para Revisa.csv](../leads/Leads%20Refina%20para%20Revisa.csv) + [leads_dripify.csv](../leads/leads_dripify.csv)) pra excluir já-contatados em qualquer canal.
5. **Validar número no WhatsApp** — a maioria das ferramentas (Zapi, Wati, Evolution API) tem endpoint pra checar se o número tem WhatsApp ativo antes de mandar. Disparar pra número sem WhatsApp = strike de spam imediato.

---

## Estratégia de volume e segmentação

### Limite do Apollo

Apollo Basic permite ~10k exports/mês e ~25 leads por export sem upgrade — confirmar plano atual. Se for Basic, vai precisar fragmentar a busca (ex.: uma busca por empresa-alvo) pra contornar o limite por search.

### Segmentação sugerida pro primeiro teste

Pra rodar A/B/C das copies de forma estatisticamente útil, mira em **600 leads novos** divididos:

| Variante | Volume | Origem |
|---|---|---|
| **A — Direta com urgência** | 250 | Mix de empresas-alvo (proporcional à base atual) |
| **B — Curiosidade + prova social** | 250 | Mesmo mix de A (pra A/B comparável) |
| **C — Agressiva** | 100 | Lista descartável, sem identidade da marca, número separado |

A randomização tem que ser feita ANTES do disparo e mantida (não trocar leads de variante no meio do teste).

### Métricas mínimas pra cada variante

Pra concluir alguma coisa do A/B com significância:

- ≥ 200 disparos efetivos por variante (entregue + número válido)
- ≥ 7 dias de janela de resposta antes de declarar resultado
- Tracking obrigatório: **disparado**, **entregue**, **visualizado**, **respondido**, **agendado**, **denunciado/bloqueado**

---

## Riscos e cuidados

### LGPD e procedência do dado

O Apollo agrega dados de fontes públicas (LinkedIn, sites de empresas) e de parcerias B2B. **Não há consentimento explícito do lead** pra receber WhatsApp da Revisa. Em volume e em nicho regulado (jurídico-trabalhista), isso é zona cinza:

- Tem base legal de **interesse legítimo** (Art. 7º, IX da LGPD) na prospecção B2B, mas isso é frágil quando o canal é WhatsApp pessoal (não corporativo).
- **Mitigação obrigatória:** mensagem precisa ter opt-out claro ("se não quiser mais receber, é só responder PARA"). Manual da marca já fala em "oferecer saída fácil da conversa".
- **Mitigação extra:** logar todos os opt-outs e nunca disparar de novo pro mesmo número.

### Números do WhatsApp

- **Não usar o número oficial da marca pro primeiro teste** — se queimar, queimou o canal principal. Use chip novo, número não associado a perfil verificado.
- Esquentar o chip antes (1–2 semanas mandando volume baixo, recebendo respostas) reduz risco de banimento imediato.
- Limite seguro de disparos no início: ~50–100/dia por chip. Escalar gradualmente.
- Variante C **obrigatoriamente em chip separado** das A e B.

---

## Checklist operacional

Antes de apertar "disparar":

- [ ] Past Company configurado (não Current)
- [ ] Job change last 24 months
- [ ] Title whitelist aplicada (lista acima)
- [ ] Country = Brazil
- [ ] Has Mobile Phone = Yes
- [ ] Lista atual de 624 excluída do export
- [ ] Telefones padronizados em E.164
- [ ] Números fixos descartados (manter só celular)
- [ ] Deduplicação por telefone feita
- [ ] Validação de WhatsApp ativo passada
- [ ] 3 listas finais (A/B/C) com leads aleatorizados e marcados
- [ ] Chip do disparo aquecido há ≥ 7 dias
- [ ] Opt-out implementado na ferramenta de blast
- [ ] Métricas e dashboard de tracking prontos
- [ ] Copies A/B/C validadas pelo advogado (especialmente C)
