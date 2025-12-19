import { StreamingTextResponse, OpenAIStream } from 'ai'

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(req) {
  const { prompt } = await req.json()

  const response = await fetch('https://api.groq.com/openai/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.COHERE_API_KEY}`
    },
    body: JSON.stringify({
      model: 'openai/gpt-oss-20b', // or: 'llama-3.1-8b-instant'
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.9,
      stream: true
    })
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
