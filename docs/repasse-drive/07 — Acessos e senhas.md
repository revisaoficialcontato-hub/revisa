# Acessos e senhas

Este documento é um **modelo para preenchimento manual**. Liste aqui cada conta, ferramenta, número e ativo digital com a indicação de **onde a credencial está guardada** (1Password, Bitwarden, planilha cofre, gerente de senhas, etc.).

> **Importante:** não escreva senhas, tokens ou chaves API diretamente neste documento. Sempre guarde as credenciais em um cofre seguro e use este documento apenas como índice de onde encontrar.

**Última revisão:** _______________________

**Responsável atual durante a transição:** _______________________

---

## 1. Domínio e DNS

| Item | Valor / Conta | Onde está guardado | Responsável | Observações |
|---|---|---|---|---|
| Domínio principal | revisaoficial.com | | | |
| Registrador | Porkbun | | | Cadastrado no email da empresa |
| DNS / nameservers | | | | |
| Email administrativo | | | | |

---

## 2. Hospedagem do site

| Item | Valor / Conta | Onde está guardado | Responsável | Observações |
|---|---|---|---|---|
| Vercel — conta | | | | Plano Hobby (gratuito) |
| Vercel — projeto | | | | |
| GitHub — repositório | | | | |
| GitHub — conta com permissão de push | | | | |

---

## 3. Prospecção e CRM

| Ferramenta | Login | Onde está guardado | Plano | Custo aprox. | Observações |
|---|---|---|---|---|---|
| Apollo.io | | | | ~R$ 270/mês | Sequências email + LinkedIn |
| Make | | | | ~R$ 50/mês | Automação Sheets ↔ Apollo ↔ Chatwoot |
| Chatwoot | | | | Já em uso | CRM e atendimento WhatsApp |
| Brevo | | | | Gratuito até 300/dia | Email marketing |
| Dripify | | | | ~US$ 39/mês | Status: descontinuado |

---

## 4. WhatsApp

| Item | Valor | Onde está guardado | Observações |
|---|---|---|---|
| Número oficial da marca | +55 11 99006-6495 | | Configurado no site (link wa.me) |
| Conta WhatsApp Business | | | Selo azul aprovado |
| Chip dos disparos A/B | | | Aquecer pelo menos 7 dias antes |
| Chip da variante C | | | Separado, sem identidade da marca |
| Ferramenta de Blast (Zapi / Wati / Evolution) | | | ~R$ 97/mês — escolher entre as 3 |
| API key da ferramenta de Blast | | | Guardar em cofre |

---

## 5. Meta (Facebook / Instagram / WhatsApp)

| Item | Valor / Conta | Onde está guardado | Observações |
|---|---|---|---|
| Meta Business Manager | | | |
| Página Facebook da Revisa | | | |
| Conta Instagram | | | Selo azul aprovado |
| Pixel Meta — ID | | | Já instalado no site |
| Conta de anúncios (Meta Ads) | | | Verba à parte do operacional |
| Cartão / forma de pagamento Meta Ads | | | |
| Acesso de admin (emails autorizados) | | | |
| ManyChat (automação Instagram DM) | | | Pendente de configuração |

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
| Provedor (Google Workspace / Outlook / outro) | | | |
| Emails ativos | | | Ex.: contato@, comercial@ |
| Conta admin | | | |
| Plano e cobrança | | | |

---

## 8. Bases de dados e planilhas

| Item | URL / Local | Onde está guardado | Observações |
|---|---|---|---|
| Google Sheets — planilha mestre de leads | | | |
| Google Drive — pasta do projeto | | | |
| Backup das bases CSV | Repositório Git, pasta `context/leads/` | Git | |

---

## 9. Ferramentas de design e edição

| Ferramenta | Login | Onde está guardado | Plano |
|---|---|---|---|
| Canva | | | Gratuito ou R$ 55/mês (Pro) |
| CapCut | | | Gratuito |
| Ideogram.ai | | | Gratuito |

---

## 10. Telefonia / Discadora

| Item | Valor / Conta | Onde está guardado | Observações |
|---|---|---|---|
| Fornecedor de discadora | | | A definir (próxima etapa do roadmap) |
| Linha telefônica | | | |
| Integração com Chatwoot | | | |

---

## 11. Repositório de código

| Item | Valor / URL | Observações |
|---|---|---|
| Origem (GitHub) | | |
| Branch principal | main | |
| Quem tem acesso de push | | |
| Quem tem acesso de admin | | |

---

## 12. Documentos legais e jurídicos

| Item | Local | Observações |
|---|---|---|
| Contrato de validação de copies (advogado) | | Etapa concluída |
| Termos de uso do site | Publicado em /termos | |
| Política de privacidade do site | Publicado em /privacidade | |
| CNPJ / contrato social | | |
| Contrato com MFG Advogados | | |

---

## 13. Outros / Ad-hoc

| Item | Valor | Onde está guardado | Observações |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

---

## 14. Procedimento sugerido na transição

Sugestão de ordem para evitar perda de acesso ao trocar de responsável:

1. **Identificar todas as contas** preenchendo as tabelas acima.
2. **Definir um cofre central** (1Password, Bitwarden ou equivalente) onde todas as credenciais serão armazenadas.
3. **Adicionar o novo responsável** como administrador em cada conta **antes** de remover o atual.
4. **Trocar o email de recuperação** de cada serviço para um email controlado pela operação (não pessoal).
5. **Trocar o 2FA** para um dispositivo controlado pela operação.
6. **Validar o acesso** logando com o novo responsável em cada serviço.
7. **Só então remover o acesso anterior.**

Essa ordem garante que nenhum serviço fica órfão durante a transição.
