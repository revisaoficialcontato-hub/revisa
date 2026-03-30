import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import TocNav from '@/components/TocNav'
import ReadingProgress from '@/components/ReadingProgress'
import { WA } from '@/lib/wa'

export const metadata = {
  title: 'Política de Privacidade · Revisa',
  description: 'Como a Revisa coleta, utiliza e protege os dados pessoais dos usuários.',
}

const TOC = [
  { id: 'dados', text: 'Dados coletados e finalidade' },
  { id: 'direitos', text: 'Direitos do usuário' },
  { id: 'contato', text: 'Canal de contato' },
]

export default function PrivacidadePage() {
  return (
    <>
      <ReadingProgress />
      <Nav />

      <div className="artigo-header">
        <div className="section-inner">
          <span className="hero-tag">Transparência</span>
          <h1 className="artigo-titulo">Política de Privacidade</h1>
          <p className="artigo-intro">
            A Revisa é uma marca de comunicação e triagem inicial operada pela Vértice Gestão de
            Ativos Ltda, responsável pelo tratamento inicial dos dados coletados neste site e nos
            canais de contato vinculados à marca.
          </p>
        </div>
      </div>

      <div className="artigo-layout">
        <div className="section-inner artigo-layout-inner">

          <main className="artigo-main">

            <section id="dados" className="legal-section reveal">
              <span className="legal-section-index">01 — Dados</span>
              <h2 className="legal-section-heading">Dados coletados e finalidade</h2>
              <div className="legal-section-body">
                <p>Os dados pessoais fornecidos pelo usuário poderão ser utilizados para:</p>
                <ul>
                  <li>Identificar aderência à revisão técnica proposta</li>
                  <li>Realizar atendimento inicial e comunicações relacionadas</li>
                  <li>Organizar agendamentos, retornos e acompanhamentos</li>
                  <li>Manter registro das interações realizadas</li>
                  <li>Conduzir fluxos de atendimento e qualificação</li>
                </ul>
              </div>
            </section>

            <section id="direitos" className="legal-section reveal">
              <span className="legal-section-index">02 — Direitos</span>
              <h2 className="legal-section-heading">Direitos do usuário</h2>
              <div className="legal-section-body">
                <p>O usuário poderá solicitar, a qualquer momento:</p>
                <ul>
                  <li>Interrupção das comunicações</li>
                  <li>Atualização de dados</li>
                  <li>Esclarecimentos sobre o tratamento realizado</li>
                  <li>Exclusão de informações, quando cabível</li>
                </ul>
              </div>
            </section>

            <section id="contato" className="legal-section reveal">
              <span className="legal-section-index">03 — Contato</span>
              <h2 className="legal-section-heading">Canal de contato</h2>
              <div className="legal-section-body">
                <p>
                  Para dúvidas sobre privacidade ou solicitações relacionadas aos seus dados, entre
                  em contato pelo nosso{' '}
                  <a href={WA} target="_blank" rel="noopener noreferrer">
                    canal de atendimento via WhatsApp
                  </a>
                  .
                </p>
              </div>
            </section>

            <div className="legal-page-footer">
              <span className="legal-page-footer-copy">© 2026 Revisa · Todos os direitos reservados</span>
            </div>

          </main>

          <aside className="artigo-sidebar">
            <TocNav items={TOC} title="Neste documento" />
          </aside>

        </div>
      </div>

      <Footer />
    </>
  )
}
