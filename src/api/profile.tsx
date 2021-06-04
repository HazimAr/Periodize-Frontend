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
		email,
	};
	const { data } = await axios.post(`${DB_URL}/users/email`, sendData);

	return data;
}

async function changePasswordForgot(password: string, id: string) {
	const sendData = {
		newPassword: password,
		token: id,
	};
	const { data } = await axios.patch(`${DB_URL}/users/forgot`, sendData);

	return data;
}

async function updatePassword(
	password: string,
	newPassword: string,
	sessionid: string
) {
	const sendData = {
		password,
		newPassword,
		sessionid,
	};

	const { data } = await axios.patch(`${DB_URL}/users`, sendData);

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

async function updateProfile(username: string, email: string, image: string) {
	const profile = await getProfileData();

	username = username ?? profile.data.username;
	email = email ?? profile.data.email;
	image = image ?? profile.data.image;

	const sendData = {
		username,
		email,
		image,
	};

	const { data } = await axios.patch(`${DB_URL}/users/update`, sendData);

	return data;
}

export {
	getProfileData,
	forgotPassword,
	verifyEmail,
	changePasswordForgot as changePassword,
	updateProfile,
	updatePassword,
};
