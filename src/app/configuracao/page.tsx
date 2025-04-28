"use client";
// Página de Configuração
import React from "react";

import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

export default function ConfiguracaoPage() {
  const [status, setStatus] = useState<'idle'|'sucesso'|'erro'>('idle');
  return (
    <main className="section">
      <h1 className="text-3xl md:text-5xl font-bold text-kore-ciano mb-6">Configuração</h1>
      <p className="text-lg text-gray-200 mb-8 max-w-2xl">
        Detalhamento de etapas, benefícios e formulário de contato para configuração personalizada de automações com n8n e IA.
      </p>
      <form className="bg-kore-cinza/80 rounded-xl p-8 max-w-lg mx-auto flex flex-col gap-4 shadow-lg" onSubmit={async e => {
        e.preventDefault();
        const form = e.currentTarget;
        const nome = (form.nome as HTMLInputElement).value;
        const email = (form.email as HTMLInputElement).value;
        const descricao = (form.descricao as HTMLTextAreaElement).value;
        setStatus('idle');
        try {
          const { error } = await supabase.from('orcamentos').insert([{ nome, email, descricao }]);
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
        <input name="nome" type="text" placeholder="Nome" className="p-3 rounded bg-kore-branco/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kore-ciano" required />
        <input name="email" type="email" placeholder="E-mail" className="p-3 rounded bg-kore-branco/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kore-ciano" required />
        <textarea name="descricao" placeholder="Descreva sua necessidade" rows={4} className="p-3 rounded bg-kore-branco/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kore-ciano" required />
        <button type="submit" className="cta-btn mt-2">Solicitar Orçamento</button>
        {status === 'sucesso' && <span className="text-verde-lima font-semibold mt-2">Solicitação enviada com sucesso!</span>}
        {status === 'erro' && <span className="text-magenta font-semibold mt-2">Erro ao enviar. Tente novamente.</span>}
      </form>
    </main>
  );
}
