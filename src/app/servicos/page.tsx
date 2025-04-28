"use client";
// Página principal de Serviços
import Link from 'next/link'
import React from 'react';

const servicos = [
  {
    title: 'Consultoria Especializada',
    description: 'Diagnóstico, planejamento e estratégia para automação eficiente.',
    details: 'Personalizada para seu negócio',
    href: '/servicos/consultoria',
    color: 'text-verde-lima',
  },
  {
    title: 'Implementação',
    description: 'Desenvolvimento, integração e entrega de fluxos automatizados.',
    details: 'Do zero à automação rodando',
    href: '/servicos/implementacao',
    color: 'text-magenta',
  },
  {
    title: 'Cursos e Treinamentos',
    description: 'Capacite sua equipe para dominar o n8n e automações avançadas.',
    details: 'Do básico ao avançado',
    href: '/servicos/cursos',
    color: 'text-ciano-eletrico',
  },
  {
    title: 'Suporte Técnico',
    description: 'Acompanhamento, manutenção e suporte contínuo para seu ambiente automatizado.',
    details: 'Planos flexíveis',
    href: '/servicos/suporte',
    color: 'text-verde-lima',
  },
];

export default function ServicosPage() {
  return (
    <div>
      {/* HERO SERVIÇOS */}
      <section className="flex flex-col items-center justify-center text-center py-16 md:py-24 relative">
        <div className="absolute inset-0 z-0 pointer-events-none select-none animate-fade-in">
          <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" className="w-full h-full">
            <defs>
              <radialGradient id="g1" cx="50%" cy="50%" r="80%" fx="50%" fy="50%" gradientTransform="rotate(25)">
                <stop offset="0%" stopColor="#00cfd1" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#0a1a2f" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="720" cy="200" rx="680" ry="160" fill="url(#g1)" />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="mb-6"><rect x="8" y="8" width="40" height="40" rx="12" fill="#00cfd1"/><path d="M28 18v8m0 4v2m-8-2a8 8 0 1 1 16 0c0 2.5-2 4-8 4s-8-1.5-8-4z" stroke="#0a1a2f" strokeWidth="2.5" strokeLinecap="round"/></svg>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-kore-ciano">Soluções em Automação</h1>
          <p className="text-lg md:text-xl text-kore-branco mb-6 max-w-2xl">Consultoria, implementação, cursos e suporte — tudo para acelerar resultados reais com n8n.</p>
        </div>
      </section>

      {/* LISTA DE SERVIÇOS */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {servicos.map((serv) => (
            <Link key={serv.title} href={serv.href} className="bg-kore-ciano/10 rounded-2xl p-8 shadow-xl flex flex-col hover:scale-105 transition-transform duration-200 border border-kore-ciano/30">
              <h2 className={`text-2xl font-bold mb-2 text-kore-destaque ${serv.color}`}>{serv.title}</h2>
              <p className="text-gray-200 mb-1">{serv.description}</p>
              <span className="text-verde-lima font-medium mb-2">{serv.details}</span>
              <span className="underline font-semibold">Saiba mais</span>
            </Link>
          ))}
        </div>
      </section>

      {/* BLOCO INSTITUCIONAL */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-kore-cinza/90 rounded-2xl p-8 shadow-xl text-center">
          <h2 className="text-2xl font-bold text-kore-ciano mb-4">Por que escolher a Kore?</h2>
          <p className="text-gray-200 mb-2">Nossa equipe une prática, didática e suporte próximo. Você conta com especialistas que vivem automação, APIs e n8n no dia a dia.</p>
          <p className="text-gray-200">Projetos sob medida, exemplos reais e acompanhamento dedicado.</p>
        </div>
      </section>

      {/* DEPOIMENTO DE CLIENTE */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-kore-ciano mb-6 text-center">O que dizem nossos clientes</h2>
        <div className="bg-kore-cinza/90 rounded-xl p-8 flex flex-col items-center shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/expertise/blog-images/cliente-exemplo3.jpg" alt="Cliente satisfeito" width={64} height={64} className="rounded-full mb-4 shadow-lg border-2 border-kore-ciano" />
          <blockquote className="italic text-gray-200 text-center mb-2">“A Kore revolucionou nossos processos com automações sob medida e suporte incrível!”</blockquote>
          <span className="font-bold text-kore-destaque">Ana Paula Ribeiro</span>
          <span className="text-gray-400 text-sm">Gerente de TI</span>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full flex justify-center py-10 bg-gradient-to-t from-black via-kore-cinza to-transparent">
        <div className="bg-kore-ciano/90 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl max-w-2xl w-full">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-kore-azul mb-2">Ficou com dúvida sobre nossos serviços?</h3>
            <p className="text-kore-azul mb-2">Fale com a equipe Kore e receba uma orientação personalizada.</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center justify-center md:justify-start">
              <a href="mailto:koresoluciones@outlook.com" className="underline hover:text-kore-destaque">koresoluciones@outlook.com</a>
              <span className="hidden md:inline">|</span>
              <a href="tel:+5531991282843" className="underline hover:text-kore-destaque">+55 31 99128-2843</a>
            </div>
          </div>
          <Link href="/contato" className="cta-btn px-8 py-4 text-lg text-center">Entrar em Contato</Link>
        </div>
      </section>
    </div>
  );
}
