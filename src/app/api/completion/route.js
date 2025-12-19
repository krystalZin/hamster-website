import { StreamingTextResponse, OpenAIStream } from 'ai'

// IMPORTANT! Edge runtime
export const runtime = 'edge'

export async function POST(req: Request) {
  const { prompt } = await req.json()

  const response = await fetch('https://api.groq.com/openai/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'openai/gpt-oss-20b',
      input: prompt,      
      temperature: 0.9,
      stream: true,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    return new Response(errorText, { status: response.status })
  }

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
