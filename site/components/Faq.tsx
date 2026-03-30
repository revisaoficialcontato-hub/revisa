'use client'

import { useState } from 'react'

const items = [
  {
    q: 'Isso é sigiloso?',
    a: 'Sim. A análise inicial é conduzida com discrição total. O objetivo é apenas entender se existe aderência técnica para uma revisão mais aprofundada. Nenhuma informação sua é compartilhada sem sua autorização expressa.',
  },
  {
    q: 'Não quero processar nem entrar em conflito com a empresa.',
    a: 'Sem problema. A proposta inicial é apenas entender se existe algo relevante a revisar. A decisão sobre aprofundar ou não é sempre sua. Clareza vem antes de qualquer decisão.',
  },
  {
    q: 'Achei que minha rescisão estava certa.',
    a: 'Isso é muito comum. Justamente por isso a revisão técnica existe: muitos pontos não são visíveis para quem não acompanha esse tipo de situação todos os dias. Mesmo quem acredita que recebeu tudo corretamente pode encontrar pontos relevantes em uma leitura mais técnica.',
  },
  {
    q: 'Já tenho advogado. Ainda assim faz sentido falar com vocês?',
    a: 'Pode fazer sentido, sim. Muitas pessoas buscam uma segunda leitura técnica para entender se há pontos que merecem atenção. A análise inicial serve justamente para trazer clareza antes de qualquer decisão.',
  },
  {
    q: 'Como vocês conseguiram meu contato?',
    a: 'Nosso time trabalha com inteligência de dados para identificar perfis que podem ter aderência à revisão técnica. Se não fizer sentido para você, basta solicitar que encerramos o contato.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="faq reveal" id="faq">
      <div className="section-inner">
        <span className="section-tag">Dúvidas frequentes</span>
        <h2 className="section-title">Respostas diretas para as perguntas mais comuns</h2>

        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
                <svg className="faq-chevron" viewBox="0 0 24 24">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
