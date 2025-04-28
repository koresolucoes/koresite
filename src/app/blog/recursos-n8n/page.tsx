import React from 'react'
import BlogLayout from '@/components/BlogLayout'

const nextHref = '/blog/metricas-kpis-automacao'
const prevHref = '/blog/apis-webhooks'
const suggestions = [
  { href: '/blog/metricas-kpis-automacao', title: 'Métricas e KPIs em Automação' },
  { href: '/blog/automacao-n8n', title: 'Como a automação com n8n pode transformar seu negócio' },
]

export default function RecursosN8nPage() {
  return (
    <BlogLayout
      title="Recursos Gratuitos para Aprender n8n: Tutoriais, Vídeos e Cursos"
      image="/expertise/blog-images/recursos-n8n.jpg"
      date="2024-12-20"
      author="n8n Docs"
      prevHref={prevHref}
      nextHref={nextHref}
      suggestions={suggestions}
      postSlug="recursos-n8n"
    >


      {/* CONTEÚDO DO ARTIGO */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-lg mb-6">Quer aprender n8n do zero? Veja uma seleção dos melhores recursos gratuitos para dominar automação com n8n.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Documentação oficial</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li><a href="https://docs.n8n.io/" className="underline text-ciano-eletrico" target="_blank">docs.n8n.io</a></li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Vídeos e cursos</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li><a href="https://www.youtube.com/c/n8n" className="underline text-ciano-eletrico" target="_blank">YouTube n8n</a></li>
          <li><a href="https://www.udemy.com/course/n8n-automacoes/" className="underline text-ciano-eletrico" target="_blank">Curso Udemy (PT)</a></li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Tutoriais práticos</h2>
        <ul className="mb-8 list-disc pl-6 text-gray-200">
          <li><a href="https://community.n8n.io/c/tutorials/10" className="underline text-ciano-eletrico" target="_blank">Tutoriais na comunidade n8n</a></li>
        </ul>
      </section>

      
    </BlogLayout>
  )
}
