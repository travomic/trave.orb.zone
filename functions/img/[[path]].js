export async function onRequest({ env, params }) {
  const key = params.path ? params.path.join('/') : '';
  const object = await env.IMAGES.get(key);

  if (!object) return new Response('Not Found', { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('cache-control', 'public, max-age=31536000, immutable');

  return new Response(object.body, { headers });
}
