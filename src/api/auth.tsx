/* eslint-disable no-console */
import { eraseCookie, getCookie, setCookie } from "@lib/cookie";
import { DB_URL } from "../config";
import axios from "axios";

async function login(user: string, pass: string) {
	const sendData = {
		username: user,
		password: pass,
	};

	const { data } = await axios.post(`${DB_URL}/users/login`, sendData);

	if (data.data !== undefined) {
		if (data.data.sessionid != false) {
			setCookie("sessionid", String(data.data.sessionid), 7);
			window.location.href = "/dashboard";
		}
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

export { login, logout };
