import React from 'react'
import BlogLayout from '@/components/BlogLayout'


const nextHref = '/blog/tendencias-automacao-2025'
const prevHref = '/blog/comparativo-automacao'
const suggestions = [
  { href: '/blog/automacao-marketing', title: 'Guia Definitivo de Automação de Marketing' },
  { href: '/blog/metricas-kpis-automacao', title: 'Métricas e KPIs em Automação' },
]

export default function FunisEmailMarketingPage() {
  return (
    <BlogLayout
      title="Funis de E-mail Marketing Automatizado: Como Criar Fluxos de Nutrição que Convertem"
      image="/expertise/blog-images/funis-email-marketing.jpg"
      date="2025-03-01"
      author="Email Marketing Agency"
      prevHref={prevHref}
      nextHref={nextHref}
      suggestions={suggestions}
      postSlug="funis-email-marketing"
    >
      <p className="text-lg mb-6">Descubra como criar funis de e-mail marketing automatizados que realmente convertem, com exemplos práticos de fluxos e mensagens eficazes.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Tipos de funis</h2>
      <ul className="mb-4 list-disc pl-6 text-gray-200">
        <li><b>Boas-vindas:</b> Recepção de novos leads, apresentação da empresa e primeiros passos.</li>
        <li><b>Carrinho abandonado:</b> Recuperação de vendas perdidas com lembretes automáticos.</li>
        <li><b>Reengajamento:</b> Ativação de contatos inativos com ofertas ou conteúdos relevantes.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Gatilhos de automação</h2>
      <ul className="mb-4 list-disc pl-6 text-gray-200">
        <li>Cadastro em formulário</li>
        <li>Download de material</li>
        <li>Inatividade por X dias</li>
        <li>Abandono de carrinho</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Exemplo de fluxo eficaz</h2>
      <ol className="mb-8 list-decimal pl-6 text-gray-200">
        <li>E-mail de boas-vindas imediato</li>
        <li>Conteúdo educativo após 2 dias</li>
        <li>Oferta especial após 5 dias</li>
        <li>Reengajamento após 14 dias sem interação</li>
      </ol>

      
    </BlogLayout>
  )
}
