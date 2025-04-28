// Estrutura de página de serviços com subpáginas
import React from 'react'


export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-kore-azul via-kore-cinza to-black pb-0">
      <div className="max-w-5xl mx-auto px-4">

        {children}
      </div>
    </main>
  )
}
