export const runtime = 'edge'

export async function POST(req) {
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
      input: `You are an expert in hamster care. Respond in Markdown to the following user prompt:\n\n${prompt}`,
      stream: true,
      temperature: 1,
    }),
  })

  if (!upstream.ok || !upstream.body) {
    return new Response(await upstream.text(), { status: upstream.status })
  }

  const reader = upstream.body.getReader()
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()

  let buffer = ''

  const stream = new ReadableStream({
    async start(controller) {
      while (true) {
        const { value, done } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })

        // SSE events are separated by a blank line
        const blocks = buffer.split('\n\n')
        buffer = blocks.pop() || ''

        for (const block of blocks) {
          let event = ''
          let data = ''

          for (const line of block.split('\n')) {
            if (line.startsWith('event:')) event = line.slice(6).trim()
            if (line.startsWith('data:')) data += line.slice(5).trim()
          }

          // Only stream assistant text deltas (ignore reasoning)
          if (event === 'response.output_text.delta') {
            try {
              const json = JSON.parse(data)
              const delta = json.delta
              if (delta) controller.enqueue(encoder.encode(delta))
            } catch {
              // ignore malformed chunks
            }
          }
        }
      }

      controller.close()
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  })
}
