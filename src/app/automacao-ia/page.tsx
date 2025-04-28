// Página de Automação com n8n e IA
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AutomacaoIaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-kore-azul via-kore-cinza to-black pb-0">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[45vh] py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none animate-fade-in">
          <svg width="100%" height="100%" viewBox="0 0 1440 500" fill="none" className="w-full h-full">
            <defs>
              <radialGradient id="g1" cx="50%" cy="50%" r="80%" fx="50%" fy="50%" gradientTransform="rotate(25)">
                <stop offset="0%" stopColor="#00cfd1" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0a1a2f" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="720" cy="250" rx="680" ry="220" fill="url(#g1)" />
            <circle cx="320" cy="120" r="40" fill="#a8ff04" opacity="0.06">
              <animate attributeName="r" values="40;60;40" dur="7s" repeatCount="indefinite"/>
            </circle>
            <circle cx="1100" cy="380" r="32" fill="#00fff7" opacity="0.08">
              <animate attributeName="r" values="32;55;32" dur="8s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 animate-fade-in">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="16" fill="#00cfd1"/><circle cx="32" cy="32" r="16" fill="#0a1a2f"/><path d="M32 18v8m0 12v8m-14-14h8m12 0h8" stroke="#a8ff04" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-kore-ciano animate-fade-in">Automação com n8n e IA</h1>
          <p className="text-xl md:text-2xl text-kore-branco mb-8 max-w-2xl animate-fade-in delay-100">Soluções inteligentes e sob medida para transformar processos em resultados reais.</p>
          <Link href="#cases" className="cta-btn px-6 py-3 text-base font-semibold rounded-full bg-kore-ciano text-black hover:bg-ciano-eletrico transition animate-fade-in delay-200">Veja Casos de Uso</Link>
        </div>
      </section>

      {/* CARDS DE CASOS DE USO */}
      <section id="cases" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-kore-destaque mb-10 text-center">Casos de Uso Reais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <span className="text-4xl">💬</span>,
              title: 'Atendimento Omnichannel',
              desc: 'Integração de WhatsApp, e-mail e CRM com IA para triagem automática e respostas inteligentes.',
              result: 'Redução de 70% no tempo de resposta.'
            },
            {
              icon: <span className="text-4xl">📄</span>,
              title: 'Extração de Dados',
              desc: 'Pipeline n8n+IA para extrair dados de PDFs, estruturar e enviar para dashboards.',
              result: 'Eliminação de tarefas manuais e relatórios em tempo real.'
            },
            {
              icon: <span className="text-4xl">📢</span>,
              title: 'Monitoramento de Redes',
              desc: 'Análise de sentimento em redes sociais e alertas automáticos para equipe via Slack.',
              result: 'Resposta proativa e reputação digital protegida.'
            }
          ].map((c, i) => (
            <div key={i} className="bg-kore-cinza/90 rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-[1.04] hover:shadow-2xl hover:bg-kore-ciano/10 transition-all duration-200 border border-transparent hover:border-kore-ciano">
              <div className="mb-4">{c.icon}</div>
              <h3 className="text-xl font-bold text-kore-ciano mb-2 text-center">{c.title}</h3>
              <p className="text-gray-200 text-center text-base mb-4 min-h-[56px]">{c.desc}</p>
              <span className="text-kore-destaque font-semibold text-sm mt-auto">{c.result}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LINHA DO TEMPO DE AUTOMAÇÃO */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-kore-ciano mb-8 text-center">Como funciona nossa automação?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {[
            {icon: '🔎', label: 'Diagnóstico'},
            {icon: '🔗', label: 'Integração'},
            {icon: '⚙️', label: 'Automação'},
            {icon: '📊', label: 'Monitoramento'},
            {icon: '🏆', label: 'Resultados'}
          ].map((step, idx, arr) => (
            <div key={step.label} className="flex flex-col items-center">
              <div className="text-3xl mb-2">{step.icon}</div>
              <span className="font-bold text-kore-ciano text-sm mb-1">{step.label}</span>
              {idx < arr.length - 1 && (
                <span className="hidden md:block text-3xl text-kore-ciano">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS ANIMADOS */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-kore-destaque mb-8 text-center">Por que automatizar com a Kore?</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            {icon: '⚡', label: 'Agilidade'},
            {icon: '🤖', label: 'Inteligência'},
            {icon: '🔒', label: 'Segurança'},
            {icon: '📈', label: 'Escalabilidade'},
            {icon: '💸', label: 'Redução de Custos'}
          ].map((b) => (
            <div key={b.label} className="bg-kore-ciano/10 rounded-lg p-6 text-center hover:scale-105 transition-transform duration-200">
              <span className="block text-3xl mb-2 animate-pulse-slow">{b.icon}</span>
              <span className="font-bold text-kore-ciano">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTO DE CLIENTE */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-kore-ciano mb-6 text-center">O que dizem nossos clientes</h2>
        <div className="bg-kore-cinza/90 rounded-xl p-8 flex flex-col items-center shadow-xl">
          
<Image src="/expertise/blog-images/cliente-exemplo.jpg" alt="Cliente satisfeito" width={64} height={64} className="rounded-full mb-4 shadow-lg border-2 border-kore-ciano" />
          <blockquote className="italic text-gray-200 text-center mb-2">&ldquo;A automação da Kore revolucionou nosso atendimento e reduziu custos drasticamente. Recomendo para qualquer empresa que quer crescer com tecnologia!&rdquo;</blockquote>
          <span className="font-bold text-kore-destaque">Patrícia Lima</span>
          <span className="text-gray-400 text-sm">Head de Operações, Empresa X</span>
        </div>
      </section>

      {/* CONTATO FIXO / CTA FINAL */}
      <section className="cta-footer w-full flex justify-center py-3 bg-gradient-to-t from-black via-kore-cinza to-transparent fixed bottom-0 left-0 z-30 transition-transform duration-500 ease-in-out group hover:translate-y-0 translate-y-[90%]">

        <div className="bg-kore-ciano/90 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-xl max-w-2xl w-full group-hover:opacity-100 opacity-90 transition-opacity duration-500">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-kore-azul mb-2">Pronto para automatizar?</h3>
            <p className="text-kore-azul mb-2">Fale com um especialista e descubra como a Kore pode transformar seu negócio.</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center justify-center md:justify-start">
              <a href="mailto:koresoluciones@outlook.com" className="underline hover:text-kore-destaque">koresoluciones@outlook.com</a>
              <span className="hidden md:inline">|</span>
              <a href="tel:+5531991282843" className="underline hover:text-kore-destaque">+55 31 99128-2843</a>
            </div>
          </div>
          <Link href="/contato" className="cta-btn px-8 py-4 text-lg text-center">Entrar em Contato</Link>
        </div>
      </section>
    </main>
  );
}
