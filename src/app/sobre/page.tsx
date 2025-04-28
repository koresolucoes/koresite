"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-kore-azul via-kore-cinza to-black pb-0">
      {/* HERO SOBRE */}
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
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-kore-ciano">Sobre a Kore</h1>
          <p className="text-lg md:text-xl text-kore-branco mb-6 max-w-2xl">Tecnologia, pessoas e propósito: conheça quem somos e como impulsionamos empresas com automação inteligente.</p>
        </div>
      </section>

      {/* MISSÃO, VISÃO, VALORES */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-kore-ciano/10 rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <h2 className="text-xl font-bold text-kore-destaque mb-2">Missão</h2>
          <p className="text-gray-200 text-center">Impulsionar empresas com automação inteligente e acessível, promovendo inovação e eficiência.</p>
        </div>
        <div className="bg-kore-ciano/10 rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <h2 className="text-xl font-bold text-kore-destaque mb-2">Visão</h2>
          <p className="text-gray-200 text-center">Ser referência nacional em automação de processos com n8n e integração de sistemas.</p>
        </div>
        <div className="bg-kore-ciano/10 rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <h2 className="text-xl font-bold text-kore-destaque mb-2">Valores</h2>
          <ul className="list-disc pl-6 text-gray-300 text-left">
            <li>Transparência</li>
            <li>Inovação</li>
            <li>Foco no cliente</li>
            <li>Ética e responsabilidade</li>
          </ul>
        </div>
      </section>

      {/* BLOCO INSTITUCIONAL */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-kore-cinza/90 rounded-2xl p-8 shadow-xl text-center">
          <h2 className="text-2xl font-bold text-kore-ciano mb-4">Quem somos</h2>
          <p className="text-gray-200 mb-2">A Kore nasceu da paixão por tecnologia, automação e educação. Unimos experiência prática em n8n, integração de sistemas e inteligência artificial para transformar o dia a dia de empresas de todos os portes.</p>
          <p className="text-gray-200">Acreditamos em inovação acessível, atendimento humano e resultados concretos.</p>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-kore-destaque mb-8 text-center">Equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black bg-opacity-40 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-200">
            <Image src="/expertise/blog-images/luciano-avatar.jpg" alt="Luciano Gutierrez" width={80} height={80} className="w-20 h-20 rounded-full mb-3 border-2 border-kore-ciano shadow" />
            <span className="font-bold text-ciano-eletrico">Luciano Gutierrez</span>
            <span className="text-gray-300 mb-1">Especialista em n8n</span>
            <span className="text-xs text-gray-400">Automação & Integração</span>
          </div>
          <div className="bg-black bg-opacity-40 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-200">
            <Image src="/expertise/blog-images/fabricio-avatar.jpg" alt="Fabricio Gonçalves" width={80} height={80} className="w-20 h-20 rounded-full mb-3 border-2 border-kore-ciano shadow" />
            <span className="font-bold text-ciano-eletrico">Fabricio Gonçalves</span>
            <span className="text-gray-300 mb-1">Instrutor & Suporte</span>
            <span className="text-xs text-gray-400">Educação & Atendimento</span>
          </div>
          <div className="bg-black bg-opacity-40 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-200">
            <Image src="/expertise/blog-images/beatriz-avatar.jpg" alt="Beatriz Covelo" width={80} height={80} className="w-20 h-20 rounded-full mb-3 border-2 border-kore-ciano shadow" />
            <span className="font-bold text-ciano-eletrico">Beatriz Covelo</span>
            <span className="text-gray-300 mb-1">Líder de Marketing e Vendas</span>
            <span className="text-xs text-gray-400">Estratégia & Relacionamento</span>
          </div>
        </div>
      </section>

      {/* DEPOIMENTO DE CLIENTE */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-kore-ciano mb-6 text-center">O que dizem sobre a Kore</h2>
        <div className="bg-kore-cinza/90 rounded-xl p-8 flex flex-col items-center shadow-xl">
          <Image src="/expertise/blog-images/cliente-exemplo4.jpg" alt="Cliente satisfeito" width={64} height={64} className="rounded-full mb-4 shadow-lg border-2 border-kore-ciano" />
          <blockquote className="italic text-gray-200 text-center mb-2">“A Kore superou nossas expectativas, entregando automação e suporte de altíssimo nível!”</blockquote>
          <span className="font-bold text-kore-destaque">Mariana Reis</span>
          <span className="text-gray-400 text-sm">Gestora de Projetos, Empresa Z</span>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full flex justify-center py-10 bg-gradient-to-t from-black via-kore-cinza to-transparent">
        <div className="bg-kore-ciano/90 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl max-w-2xl w-full">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-kore-azul mb-2">Vamos automatizar juntos?</h3>
            <p className="text-kore-azul mb-2">Fale com a equipe Kore e descubra como podemos transformar seu negócio.</p>
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

