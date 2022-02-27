"use strict";

import { signin, signup } from "./dist/post-request.js";

signinForm.onsubmit = async (event) => {
	event.preventDefault();
	const formData = new FormData(signinForm);
	const userCredentials = {
		email: formData.get("email"),
		password: formData.get("password"),
	};
	const res = await signin(userCredentials);
	alert(res);
};

signupForm.onsubmit = async (event) => {
	event.preventDefault();
	const formData = new FormData(signupForm);
	const userCredentials = {
		username: formData.get("username"),
		email: formData.get("email"),
		password: formData.get("password"),
	};
	const res = await signup(userCredentials);
	alert(res);
};
