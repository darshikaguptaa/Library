interface User {
	username: string;
	email: string;
	password: string;
}

interface ReturnMsg {
	added: boolean;
	msg: string;
}

export async function addUser(newUser: User): Promise<ReturnMsg> {
	const userDataFileRead = await Deno.readFile("userData.json");
	// const userDataFileWrite = await Deno.open("userData.json", { write: true });
	// let userAdded = false;

	const userData = new TextDecoder("utf-8").decode(userDataFileRead);
	const usersObj = JSON.parse(userData);
	const users = usersObj.users;

	if (!users.length) {
		users.push(newUser);
		const res: boolean = await writeUser(usersObj);
		return res
			? {
					added: true,
					msg: "success",
			  }
			: {
					added: false,
					msg: "Error in writing to file",
			  };
	}

	for (const user of users) {
		if (user.email === newUser.email)
			return {
				added: false,
				msg: "duplicate email",
			};

		users.push(newUser);
		const res: boolean = await writeUser(usersObj);
		return res
			? {
					added: true,
					msg: "success",
			  }
			: {
					added: false,
					msg: "Error in writing to file",
			  };
	}

	return {
		added: false,
		msg: "Unknown error",
	};
}

async function writeUser(usersObj: User) {
	try {
		const data = new TextEncoder().encode(JSON.stringify(usersObj));
		await Deno.writeFile("userData.json", data);
		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
}
