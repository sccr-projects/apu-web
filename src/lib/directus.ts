import { createDirectus, rest, readItems, readItem } from '@directus/sdk';

const directusUrl = import.meta.env.DIRECTUS_URL || 'http://localhost:8055';

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  published_date: string;
  status: string;
}

interface Schema {
  posts: Post[];
}

const client = createDirectus<Schema>(directusUrl).with(rest());

export { client, readItems, readItem };
export type { Post };
