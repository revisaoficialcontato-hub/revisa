import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { empresas } from '@/data/empresas'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ComoFunciona from '@/components/ComoFunciona'
import Faq from '@/components/Faq'
import CtaFinal from '@/components/CtaFinal'
import Footer from '@/components/Footer'
import {
  EmpresaDor,
  EmpresaEspecializacao,
  EmpresaParaQuem,
  EmpresaOQueEntra,
  EmpresaSigilo,
  EmpresaArtigosRelacionados,
} from '@/components/EmpresaSections'

export function generateStaticParams() {
  return empresas.map((e) => ({ empresa: e.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ empresa: string }> }): Promise<Metadata> {
  const { empresa: slug } = await params
  const empresa = empresas.find((e) => e.slug === slug)
  if (!empresa) return {}
  return {
    title: `Revisa · Ex-funcionários ${empresa.preposicao}`,
  }
}

export default async function EmpresaPage({ params }: { params: Promise<{ empresa: string }> }) {
  const { empresa: slug } = await params
  const encontrada = empresas.find((e) => e.slug === slug)
  if (!encontrada) notFound()
  const empresa = encontrada!

  return (
    <>
      <Nav empresa={empresa.nome} />
      <Hero empresa={empresa.nome} />
      <EmpresaDor />
      <EmpresaEspecializacao nome={empresa.nome} preposicao={empresa.preposicao} />
      <EmpresaParaQuem nome={empresa.nome} />
      <EmpresaOQueEntra />
      <ComoFunciona />
      <EmpresaSigilo />
      <Faq />
      <EmpresaArtigosRelacionados slug={empresa.slug} nome={empresa.nome} />
      <CtaFinal empresa={empresa.nome} />
      <Footer />
    </>
  )
}
