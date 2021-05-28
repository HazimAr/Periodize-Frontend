/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getCookie } from "@lib/cookie";
import axios from "axios";

import { DB_URL } from "../config";

async function getProfileData() {
	const sendData = {
		sessionid: getCookie("sessionid"),
	};
	const { data } = await axios.post(`${DB_URL}/users/me`, sendData);

	return data;
}

async function forgotPassword(email: string) {
	const sendData = {
		email: email,
	};
	const { data } = await axios.post(`${DB_URL}/users/email`, sendData);

	return data;
}

async function changePassword(password: string, id: string) {
	const sendData = {
		newPassword: password,
		uuid: id,
	};
	const { data } = await axios.patch(`${DB_URL}/users/forgot`, sendData);

	return data;
}

async function verifyEmail(email: string, key: string) {
	const { data } = await axios.get(
		`https://api.mailgun.net/v4/address/validate?address=${email}`,
		{
			auth: {
				username: "api",
				password: key,
			},
		}
	);
	return data;
}

export { getProfileData, forgotPassword, verifyEmail, changePassword };
