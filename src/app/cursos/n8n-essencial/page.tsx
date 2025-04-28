"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function N8nEssencialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-kore-azul via-kore-cinza to-black pb-0">
      {/* HERO CURSO */}
      <section className="flex flex-col items-center justify-center text-center py-16 md:py-20 relative">
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
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-kore-ciano">n8n Essencial</h1>
          <p className="text-lg md:text-xl text-kore-branco mb-6 max-w-2xl">Automação do zero ao avançado. Aprenda a criar, integrar e otimizar fluxos com n8n.</p>
        </div>
      </section>

      {/* DETALHES DO CURSO */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-kore-ciano/10 rounded-2xl p-8 shadow-xl">
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li><span className="font-bold text-kore-destaque">Público-alvo:</span> Iniciantes, profissionais de TI, empresas</li>
            <li><span className="font-bold text-kore-destaque">Pré-requisitos:</span> Conhecimento básico de lógica</li>
            <li><span className="font-bold text-kore-destaque">Formato:</span> Vídeo aulas, exercícios práticos, suporte ao aluno</li>
          </ul>
          <h2 className="text-xl font-bold text-kore-destaque mb-2">Conteúdo Programático</h2>
          <ol className="list-decimal pl-6 text-gray-200 mb-4">
            <li>Introdução ao n8n e automação</li>
            <li>Instalação e primeiros passos</li>
            <li>Criação de workflows</li>
            <li>Integrações e exemplos práticos</li>
            <li>Boas práticas e dicas avançadas</li>
          </ol>
          <span className="text-magenta font-bold text-lg mb-2 block">R$ 399</span>
          <Link href="/contato" className="inline-block mt-4 px-6 py-2 rounded-full bg-ciano-eletrico text-azul-petroleo font-semibold hover:scale-105 transition-transform">Inscreva-se</Link>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black bg-opacity-40 rounded-xl p-6 flex flex-col items-center shadow-lg">
            <span className="font-bold text-ciano-eletrico mb-2">Do zero ao avançado</span>
            <span className="text-gray-300 text-center text-sm">Conteúdo progressivo e prático.</span>
          </div>
          <div className="bg-black bg-opacity-40 rounded-xl p-6 flex flex-col items-center shadow-lg">
            <span className="font-bold text-ciano-eletrico mb-2">Exercícios reais</span>
            <span className="text-gray-300 text-center text-sm">Aprenda resolvendo desafios do dia a dia.</span>
          </div>
          <div className="bg-black bg-opacity-40 rounded-xl p-6 flex flex-col items-center shadow-lg">
            <span className="font-bold text-ciano-eletrico mb-2">Suporte próximo</span>
            <span className="text-gray-300 text-center text-sm">Tire dúvidas direto com o instrutor.</span>
          </div>
        </div>
      </section>

      {/* DEPOIMENTO DE ALUNO */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-kore-ciano mb-6 text-center">O que dizem os alunos</h2>
        <div className="bg-kore-cinza/90 rounded-xl p-8 flex flex-col items-center shadow-xl">
          <Image src="/expertise/aluno-exemplo.jpg" alt="Aluno satisfeito" width={64} height={64} className="rounded-full mb-4 shadow-lg border-2 border-kore-ciano" />
          <blockquote className="italic text-gray-200 text-center mb-2">“O curso essencial da Kore me deu base para automatizar processos da empresa inteira!”</blockquote>
          <span className="font-bold text-kore-destaque">Lucas Martins</span>
          <span className="text-gray-400 text-sm">Analista de Processos</span>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full flex justify-center py-10 bg-gradient-to-t from-black via-kore-cinza to-transparent">
        <div className="bg-kore-ciano/90 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl max-w-2xl w-full">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-kore-azul mb-2">Quer começar sua jornada em automação?</h3>
            <p className="text-kore-azul mb-2">Fale com a equipe Kore e saiba qual curso é ideal para você.</p>
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
