import axios from "axios";
import { DB_URL } from "config";
import { getCookie } from "@lib/cookie";

async function createProgram(
	name: string,
	description: string,
	experience: string,
	privates: boolean,
	sport: string
) {
	name = name ?? "";
	description = description ?? "";
	experience = experience ?? "";
	privates = privates ?? false;
	sport = sport ?? "";

	const sessionid = await getCookie("sessionid");
	const sendData = {
		name,
		description,
		experience,
		sport,
		private: privates,
		sessionid,
	};
	const { data } = await axios.put(`${DB_URL}/products`, sendData);

	return data;
}

export { createProgram };
