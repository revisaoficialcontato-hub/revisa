import { empresas } from '@/data/empresas'

export default function Empresas() {
  return (
    <div className="empresas" id="empresas">
      <div className="empresas-inner">
        <span className="empresas-label">Atendemos ex-funcionários de</span>
        <div className="empresas-list">
          {empresas.map((e) => (
            <a key={e.slug} href={`/para/${e.slug}`} className="empresa-nome">
              {e.nome}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
