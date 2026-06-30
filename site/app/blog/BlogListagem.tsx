'use client'

import { useState, useEffect, useRef } from 'react'
import type { Post } from '@/lib/posts'

import { WA } from '@/lib/wa'

export default function BlogListagem({
  postDestaque,
  postsList,
}: {
  postDestaque: Post
  postsList: Post[]
}) {
  const [tema, setTema] = useState<string | null>(null)
  const listaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const temaParam = params.get('tema')
    if (temaParam) {
      setTema(temaParam)
      setTimeout(() => {
        if (!listaRef.current) return
        const top = listaRef.current.getBoundingClientRect().top + window.scrollY - 100
        window.scrollTo({ top, behavior: 'smooth' })
      }, 300)
    }
  }, [])

  const temasFiltro = [...new Set([postDestaque, ...postsList].map((p) => p.tag))]

  const filtroAtivo = !!tema

  // Quando há filtro ativo, inclui o post em destaque na lista geral para não sumir
  const candidatos = filtroAtivo ? [postDestaque, ...postsList] : postsList

  const postsFiltrados = candidatos.filter((p) => {
    if (tema && p.tag !== tema) return false
    return true
  })

  return (
    <div className="blog-layout">
      {/* Coluna principal */}
      <div className="blog-content">
        {/* Post em destaque */}
        <div className="blog-featured">
          <div className="blog-featured-bg">
            <span className="blog-featured-label">Em destaque</span>
            <span className="blog-cat-pill">{postDestaque.tag}</span>
            <div className="blog-featured-meta">{postDestaque.tempoLeitura} min de leitura</div>
          </div>
          <div className="blog-featured-body">
            <a href={`/blog/${postDestaque.slug}`} className="blog-featured-title-link">
              <h2 className="blog-featured-title">{postDestaque.titulo}</h2>
            </a>
            <p className="blog-featured-excerpt">{postDestaque.excerpt}</p>
            <a href={`/blog/${postDestaque.slug}`} className="btn-primary blog-read-btn">
              Ler análise completa
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Lista de posts */}
        <div ref={listaRef} className="blog-posts-header">
          <h3 className="blog-posts-title">Artigos recentes</h3>
          {tema && (
            <button
              className="blog-clear-filter"
              onClick={() => setTema(null)}
            >
              Limpar filtros ×
            </button>
          )}
        </div>

        <div className="blog-posts">
          {postsFiltrados.length === 0 ? (
            <p className="blog-empty">Nenhum artigo encontrado para os filtros selecionados.</p>
          ) : (
            postsFiltrados.map((post) => (
              <article key={post.slug} className="blog-post-card">
                <div className="blog-post-top">
                  <span className="blog-cat-tag">{post.tag}</span>
                  <span className="blog-post-meta">{post.tempoLeitura} min de leitura</span>
                </div>
                <a href={`/blog/${post.slug}`} className="blog-post-title-link">
                  <h3 className="blog-post-title">{post.titulo}</h3>
                </a>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} className="blog-post-link">
                  Ler artigo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </article>
            ))
          )}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="blog-sidebar">
        {/* Filtro por tema */}
        <div className="sidebar-block">
          <h4 className="sidebar-title">Filtrar por tema</h4>
          <div className="sidebar-pills">
            {temasFiltro.map((t) => (
              <button
                key={t}
                className={`sidebar-pill${tema === t ? ' active' : ''}`}
                onClick={() => setTema(tema === t ? null : t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* CTA card escuro */}
        <div className="sidebar-cta">
          <span className="sidebar-cta-tag">Sem compromisso</span>
          <h4 className="sidebar-cta-title">Sua rescisão foi calculada corretamente?</h4>
          <p className="sidebar-cta-text">
            Tem dúvida sobre o seu caso específico? Especialistas revisam os seus documentos e apontam exatamente o que pode ter sido calculado errado.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="sidebar-cta-btn">
            Análise do meu caso →
          </a>
          <p className="sidebar-cta-note">Sem compromisso · Resposta em 24h</p>
        </div>

        {/* Artigos recentes */}
        <div className="sidebar-block">
          <h4 className="sidebar-title">Artigos recentes</h4>
          <ul className="sidebar-recentes">
            {[postDestaque, ...postsList].slice(0, 4).map((p) => (
              <li key={p.slug} className="sidebar-recente-item">
                <a href={`/blog/${p.slug}`} className="sidebar-recente-link">{p.titulo}</a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}
