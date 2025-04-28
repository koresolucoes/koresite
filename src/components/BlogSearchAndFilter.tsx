import { useState } from 'react';

interface BlogSearchAndFilterProps {
  categories: string[];
  tags: string[];
  onSearch: (query: string) => void;
  onCategory: (category: string) => void;
  onTag: (tag: string) => void;
}

export default function BlogSearchAndFilter({ categories, tags, onSearch, onCategory, onTag }: BlogSearchAndFilterProps) {
  const [search, setSearch] = useState('');

  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-center gap-4">
      <input
        className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-gray-200"
        placeholder="Buscar artigo..."
        value={search}
        onChange={e => {
          setSearch(e.target.value);
          onSearch(e.target.value);
        }}
      />
      <select className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-gray-200" onChange={e => onCategory(e.target.value)}>
        <option value="">Todas categorias</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <select className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-gray-200" onChange={e => onTag(e.target.value)}>
        <option value="">Todas tags</option>
        {tags.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
    </div>
  );
}
