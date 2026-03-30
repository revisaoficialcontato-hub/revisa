import { WA } from '@/lib/wa'

const DEFAULT_TEXTO =
  'Tem dúvida sobre o seu caso? Converse com um especialista.'

export default function CtaInline({ texto }: { texto?: string }) {
  return (
    <div className="cta-inline">
      <p className="cta-inline-text">{texto ?? DEFAULT_TEXTO}</p>
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-inline-btn"
      >
        Falar com especialista →
      </a>
    </div>
  )
}
