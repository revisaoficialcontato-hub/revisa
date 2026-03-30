'use client'

import { useState } from 'react'

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button className="share-btn share-btn--copy" onClick={handleCopy}>
      {copied ? 'Link copiado!' : 'Copiar link'}
    </button>
  )
}
