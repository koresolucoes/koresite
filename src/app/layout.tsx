import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kore | Automação Inteligente',
  description: 'Especialistas em automação de processos. Consultoria, implementação, cursos e suporte para empresas.',
  keywords: ['kore', 'automação', 'consultoria', 'integração', 'cursos', 'suporte'],
  openGraph: {
    title: 'Kore | Automação Inteligente',
    description: 'Especialistas em automação de processos. Consultoria, implementação, cursos e suporte para empresas.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seudominio.com',
    siteName: 'Kore',
  },
  robots: 'index, follow',
}

import MainNav from '@/components/MainNav';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-azul-petroleo text-white min-h-screen`}>
        <MainNav />
        {children}
          <Footer />
      </body>
    </html>
  )
}
