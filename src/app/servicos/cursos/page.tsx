// Página detalhada de Cursos
import React from 'react'

export default function CursosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* HEADER */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-kore-ciano mb-2">Cursos em Automação e n8n</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Capacite sua equipe ou aprenda do zero ao avançado sobre automação com n8n. Cursos online, presenciais e sob demanda, com abordagem prática e instrutores certificados.</p>
      </header>
      {/* GRID DE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {[
          {
            title: 'Do básico ao avançado',
            desc: 'Conteúdo para todos os níveis, do iniciante ao especialista.'
          },
          {
            title: 'Certificação e Suporte',
            desc: 'Receba certificado e conte com suporte dos instrutores.'
          },
          {
            title: 'Aulas práticas',
            desc: 'Aprenda resolvendo desafios reais de automação.'
          },
          {
            title: 'Atualização constante',
            desc: 'Material sempre atualizado com as tendências do mercado.'
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
          <h2 className="text-2xl font-bold text-kore-ciano mb-4">Por que aprender com a Kore?</h2>
          <p className="text-gray-200 mb-2">Nossos cursos unem teoria e prática, com instrutores atuantes no mercado e suporte de verdade.</p>
          <p className="text-gray-200">Prepare-se para o futuro da automação e destaque-se profissionalmente.</p>
        </div>
      </section>
      {/* DEPOIMENTO */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-kore-ciano/10 rounded-2xl p-8 shadow-xl flex flex-col items-center">
          <span className="text-5xl mb-4">&ldquo;</span>
          <blockquote className="italic text-gray-200 text-center mb-2">&ldquo;Aprendi muito com os cursos da Kore. Didática excelente e muito conteúdo prático!&rdquo;</blockquote>
          <span className="font-bold text-kore-destaque">Juliana Souza</span>
          <span className="text-gray-400 text-sm">Analista de Processos</span>
        </div>
      </section>
    </div>
  )
}
