import type { Metadata } from 'next'
import { Nunito, Instrument_Serif, DM_Sans } from 'next/font/google'
import './globals.css'
import ScrollReveal from '@/components/ScrollReveal'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
  display: 'swap',
})

// Carregadas apenas como variáveis CSS — não alteram a fonte padrão do site
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Revisa · Entenda se há valores a receber ao sair da empresa',
  description:
    'A Revisa faz uma revisão técnica e sigilosa para ex-funcionários de grandes empresas, com foco em identificar valores que podem não ter sido corretamente pagos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${nunito.className} ${instrumentSerif.variable} ${dmSans.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="facebook-domain-verification" content="ikmfdcjx2eb7xk0sotmjs2g6q39nnv" />
      </head>
      <body>
        {children}
        <FloatingWhatsApp />
        <ScrollReveal />
      </body>
    </html>
  )
}

