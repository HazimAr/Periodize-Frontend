/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getCookie } from "@lib/cookie";
import axios from "axios";

import { DB_URL } from "@src/config";

async function getProfileData() {
	const sendData = {
		sessionid: getCookie("sessionid"),
	};
	const { data } = await axios.post(`${DB_URL}/users/me`, sendData);

	return data;
}

export { getProfileData };
