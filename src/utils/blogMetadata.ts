// Metadados dinâmicos para SEO e organização de artigos
export interface BlogMeta {
  slug: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  image: string;
  categories: string[];
  tags: string[];
  views?: number;
}

export const blogPosts: BlogMeta[] = [
  // Exemplo, preencha com os dados reais dos artigos
  {
    slug: 'automacao-marketing',
    title: 'Guia Definitivo de Automação de Marketing: Estratégias, Ferramentas e Implementação',
    summary: 'Um artigo completo explicando o que é automação de marketing, seus benefícios e passo a passo de implementação com melhores práticas do mercado.',
    date: '2025-04-17',
    author: 'Bloomreach',
    image: '/blog-images/automacao-marketing.jpg',
    categories: ['Marketing', 'Automação'],
    tags: ['estratégia', 'ferramentas', 'implementação'],
    views: 0,
  },
  // ...adicione os outros artigos seguindo o mesmo padrão
];
