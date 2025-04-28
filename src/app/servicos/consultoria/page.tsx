// Página detalhada de Consultoria
import React from 'react'

export default function ConsultoriaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* HEADER */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-kore-ciano mb-2">Consultoria Especializada em Automação</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Diagnóstico completo, estratégia personalizada e planejamento de automação para empresas de todos os portes. Ideal para quem busca eficiência, integração e inovação.</p>
      </header>
      {/* GRID DE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {[
          {
            title: 'Mapeamento de Processos',
            desc: 'Análise profunda dos fluxos atuais para identificar gargalos e oportunidades.'
          },
          {
            title: 'Oportunidades de Automação',
            desc: 'Diagnóstico de áreas que podem ser automatizadas para ganho de eficiência.'
          },
          {
            title: 'Prototipação de Fluxos',
            desc: 'Criação de protótipos funcionais no n8n para validação rápida.'
          },
          {
            title: 'Roadmap & Recomendações',
            desc: 'Plano de ação detalhado e recomendações técnicas para implementação.'
          },
        ].map((item) => (
          <div key={item.title} className="bg-kore-ciano/10 rounded-2xl p-8 shadow-xl flex flex-col hover:scale-105 transition-transform duration-200 border border-kore-ciano/30">
            <h2 className="text-xl font-bold mb-2 text-kore-destaque">{item.title}</h2>
            <p className="text-gray-200">{item.desc}</p>
          </div>
        ))}
      </section>
      {/* BLOCO INSTITUCIONAL */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-kore-cinza/90 rounded-2xl p-8 shadow-xl text-center">
          <h2 className="text-2xl font-bold text-kore-ciano mb-4">Por que contratar a Consultoria Kore?</h2>
          <p className="text-gray-200 mb-2">Aceleramos sua transformação digital com métodos comprovados, equipe experiente e soluções sob medida.</p>
          <p className="text-gray-200">Receba um diagnóstico claro, plano de ação e suporte em todas as etapas.</p>
        </div>
      </section>
      {/* DEPOIMENTO */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-kore-ciano/10 rounded-2xl p-8 shadow-xl flex flex-col items-center">
          <span className="text-5xl mb-4">&ldquo;</span>
          <blockquote className="italic text-gray-200 text-center mb-2">&ldquo;A consultoria da Kore transformou nossa operação e acelerou a automação de processos!&rdquo;</blockquote>
          <span className="font-bold text-kore-destaque">Carlos Mendes</span>
          <span className="text-gray-400 text-sm">Diretor de TI, Empresa Y</span>
        </div>
      </section>
    </div>
  )
}
