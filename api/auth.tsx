/* eslint-disable no-console */
import { eraseCookie, getCookie, setCookie } from "@lib/cookie";
import axios from "axios";

import { DB_URL } from "../config";

async function createKey() {
	const sendData = {
		ip: await getIp(),
	};
	const { data } = await axios.post(`${DB_URL}/keys`, sendData);

	if (data.code == 400) {
		const { data } = await axios.put(`${DB_URL}/keys`, sendData);

		return data;
	}
	return data;
}

async function updateKey(
	c1: boolean,
	c2: boolean,
	c3: boolean,
	c4: boolean,
	c5: boolean
) {
	const sendData = {
		ip: await getIp(),
		c1: c1,
		c2: c2,
		c3: c3,
		c4: c4,
		c5: c5,
	};
	const { data } = await axios.patch(`${DB_URL}/keys`, sendData);

	return data;
}

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

async function getProfileData() {
	const sendData = {
		sessionid: getCookie("sessionid"),
	};
	const { data } = await axios.post(`${DB_URL}/users`, sendData);

	return data;
}

async function getIp() {
	const { data } = await axios.get("https://api.ipify.org", {
		timeout: 10000,
	});
	if (data == false) {
		window.location.href = "/checkpoint/tamper";
	}
	return data;
}

export { login, logout, createKey, updateKey, getProfileData };
