// Página detalhada de Configuração & Implementação
import React from 'react'

export default function ImplementacaoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* HEADER */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-kore-ciano mb-2">Configuração & Implementação</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Implementação completa do n8n, integrações com sistemas, APIs e automação de fluxos sob medida para sua empresa.</p>
      </header>
      {/* GRID DE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {[
          {
            title: 'Setup do n8n',
            desc: 'Instalação, configuração e personalização do ambiente.'
          },
          {
            title: 'Integrações',
            desc: 'Conexão com ERPs, CRMs, bancos de dados e APIs.'
          },
          {
            title: 'Automação de Processos',
            desc: 'Criação de fluxos para notificações, ETL e sincronização de dados.'
          },
          {
            title: 'Documentação & Treinamento',
            desc: 'Entrega de documentação e capacitação da equipe.'
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
          <h2 className="text-2xl font-bold text-kore-ciano mb-4">Por que implementar com a Kore?</h2>
          <p className="text-gray-200 mb-2">Nossa equipe garante uma implantação rápida, segura e totalmente adaptada ao seu negócio.</p>
          <p className="text-gray-200">Conte com documentação clara, treinamento e suporte contínuo.</p>
        </div>
      </section>
      {/* DEPOIMENTO */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-kore-ciano/10 rounded-2xl p-8 shadow-xl flex flex-col items-center">
          <span className="text-5xl mb-4">&ldquo;</span>
          <blockquote className="italic text-gray-200 text-center mb-2">&ldquo;A equipe da Kore implementou tudo rápido e com muita qualidade. Recomendo!&rdquo;</blockquote>
          <span className="font-bold text-kore-destaque">Fernanda Lima</span>
          <span className="text-gray-400 text-sm">Gerente de Projetos</span>
        </div>
      </section>
    </div>
  )
}
