import React from 'react'
import BlogLayout from '@/components/BlogLayout'


const nextHref = '/blog/startup-n8n'
const prevHref = '/blog/automacao-marketing'
const suggestions = [
  { href: '/blog/lowcode-nocode', title: 'Top 10 Ferramentas Low‑Code/No‑Code' },
  { href: '/blog/recursos-n8n', title: 'Recursos Gratuitos para Aprender n8n' },
]

export default function CasoZapierPage() {
  return (
    <BlogLayout
      title="Estudo de Caso: Aumento de Produtividade com Zapier em Pequenas Empresas"
      image="/expertise/blog-images/caso-zapier.jpg"
      date="2025-04-10"
      author="BenchmarkONE"
      prevHref={prevHref}
      nextHref={nextHref}
      suggestions={suggestions}
      postSlug="caso-zapier"
    >
      <p className="text-lg mb-6">Neste estudo de caso, mostramos como pequenas empresas conseguiram automatizar processos e economizar tempo usando o Zapier. Veja métricas reais, aprendizados e dicas práticas para aplicar na sua empresa.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Desafio</h2>
      <p className="mb-4">Pequenas empresas frequentemente enfrentam falta de tempo e equipe reduzida. Muitas tarefas, como envio de propostas, atualização de planilhas e notificações, eram feitas manualmente.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Solução implementada</h2>
      <ul className="mb-4 list-disc pl-6 text-gray-200">
        <li>Integração do CRM com Google Sheets para atualizar leads automaticamente</li>
        <li>Envio de e-mails automáticos ao receber novos contatos</li>
        <li>Alertas no Slack para novos pedidos</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Resultados</h2>
      <ul className="mb-4 list-disc pl-6 text-gray-200">
        <li>Redução de 12 horas semanais em tarefas repetitivas</li>
        <li>Menos erros de digitação e atualização</li>
        <li>Equipe mais focada em atividades estratégicas</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Dicas práticas</h2>

    </BlogLayout>
  )
}
