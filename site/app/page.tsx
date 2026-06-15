import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Empresas from '@/components/Empresas'
import ComoFunciona from '@/components/ComoFunciona'
import Depoimentos from '@/components/Depoimentos'
import Faq from '@/components/Faq'
import ArtigosBlog from '@/components/ArtigosBlog'
import CtaBanner from '@/components/CtaBanner'
import CtaFinal from '@/components/CtaFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Empresas />
      <ComoFunciona />
      <CtaBanner texto="Quer entender se isso aconteceu no seu caso? É rápido, sigiloso e sem compromisso." />
      <Depoimentos />
      <CtaBanner texto="Assim como eles, entenda em poucos minutos se há valores a receber." botao="Falar no WhatsApp agora" />
      <Faq />
      <ArtigosBlog />
      <CtaFinal />
      <Footer />
    </>
  )
}
