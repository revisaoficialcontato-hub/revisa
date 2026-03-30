import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CtaInline from '@/components/CtaInline'
import CopyLinkButton from '@/components/CopyLinkButton'
import {
  getAllPosts,
  getPostBySlug,
  extractTOC,
  formatDate,
  type Post,
} from '@/lib/posts'
import ReadingProgress from '@/components/ReadingProgress'
import TocNav from '@/components/TocNav'

import { WA } from '@/lib/wa'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getPostBySlug(slug)
    return {
      title: `${post.titulo} · Revisa`,
      description: post.excerpt,
    }
  } catch {
    return {}
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

// Custom MDX components
const components = {
  CtaInline,
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = typeof children === 'string' ? children : String(children ?? '')
    const id = slugify(text)
    return (
      <h2 id={id} {...props}>
        {children}
      </h2>
    )
  },
}

function RelatedCard({ post }: { post: Post }) {
  return (
    <a href={`/blog/${post.slug}`} className="artigo-rel-card">
      <span className="blog-cat-tag">{post.tag}</span>
      <h3 className="artigo-rel-titulo">{post.titulo}</h3>
      <p className="artigo-rel-excerpt">{post.excerpt}</p>
      <span className="artigo-rel-meta">{post.tempoLeitura} min de leitura →</span>
    </a>
  )
}

export default async function ArtigoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let post: ReturnType<typeof getPostBySlug>
  try {
    post = getPostBySlug(slug)
  } catch {
    return notFound()
  }

  const toc = extractTOC(post.content)
  const dataFormatada = formatDate(post.dataPublicacao)

  // Related posts: same tag or same empresa, max 3
  const allPosts = getAllPosts()
  const relacionados = allPosts
    .filter(
      (p) =>
        p.slug !== slug &&
        (p.tag === post.tag ||
          p.empresas.some((e) => post.empresas.includes(e)))
    )
    .slice(0, 3)

  return (
    <>
      <ReadingProgress />
      <Nav />

      <main className="artigo-page blog-page">
        {/* Header do artigo */}
        <div className="artigo-header">
          <div className="section-inner">
            <div className="artigo-breadcrumb" aria-label="breadcrumb">
              <a href="/">Revisa</a>
              <span>›</span>
              <a href="/blog">Blog</a>
              <span>›</span>
              <span>{post.tag}</span>
              <span>›</span>
              <span className="artigo-breadcrumb-atual">{post.titulo}</span>
            </div>

            <span className="blog-cat-tag artigo-tag">{post.tag}</span>

            <h1 className="artigo-titulo">{post.titulo}</h1>

            <p className="artigo-intro">{post.excerpt}</p>

            <div className="artigo-meta">
              <span className="artigo-meta-avatar" aria-hidden="true">RE</span>
              <span className="artigo-meta-autor">Equipe Revisa</span>
              <span className="artigo-meta-sep">·</span>
              <span>{dataFormatada}</span>
              <span className="artigo-meta-sep">·</span>
              <span>{post.tempoLeitura} min de leitura</span>
            </div>

            <hr className="artigo-divider" />
          </div>
        </div>

        {/* Layout 2 colunas */}
        <div className="artigo-layout">
          <div className="section-inner artigo-layout-inner">

            {/* Coluna principal */}
            <article className="artigo-main">
              <div className="artigo-corpo">
                <MDXRemote source={post.content} components={components} />
              </div>

              {/* CTA final */}
              <div className="artigo-cta-final">
                <p className="artigo-cta-final-tag">Análise sigilosa · Sem compromisso</p>
                <h2 className="artigo-cta-final-titulo">Isso se aplica ao seu caso?</h2>
                <p className="artigo-cta-final-texto">
                  Se você se identificou com algum dos pontos acima, uma análise técnica do seu histórico pode mostrar se há valores a receber. O processo é sigiloso e sem compromisso.
                </p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="artigo-cta-final-btn"
                >
                  Falar com especialista no WhatsApp
                </a>
              </div>

              {/* Artigos relacionados */}
              {relacionados.length > 0 && (
                <section className="artigo-relacionados">
                  <h2 className="artigo-rel-titulo-secao">Artigos relacionados</h2>
                  <div className="artigo-rel-grid">
                    {relacionados.map((p) => (
                      <RelatedCard key={p.slug} post={p} />
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* Sidebar */}
            <aside className="artigo-sidebar">

              {/* CTA dark */}
              <div className="sidebar-cta artigo-sidebar-cta">
                <span className="sidebar-cta-tag">Sem compromisso</span>
                <h4 className="sidebar-cta-title">Isso se aplica ao seu caso? Fale com um especialista.</h4>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-cta-btn"
                >
                  Análise do meu caso →
                </a>
                <p className="sidebar-cta-note">Sigilosa · Sem compromisso</p>
              </div>

              {/* Índice */}
              {toc.length > 0 && <TocNav items={toc} />}

              {/* Compartilhar */}
              <div className="sidebar-block artigo-share">
                <h4 className="sidebar-title">Compartilhar</h4>
                <div className="artigo-share-btns">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Leia este artigo da Revisa: ${post.titulo}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn share-btn--wa"
                  >
                    Enviar por WhatsApp
                  </a>
                  <CopyLinkButton />
                </div>
              </div>

            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
