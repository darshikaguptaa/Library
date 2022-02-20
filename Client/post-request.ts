interface bookObject {
	name: string;
	author: string;
	pages: number;
}

export async function sendData(obj: bookObject) {
	const res = await fetch("../server.ts", {
		method: "POST",
		body: JSON.stringify(obj),
		headers: {
			"content-type": "text/plain",
		},
	});
	// const data = await res.json();
	console.log(res);
	return "henlo";
}
