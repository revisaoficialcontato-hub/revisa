import { getAllPosts, getPostDestaque } from '@/lib/posts'
import { empresas } from '@/data/empresas'

const empresaNomes = new Set(empresas.map((e) => e.nome))

export default function ArtigosBlog() {
  const destaque = getPostDestaque()
  const todos = getAllPosts()
  const outros = todos.filter((p) => !p.destaque).slice(0, 2)
  const temas = [...new Set(todos.map((p) => p.tag))].filter((t) => !empresaNomes.has(t))

  return (
    <section className="artigos-blog artigos-tipografia" id="artigos-blog">
      <div className="section-inner">
        <div className="artigos-blog-header">
          <div>
            <span className="section-tag">Conteúdo educativo</span>
            <h2 className="section-title artigos-blog-title">
              Entenda seus direitos antes de <em>decidir</em>
            </h2>
          </div>
          <a href="/blog" className="artigos-ver-todos">
            Ver todos os artigos →
          </a>
        </div>

        <div className="artigos-blog-grid">
          {/* Card destaque */}
          <a href={`/blog/${destaque.slug}`} className="artigo-destaque">
            <span className="artigo-destaque-label">Em destaque</span>
            <span className="blog-cat-pill">{destaque.tag}</span>
            <h3 className="artigo-destaque-titulo">{destaque.titulo}</h3>
            <p className="artigo-destaque-excerpt">{destaque.excerpt}</p>
            <span className="artigo-destaque-meta">{destaque.tempoLeitura} min de leitura</span>
          </a>

          {/* Cards secundários */}
          <div className="artigos-secundarios">
            {outros.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="artigo-card">
                <span className="blog-cat-tag">{post.tag}</span>
                <h3 className="artigo-card-titulo">{post.titulo}</h3>
                <p className="artigo-card-excerpt">{post.excerpt}</p>
                <span className="artigo-card-meta">{post.tempoLeitura} min de leitura →</span>
              </a>
            ))}
          </div>
        </div>

        <div className="artigos-pills-row">
          <span className="artigos-pills-label">Ver por tema:</span>
          {temas.map((t) => (
            <a key={t} href={`/blog?tema=${encodeURIComponent(t)}`} className="artigo-tema-pill">{t}</a>
          ))}
          <a href="/blog" className="artigo-tema-pill artigo-tema-pill--all">Todos os temas →</a>
        </div>
      </div>
    </section>
  )
}
