const depoimentos = [
  {
    text: 'Achei que tinha recebido tudo certo ao sair. A Revisa identificou diferenças no meu histórico que eu jamais teria percebido sozinho.',
    cargo: 'Ex-Vendedor',
  },
  {
    text: 'Processo rápido e discreto. Explicaram tudo de forma clara, sem termos complicados. Me senti seguro em cada etapa.',
    cargo: 'Ex-Representante Comercial',
  },
  {
    text: 'Não sabia nem que tinha algo a questionar. A análise da Revisa trouxe clareza sobre pontos que eu nunca teria visto. Equipe séria e muito profissional.',
    cargo: 'Ex-Promotor de Merchandise',
  },
]

export default function Depoimentos() {
  return (
    <section className="depoimentos" id="depoimentos">
      <div className="section-inner">
        <span className="section-tag">O que dizem nossos clientes</span>
        <h2 className="section-title">Resultados reais, decisões informadas</h2>

        <div className="depoimentos-grid">
          {depoimentos.map((d, i) => (
            <div key={i} className="depoimento reveal">
              <p className="depoimento-text">{d.text}</p>
              <div className="depoimento-autor">
                <div className="depoimento-avatar">–</div>
                <div>
                  <div className="depoimento-nome">Identidade preservada</div>
                  <div className="depoimento-cargo">{d.cargo}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
