'use client'

import { useEffect, useState } from 'react'

type TocItem = { id: string; text: string }

export default function TocNav({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pega a primeira entrada visível (a mais alta na página)
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.3,
      }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <div className="sidebar-block artigo-toc">
      <h4 className="sidebar-title">Neste artigo</h4>
      <ul className="artigo-toc-list">
        {items.map((item) => (
          <li key={item.id} className="artigo-toc-item">
            <a
              href={`#${item.id}`}
              className={`artigo-toc-link${activeId === item.id ? ' artigo-toc-link--ativo' : ''}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
