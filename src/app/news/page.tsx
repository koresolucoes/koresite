"use client";
import React from 'react';

export default function NewsPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-kore-azul via-kore-cinza to-black pb-0">
        {/* HERO */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-[45vh] py-16 md:py-28 overflow-hidden">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-kore-ciano">Notícias e Atualizações</h1>
          <p className="text-xl md:text-2xl text-kore-branco mb-8 max-w-2xl">Fique por dentro dos avanços do GPT-5 e novidades em IA.</p>
        </section>
        <section id="slides" className="max-w-6xl mx-auto px-4 py-16 space-y-12">
          {/* Slide 1 */}
          <div className="relative slide flex flex-col items-center justify-center p-16 overflow-hidden">
            <div className="network-bg absolute inset-0 opacity-10" />
            <div className="ripple absolute" style={{ width: '300px', height: '300px', top: '10%', left: '10%' }} />
            <div className="ripple absolute" style={{ width: '200px', height: '200px', bottom: '20%', right: '15%' }} />
            <div className="z-10 text-center mb-16">
              <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Avanços em Modelos de Linguagem:
              </h1>
              <h2 className="text-4xl font-bold text-white mb-2">O que esperar do GPT-5</h2>
              <p className="text-xl text-gray-400">Artigo Analítico - Abril 2025</p>
            </div>

            <div className="z-10 max-w-3xl text-center space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  O GPT-5 representa a próxima evolução em modelos de linguagem da OpenAI, 
                  unificando tecnologias avançadas em um único sistema integrado e adaptativo.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-white/5 rounded-lg p-4">
                  <i className="fas fa-brain text-2xl text-blue-400 mb-2" />
                  <p className="text-sm">Sistema Unificado</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <i className="fas fa-network-wired text-2xl text-teal-400 mb-2" />
                  <p className="text-sm">Tecnologia Integrada</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <i className="fas fa-rocket text-2xl text-purple-400 mb-2" />
                  <p className="text-sm">Lançamento em 2025</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 opacity-50">
              <img src="/openai-logo.png" alt="OpenAI Logo" className="h-8" />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="relative slide flex flex-col p-12 overflow-hidden">
            <div className="glow absolute" style={{ top: '20%', left: '30%' }} />
            <div className="glow absolute" style={{ bottom: '20%', right: '20%' }} />

            <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Principais Avanços do GPT-5
            </h1>

            <div className="grid grid-cols-2 gap-8 mt-4">
              <div className="card rounded-xl p-6 flex items-start space-x-4">
                <div className="rounded-full bg-blue-500/20 p-3">
                  <i className="fas fa-code-branch text-2xl text-blue-400"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integração de Modelos</h3>
                  <p className="text-gray-300">Unificação das séries GPT e modelos "o" em um único sistema integrado e adaptativo</p>
                </div>
              </div>

              <div className="card rounded-xl p-6 flex items-start space-x-4">
                <div className="rounded-full bg-purple-500/20 p-3">
                  <i className="fas fa-microchip text-2xl text-purple-400"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Arquitetura Aprimorada</h3>
                  <p className="text-gray-300">Processamento mais rápido e eficiente com nova arquitetura neural otimizada</p>
                </div>
              </div>

              <div className="card rounded-xl p-6 flex items-start space-x-4">
                <div className="rounded-full bg-teal-500/20 p-3">
                  <i className="fas fa-layer-group text-2xl text-teal-400"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Capacidades Multimodais</h3>
                  <p className="text-gray-300">Processamento avançado de texto, imagem, vídeo e voz em um único modelo</p>
                </div>
              </div>

              <div className="card rounded-xl p-6 flex items-start space-x-4">
                <div className="rounded-full bg-green-500/20 p-3">
                  <i className="fas fa-brain text-2xl text-green-400"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Raciocínio Aprimorado</h3>
                  <p className="text-gray-300">Raciocínio lógico mais profundo e estruturado com melhor compreensão contextual</p>
                </div>
              </div>
            </div>

            <div className="mt-8 card rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Principais Melhorias</h3>
                <div className="flex space-x-4">
                  <span className="flex items-center">
                    <i className="fas fa-check-circle text-green-400 mr-2"></i>
                    <span className="text-sm text-gray-300">Adaptação Contextual</span>
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-check-circle text-green-400 mr-2"></i>
                    <span className="text-sm text-gray-300">Processamento em Tempo Real</span>
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-check-circle text-green-400 mr-2"></i>
                    <span className="text-sm text-gray-300">Integração com Sistemas Existentes</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="relative slide p-12 overflow-hidden">
            <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              GPT-5 vs. GPT-4: O que Mudou?
            </h1>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="comparison-card rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-blue-500/20 p-3">
                    <i className="fas fa-brain text-2xl text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Capacidade de Raciocínio</h3>
                </div>
                <p className="text-gray-300 mb-4">Raciocínio mais profundo e estruturado, com melhor compreensão contextual</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>GPT-4</span><span>70%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-blue-400" style={{ width: '70%' }} />
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>GPT-5</span><span>95%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-blue-400" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>
              <div className="comparison-card rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-purple-500/20 p-3">
                    <i className="fas fa-bullseye text-2xl text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Precisão e Acurácia</h3>
                </div>
                <p className="text-gray-300 mb-4">Maior precisão nas respostas e redução de alucinações</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>GPT-4</span><span>75%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-purple-400" style={{ width: '75%' }} />
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>GPT-5</span><span>98%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-purple-400" style={{ width: '98%' }} />
                  </div>
                </div>
              </div>
              <div className="comparison-card rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-green-500/20 p-3">
                    <i className="fas fa-layer-group text-2xl text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Multimodalidade</h3>
                </div>
                <p className="text-gray-300 mb-4">Processamento integrado de texto, imagem, vídeo e voz</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>GPT-4</span><span>60%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-green-400" style={{ width: '60%' }} />
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>GPT-5</span><span>90%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-green-400" style={{ width: '90%' }} />
                  </div>
                </div>
              </div>
              <div className="comparison-card rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-teal-500/20 p-3">
                    <i className="fas fa-shield-alt text-2xl text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Confiabilidade e Ética</h3>
                </div>
                <p className="text-gray-300 mb-4">Maior consistência e redução de vieses nas respostas</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>GPT-4</span><span>65%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-teal-400" style={{ width: '65%' }} />
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>GPT-5</span><span>95%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-teal-400" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="comparison-card rounded-xl p-4 text-center">
              <p className="text-blue-400 font-semibold">
                <i className="fas fa-info-circle mr-2" />
                O GPT-5 representa um avanço significativo em todas as métricas principais,
                com melhorias médias de 30% em relação ao seu antecessor
              </p>
            </div>
          </div>
          {/* Slide 4 */}
          <div className="relative slide p-12 overflow-hidden">
            <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Capacidades e Aplicações do GPT-5
            </h1>

            <div className="grid grid-cols-2 gap-8">
              {/* Capacidades Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <i className="fas fa-cogs text-blue-400 mr-3"></i>
                  Capacidades Principais
                </h2>
                <div className="space-y-4">
                  <div className="feature-card rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <div className="rounded-full bg-blue-500/20 p-2 mr-3">
                        <i className="fas fa-brain text-blue-400"></i>
                      </div>
                      <h3 className="font-semibold">Processamento Ultrarrealista</h3>
                    </div>
                    <p className="text-sm text-gray-300">Compreensão e geração de linguagem natural em nível humano</p>
                  </div>

                  <div className="feature-card rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <div className="rounded-full bg-purple-500/20 p-2 mr-3">
                        <i className="fas fa-project-diagram text-purple-400"></i>
                      </div>
                      <h3 className="font-semibold">Compreensão Contextual</h3>
                    </div>
                    <p className="text-sm text-gray-300">Análise profunda de contexto e intenção do usuário</p>
                  </div>

                  <div className="feature-card rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <div className="rounded-full bg-teal-500/20 p-2 mr-3">
                        <i className="fas fa-layer-group text-teal-400"></i>
                      </div>
                      <h3 className="font-semibold">Criação Multimídia</h3>
                    </div>
                    <p className="text-sm text-gray-300">Geração integrada de texto, imagem e áudio</p>
                  </div>
                </div>
              </div>

              {/* Use Cases Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <i className="fas fa-tasks text-teal-400 mr-3"></i>
                  Casos de Uso
                </h2>
                <div className="space-y-4">
                  <div className="use-case-card border-blue-400 rounded-r-xl p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Assistência Profissional</h3>
                      <i className="fas fa-briefcase text-blue-400"></i>
                    </div>
                    <p className="text-sm text-gray-300 mt-2">Suporte avançado em tarefas complexas e tomada de decisão</p>
                  </div>

                  <div className="use-case-card border-purple-400 rounded-r-xl p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Atendimento ao Cliente</h3>
                      <i className="fas fa-headset text-purple-400"></i>
                    </div>
                    <p className="text-sm text-gray-300 mt-2">Suporte técnico automatizado com compreensão contextual</p>
                  </div>

                  <div className="use-case-card border-teal-400 rounded-r-xl p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Pesquisa e Desenvolvimento</h3>
                      <i className="fas fa-flask text-teal-400"></i>
                    </div>
                    <p className="text-sm text-gray-300 mt-2">Análise de dados e aceleração de descobertas científicas</p>
                  </div>

                  <div className="use-case-card border-green-400 rounded-r-xl p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Educação Adaptativa</h3>
                      <i className="fas fa-graduation-cap text-green-400"></i>
                    </div>
                    <p className="text-sm text-gray-300 mt-2">Tutoria personalizada e materiais didáticos adaptados</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 feature-card rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-lightbulb text-yellow-400 mr-3"></i>
                  <span className="font-semibold">Potencial de Impacto</span>
                </div>
                <div className="flex space-x-4">
                  <span className="text-sm text-gray-300">Transformação Digital</span>
                  <span className="text-sm text-gray-300">Inovação Contínua</span>
                  <span className="text-sm text-gray-300">Automação Inteligente</span>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 5 */}
          <div className="relative slide p-12 overflow-hidden">
            <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Impacto e Implicações Futuras
            </h1>

            <div className="grid grid-cols-3 gap-8">
              {/* Mercado de Trabalho */}
              <div className="impact-card rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="rounded-full bg-blue-500/20 p-3">
                    <i className="fas fa-briefcase text-2xl text-blue-400"></i>
                  </div>
                  <h2 className="text-xl font-semibold">Mercado de Trabalho</h2>
                </div>
                <div className="relative pl-6 space-y-4">
                  <div className="timeline-line"></div>
                  <div className="relative z-10 flex items-center">
                    <div className="timeline-dot bg-blue-400"></div>
                    <p className="ml-4 text-sm text-gray-300">Automação de tarefas cognitivas complexas</p>
                  </div>
                  <div className="relative z-10 flex items-center">
                    <div className="timeline-dot bg-blue-400"></div>
                    <p className="ml-4 text-sm text-gray-300">Surgimento de novas especializações em IA</p>
                  </div>
                  <div className="relative z-10 flex items-center">
                    <div className="timeline-dot bg-blue-400"></div>
                    <p className="ml-4 text-sm text-gray-300">Aumento de produtividade em análise de dados</p>
                  </div>
                </div>
              </div>

              {/* Transformações Tecnológicas */}
              <div className="impact-card rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="rounded-full bg-purple-500/20 p-3">
                    <i className="fas fa-microchip text-2xl text-purple-400"></i>
                  </div>
                  <h2 className="text-xl font-semibold">Avanços Tecnológicos</h2>
                </div>
                <div className="relative pl-6 space-y-4">
                  <div className="timeline-line"></div>
                  <div className="relative z-10 flex items-center">
                    <div className="timeline-dot bg-purple-400"></div>
                    <p className="ml-4 text-sm text-gray-300">Aceleração da inovação em diversos campos</p>
                  </div>
                  <div className="relative z-10 flex items-center">
                    <div className="timeline-dot bg-purple-400"></div>
                    <p className="ml-4 text-sm text-gray-300">Sistemas de IA mais integrados e adaptativos</p>
                  </div>
                  <div className="relative z-10 flex items-center">
                    <div className="timeline-dot bg-purple-400"></div>
                    <p className="ml-4 text-sm text-gray-300">Evolução dos modelos multimodais</p>
                  </div>
                </div>
              </div>

              {/* Considerações Éticas */}
              <div className="impact-card rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="rounded-full bg-teal-500/20 p-3">
                    <i className="fas fa-balance-scale text-2xl text-teal-400"></i>
                  </div>
                  <h2 className="text-xl font-semibold">Aspectos Éticos</h2>
                </div>
                <div className="relative pl-6 space-y-4">
                  <div className="timeline-line"></div>
                  <div className="relative z-10 flex items-center">
                    <div className="timeline-dot bg-teal-400"></div>
                    <p className="ml-4 text-sm text-gray-300">Governança e regulamentação da IA</p>
                  </div>
                  <div className="relative z-10 flex items-center">
                    <div className="timeline-dot bg-teal-400"></div>
                    <p className="ml-4 text-sm text-gray-300">Privacidade e segurança de dados</p>
                  </div>
                  <div className="relative z-10 flex items-center">
                    <div className="timeline-dot bg-teal-400"></div>
                    <p className="ml-4 text-sm text-gray-300">Democratização do acesso à tecnologia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 impact-card rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-chart-line text-2xl text-green-400"></i>
                  <h3 className="text-lg font-semibold">Tendências Futuras</h3>
                </div>
                <div className="flex space-x-6">
                  <span className="flex items-center">
                    <i className="fas fa-robot text-blue-400 mr-2"></i>
                    <span className="text-sm text-gray-300">Automação Avançada</span>
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-brain text-purple-400 mr-2"></i>
                    <span className="text-sm text-gray-300">IA Cognitiva</span>
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-shield-alt text-teal-400 mr-2"></i>
                    <span className="text-sm text-gray-300">Segurança Reforçada</span>
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-4 text-center">
                O GPT-5 marca o início de uma nova era na interação homem-máquina,
                redefinindo os limites da inteligência artificial e seu impacto na sociedade
              </p>
            </div>
          </div>
          {/* Slide 6 */}
          <div className="relative slide p-12 overflow-hidden">
            <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Perspectivas e Reflexões
            </h1>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="conclusion-card rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <i className="fas fa-lightbulb text-yellow-400 mr-3"></i>
                  Principais Conclusões
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                    <p className="text-gray-300">Unificação de tecnologias em um único sistema adaptativo e eficiente</p>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                    <p className="text-gray-300">Melhorias significativas em precisão, raciocínio e capacidades multimodais</p>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                    <p className="text-gray-300">Potencial transformador para diversos setores e aplicações</p>
                  </li>
                </ul>
              </div>

              <div className="conclusion-card rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <i className="fas fa-forward text-purple-400 mr-3"></i>
                  Próximos Passos
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-purple-400 mt-1 mr-3"></i>
                    <p className="text-gray-300">Preparação de infraestrutura e equipes para adoção do GPT-5</p>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-purple-400 mt-1 mr-3"></i>
                    <p className="text-gray-300">Desenvolvimento de estratégias para integração com sistemas existentes</p>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-purple-400 mt-1 mr-3"></i>
                    <p className="text-gray-300">Estabelecimento de diretrizes éticas e de governança</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="conclusion-card rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-quote-left text-2xl text-blue-400 mr-3"></i>
                <h2 className="text-xl font-semibold">Mensagem Final</h2>
                <i className="fas fa-quote-right text-2xl text-blue-400 ml-3"></i>
              </div>
              <p className="text-center text-lg text-gray-300 leading-relaxed pulse">
                O GPT-5 representa não apenas um avanço incremental, mas uma 
                <span className="highlight-text font-semibold">mudança de paradigma</span>
                na forma como interagimos com a inteligência artificial
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="conclusion-card rounded-xl p-4 text-center">
                <i className="fas fa-book-reader text-2xl text-blue-400 mb-2"></i>
                <p className="text-sm text-gray-300">Recursos Adicionais</p>
              </div>
              <div className="conclusion-card rounded-xl p-4 text-center">
                <i className="fas fa-envelope text-2xl text-purple-400 mb-2"></i>
                <p className="text-sm text-gray-300">Contato</p>
              </div>
              <div className="conclusion-card rounded-xl p-4 text-center">
                <i className="fas fa-globe text-2xl text-teal-400 mb-2"></i>
                <p className="text-sm text-gray-300">Website</p>
              </div>
            </div>
          </div>
          {/* Próximos slides serão adicionados aqui */}
        </section>
      </main>
      <style jsx global>{`
        .slide {
          width: 1280px;
          min-height: 720px;
          background: linear-gradient(135deg, #1a2236 0%, #0f1624 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .network-bg {
          background-image: linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .ripple {
          position: absolute;
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          animation: ripple 4s infinite;
        }
        @keyframes ripple {
          0% { transform: scale(0.5); opacity: 0.1; }
          50% { transform: scale(1.5); opacity: 0.3; }
          100% { transform: scale(0.5); opacity: 0.1; }
        }
        .card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); transition: transform 0.3s ease; }
        .card:hover { transform: translateY(-5px); }
        .glow { position: absolute; width: 150px; height: 150px; background: radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, transparent 70%); border-radius: 50%; pointer-events: none; }
        .comparison-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px); transition: transform 0.3s ease; }
        .comparison-card:hover { transform: translateY(-2px); background: rgba(255,255,255,0.1); }
        .progress-bar { height: 6px; border-radius: 3px; background: rgba(255,255,255,0.1); overflow: hidden; }
        .progress-fill { height: 100%; transition: width 1s ease-in-out; }
        .feature-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); transition: all 0.3s ease; }
        .feature-card:hover { transform: translateY(-5px); background: rgba(255, 255, 255, 0.1); }
        .use-case-card { background: rgba(255, 255, 255, 0.05); border-left: 3px solid; transition: all 0.3s ease; }
        .use-case-card:hover { transform: translateX(5px); }
        .impact-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); transition: all 0.3s ease; }
        .impact-card:hover { transform: translateY(-2px); background: rgba(255, 255, 255, 0.1); }
        .timeline-dot { width: 12px; height: 12px; border-radius: 50%; }
        .timeline-line { width: 2px; background: rgba(255, 255, 255, 0.1); position: absolute; left: 5px; top: 20px; bottom: 0; z-index: 0; }
        .conclusion-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); transition: all 0.3s ease; }
        .conclusion-card:hover { transform: translateY(-2px); background: rgba(255,255,255,0.1); }
        .highlight-text { background: linear-gradient(120deg, #3b82f6 0%, #10b981 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
      `}</style>
    </>
  );
}