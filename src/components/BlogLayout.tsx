'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogNav from './BlogNav';
import BlogComments from '@/components/BlogComments';

interface Suggestion {
  href: string;
  title: string;
}

interface BlogLayoutProps {
  title: string;
  image: string;
  date: string;
  author: string;
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
  suggestions?: Suggestion[];
  postSlug: string;
  children: React.ReactNode;
}

export default function BlogLayout({
  title,
  image,
  date,
  author,
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
  suggestions = [],
  postSlug,
  children,
}: BlogLayoutProps) {
  // Não concatene manualmente basePath! O Next.js já faz isso automaticamente.
  // Use os hrefs e srcs relativos à raiz do app.
  const suggestionsWithBase = suggestions;

  return (
    <main className="min-h-screen bg-gradient-to-br from-kore-azul via-kore-cinza to-black pb-0">
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
            <ellipse cx="720" cy="200" rx="680" ry="160" fill="url(#g1)" />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center w-full max-w-3xl px-4">
          <Link href="/blog" className="inline-block mb-4 text-ciano-eletrico underline hover:text-kore-destaque transition">← Voltar para o Blog</Link>
          <Image src={image} alt={title} width={720} height={400} className="rounded-2xl mb-6 w-full object-cover max-h-72 shadow-lg" unoptimized />
          <h1 className="text-3xl md:text-4xl font-black text-kore-ciano mb-4">{title}</h1>
          <span className="text-gray-400 text-xs mb-2 block">{date} — {author}</span>
        </div>
      </section>

      {/* CONTEÚDO DO ARTIGO */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        {children}
        <BlogNav
          prevHref={prevHref}
          prevLabel={prevLabel}
          nextHref={nextHref}
          nextLabel={nextLabel}
        />
      </section>

      {/* SUGESTÕES DE LEITURA */}
      {suggestionsWithBase.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 pb-8">
          <div className="bg-kore-ciano/10 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl text-kore-destaque font-bold mb-2">Sugestões de leitura</h3>
            <ul className="list-disc pl-6">
              {suggestionsWithBase.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="underline text-ciano-eletrico hover:text-kore-destaque transition">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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

      {/* COMENTÁRIOS */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <BlogComments postSlug={postSlug} />
      </section>
    </main>
  );
}
