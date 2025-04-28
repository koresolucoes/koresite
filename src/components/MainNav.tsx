'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center py-4 px-2 bg-black bg-opacity-80 border-b border-ciano-eletrico z-30 sticky top-0">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/** Prefixo manual para funcionar em qualquer ambiente, inclusive GitHub Pages */}
          <Image src="/kore-logo.png" alt="Logo Kore" width={40} height={40} unoptimized />
          <span className="text-2xl font-bold text-white tracking-wide">Kore</span>
        </Link>

        <ul className="hidden md:flex gap-2 flex-wrap justify-center items-center">
          <li><Link href="/blog" className="mainnav-btn">Blog</Link></li>
          <li><Link href="/news" className="mainnav-btn">Notícias</Link></li>
          <li><Link href="/servicos" className="mainnav-btn">Serviços</Link></li>
          <li><Link href="/cursos" className="mainnav-btn">Cursos</Link></li>
          <li><Link href="/sobre" className="mainnav-btn">Sobre</Link></li>
          <li><Link href="/contato" className="mainnav-btn">Contato</Link></li>
        </ul>

        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-kore-ciano"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-7 h-1 bg-kore-ciano rounded transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-7 h-1 bg-kore-ciano rounded my-1 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-7 h-1 bg-kore-ciano rounded transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-80 flex flex-col items-center justify-start pt-24 md:hidden animate-fade-in">
          <button
            className="absolute top-6 right-6 text-ciano-eletrico text-3xl focus:outline-none"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
          <ul className="flex flex-col gap-6 w-full items-center">
            {['blog', 'news', 'servicos', 'cursos', 'sobre', 'contato'].map((item) => (
              <li key={item} className="w-full flex justify-center">
                <Link
                  href={`/${item}`}
                  onClick={() => setOpen(false)}
                  className="mainnav-btn w-4/5 text-center"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
