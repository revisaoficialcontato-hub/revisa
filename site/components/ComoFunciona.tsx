export default function ComoFunciona() {
  return (
    <section className="como-funciona" id="como-funciona">
      <div className="section-inner">
        <span className="section-tag">Como funciona</span>
        <h2 className="section-title">Do primeiro contato à análise do seu caso</h2>

        <div className="steps">
          <div className="step reveal">
            <div className="step-num">01</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <div className="step-title">Você nos conta o seu caso</div>
            <div className="step-text">Entre em contato pelo WhatsApp. Sem formulários extensos. Uma conversa simples já é suficiente para começarmos.</div>
          </div>
          <div className="step reveal">
            <div className="step-num">02</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
            <div className="step-title">Fazemos a triagem inicial</div>
            <div className="step-text">Nossa equipe avalia o seu histórico e identifica se há sinais de valores que podem não ter sido corretamente pagos ao longo do vínculo ou no desligamento.</div>
          </div>
          <div className="step reveal">
            <div className="step-num">03</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="step-title">Você decide com clareza</div>
            <div className="step-text">Apresentamos os resultados da análise em linguagem direta. A decisão é sempre sua, sem pressão e sem pressa.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
