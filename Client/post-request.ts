interface bookObject {
	name: string;
	author: string;
	pages: number;
}

interface userAuth {
	email: string;
	password: string;
}

export async function sendData(obj: bookObject) {
	const res = await fetch("/store", {
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

export async function signin(obj: userAuth) {
	const res = await fetch("/signin", {
		method: "POST",
		body: JSON.stringify(obj),
		headers: {
			"content-type": "text/plain",
		},
	});

	return res.status === 200 ? "Success" : "Fail";
}
