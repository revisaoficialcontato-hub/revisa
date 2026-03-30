/* Seções específicas das páginas /para/[empresa] */
import { getAllPosts, getPostsByEmpresa } from '@/lib/posts'

/* ── Seção 2: Dor principal ──────────────────────────────── */
export function EmpresaDor() {
  return (
    <section className="empresa-dor">
      <div className="section-inner">
        <span className="section-tag">O que acontece com frequência</span>
        <h2 className="section-title">
          Muita gente sai da empresa sem perceber que pode ter deixado dinheiro para trás.
        </h2>
        <p className="empresa-dor-text">
          Diferenças de pagamento, horas extras, metas, premiações, reflexos, jornada, verbas variáveis e até a própria rescisão podem esconder valores relevantes. Na maioria dos casos, isso não é percebido no momento da saída.
        </p>
        <div className="dor-cards">
          <div className="dor-card">
            <div className="dor-card-num">01</div>
            <h3 className="dor-card-title">Nem sempre o erro é óbvio</h3>
            <p className="dor-card-text">Alguns problemas passam despercebidos durante anos.</p>
          </div>
          <div className="dor-card">
            <div className="dor-card-num">02</div>
            <h3 className="dor-card-title">Nem sempre a rescisão mostra tudo</h3>
            <p className="dor-card-text">Há pontos que só aparecem quando se analisa o conjunto da relação de trabalho.</p>
          </div>
          <div className="dor-card">
            <div className="dor-card-num">03</div>
            <h3 className="dor-card-title">Nem sempre quem saiu sabe o que procurar</h3>
            <p className="dor-card-text">Por isso a revisão técnica faz diferença.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Seção 3: Especialização na empresa ──────────────────── */
export function EmpresaEspecializacao({ nome, preposicao }: { nome: string; preposicao: string }) {
  return (
    <section className="empresa-especializacao">
      <div className="section-inner empresa-especializacao-inner">
        <div className="empresa-especializacao-content">
          <span className="section-tag">Por que faz sentido</span>
          <h2 className="section-title">Conhecemos os padrões {preposicao}.</h2>
          <p className="empresa-especializacao-text">
            Nosso time acompanha padrões que costumam aparecer em ex-funcionários {preposicao} e entende como rotinas, jornadas, metas e formas de pagamento podem gerar diferenças relevantes.
          </p>
        </div>
        <div className="empresa-especializacao-visual">
          <div className="especializacao-card">
            <div className="especializacao-card-label">Jornada e horas extras</div>
            <div className="especializacao-card-text">Controle de ponto, sobreaviso, banco de horas e intervalos suprimidos são analisados com precisão.</div>
          </div>
          <div className="especializacao-card">
            <div className="especializacao-card-label">Remuneração variável</div>
            <div className="especializacao-card-text">Comissões, metas, PLR e bônus e seus reflexos em outras verbas entram no escopo da análise.</div>
          </div>
          <div className="especializacao-card">
            <div className="especializacao-card-label">Rescisão e desligamento</div>
            <div className="especializacao-card-text">Aviso prévio proporcional, saldo de FGTS e multa são verificados contra o histórico real.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Seção 4: Para quem faz sentido ─────────────────────── */
export function EmpresaParaQuem({ nome }: { nome: string }) {
  const bullets = [
    'Foi desligado nos últimos 2 anos',
    'Recebia remuneração variável, comissão ou metas',
    'Trabalhava em campo ou tinha jornada irregular',
    'Não tem certeza se a rescisão foi calculada corretamente',
    'Quer entender sua situação antes de tomar qualquer decisão',
  ]

  return (
    <section className="empresa-para-quem">
      <div className="section-inner">
        <span className="section-tag">Para quem faz sentido</span>
        <h2 className="section-title">
          A análise faz sentido se você trabalhou na {nome} e…
        </h2>
        <ul className="para-quem-bullets">
          {bullets.map((b, i) => (
            <li key={i} className="para-quem-bullet">
              <span className="para-quem-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Seção 5: O que costuma entrar na análise ────────────── */
export function EmpresaOQueEntra() {
  const itens = [
    'Diferenças ligadas a horas extras e supressão de intervalos',
    'Metas, bônus e remuneração variável',
    'Reflexos em férias, 13º, FGTS e verbas rescisórias',
    'Inconsistências de jornada',
    'Pagamentos recorrentes tratados de forma inadequada',
    'Pontos da rescisão que podem não refletir o histórico completo',
  ]

  return (
    <section className="empresa-o-que-entra">
      <div className="section-inner">
        <span className="section-tag">Escopo da análise</span>
        <h2 className="section-title">O que costuma entrar em uma análise como essa.</h2>
        <p className="o-que-entra-intro">
          Cada caso é diferente, mas algumas situações aparecem com frequência em revisões de ex-funcionários de grandes empresas.
        </p>
        <ul className="o-que-entra-list">
          {itens.map((item, i) => (
            <li key={i} className="o-que-entra-item">
              <span className="o-que-entra-dot" />
              {item}
            </li>
          ))}
        </ul>
        <p className="o-que-entra-nota">
          A análise inicial serve justamente para entender se existe aderência real ou não.
        </p>
      </div>
    </section>
  )
}

/* ── Seção 7: Sigilo e confiança ─────────────────────────── */
export function EmpresaSigilo() {
  const itens = [
    {
      titulo: 'Sigilo',
      texto: 'Nenhuma informação é compartilhada sem sua autorização. O processo começa de forma discreta e assim permanece.',
    },
    {
      titulo: 'Clareza',
      texto: 'Os resultados são apresentados em linguagem direta, sem juridiquês. Você entende o que foi encontrado antes de qualquer decisão.',
    },
    {
      titulo: 'Critério',
      texto: 'Só indicamos aprofundamento quando há aderência técnica real. Não trabalhamos com expectativas infladas.',
    },
  ]

  return (
    <section className="empresa-sigilo">
      <div className="section-inner">
        <span className="section-tag">Como trabalhamos</span>
        <h2 className="section-title">Clareza, critério e sigilo.</h2>
        <p className="empresa-sigilo-text">
          Sabemos que esse tipo de tema exige cuidado. Por isso, a proposta da Revisa é começar de forma simples, discreta e respeitosa.
        </p>
        <div className="sigilo-items">
          {itens.map((item) => (
            <div key={item.titulo} className="sigilo-item">
              <div className="sigilo-item-titulo">{item.titulo}</div>
              <p className="sigilo-item-texto">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Seção 9: Artigos relacionados (condicional) ─────────── */
export function EmpresaArtigosRelacionados({ slug, nome }: { slug: string; nome: string }) {
  const relacionados = getPostsByEmpresa(slug)

  if (relacionados.length === 0) return null

  const gerais = getAllPosts()
    .filter((p) => p.empresas.length === 0 && !p.destaque)
    .slice(0, Math.max(0, 3 - relacionados.length))

  const exibidos = [...relacionados, ...gerais].slice(0, 3)

  return (
    <section className="empresa-artigos artigos-tipografia">
      <div className="section-inner">
        <div className="empresa-artigos-header">
          <div>
            <span className="section-tag">Conteúdo relacionado</span>
            <h2 className="section-title">Artigos sobre ex-funcionários da {nome}</h2>
          </div>
          <a href="/blog" className="artigos-ver-todos">Ver todos os artigos →</a>
        </div>
        <div className="empresa-artigos-grid">
          {exibidos.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="empresa-artigo-card">
              <span className="blog-cat-tag">{post.tag}</span>
              <h3 className="empresa-artigo-titulo">{post.titulo}</h3>
              <p className="empresa-artigo-excerpt">{post.excerpt}</p>
              <span className="empresa-artigo-meta">{post.tempoLeitura} min de leitura →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
