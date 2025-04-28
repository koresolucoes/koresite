// Página detalhada de Suporte Técnico
import React from 'react'

export default function SuportePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* HEADER */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-kore-ciano mb-2">Suporte Técnico Especializado</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Planos de suporte para ambientes de automação, com SLA, monitoramento e atendimento personalizado para sua tranquilidade.</p>
      </header>
      {/* GRID DE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {[
          {
            title: 'Atendimento Multicanal',
            desc: 'Suporte via chat, e-mail e telefone para máxima conveniência.'
          },
          {
            title: 'Planos Flexíveis',
            desc: 'Mensalidades ou sob demanda, conforme a necessidade do seu negócio.'
          },
          {
            title: 'Monitoramento Proativo',
            desc: 'Acompanhamento contínuo para evitar problemas antes que ocorram.'
          },
          {
            title: 'Resolução Ágil',
            desc: 'Equipe pronta para solucionar incidentes rapidamente.'
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
          <h2 className="text-2xl font-bold text-kore-ciano mb-4">Por que confiar no Suporte Kore?</h2>
          <p className="text-gray-200 mb-2">Garantimos atendimento ágil, monitoramento constante e solução eficiente para manter sua operação sempre ativa.</p>
          <p className="text-gray-200">Seu ambiente de automação seguro e funcionando 24/7.</p>
        </div>
      </section>
      {/* DEPOIMENTO */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-kore-ciano/10 rounded-2xl p-8 shadow-xl flex flex-col items-center">
          <span className="text-5xl mb-4">&ldquo;</span>
          <blockquote className="italic text-gray-200 text-center mb-2">&ldquo;O suporte da Kore resolveu nossos problemas em tempo recorde. Atendimento excelente e equipe muito preparada!&rdquo;</blockquote>
          <span className="font-bold text-kore-destaque">Ricardo Silva</span>
          <span className="text-gray-400 text-sm">CTO, Startup Z</span>
        </div>
      </section>

    </div>
  )
}
