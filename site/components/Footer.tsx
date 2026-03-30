import { empresas } from '@/data/empresas'
import { WA } from '@/lib/wa'

const topEmpresas = empresas.slice(0, 4)

export default function Footer() {
  return (
    <footer className="footer-expanded">
      <div className="footer-grid-wrap">
        <div className="footer-grid">
          {/* Coluna 1 — Marca */}
          <div className="footer-col">
            <a href="/" className="footer-logo">
              <img src="/logo.png" alt="Revisa" />
            </a>
            <p className="footer-tagline">
              Plataforma de revisão técnica de direitos trabalhistas para ex-funcionários de grandes empresas.
            </p>
            <p className="footer-legal-note">
              A Revisa atua na comunicação, triagem inicial e organização do atendimento. A operação digital e o tratamento inicial dos dados são realizados por Vértice Gestão de Ativos Ltda.
            </p>
          </div>

          {/* Coluna 2 — Site */}
          <div className="footer-col">
            <h4 className="footer-col-title">Site</h4>
            <div className="footer-nav">
              <a href="/#como-funciona" className="footer-nav-link">Como funciona</a>
              <a href="/#depoimentos" className="footer-nav-link">Para quem é</a>
              <a href="/#faq" className="footer-nav-link">Dúvidas frequentes</a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="footer-nav-link">Falar no WhatsApp</a>
            </div>
          </div>

          {/* Coluna 3 — Artigos */}
          <div className="footer-col">
            <h4 className="footer-col-title">Artigos</h4>
            <div className="footer-nav">
              <a href="/blog" className="footer-nav-link">Rescisão e verbas</a>
              <a href="/blog" className="footer-nav-link">Horas extras</a>
              <a href="/blog" className="footer-nav-link">Remuneração variável</a>
              <a href="/blog" className="footer-nav-link">FGTS</a>
              <a href="/blog" className="footer-nav-link footer-nav-link--accent">Ver todos os artigos →</a>
            </div>
          </div>

          {/* Coluna 4 — Por empresa */}
          <div className="footer-col">
            <h4 className="footer-col-title">Por empresa</h4>
            <div className="footer-nav">
              {topEmpresas.map((e) => (
                <a key={e.slug} href={`/para/${e.slug}`} className="footer-nav-link">
                  Ex-funcionários {e.preposicao}
                </a>
              ))}
              <a href="/#empresas" className="footer-nav-link footer-nav-link--accent">Ver todas as empresas →</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-wrap">
        <div className="footer-bottom">
          <span className="footer-copyright">© 2026 Revisa · Todos os direitos reservados</span>
          <div className="footer-legal">
            <a href="/privacidade" className="footer-legal-link">Privacidade</a>
            <a href="/termos" className="footer-legal-link">Termos de uso</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="footer-legal-link">Canal de Contato</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
