import Link from 'next/link';
import { BlogMeta } from '../utils/blogMetadata';

interface MostViewedArticlesProps {
  articles: BlogMeta[];
}

export default function MostViewedArticles({ articles }: MostViewedArticlesProps) {
  if (!articles || articles.length === 0) return null;
  return (
    <section className="mb-8">
      <h3 className="text-xl text-ciano-eletrico font-semibold mb-2">Mais lidos</h3>
      <ul className="list-disc pl-6">
        {articles.map(a => (
          <li key={a.slug}><Link href={`/blog/${a.slug}`} className="underline text-ciano-eletrico">{a.title}</Link></li>
        ))}
      </ul>
    </section>
  );
}
