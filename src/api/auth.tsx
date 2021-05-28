/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { eraseCookie, getCookie, setCookie } from "@lib/cookie";
import axios from "axios";

import { DB_URL } from "../config";

async function createUser(mail: string, user: string, pass: string, image: any = null) {
	const sendData = {
		password: pass,
		username: user,
		email: mail,
		image: image,
	};

	const { data } = await axios.put(`${DB_URL}/users`, sendData);

	if (data.data) {
		setCookie("sessionid", String(data.data.sessionid), 7);
		window.location.href = "/dashboard";
	}
	return data;
}

async function login(user: string, pass: string) {
	const sendData = {
		username: user,
		password: pass,
	};

	const { data } = await axios.post(`${DB_URL}/users/login`, sendData);

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
