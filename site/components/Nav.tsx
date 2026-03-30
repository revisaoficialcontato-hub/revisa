'use client'

import { useState, useEffect } from 'react'
import { empresas } from '@/data/empresas'

import { WA } from '@/lib/wa'

const SCROLL_SECTIONS = ['inicio', 'como-funciona', 'depoimentos', 'faq', 'artigos-blog']

export default function Nav({ empresa }: { empresa?: string | null }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Páginas de blog: ativa "Blog" diretamente
    if (window.location.pathname.startsWith('/blog')) {
      setActiveId('artigos-blog')
      return
    }

    // Scroll detection só roda na homepage
    if (window.location.pathname !== '/') return

    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveId('inicio')
        return
      }

      const lastEl = document.getElementById('artigos-blog')
      if (lastEl && lastEl.getBoundingClientRect().bottom < 150) {
        setActiveId('')
        return
      }

      let current = 'inicio'
      for (const id of SCROLL_SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 100) {
          current = id
        }
      }
      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isEmpresaPage = !!empresa

  const ctaText = empresa
    ? `Entenda se há valores a receber da ${empresa}`
    : 'Entenda se há valores a receber'

  return (
    <nav>
      <a href="/" className="nav-logo">
        <img src="/logo.png" alt="Revisa" />
      </a>

      <div className="nav-center">
        <a href="/#inicio" className={`nav-link${activeId === 'inicio' ? ' nav-link--ativo' : ''}`}>
          Início
        </a>
        <a href="/#como-funciona" className={`nav-link${activeId === 'como-funciona' ? ' nav-link--ativo' : ''}`}>
          Como funciona
        </a>
        <a href="/#depoimentos" className={`nav-link${activeId === 'depoimentos' ? ' nav-link--ativo' : ''}`}>
          Depoimentos
        </a>
        <a href="/#faq" className={`nav-link${activeId === 'faq' ? ' nav-link--ativo' : ''}`}>
          FAQ
        </a>
        <a href="/blog" className={`nav-link${activeId === 'artigos-blog' ? ' nav-link--ativo' : ''}`}>
          Blog
        </a>

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
              <a key={e.slug} href={`/para/${e.slug}`} className="nav-dropdown-item">
                {e.nome}
              </a>
            ))}
          </div>
        </div>
      </div>

      <a href={WA} target="_blank" rel="noopener noreferrer" className="nav-cta">
        {ctaText}
      </a>
    </nav>
  )
}
