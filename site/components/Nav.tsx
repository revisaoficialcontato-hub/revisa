'use client'

import { useState, useEffect } from 'react'
import { empresas } from '@/data/empresas'
import { WA } from '@/lib/wa'

const SCROLL_SECTIONS = ['inicio', 'como-funciona', 'depoimentos', 'faq', 'artigos-blog']

export default function Nav({ empresa }: { empresa?: string | null }) {
  const [activeId, setActiveId] = useState<string>('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (window.location.pathname.startsWith('/blog')) {
      setActiveId('artigos-blog')
      return
    }
    if (window.location.pathname !== '/') return

    const handleScroll = () => {
      if (window.scrollY < 80) { setActiveId('inicio'); return }
      const lastEl = document.getElementById('artigos-blog')
      if (lastEl && lastEl.getBoundingClientRect().bottom < 150) { setActiveId(''); return }
      let current = 'inicio'
      for (const id of SCROLL_SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 100) current = id
      }
      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Trava scroll da página quando menu está aberto (html + body — necessário para iOS Safari)
  useEffect(() => {
    const html = document.documentElement
    if (menuOpen) {
      html.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      html.style.overflow = ''
      document.body.style.overflow = ''
    }
    return () => {
      html.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isEmpresaPage = !!empresa
  const ctaText = empresa
    ? `Entenda se há valores a receber da ${empresa}`
    : 'Entenda se há valores a receber'
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav>
        <a href="/" className="nav-logo">
          <img src="/logo.png" alt="Revisa" />
        </a>

        {/* Links desktop */}
        <div className="nav-center">
          <a href="/#inicio" className={`nav-link${activeId === 'inicio' ? ' nav-link--ativo' : ''}`}>Início</a>
          <a href="/#como-funciona" className={`nav-link${activeId === 'como-funciona' ? ' nav-link--ativo' : ''}`}>Como funciona</a>
          <a href="/#depoimentos" className={`nav-link${activeId === 'depoimentos' ? ' nav-link--ativo' : ''}`}>Depoimentos</a>
          <a href="/#faq" className={`nav-link${activeId === 'faq' ? ' nav-link--ativo' : ''}`}>FAQ</a>
          <a href="/blog" className={`nav-link${activeId === 'artigos-blog' ? ' nav-link--ativo' : ''}`}>Blog</a>
          <div className="nav-dropdown-wrap">
            <span className={`nav-link nav-dropdown-trigger${isEmpresaPage ? ' nav-link--ativo' : ''}`}>
              Para quem
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
            <div className="nav-dropdown">
              <div className="nav-dropdown-header">Ex-funcionários de</div>
              {empresas.map((e) => (
                <a key={e.slug} href={`/para/${e.slug}`} className="nav-dropdown-item">{e.nome}</a>
              ))}
            </div>
          </div>
        </div>

        <a href={WA} target="_blank" rel="noopener noreferrer" className="nav-cta">{ctaText}</a>

        {/* Botão hamburguer */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? 'bar-open-1' : ''} />
          <span className={menuOpen ? 'bar-open-2' : ''} />
          <span className={menuOpen ? 'bar-open-3' : ''} />
        </button>
      </nav>

      {/* Overlay full-screen mobile — fora do <nav> para não herdar posicionamento */}
      {menuOpen && (
        <div className="nav-mobile-overlay" role="dialog" aria-modal="true" aria-label="Menu">
          {/* Header do overlay com logo + fechar */}
          <div className="nav-mobile-overlay-header">
            <a href="/" className="nav-logo" onClick={closeMenu}>
              <img src="/logo.png" alt="Revisa" />
            </a>
            <button className="nav-mobile-close" onClick={closeMenu} aria-label="Fechar menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Conteúdo scrollável */}
          <div className="nav-mobile-overlay-body">
            <a href="/#inicio" className="nav-mobile-link" onClick={closeMenu}>Início</a>
            <a href="/#como-funciona" className="nav-mobile-link" onClick={closeMenu}>Como funciona</a>
            <a href="/#depoimentos" className="nav-mobile-link" onClick={closeMenu}>Depoimentos</a>
            <a href="/#faq" className="nav-mobile-link" onClick={closeMenu}>FAQ</a>
            <a href="/blog" className="nav-mobile-link" onClick={closeMenu}>Blog</a>

            <div className="nav-mobile-section-title">Para quem</div>
            {empresas.map((e) => (
              <a key={e.slug} href={`/para/${e.slug}`} className="nav-mobile-link nav-mobile-link--sub" onClick={closeMenu}>
                {e.nome}
              </a>
            ))}

            <a href={WA} target="_blank" rel="noopener noreferrer" className="nav-mobile-cta" onClick={closeMenu}>
              {ctaText}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
