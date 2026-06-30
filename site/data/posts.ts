export type Post = {
  slug: string
  titulo: string
  excerpt: string
  tag: string        // categoria exibida
  empresas: string[] // slugs das empresas relacionadas — [] = post geral
  tempoLeitura: number
  destaque: boolean
}

export const posts: Post[] = [
  {
    slug: 'o-que-verificar-na-rescisao',
    titulo: 'O que verificar na sua rescisão antes de assinar',
    excerpt: 'A maioria das pessoas assina a rescisão sem conferir cada item. Veja os pontos que mais passam despercebidos e como identificá-los no seu caso.',
    tag: 'Rescisão e verbas',
    empresas: [],
    tempoLeitura: 8,
    destaque: true,
  },
  {
    slug: 'horas-extras-representante-comercial',
    titulo: 'Horas extras para representante comercial: como são calculadas?',
    excerpt: 'A jornada de quem trabalha em campo tem regras específicas que muitas empresas ignoram sistematicamente.',
    tag: 'Horas extras',
    empresas: [],
    tempoLeitura: 6,
    destaque: false,
  },
  {
    slug: 'comissao-meta-calculo-rescisao',
    titulo: 'Comissão e meta: como esses valores entram no cálculo da rescisão?',
    excerpt: 'Quando parte do salário é variável, o cálculo da rescisão muda — e quase nunca é feito corretamente.',
    tag: 'Remuneração variável',
    empresas: [],
    tempoLeitura: 5,
    destaque: false,
  },
  {
    slug: 'prazo-para-revisar-direitos',
    titulo: 'Você ainda tem tempo de revisar seus direitos? Entenda o prazo',
    excerpt: 'A lei permite revisar os últimos 5 anos de vínculo, mas há um limite de 2 anos após o desligamento.',
    tag: 'Prazo e prescrição',
    empresas: [],
    tempoLeitura: 4,
    destaque: false,
  },
  {
    slug: 'erros-calculo-fgts',
    titulo: '5 erros comuns no cálculo do FGTS em grandes empresas',
    excerpt: 'Verbas variáveis frequentemente ficam de fora da base de cálculo — saiba o que observar no seu caso.',
    tag: 'FGTS',
    empresas: [],
    tempoLeitura: 4,
    destaque: false,
  },
]
