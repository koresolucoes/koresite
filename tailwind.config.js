// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'kore-azul': '#0a1a2f', // azul escuro predominante
        'kore-ciano': '#00cfd1', // ciano do logo
        'kore-ciano-claro': '#00fff7', // ciano elétrico mais claro
        'kore-branco': '#f8fafc', // branco para contraste
        'kore-cinza': '#1e293b', // cinza escuro para fundos
        'kore-destaque': '#a8ff04', // verde-lima para destaques
        'kore-magenta': '#ff00c8', // magenta para detalhes
      },
      fontFamily: {
        'sans': ['Inter', 'Montserrat', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
