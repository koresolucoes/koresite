import React from 'react';
import Link from 'next/link';

interface BlogNavProps {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}

export default function BlogNav({ prevHref, prevLabel, nextHref, nextLabel }: BlogNavProps) {
  return (
    <nav className="flex items-center justify-between gap-4 mt-10 bg-kore-ciano/10 rounded-xl px-4 py-3 shadow-md border border-kore-ciano/20">
      {prevHref ? (
        <Link
          href={prevHref}
          className="flex items-center gap-2 text-ciano-eletrico font-semibold underline hover:text-kore-destaque transition"
        >
          <span className="text-2xl">←</span>
          <span>{prevLabel || 'Artigo anterior'}</span>
        </Link>
      ) : <span />}
      {nextHref ? (
        <Link
          href={nextHref}
          className="flex items-center gap-2 text-ciano-eletrico font-semibold underline hover:text-kore-destaque transition justify-end"
        >
          <span>{nextLabel || 'Próximo artigo'}</span>
          <span className="text-2xl">→</span>
        </Link>
      ) : <span />}
    </nav>
  );
}
