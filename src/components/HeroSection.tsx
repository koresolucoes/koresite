// HeroSection.tsx
// Seção hero com título, subtítulo, animação temática e CTA
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen py-16 md:py-0 bg-gradient-to-br from-kore-azul via-kore-cinza to-black relative overflow-hidden">
      {/* Animação de partículas leves no fundo usando SVG */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 animate-fade-in">
        <svg width="100%" height="100%" viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="200" cy="200" r="18" fill="#00fff7" opacity="0.18">
            <animate attributeName="r" values="18;32;18" dur="6s" repeatCount="indefinite"/>
          </circle>
          <circle cx="1200" cy="400" r="22" fill="#a8ff04" opacity="0.13">
            <animate attributeName="r" values="22;38;22" dur="7s" repeatCount="indefinite"/>
          </circle>
          <circle cx="700" cy="100" r="14" fill="#ff00c8" opacity="0.10">
            <animate attributeName="r" values="14;26;14" dur="5.5s" repeatCount="indefinite"/>
          </circle>
          <polyline points="200,200 700,100 1200,400" stroke="#00fff7" strokeWidth="3" strokeDasharray="18" opacity="0.10"/>
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-24">
      <Image src="/expertise/kore-logo.png" alt="Logo Kore" width={250} height={250} unoptimized />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-kore-ciano animate-fade-in">
          Automação Inteligente com n8n e IA
        </h1>
        <p className="text-lg md:text-2xl text-kore-branco mb-10 max-w-2xl animate-fade-in delay-100">
          Cursos, configuração, suporte e soluções sob medida
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
          <Link href="/cursos" className="cta-btn">Explore Nossos Cursos</Link>
          <Link href="/automacao-ia" className="cta-btn bg-kore-destaque text-kore-azul hover:brightness-110">Saiba Mais Sobre Automação</Link>
        </div>
      </div>
    </section>
  );
}

