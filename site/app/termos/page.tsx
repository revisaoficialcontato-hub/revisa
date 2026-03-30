import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import TocNav from '@/components/TocNav'
import ReadingProgress from '@/components/ReadingProgress'

export const metadata = {
  title: 'Termos de Uso · Revisa',
  description: 'Termos de uso e esclarecimentos iniciais sobre os serviços da Revisa.',
}

const TOC = [
  { id: 'finalidade', text: 'Finalidade do site' },
  { id: 'analise', text: 'Análise preliminar' },
  { id: 'vinculo', text: 'Ausência de vínculo automático' },
]

export default function TermosPage() {
  return (
    <>
      <ReadingProgress />
      <Nav />

      <div className="artigo-header">
        <div className="section-inner">
          <span className="hero-tag">Transparência</span>
          <h1 className="artigo-titulo">Termos de Uso</h1>
          <p className="artigo-intro">
            A Revisa é uma marca de comunicação e triagem inicial voltada à identificação de
            possível aderência à revisão técnica de direitos trabalhistas para ex-funcionários de
            grandes empresas.
          </p>
        </div>
      </div>

      <div className="artigo-layout">
        <div className="section-inner artigo-layout-inner">

          <main className="artigo-main">

            <section id="finalidade" className="legal-section reveal">
              <span className="legal-section-index">01 — Finalidade</span>
              <h2 className="legal-section-heading">Finalidade do site</h2>
              <div className="legal-section-body">
                <div className="legal-callout">
                  <p>
                    Este site, seus formulários, conteúdos e canais de contato têm finalidade
                    informativa, educativa e de organização da etapa inicial de atendimento. Nenhuma
                    informação disponibilizada nesta página deve ser interpretada como opinião
                    jurídica individualizada, garantia de direito, promessa de êxito ou compromisso
                    de adoção de medida específica.
                  </p>
                </div>
              </div>
            </section>

            <section id="analise" className="legal-section reveal">
              <span className="legal-section-index">02 — Análise</span>
              <h2 className="legal-section-heading">Análise preliminar</h2>
              <div className="legal-section-body">
                <p>
                  A análise inicial realizada a partir das informações fornecidas pelo usuário tem
                  caráter preliminar e serve apenas para avaliar se existem elementos mínimos para
                  eventual aprofundamento técnico.
                </p>
                <div className="legal-callout">
                  <p>
                    Caso o atendimento evolua para etapa jurídica específica, o usuário será
                    informado oportunamente sobre a estrutura profissional responsável pela condução
                    jurídica do caso, bem como sobre os instrumentos aplicáveis à relação
                    correspondente.
                  </p>
                </div>
              </div>
            </section>

            <section id="vinculo" className="legal-section reveal">
              <span className="legal-section-index">03 — Vínculo</span>
              <h2 className="legal-section-heading">Ausência de vínculo automático</h2>
              <div className="legal-section-body">
                <div className="legal-callout">
                  <p>
                    O simples preenchimento de formulário, envio de documentos ou troca de mensagens
                    com a Revisa não implica contratação automática de serviço, nem obriga o usuário
                    a seguir com qualquer medida posterior.
                  </p>
                </div>
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
