// ServicesSection.tsx
// Seção de serviços com ícones e links
import React from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'Cursos',
    description: 'Aprenda n8n e automação inteligente do zero ao avançado, com instrutores certificados.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true"><rect x="6" y="10" width="28" height="20" rx="4" fill="#00cfd1"/><rect x="10" y="14" width="20" height="12" rx="2" fill="#0a1a2f"/><path d="M20 20v4" stroke="#a8ff04" strokeWidth="2" strokeLinecap="round"/><circle cx="20" cy="18" r="1.6" fill="#a8ff04"/></svg>
    ),
    href: '/cursos',
    cta: 'Ver Cursos'
  },
  {
    title: 'Configuração',
    description: 'Setup, integrações e automações personalizadas para seu negócio com n8n e IA.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="16" fill="#a8ff04"/><path d="M20 12v8l6 3" stroke="#0a1a2f" strokeWidth="2.5" strokeLinecap="round"/><circle cx="20" cy="20" r="5" fill="#00cfd1"/></svg>
    ),
    href: '/configuracao',
    cta: 'Solicitar Configuração'
  },
  {
    title: 'Suporte Técnico',
    description: 'Atendimento ágil, manutenção e otimização contínua para sua automação.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true"><rect x="8" y="14" width="24" height="12" rx="6" fill="#00cfd1"/><rect x="16" y="22" width="8" height="4" rx="2" fill="#a8ff04"/><circle cx="20" cy="20" r="18" stroke="#a8ff04" strokeWidth="2"/></svg>
    ),
    href: '/suporte',
    cta: 'Obter Suporte'
  },
  {
    title: 'Automação com n8n e IA',
    description: 'Soluções completas, customizadas e inteligentes para escalar seu negócio.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true"><rect x="8" y="8" width="24" height="24" rx="8" fill="#00cfd1"/><circle cx="20" cy="20" r="7" fill="#0a1a2f"/><path d="M20 13v3m0 8v3m-7-7h3m8 0h3" stroke="#a8ff04" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    href: '/automacao-ia',
    cta: 'Conheça Soluções'
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-black bg-opacity-60">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-10 text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group flex flex-col items-center bg-kore-cinza/80 rounded-2xl p-8 shadow-xl hover:scale-[1.04] hover:shadow-2xl hover:bg-kore-cinza/95 transition-all duration-200 focus-within:ring-2 ring-kore-ciano">
              <div className="mb-4 group-hover:animate-bounce">{service.icon}</div>
              <h3 className="text-xl font-bold text-kore-ciano mb-2 text-center">{service.title}</h3>
              <p className="text-gray-200 text-center text-base mb-6 min-h-[48px]">{service.description}</p>
              <Link href={service.href} className="cta-btn w-full mt-auto block text-center rounded-full focus:outline-none focus:ring-2 focus:ring-kore-ciano transition-all duration-150">
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* CTA sticky ao final da seção */}
      <div className="w-full flex justify-center mt-14">
        <Link href="/configuracao" className="cta-btn text-lg px-8 py-4 shadow-xl bg-kore-destaque text-kore-azul hover:brightness-110 sticky bottom-8 z-20">
          Solicite um Orçamento de Configuração
        </Link>
      </div>
    </section>
  )
}
