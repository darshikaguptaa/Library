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
	switch (url.pathname) {
		case "/":
			return await fileResponse("./Client/static/index.html", "text/html");
		case "/style.css":
			return await fileResponse("./Client/style.css", "text/css");
		case "/script.js":
			return await fileResponse("./Client/script.js", "text/javascript");
		case "/dist/post-request.js":
			return await fileResponse(
				"./Client/dist/post-request.js",
				"text/javascript"
			);
		case "/signin":
			return await fileResponse("./Clinet/static/signin.html", "text/html");
		default:
			return new Response("Henlo", {
				status: 200,
				headers: { "content-type": "text-plain; charset=utf-8" },
			});
	}
}

async function fileResponse(
	fileNameWithPath: string,
	fileType: string
): Promise<Response> {
	let file;
	try {
		file = await Deno.open(fileNameWithPath, { read: true });
	} catch (e) {
		console.error(e);
		return new Response(`${fileNameWithPath} not found`, { status: 404 });
	}
	const readableStream = readableStreamFromReader(file);
	return new Response(readableStream, {
		status: 200,
		headers: { "content-type": fileType },
	});
}
