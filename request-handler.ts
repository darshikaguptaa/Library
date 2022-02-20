import { readableStreamFromReader, writableStreamFromWriter } from "./deps.ts";

export async function requestHandler(req: Request): Promise<Response> {
	const url = new URL(req.url);
	if (req.method === "GET") {
		console.log(url.pathname);
		const response = await getRequestHandler(url);
		return response;
	} else if (req.method === "POST") {
		console.log("wroking");
		if (req.body) {
			const file = await Deno.open("./User-Data/books.json", {
				write: true,
				create: true,
			});
			const writableStream = writableStreamFromWriter(file);
			console.log(writableStream);
			await req.body.pipeTo(writableStream);
		}
		return new Response("Post Request Recieved", {
			status: 200,
			headers: { "content-type": "text-plain; charset=utf-8" },
		});
	} else {
		return new Response("Henlo", {
			status: 200,
			headers: { "content-type": "text-plain; charset=utf-8" },
		});
	}
}

async function getRequestHandler(url: { pathname: string }): Promise<Response> {
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
	} else if (url.pathname.startsWith("/dist/post-request.js")) {
		try {
			const file = await Deno.open("./Client/dist/post-request.js", {
				read: true,
			});
			const readableStream = readableStreamFromReader(file);
			return new Response(readableStream, {
				status: 200,
				headers: { "content-type": "text/javascript" },
			});
		} catch (err) {
			console.error(err);
			return new Response("script.js not found", { status: 404 });
		}
	} else {
		return new Response("Henlo", {
			status: 200,
			headers: { "content-type": "text-plain; charset=utf-8" },
		});
	}
}
