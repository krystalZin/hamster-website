export const runtime = 'edge'

export async function POST(req: Request) {
  const { prompt } = await req.json()

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    return new Response('Missing GROQ_API_KEY', { status: 500 })
  }

  const upstream = await fetch('https://api.groq.com/openai/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'openai/gpt-oss-20b',
      input: prompt,
      stream: true,
      temperature: 0.9,
    }),
  })

  if (!upstream.ok) {
    const text = await upstream.text()
    return new Response(text, { status: upstream.status })
  }

  return new Response(upstream.body, {
    status: 200,
    headers: {
      'Content-Type': upstream.headers.get('content-type') ?? 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  })
}
