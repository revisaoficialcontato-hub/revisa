export type Empresa = {
  slug: string
  nome: string
  preposicao: string // "da Unilever", "da Nestlé" — usado em frases
}

export const empresas: Empresa[] = [
  { slug: 'unilever',  nome: 'Unilever',  preposicao: 'da Unilever'  },
  { slug: 'nestle',    nome: 'Nestlé',    preposicao: 'da Nestlé'    },
  { slug: 'cocacola',  nome: 'Coca-Cola', preposicao: 'da Coca-Cola' },
  { slug: 'pepsico',   nome: 'PepsiCo',   preposicao: 'da PepsiCo'   },
  { slug: 'danone',    nome: 'Danone',    preposicao: 'da Danone'    },
  { slug: 'jj',        nome: 'J&J',       preposicao: 'da J&J'       },
  { slug: 'colgate',   nome: 'Colgate',   preposicao: 'da Colgate'   },
  { slug: 'cimed',     nome: 'Cimed',     preposicao: 'da Cimed'     },
  { slug: 'marilan',   nome: 'Marilan',   preposicao: 'da Marilan'   },
]
