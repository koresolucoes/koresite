'use client'
// TestimonialsSection.tsx
// Depoimentos de clientes
import React from 'react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Luciana Ribeiro (Grupo Orion)',
    text: 'O n8n nos permitiu integrar sistemas internos e economizar mais de 20 horas semanais em tarefas repetitivas.',
    logo: '',
  },
  {
    name: 'Eduardo Martins (AgroTech Brasil)',
    text: 'A consultoria foi essencial para automatizar nossos processos e aumentar a produtividade da equipe.',
    logo: '',
  },
  {
    name: 'Ana Paula Silva (Clínica Vida)',
    text: 'Atendimento personalizado e suporte rápido. Recomendo para quem busca automação confiável.',
    logo: '',
  },
  {
    name: 'Carlos Souza (LogExpress)',
    text: 'A integração de APIs sem código acelerou nossa digitalização. Resultados acima do esperado!',
    logo: '',
  },
  {
    name: 'Fernanda Lopes (EducaMais)',
    text: 'Os cursos de n8n foram didáticos e práticos. Nosso time está muito mais preparado!',
    logo: '',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [fade, setFade] = useState(true)
  const length = testimonials.length

  const prevSlide = () => {
    setFade(false)
    setTimeout(() => {
      setCurrent(current === 0 ? length - 1 : current - 1)
      setFade(true)
    }, 100)
  }
  const nextSlide = () => {
    setFade(false)
    setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1)
      setFade(true)
    }, 100)
  }

  // Auto-advance every 5 seconds, pause on hover
  React.useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
        setFade(true)
      }, 100)
    }, 5000)
    return () => clearInterval(interval)
  }, [length, paused])

  return (
    <section className="py-16 bg-gradient-to-br from-azul-petroleo to-black">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-10 text-center">O que dizem nossos clientes</h2>
        <div
          className="relative rounded-xl shadow-lg bg-black bg-opacity-60 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex items-center justify-between px-4 py-2">
            <button onClick={prevSlide} aria-label="Anterior" className="p-2 rounded-full bg-ciano-eletrico bg-opacity-30 hover:bg-opacity-60 transition">
              &#8592;
            </button>
            <div className={`flex-1 flex flex-col items-center text-center py-10 px-4 carousel-fade ${fade ? 'carousel-fade-in' : 'carousel-fade-out'}`}>
              <div className="w-12 h-12 mb-4 rounded-full bg-ciano-eletrico bg-opacity-20 flex items-center justify-center text-2xl">
                {testimonials[current].logo || testimonials[current].name[0]}
              </div>
              <p className="text-gray-200 italic mb-4">“{testimonials[current].text}”</p>
              <span className="text-ciano-eletrico font-semibold">{testimonials[current].name}</span>
            </div>
            <button onClick={nextSlide} aria-label="Próximo" className="p-2 rounded-full bg-ciano-eletrico bg-opacity-30 hover:bg-opacity-60 transition">
              &#8594;
            </button>
          </div>
          <div className="flex justify-center gap-2 pb-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setFade(false); setTimeout(() => { setCurrent(idx); setFade(true) }, 100) }}
                className={`w-2 h-2 rounded-full ${idx === current ? 'bg-ciano-eletrico' : 'bg-gray-500'} transition`}
                aria-label={`Ir para o depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

