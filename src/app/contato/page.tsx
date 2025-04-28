'use client'
// Página de contato detalhada
import React, { useState } from 'react'
import { supabase } from '../../utils/supabaseClient'

export default function ContatoPage() {
  const [status, setStatus] = useState<'idle'|'sucesso'|'erro'>('idle')
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-xl mx-auto bg-azul-petroleo rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-ciano-eletrico mb-4">Fale Conosco</h1>
        <form className="flex flex-col gap-4" onSubmit={async e => {
          e.preventDefault();
          const form = e.currentTarget;
          const nome = (form.nome as HTMLInputElement).value;
          const email = (form.email as HTMLInputElement).value;
          const telefone = (form.telefone as HTMLInputElement).value;
          const mensagem = (form.mensagem as HTMLTextAreaElement).value;
          setStatus('idle');
          try {
            const { error } = await supabase.from('contatos').insert([{ nome, email, telefone, mensagem }]);
            if (error) {
              setStatus('erro');
            } else {
              setStatus('sucesso');
              form.reset();
            }
          } catch {
            setStatus('erro');
          }
        }}>
          <input required name="nome" type="text" placeholder="Nome" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kore-ciano" />
          <input required name="email" type="email" placeholder="E-mail" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kore-ciano" />
          <input name="telefone" type="text" placeholder="Telefone" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kore-ciano" />
          <textarea required name="mensagem" placeholder="Mensagem" rows={4} className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kore-ciano" />
          <button type="submit" className="cta-btn mt-2 disabled:opacity-60">Enviar</button>
          {status === 'sucesso' && <span className="text-verde-lima font-semibold mt-2">Mensagem enviada com sucesso!</span>}
          {status === 'erro' && <span className="text-magenta font-semibold mt-2">Erro ao enviar. Tente novamente.</span>}
        </form>
        <div className="mt-8 text-gray-200">
          <p><b>Email:</b> koresoluciones@outlook.com</p>
          <p><b>Telefone:</b> +55 31 99128-2843</p>
          {/* Mapa interativo pode ser adicionado aqui com iframe do Google Maps */}
        </div>
      </div>
    </main>
  )
}
