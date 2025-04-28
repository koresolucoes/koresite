// WhyN8NSection.tsx
// Seção explicando os benefícios do n8n
import React from 'react'

export default function WhyN8NSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-black via-azul-petroleo to-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-6">Por que escolher o n8n?</h2>
        <p className="text-gray-200 text-lg mb-6">
          O n8n é uma plataforma de automação poderosa, flexível e de código aberto. Permite conectar sistemas, automatizar tarefas e criar fluxos inteligentes com facilidade, reduzindo custos e aumentando a eficiência.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-left text-gray-300 mt-8">
          <div className="bg-black bg-opacity-40 rounded-xl p-4 flex-1 min-w-[180px]">
            <span className="font-bold text-ciano-eletrico">Luciano Gutierrez</span><br />
            <span className="text-gray-300">Especialista n8n</span>
          </div>
          <div className="bg-black bg-opacity-40 rounded-xl p-4 flex-1 min-w-[180px]">
            <span className="font-bold text-ciano-eletrico">Fabricio Gonçalves</span><br />
            <span className="text-gray-300">Instrutor & Suporte</span>
          </div>
        </div>
      </div>
    </section>
  )
}
