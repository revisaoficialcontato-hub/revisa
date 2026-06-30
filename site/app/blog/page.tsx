import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getAllPosts, getPostDestaque } from '@/lib/posts'
import BlogListagem from './BlogListagem'

export const metadata = {
  title: 'Blog · Revisa',
  description:
    'Análises técnicas, guias práticos e o que grandes empresas costumam calcular de forma errada na rescisão.',
}

export default function BlogPage() {
  const postDestaque = getPostDestaque()
  const postsList = getAllPosts().filter((p) => !p.destaque)

  return (
    <>
      <Nav />

      <section className="blog-hero">
        <div className="section-inner">
          <span className="section-tag">Conteúdo educativo</span>
          <h1 className="blog-hero-title">
            Entenda seus direitos<br />como <em>ex-funcionário</em>
          </h1>
          <p className="blog-hero-sub">
            Análises técnicas, guias práticos e o que grandes empresas costumam calcular de forma errada na rescisão.
          </p>
        </div>
      </section>

      <section className="blog-main">
        <div className="section-inner">
          <BlogListagem
            postDestaque={postDestaque}
            postsList={postsList}
          />
        </div>
      </section>

      <Footer />
    </>
  )
}
