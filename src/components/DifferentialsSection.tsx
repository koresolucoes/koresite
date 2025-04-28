// DifferentialsSection.tsx
// Seção de diferenciais da empresa
import React from 'react'
import Link from 'next/link'

const differentials = [
  {
    title: 'Economia de Tempo',
    description: 'Automatize tarefas repetitivas e foque no que realmente importa.',
    icon: (
      <svg width="38" height="38" fill="none" viewBox="0 0 38 38" aria-hidden="true"><circle cx="19" cy="19" r="17" fill="#00cfd1"/><path d="M19 9v10l7 4" stroke="#a8ff04" strokeWidth="2.5" strokeLinecap="round"/><circle cx="19" cy="19" r="14" stroke="#a8ff04" strokeWidth="2"/></svg>
    ),
  },
  {
    title: 'Escalabilidade',
    description: 'Soluções que crescem junto com o seu negócio, sem limites.',
    icon: (
      <svg width="38" height="38" fill="none" viewBox="0 0 38 38" aria-hidden="true"><rect x="5" y="20" width="6" height="10" rx="2" fill="#a8ff04"/><rect x="15" y="14" width="6" height="16" rx="2" fill="#00cfd1"/><rect x="25" y="8" width="6" height="22" rx="2" fill="#00cfd1"/><path d="M5 30h26" stroke="#a8ff04" strokeWidth="2"/></svg>
    ),
  },
  {
    title: 'Segurança de Dados',
    description: 'Proteção avançada e privacidade em todos os fluxos automatizados.',
    icon: (
      <svg width="38" height="38" fill="none" viewBox="0 0 38 38" aria-hidden="true"><rect x="8" y="16" width="22" height="14" rx="4" fill="#00cfd1"/><path d="M19 16v-3a4 4 0 0 1 8 0v3" stroke="#a8ff04" strokeWidth="2"/><circle cx="19" cy="25" r="2" fill="#a8ff04"/></svg>
    ),
  },
  {
    title: 'Expertise em n8n e IA',
    description: 'Equipe especialista em automação de ponta com IA e n8n.',
    icon: (
      <svg width="38" height="38" fill="none" viewBox="0 0 38 38" aria-hidden="true"><circle cx="19" cy="19" r="15" fill="#a8ff04"/><circle cx="19" cy="19" r="8" fill="#00cfd1"/><path d="M19 11v4m0 8v4m-8-8h4m8 0h4" stroke="#0a1a2f" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
]

export default function DifferentialsSection() {
  return (
    <section className="py-16 bg-black bg-opacity-80">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-10 text-center">Por que escolher nossa consultoria?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {differentials.map((diff) => (
            <div key={diff.title} className="group bg-kore-cinza/80 rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-[1.04] hover:shadow-2xl hover:bg-kore-cinza/95 transition-all duration-200">
              <div className="mb-4">{diff.icon}</div>
              <h3 className="text-lg font-bold text-kore-ciano mb-2 text-center">{diff.title}</h3>
              <p className="text-gray-200 text-center text-base min-h-[44px]">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* CTA sticky ao final da seção */}
      <div className="w-full flex justify-center mt-14">
        <Link href="/automacao-ia" className="cta-btn text-lg px-8 py-4 shadow-xl bg-kore-destaque text-kore-azul hover:brightness-110 sticky bottom-8 z-20">
          Conheça Nossas Soluções de IA
        </Link>
      </div>
    </section>
  )
}
