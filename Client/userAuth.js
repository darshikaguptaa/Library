"use strict";

import { signin } from "./dist/post-request.js";

const form = document.querySelector("#signinForm");

form.onsubmit = async (event) => {
	event.preventDefault();
	const formData = new FormData(form);
	const userCredentials = {
		username: formData.get("username"),
		email: formData.get("email"),
		password: formData.get("password"),
	};
	const res = await signin(userCredentials);
	alert(res);
};
