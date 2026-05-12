# Anexo 06 — Acessos e Ferramentas

> **Template para preenchimento manual.** Liste aqui cada conta, ferramenta, número e ativo digital com a indicação de **onde a credencial está guardada** (ex.: 1Password, Bitwarden, planilha cofre, gerente). Não escreva senhas, tokens ou chaves diretamente neste arquivo.

**Última revisão:** _________ (preencher data)

**Responsável atual durante a transição:** _________

---

## 1. Domínio e DNS

| Item | Valor / Conta | Onde está guardado | Responsável | Observações |
|---|---|---|---|---|
| Domínio principal | | | | |
| Registrador | | | | |
| DNS / nameservers | | | | |
| E-mail administrativo do domínio | | | | |

---

## 2. Hospedagem do site

| Item | Valor / Conta | Onde está guardado | Responsável | Observações |
|---|---|---|---|---|
| Vercel — conta | | | | |
| Vercel — projeto | | | | |
| GitHub — repositório | | | | |
| GitHub — conta com push | | | | |

---

## 3. Prospecção e CRM

| Ferramenta | Conta / login | Onde está guardado | Plano | Custo aprox. | Observações |
|---|---|---|---|---|---|
| Apollo.io | | | | ~R$ 270/mês | Sequências email + LinkedIn |
| Make | | | | ~R$ 50/mês | Automação Sheets ↔ Apollo ↔ Chatwoot |
| Chatwoot | | | | já em uso | CRM e atendimento WhatsApp |
| Brevo | | | | gratuito até 300/dia | Email marketing |
| Dripify | | | | ~US$ 39/mês | Status: descontinuado |

---

## 4. WhatsApp

| Item | Valor | Onde está guardado | Observações |
|---|---|---|---|
| Número oficial da marca | +55 11 99006-6495 | | Hardcoded em [site/lib/wa.ts](../../site/lib/wa.ts) |
| Conta WhatsApp Business | | | Verificada (selo azul) |
| Chip dos disparos A/B | | | Aquecer ≥ 7 dias antes |
| Chip da variante C | | | Separado, sem identidade da marca |
| Ferramenta de blast (Zapi / Wati / Evolution) | | | ~R$ 97/mês |
| API key da ferramenta | | (1Password / Bitwarden / etc.) | |

---

## 5. Meta (Facebook / Instagram / WhatsApp)

| Item | Valor / Conta | Onde está guardado | Observações |
|---|---|---|---|
| Meta Business Manager | | | |
| Página Facebook da Revisa | | | |
| Conta Instagram | | | Selo azul aprovado |
| Pixel Meta — ID | | | |
| Conta de anúncios Meta Ads | | | Verba à parte do operacional |
| Cartão associado / forma de pagamento | | | |
| Acesso de admin (e-mails) | | | |
| ManyChat (automação Instagram DM) | | | gratuito até 1k leads — pendente de configuração |

---

## 6. LinkedIn

| Item | Valor / Conta | Onde está guardado | Observações |
|---|---|---|---|
| Página da empresa Revisa | | | |
| Perfil de quem opera prospecção | | | |
| Ferramenta de automação (se houver) | | | Ex.: Dripify ou Apollo LinkedIn |

---

## 7. Email corporativo

| Item | Valor / Conta | Onde está guardado | Observações |
|---|---|---|---|
| Provedor (Google Workspace / Outlook) | | | |
| E-mails ativos | | | Ex.: contato@, comercial@ |
| Conta admin | | | |
| Plano e cobrança | | | |

---

## 8. Bases de dados e planilhas

| Item | URL / Local | Onde está guardado | Observações |
|---|---|---|---|
| Google Sheets — planilha mestre de leads | | | |
| Google Drive — pasta do projeto | | | |
| Backup das bases CSV | [context/leads/](../../context/leads/) | Repositório Git | |

---

## 9. Ferramentas de design e edição

| Ferramenta | Conta / login | Onde está guardado | Plano |
|---|---|---|---|
| Canva | | | gratuito / R$ 55/mês |
| CapCut | | | gratuito |
| Ideogram.ai | | | gratuito |

---

## 10. Telefonia / Discadora

| Item | Valor / Conta | Onde está guardado | Observações |
|---|---|---|---|
| Fornecedor de discadora | | | A definir (Fase 5.4 do roadmap) |
| Linha telefônica | | | |
| Integração com Chatwoot | | | |

---

## 11. Repositório de código

| Item | Valor / URL | Observações |
|---|---|---|
| Origem (GitHub / GitLab / etc.) | | |
| Branch principal | `main` | |
| Quem tem acesso de push | | |
| Quem tem acesso de admin | | |

---

## 12. Documentos legais e jurídicos

| Item | Local | Observações |
|---|---|---|
| Contrato de validação de copies (advogado) | | Fase 1.2 — feito |
| Termos de uso do site | [site/app/termos/](../../site/app/termos/) | Publicado no site |
| Política de privacidade do site | [site/app/privacidade/](../../site/app/privacidade/) | Publicado no site |
| CNPJ / contrato social | | |
| Contrato com MFG Advogados | | |

---

## 13. Outros / Ad-hoc

| Item | Valor | Onde está guardado | Observações |
|---|---|---|---|
| | | | |
| | | | |

---

## 14. Procedimento sugerido na transição

Sugestão de ordem para evitar perda de acesso:

1. **Identificar todas as contas** preenchendo a tabela acima.
2. **Definir um cofre central** (1Password, Bitwarden ou similar) para guardar credenciais.
3. **Adicionar o novo responsável** como administrador em cada conta antes de remover o atual.
4. **Trocar e-mail de recuperação** de cada serviço para um e-mail controlado pela operação (não pessoal).
5. **Trocar 2FA** para um dispositivo controlado pela operação.
6. **Validar acesso** logando com o novo responsável em cada serviço.
7. **Só então remover o acesso anterior.**

---

## Referência cruzada

- [HANDOVER.md](../../HANDOVER.md) — visão geral e custos
- [01-site.md](01-site.md) — detalhe técnico do site (Vercel, GitHub)
- [02-leads-prospeccao.md](02-leads-prospeccao.md) — Apollo, ferramentas de blast
