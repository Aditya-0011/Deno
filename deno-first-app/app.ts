// const text = "Test message!!!"
//
// const encoder = new TextEncoder()
// const data = encoder.encode(text)
//
// await Deno.writeFile('message.txt', data)

Deno.serve({port: 3000},(_req) => new Response("Hello World!!!"));