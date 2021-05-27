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

async function verifyEmail(email: string) {
	const VAL_API_KEY = process.env.VAL_API_KEY || "";

	const sendData = {
		address: email,
	};
	const sendHeaders = {
		Authorization: VAL_API_KEY,
	};
	const { data } = await axios.post(
		"https://api.mailgun.net/v4/address/validate",
		sendData,
		sendHeaders
	);
	console.log(data);
	return data;
}

export { getProfileData, forgotPassword, verifyEmail };
