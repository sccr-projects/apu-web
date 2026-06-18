import { createDirectus, rest, readItems } from '@directus/sdk';

const envUrl = import.meta.env.DIRECTUS_URL as string | undefined;
const directusUrl = (envUrl && envUrl.length > 0
  ? envUrl
  : 'http://127.0.0.1:8055').replace('http://localhost:', 'http://127.0.0.1:');

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

export { client, readItems };
export type { Post };
