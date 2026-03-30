import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Empresas from '@/components/Empresas'
import ComoFunciona from '@/components/ComoFunciona'
import Depoimentos from '@/components/Depoimentos'
import Faq from '@/components/Faq'
import ArtigosBlog from '@/components/ArtigosBlog'
import CtaFinal from '@/components/CtaFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Empresas />
      <ComoFunciona />
      <Depoimentos />
      <Faq />
      <ArtigosBlog />
      <CtaFinal />
      <Footer />
    </>
  )
}
