'use client'
// QuickContactSection.tsx
// Formulário de contato rápido
import React, { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function QuickContactSection() {
  const [status, setStatus] = useState<'idle'|'sucesso'|'erro'>('idle')

  return (
    <section id="contato" className="py-16 bg-black bg-opacity-80">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-8 text-center">Contato Rápido</h2>
        <form className="flex flex-col gap-4" onSubmit={async e => {
            e.preventDefault();
            const form = e.currentTarget;
            const nome = (form.nome as HTMLInputElement).value;
            const email = (form.email as HTMLInputElement).value;
            const telefone = (form.telefone as HTMLInputElement).value;
            const mensagem = (form.mensagem as HTMLTextAreaElement).value;
            setStatus('idle');
            const { error } = await supabase.from('contatos').insert([{ nome, email, telefone, mensagem }]);
            if (error) {
              setStatus('erro');
            } else {
              setStatus('sucesso');
              form.reset();
            }
          }}>
          <input required name="nome" placeholder="Nome" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ciano-eletrico" />
          <input required name="email" type="email" placeholder="E-mail" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ciano-eletrico" />
          <input name="telefone" placeholder="Telefone" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ciano-eletrico" />
          <textarea required name="mensagem" placeholder="Mensagem" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ciano-eletrico" rows={4} />
          <button type="submit" className="px-6 py-3 rounded-full bg-ciano-eletrico text-azul-petroleo font-semibold shadow-lg hover:scale-105 transition-transform">Enviar</button>
          {status === 'sucesso' && <span className="text-verde-lima font-semibold mt-2">Mensagem enviada com sucesso!</span>}
          {status === 'erro' && <span className="text-magenta font-semibold mt-2">Erro ao enviar. Tente novamente.</span>}
        </form>
      </div>
    </section>
  )
}
