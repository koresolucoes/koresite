// Página de Suporte
"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { supabase } from '../../utils/supabaseClient';
import Link from "next/link";

function SuporteForm() {
  const [status, setStatus] = useState<'idle'|'sucesso'|'erro'>('idle');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('idle');
    setLoading(true);
    const form = e.currentTarget;
    const nome = (form.nome as HTMLInputElement).value;
    const email = (form.email as HTMLInputElement).value;
    const empresa = (form.empresa as HTMLInputElement).value;
    const telefone = (form.telefone as HTMLInputElement).value;
    const assunto = (form.assunto as HTMLInputElement).value;
    const mensagem = (form.mensagem as HTMLTextAreaElement).value;
    const { error } = await supabase.from('chamados_suporte').insert([
      { nome, email, empresa, telefone, assunto, mensagem }
    ]);
    setLoading(false);
    if (error) {
      setStatus('erro');
    } else {
      setStatus('sucesso');
      form.reset();
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input required name="nome" placeholder="Nome" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kore-ciano" />
      <input required name="email" type="email" placeholder="E-mail" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kore-ciano" />
      <input name="empresa" placeholder="Empresa" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kore-ciano" />
      <input name="telefone" placeholder="Telefone" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kore-ciano" />
      <input required name="assunto" placeholder="Assunto" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kore-ciano" />
      <textarea required name="mensagem" placeholder="Descreva o problema" rows={4} className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kore-ciano" />
      <button type="submit" className="cta-btn mt-2 disabled:opacity-60" disabled={loading}>{loading ? 'Enviando...' : 'Enviar Chamado'}</button>
      {status === 'sucesso' && <span className="text-verde-lima font-semibold mt-2">Chamado enviado com sucesso!</span>}
      {status === 'erro' && <span className="text-magenta font-semibold mt-2">Erro ao enviar. Tente novamente.</span>}
    </form>
  );
}


export default function SuportePage() {
  // FAQ com acordeão
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    {
      q: "Como abrir um chamado de suporte?",
      a: "Preencha o formulário abaixo ou envie um e-mail detalhando o problema para suporte@kore.com.br. Nossa equipe responderá em até 2h úteis.",
    },
    {
      q: "Qual o horário de atendimento?",
      a: "Atendemos de segunda a sexta, das 8h às 18h (exceto feriados). Suporte emergencial 24/7 disponível para clientes com SLA.",
    },
    {
      q: "Como funciona o suporte emergencial?",
      a: "Ligue para +55 31 99128-2843 e mencione seu código de cliente. Atendimento prioritário para incidentes críticos.",
    },
    {
      q: "Quais informações devo enviar ao solicitar suporte?",
      a: "Descreva o problema, envie prints ou logs, e informe o nome da empresa e contato. Assim aceleramos a solução!",
    },
    {
      q: "Onde acompanho o status do meu chamado?",
      a: "Você receberá atualizações por e-mail. Também pode consultar pelo telefone de suporte ou WhatsApp empresarial.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-kore-azul via-kore-cinza to-black pb-0">
      {/* HERO SUPORTE */}
      <section className="flex flex-col items-center justify-center text-center py-16 md:py-24 relative">
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
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-kore-ciano">Suporte Técnico Kore</h1>
          <p className="text-lg md:text-xl text-kore-branco mb-6 max-w-2xl">Conte com especialistas para resolver dúvidas, incidentes e otimizar seu uso das nossas soluções.</p>
        </div>
      </section>

      {/* CANAIS DE CONTATO */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-kore-cinza/90 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-kore-destaque mb-2">Canais de Atendimento</h2>
            <ul className="text-gray-200 space-y-2">
              <li><b>E-mail:</b> <a href="mailto:suporte@kore.com.br" className="underline hover:text-kore-ciano">suporte@kore.com.br</a></li>
              <li><b>Telefone:</b> <a href="tel:+5531991282843" className="underline hover:text-kore-ciano">+55 31 99128-2843</a></li>
              <li><b>WhatsApp:</b> <a href="https://wa.me/5531991282843" className="underline hover:text-kore-ciano">Enviar mensagem</a></li>
            </ul>
            <div className="mt-4 text-sm text-gray-400">
              <b>Horário:</b> Seg a Sex, 8h-18h | Emergencial 24/7 para clientes com SLA
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-kore-ciano mb-2">Suporte Emergencial</h2>
            <p className="text-gray-300 mb-2">Para incidentes críticos fora do horário comercial, ligue para <a href="tel:+5531991282843" className="underline hover:text-kore-destaque">+55 31 99128-2843</a> e informe seu código de cliente.</p>
            <p className="text-gray-300">Atendimento prioritário para empresas com contrato ativo.</p>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE CHAMADO */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-kore-ciano/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-xl font-bold text-kore-ciano mb-4">Abrir Chamado</h2>
          <SuporteForm />
        </div>
      </section>

      {/* FAQ EXPANDIDO */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-kore-destaque mb-4">Perguntas Frequentes</h2>
        <div className="divide-y divide-kore-ciano/20 bg-kore-cinza/80 rounded-xl shadow-lg">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <button
                className="w-full text-left p-4 focus:outline-none hover:bg-kore-ciano/10 transition-colors flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span className="font-bold text-kore-ciano">{faq.q}</span>
                <span className="text-kore-destaque">{openFaq === i ? "-" : "+"}</span>
              </button>
              {openFaq === i && (
                <div className="p-4 pt-0 text-gray-300 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTO DE CLIENTE */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-kore-ciano mb-6 text-center">Experiência dos nossos clientes</h2>
        <div className="bg-kore-cinza/90 rounded-xl p-8 flex flex-col items-center shadow-xl">
          <Image src="/expertise/blog-images/cliente-exemplo2.jpg" alt="Cliente satisfeito" width={64} height={64} className="rounded-full mb-4 shadow-lg border-2 border-kore-ciano" />
          <blockquote className="italic text-gray-200 text-center mb-2">“O suporte da Kore foi rápido, atencioso e resolveu nosso problema em poucas horas. Excelente atendimento!”</blockquote>
          <span className="font-bold text-kore-destaque">Carlos Souza</span>
          <span className="text-gray-400 text-sm">TI, Empresa Y</span>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full flex justify-center py-10 bg-gradient-to-t from-black via-kore-cinza to-transparent">
        <div className="bg-kore-ciano/90 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl max-w-2xl w-full">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-kore-azul mb-2">Precisa de ajuda agora?</h3>
            <p className="text-kore-azul mb-2">Fale com nosso time ou abra um chamado. Estamos prontos para te atender!</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center justify-center md:justify-start">
              <a href="mailto:suporte@kore.com.br" className="underline hover:text-kore-destaque">suporte@kore.com.br</a>
              <span className="hidden md:inline">|</span>
              <a href="tel:+5531991282843" className="underline hover:text-kore-destaque">+55 31 99128-2843</a>
            </div>
          </div>
          <Link href="/contato" className="cta-btn px-8 py-4 text-lg text-center">Abrir Chamado</Link>
        </div>
      </section>
    </main>
  );
}

