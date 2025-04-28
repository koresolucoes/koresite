// Footer.tsx
// Rodapé com navegação, contato e direitos
import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-90 py-8 text-gray-400 text-sm mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6 mb-2 md:mb-0">
          <Link href="/" className="hover:text-ciano-eletrico">Início</Link>
          <Link href="/servicos" className="hover:text-ciano-eletrico">Serviços</Link>
          <Link href="/cursos" className="hover:text-ciano-eletrico">Cursos</Link>
          <Link href="/sobre" className="hover:text-ciano-eletrico">Sobre Nós</Link>
          <Link href="/blog" className="hover:text-ciano-eletrico">Blog</Link>
          <Link href="/news" className="hover:text-ciano-eletrico">Notícias</Link>
          <Link href="/contato" className="hover:text-ciano-eletrico">Contato</Link>
          <Link href="/politica-de-privacidade" className="hover:text-ciano-eletrico">Política de Privacidade</Link>
          <Link href="/termos-de-uso" className="hover:text-ciano-eletrico">Termos de Uso</Link>
        </div>
        <div>
          <span> {new Date().getFullYear()} Kore. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
