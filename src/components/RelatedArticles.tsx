import Link from 'next/link';

interface RelatedArticlesProps {
  articles: { href: string; title: string }[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;
  return (
    <section className="mb-8">
      <h3 className="text-xl text-ciano-eletrico font-semibold mb-2">Artigos relacionados</h3>
      <ul className="list-disc pl-6">
        {articles.map(a => (
          <li key={a.href}><Link href={a.href} className="underline text-ciano-eletrico">{a.title}</Link></li>
        ))}
      </ul>
    </section>
  );
}
