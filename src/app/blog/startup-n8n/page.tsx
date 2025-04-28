import React from 'react';
import BlogLayout from '@/components/BlogLayout';

const nextHref = '/blog/comparativo-automacao';
const prevHref = '/blog/caso-zapier';
const suggestions = [
  { href: '/blog/ia-generativa-automacao', title: 'IA Generativa em Automação de Conteúdo' },
  { href: '/blog/metricas-kpis-automacao', title: 'Métricas e KPIs em Automação' },
];

export default function StartupN8nPage() {
  return (
    <BlogLayout
      title="Como uma Startup Brasileira Escalou com n8n"
      image="/expertise/blog-images/case-startup-n8n.jpg"
      date="2025-01-25"
      author="Startup Brasil"
      prevHref={prevHref}
      nextHref={nextHref}
      suggestions={suggestions}
      postSlug="startup-n8n"
    >
      {/* HERO ARTIGO */}
      <section className="flex flex-col items-center justify-center text-center py-12 md:py-20 relative">
        <div className="absolute inset-0 z-0 pointer-events-none select-none animate-fade-in">
          <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" className="w-full h-full">
            <defs>
              <radialGradient id="g1" cx="50%" cy="50%" r="80%" fx="50%" fy="50%" gradientTransform="rotate(25)">
                <stop offset="0%" stopColor="#00cfd1" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#0a1a2f" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="400" fill="url(#g1)" />
          </svg>
        </div>
      </section>
      {/* CONTEÚDO DO ARTIGO */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-lg mb-6">Veja como uma startup brasileira inovou ao adotar o n8n para automatizar processos internos, ganhar escala e superar desafios de crescimento.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Cenário inicial</h2>
        <p className="mb-4">A startup enfrentava dificuldades para integrar diferentes sistemas (CRM, atendimento, financeiro) e dependia de tarefas manuais para consolidar dados e acionar notificações.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Adoção do n8n</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li>Automação de integração entre CRM e ferramentas de e-mail</li>
          <li>Geração automática de relatórios para o time comercial</li>
          <li>Notificações automáticas para leads quentes</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Resultados alcançados</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li>Redução de 70% no tempo gasto com tarefas operacionais</li>
          <li>Equipe mais estratégica e focada em crescimento</li>
          <li>Melhor experiência do cliente graças à agilidade</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Desafios e aprendizados</h2>
        <ul className="mb-8 list-disc pl-6 text-gray-200">
          <li>Necessidade de capacitação inicial em automação</li>
          <li>Importância de mapear processos antes de automatizar</li>
          <li>Monitoramento constante para evitar falhas</li>
        </ul>
      </section>
      {/* DEPOIMENTO DE LEITOR */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-kore-ciano mb-6 text-center">O que dizem nossos leitores</h2>

      </section>
      
    </BlogLayout>
  );
}
