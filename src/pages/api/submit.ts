import type { APIRoute } from 'astro';
import { db } from '../../db';
import { submissions } from '../../db/schema';

export const POST: APIRoute = async ({ request }) => {
  try {
    const raw = await request.text();
    if (!raw) {
      return new Response(
        JSON.stringify({ success: false, error: 'Empty request body' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = JSON.parse(raw);

    if (!body?.name || !body?.email || !body?.message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    await db.insert(submissions).values({
      name: body.name,
      email: body.email,
      message: body.message,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: (err as Error).message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
