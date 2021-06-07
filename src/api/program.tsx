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

async function getPrograms() {
	const sendData = {
		sessionid: getCookie("sessionid"),
	};
	const { data } = await axios.post(`${DB_URL}/products/all`, sendData);
	return data;
}

async function getProgram(id: number) {
	const { data } = await axios.post(`${DB_URL}/products/${id}`);
	return data;
}

async function deleteProgram(id: number) {
	const { data } = await axios.delete(`${DB_URL}/products/${id}`);
	return data;
}
async function updateProgram(id: number) {
	const { data } = await axios.patch(`${DB_URL}/products/${id}`);
	return data;
}

export { createProgram, getPrograms, getProgram, deleteProgram, updateProgram };
