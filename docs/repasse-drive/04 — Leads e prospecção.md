# Leads e prospecção

## A base atual

A operação tem hoje cerca de **625 leads ativos** prospectados via Apollo.io, todos pertencentes à lista oficial de 11 empresas-alvo. Distribuição principal:

- **Unilever** — 113 leads
- **PepsiCo** — 93 leads
- **Nestlé** — 82 leads
- **Coca-Cola** — 75 leads
- **CIMED** — 46 leads
- **Mondelez** — 45 leads
- **Marilan** — 39 leads
- **Kraft-Heinz** — 38 leads

Mars, Britvic e Itambé complementam o restante em volumes menores.

**Qualidade da base:**

- 96% têm telefone
- Quase todos em cargos comerciais ou operacionais (vendedor, promotor, gerente de vendas, representante)
- Aproximadamente 8% já receberam algum contato (rastreado no campo "Retorno" da planilha mestre)

## Os arquivos de leads

Toda a base está na pasta `context/leads/` do repositório. Existem várias versões porque o pipeline tem etapas:

| Arquivo | Para que serve |
|---|---|
| `apollo-contacts-export.csv` | Export completo e bruto do Apollo, com todas as colunas (70+) |
| `leads_apollo.csv` | Lista mestre histórica, com campo de tracking de retorno |
| `leads_apollo_corrigido.csv` | Versão limpa e deduplicada |
| `leads_apollo_para_disparo.csv` | Lista pronta para sequências de email + LinkedIn + WhatsApp |
| `leads_blast_nome_numero.csv` | Formato mínimo (só nome e telefone) para WhatsApp Blast |
| `leads_dripify.csv` | Lista usada com a ferramenta Dripify (descontinuada) |
| `Leads Refina para Revisa.csv` | Base do projeto anterior, com campos extras úteis (LinkedIn, data de saída, cidade) |

**Pipeline lógico:** o export bruto do Apollo vai sendo filtrado, limpo, deduplicado, até virar uma lista pronta para disparo em cada canal.

---

## Perfil ideal de cliente (ICP)

A operação só prospecta pessoas que se encaixam neste perfil:

- **Vínculo:** CLT (não MEI, não autônomo)
- **Tempo desde o desligamento:** entre 12 e 24 meses
- **Setor:** FMCG, multinacionais, grandes empresas brasileiras
- **Cargo:** comercial/vendas, trade & merchandising, ou operacional com jornada pesada
- **País:** Brasil
- **Canal preferencial:** celular ativo (WhatsApp)

A janela de 24 meses é importante porque **boa parte dos direitos prescreve** depois desse prazo. Prospectar quem saiu há mais tempo gera baixa conversão e frustração.

---

## Como buscar mais leads no Apollo

A próxima leva planejada são **600 leads novos**, divididos em três grupos para teste A/B/C de WhatsApp Blast (detalhe no doc do Funil de Vendas).

### Filtros obrigatórios no Apollo

| Filtro | Valor | Por quê |
|---|---|---|
| **Past Company** (não Current!) | Lista das empresas-alvo | Só pega quem já saiu da empresa |
| **Country / Location** | Brazil | Lead em PT-BR |
| **Job change date** | "Started new job in last 24 months" | Saída recente (limite de prescrição) |
| **Title** (whitelist) | Lista de cargos comerciais/operacionais | Filtra alta aderência |
| **Has Mobile Phone** | Yes | WhatsApp Blast precisa de celular |

**Atenção crítica:** sempre **Past Company**, nunca **Current**. Se prospectar alguém que ainda trabalha na empresa-alvo, há risco direto para o lead (chefe pode ver a mensagem) e o roteiro manda encerrar imediatamente nesses casos.

### Whitelist de cargos

**Comercial / vendas (núcleo):**
Vendedor, Vendedora, Salesperson, Promotor de vendas, Promotora de vendas, Executivo de vendas, Executivo de negócios, Representante comercial, Representante de vendas, Coordenador de vendas, Supervisor de vendas, Gerente de vendas, Gerente comercial, Gestor de vendas, Gerente executivo de vendas, Consultor de vendas.

**Trade & merchandising:**
Promotor de merchandising, Profissional de merchandising, Trade Marketing, Supervisor de Trade, Propagandista (farma — alta aderência).

**Operacional com jornada pesada:**
Operador de produção, Líder de produção, Técnico de manutenção, Auxiliar de logística, Operador de logística, Motorista, Entregador (CLT, não app).

### Cargos a EVITAR

- C-level, Diretor, VP — perfil mais defensivo, baixa resposta a cold WhatsApp
- TI, Engenharia de software — perfil que já tem rede própria, advogado pessoal
- Estagiário, trainee, jovem aprendiz — pouco tempo de empresa, pouco a revisar

### Empresas-alvo

A lista oficial de empresas-alvo da operação é composta por **11 empresas**, todas com perfil FMCG / grande empresa com vendedor CLT:

- Unilever
- PepsiCo
- Nestlé
- Britvic
- Mondelez
- Marilan
- Itambé
- Coca-Cola
- Kraft-Heinz
- Mars
- Cimed

**Toda nova leva de prospecção deve focar nessa lista.** Empresas fora dela podem ser ignoradas em buscas no Apollo.

### Excluir leads já contatados

Antes de exportar uma nova leva, **subir a lista atual de 625 leads como Saved List no Apollo** e usar o filtro "Exclude leads in saved list". Sem isso, vai disparar duas vezes para a mesma pessoa, o que aumenta taxa de denúncia e queima o número.

---

## Higienização pós-export

Antes de subir qualquer lista nova em ferramenta de blast, fazer esta sequência:

1. **Padronizar telefone em E.164** — formato internacional `+55DDDNUMERO`, sem espaço ou parêntese
2. **Validar formato celular** — celular brasileiro válido tem 11 dígitos com 9 no início depois do DDD. Descartar telefone fixo.
3. **Deduplicar por telefone** — telefone é a chave única (a mesma pessoa pode ter 2 emails diferentes)
4. **Cruzar com a base atual** para excluir já contatados em qualquer canal
5. **Validar se o número tem WhatsApp ativo** — a maioria das ferramentas (Zapi, Wati, Evolution API) tem endpoint para isso. Disparar para número sem WhatsApp gera strike de spam imediato.

---

## Cuidados de LGPD

**Base legal usada:** interesse legítimo (Art. 7º, IX da LGPD) para prospecção B2B.

**Mitigações obrigatórias:**

- A mensagem precisa ter opt-out claro (*"se não quiser mais receber, é só responder PARA"*)
- Todo opt-out precisa ser registrado e nunca disparar de novo para o mesmo número

**Cuidados com o número de WhatsApp:**

- **Não usar o número oficial da marca** para o primeiro teste — se for banido, queima o canal principal
- Esquentar o chip por 1 a 2 semanas antes de escalar (volume baixo, receber respostas)
- Limite seguro no início: 50 a 100 disparos por dia por chip
- Variante C (a agressiva, sem identidade da marca) **sempre em chip separado** de A e B

---

## Checklist operacional (antes de disparar uma nova leva)

- [ ] Past Company configurado no Apollo (não Current)
- [ ] Job change last 24 months
- [ ] Title whitelist aplicada
- [ ] Country = Brazil
- [ ] Has Mobile Phone = Yes
- [ ] Lista atual de 625 excluída do export
- [ ] Telefones padronizados em E.164
- [ ] Números fixos descartados
- [ ] Deduplicação por telefone feita
- [ ] Validação de WhatsApp ativo passada
- [ ] Listas finais (A/B/C) com leads aleatorizados e marcados
- [ ] Chip de disparo aquecido há pelo menos 7 dias
- [ ] Opt-out implementado na ferramenta de blast
- [ ] Métricas e dashboard de tracking prontos
- [ ] Copies validadas pelo advogado

---

## Onde estão os arquivos originais

Todas as bases de leads e a estratégia completa estão no repositório:

- Bases CSV → `context/leads/`
- Estratégia de captura no Apollo → `context/planejamento/captura_leads_apollo.md`
- Fluxo de trabalho geral → `context/planejamento/fluxo_trabalho.md`
