import { serve, readableStreamFromReader } from "./deps.ts";

async function requestHandler(req: Request): Promise<Response> {
	const url = new URL(req.url);
	if (req.method === "GET") {
		console.log(url.pathname);
		if (url.pathname === "/") {
			try {
				const file = await Deno.open("./Client/index.html", { read: true });
				const readableStream = readableStreamFromReader(file);
				return new Response(readableStream, {
					status: 200,
					headers: { "content-type": "text/html" },
				});
			} catch (err) {
				console.error(err);
				return new Response("index.html not found", { status: 404 });
			}
		} else if (url.pathname.startsWith("/style.css")) {
			try {
				const file = await Deno.open("./Client/style.css", { read: true });
				const readableStream = readableStreamFromReader(file);
				return new Response(readableStream, {
					status: 200,
					headers: { "content-type": "text/css" },
				});
			} catch (err) {
				console.error(err);
				return new Response("style.css not found", { status: 404 });
			}
		} else if (url.pathname.startsWith("/script.js")) {
			try {
				const file = await Deno.open("./Client/script.js", { read: true });
				const readableStream = readableStreamFromReader(file);
				return new Response(readableStream, {
					status: 200,
					headers: { "content-type": "text/javascript" },
				});
			} catch (err) {
				console.error(err);
				return new Response("script.js not found", { status: 404 });
			}
		}
	}
	return new Response("Henlo", {
		status: 200,
		headers: { "content-type": "text-plain; charset=utf-8" },
	});
}

const port = parseInt(Deno.env.get("PORT") ?? "8000");

console.log("Listening on port ", port);
serve(requestHandler, { port });
