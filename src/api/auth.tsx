/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { eraseCookie, getCookie, setCookie } from "@lib/cookie";
import axios from "axios";

import { DB_URL } from "../config";

async function createUser(mail: string, user: string, pass: string) {
	const sendData = {
		password: pass,
		username: user,
		email: mail,
	};

	const { data } = await axios.put(`${DB_URL}/users`, sendData);
	console.log(data);

	if (data.data) {
		setCookie("sessionid", String(data.data.sessionid), 7);
		window.location.href = "/dashboard";
	}
	return data;
}

async function login(user: string, pass: string, mail: string) {
	const sendData = {
		username: user,
		password: pass,
	};

	const { data } = await axios.post(`${DB_URL}/users/login`, sendData);
	console.log(data);
	if (data.code == 404) {
		const data = createUser(mail, user, pass);
		return data;
	}
	if (data.data) {
		setCookie("sessionid", String(data.data.sessionid), 7);
		window.location.href = "/dashboard";
	}

	return data;
}

async function logout() {
	const sendData = {
		sessionid: getCookie("sessionid"),
	};
	const { data } = await axios.post(`${DB_URL}/users/logout`, sendData);
	eraseCookie("sessionid");
	window.location.href = "/";
	return data;
}

export { login, logout, createUser };
