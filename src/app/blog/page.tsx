"use client";
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
// A navegação principal já está presente via MainNav

const posts = [
  {
    title: 'Guia Definitivo de Automação de Marketing: Estratégias, Ferramentas e Implementação',
    summary: 'Um artigo completo explicando o que é automação de marketing, seus benefícios e passo a passo de implementação com melhores práticas do mercado.',
    date: '2025-04-17',
    author: 'Bloomreach',
    href: '/blog/automacao-marketing',
    image: '',
  },
  {
    title: 'Estudo de Caso: Aumento de Produtividade com Zapier em Pequenas Empresas',
    summary: 'Mostre como empresas reais economizaram tempo e recursos usando workflows no Zapier, incluindo métricas de eficiência e aprendizados práticos.',
    date: '2025-04-10',
    author: 'BenchmarkONE',
    href: '/blog/caso-zapier',
    image: '',
  },
  {
    title: 'Transformação Digital com n8n: Caso de Sucesso em Startup Brasileira',
    summary: 'Detalhe um projeto fictício ou real que demonstre como uma startup brasileira adotou n8n para automatizar processos internos, com resultados e desafios superados.',
    date: '2025-03-28',
    author: 'Medium',
    href: '/blog/startup-n8n',
    image: '',
  },
  {
    title: 'Comparativo das Principais Plataformas de Automação: Zapier, Make, n8n e Power Automate',
    summary: 'Faça uma análise objetiva das funcionalidades, preços e integrações de cada ferramenta, ajudando o leitor a escolher a solução ideal.',
    date: '2025-03-15',
    author: 'BenchmarkONE, n8n Docs',
    href: '/blog/comparativo-automacao',
    image: '',
  },
  {
    title: 'Funis de E-mail Marketing Automatizado: Como Criar Fluxos de Nutrição que Convertem',
    summary: 'Explique tipos de funil (boas-vindas, carrinho abandonado, reengajamento), gatilhos e exemplos de mensagens eficazes.',
    date: '2025-03-01',
    author: 'Email Marketing Agency',
    href: '/blog/funis-email-marketing',
    image: '',
  },
  {
    title: '13 Tendências de Automação para 2025 e Como se Preparar',
    summary: 'Apresente as principais tendências em automação (IA, personalização, voice bots, etc.) e orientações para implementar essas inovações.',
    date: '2025-02-18',
    author: 'WebFX',
    href: '/blog/tendencias-automacao-2025',
    image: '',
  },
  {
    title: 'IA Generativa em Automação de Conteúdo: O Futuro da Criação de Textos',
    summary: 'Discuta como modelos de linguagem (LLMs) podem ser incorporados em fluxos de automação para gerar descrições de produtos, posts e e-mails de forma escalável.',
    date: '2025-02-03',
    author: 'arXiv',
    href: '/blog/ia-generativa-automacao',
    image: '',
  },
  {
    title: 'Top 10 Ferramentas Low‑Code/No‑Code para Automação de Processos',
    summary: 'Liste e descreva plataformas como Zapier, Make, n8n, Integromat, Power Automate, Airtable Automations, etc., com prós e contras.',
    date: '2025-01-22',
    author: 'factbites.com',
    href: '/blog/lowcode-nocode',
    image: '',
  },
  {
    title: 'APIs e Webhooks: Manual Completo para Integração entre Sistemas',
    summary: 'Um tutorial técnico mostrando como configurar webhooks, autenticação de APIs REST e exemplos práticos de integração entre CRM, ERP e ferramentas de marketing.',
    date: '2025-01-08',
    author: 'Bloomreach',
    href: '/blog/apis-webhooks',
    image: '',
  },
  {
    title: 'Recursos Gratuitos para Aprender n8n: Tutoriais, Vídeos e Cursos',
    summary: 'Compile links para cursos oficiais, vídeos no YouTube e guias passo a passo da documentação de n8n, facilitando o aprendizado autodirigido.',
    date: '2024-12-20',
    author: 'n8n Docs',
    href: '/blog/recursos-n8n',
    image: '',
  },
  {
    title: 'Métricas e KPIs em Automação: Como Monitorar Resultados e Otimizar Fluxos',
    summary: 'Explique indicadores essenciais (tempo economizado, ROI, taxa de erro), ferramentas de monitoramento e dashboards recomendados.',
    date: '2024-12-01',
    author: 'explodingtopics.com',
    href: '/blog/metricas-kpis-automacao',
    image: '',
  },
  // Entradas antigas
  {
    title: 'Como a automação com n8n pode transformar seu negócio',
    summary: 'Descubra os principais benefícios da automação inteligente usando n8n.',
    date: '2024-03-10',
    author: 'Equipe n8n',
    href: '/blog/automacao-n8n',
    image: '',
  },
  {
    title: 'Integração de APIs sem código: Guia prático',
    summary: 'Veja como conectar sistemas rapidamente usando n8n, sem programar.',
    date: '2024-03-02',
    author: 'João Silva',
    href: '/blog/apis-sem-codigo',
    image: '',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-kore-azul via-kore-cinza to-black pb-0">
      {/* HERO BLOG */}
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
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-kore-ciano">Blog Kore: Automação, IA e Tendências</h1>
          <p className="text-lg md:text-xl text-kore-branco mb-6 max-w-2xl">Conteúdo prático, cases e novidades para você dominar automação, integração e inteligência artificial.</p>
        </div>
      </section>

      {/* LISTA DE ARTIGOS */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {posts.map((post) => (
            <Link key={post.title} href={post.href} className="bg-kore-ciano/10 rounded-2xl p-8 shadow-xl flex flex-col hover:scale-105 transition-transform duration-200 border border-kore-ciano/30">
              <h2 className="text-xl font-bold mb-2 text-kore-destaque">{post.title}</h2>
              <p className="text-gray-200 mb-1">{post.summary}</p>
              <span className="text-gray-400 text-sm mb-2">{post.date} • {post.author}</span>
              <span className="underline font-semibold">Ler artigo</span>
            </Link>
          ))}
        </div>
      </section>

      {/* BLOCO INSTITUCIONAL */}
      <section className="max-w-4xl mx-auto px-4 py-8 bg-gradient-to-br from-kore-azul via-kore-cinza to-black rounded-2xl p-8 shadow-xl text-center">
        <h2 className="text-2xl font-bold text-kore-ciano mb-4">Por que acompanhar o Blog Kore?</h2>
        <p className="text-gray-200 mb-2">Aqui você encontra insights, tutoriais e tendências para transformar sua rotina com automação e IA.</p>
        <p className="text-ciano-eletrico underline hover:text-kore-destaque transition">Acesse conteúdos exclusivos, exemplos reais e dicas dos especialistas Kore.</p>
      </section>

      {/* DEPOIMENTO DE LEITOR */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-kore-ciano mb-6 text-center">O que dizem nossos leitores</h2>
        <div className="bg-kore-cinza/90 rounded-xl p-8 flex flex-col items-center shadow-xl">
          <Image src="/expertise/blog-images/leitor-exemplo.jpg" alt="Leitor satisfeito" width={64} height={64} className="rounded-full mb-4 shadow-lg border-2 border-kore-ciano" />
          <blockquote className="italic text-gray-200 text-center mb-2">“Apliquei as dicas do blog Kore e consegui criar integrações sem código para meu negócio!”</blockquote>
          <span className="font-bold text-kore-destaque">Patrícia Souza</span>
          <span className="text-gray-400 text-sm">Especialista em Marketing Digital</span>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full flex justify-center py-10 bg-gradient-to-t from-black via-kore-cinza to-transparent">
        <div className="bg-kore-ciano/90 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl max-w-2xl w-full">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-kore-azul mb-2">Quer receber novidades e dicas?</h3>
            <p className="text-kore-azul mb-2">Fale com a equipe Kore e entre para nossa lista VIP.</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center justify-center md:justify-start">
              <a href="mailto:koresoluciones@outlook.com" className="underline hover:text-kore-destaque">koresoluciones@outlook.com</a>
              <span className="hidden md:inline">|</span>
              <a href="tel:+5531991282843" className="underline hover:text-kore-destaque">+55 31 99128-2843</a>
            </div>
          </div>
          <Link href="/contato" className="cta-btn px-8 py-4 text-lg text-center">Entrar em Contato</Link>
        </div>
      </section>
    </main>
  );
}
