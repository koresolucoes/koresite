"use client";
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

interface BlogCommentsProps {
  postSlug: string;
}

interface Comment {
  id: string;
  author: string;
  content: string;
  created_at: string;
}

export default function BlogComments({ postSlug }: BlogCommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchComments() {
    const { data, error } = await supabase
      .from('blog_comments')
      .select('*')
      .eq('post_slug', postSlug)
      .order('created_at', { ascending: false });
    if (!error && data) setComments(data as Comment[]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;
    setLoading(true);
    await supabase.from('blog_comments').insert({
      post_slug: postSlug,
      author,
      content,
    });
    setAuthor('');
    setContent('');
    setLoading(false);
    fetchComments();
  }

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line
  }, [postSlug]);

  return (
    <div className="mt-8">
      <h3 className="text-xl text-ciano-eletrico font-semibold mb-2">Comentários</h3>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          className="bg-gray-900 border border-gray-700 rounded px-3 py-2 mr-2 text-gray-200"
          placeholder="Seu nome"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
        />
        <textarea
          className="bg-gray-900 border border-gray-700 rounded px-3 py-2 w-full mt-2 text-gray-200"
          placeholder="Deixe seu comentário"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          rows={3}
        />
        <button
          type="submit"
          className="mt-2 bg-ciano-eletrico text-black px-4 py-2 rounded font-semibold disabled:opacity-50"
          disabled={loading}
        >Enviar</button>
      </form>
      <div>
        {comments.length === 0 && <div className="text-gray-400">Nenhum comentário ainda.</div>}
        {comments.map(c => (
          <div key={c.id} className="mb-4 border-b border-gray-700 pb-2">
            <div className="text-sm text-gray-400">{c.author} — {new Date(c.created_at).toLocaleString('pt-BR')}</div>
            <div className="text-gray-200 whitespace-pre-line">{c.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
