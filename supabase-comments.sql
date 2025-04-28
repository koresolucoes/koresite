-- SQL para criar tabela de comentários no Supabase
create table if not exists blog_comments (
  id uuid primary key default gen_random_uuid(),
  post_slug text not null,
  author text not null,
  content text not null,
  created_at timestamp with time zone default timezone('utc', now())
);

-- Índice para busca rápida por post
create index if not exists idx_blog_comments_post_slug on blog_comments(post_slug);
