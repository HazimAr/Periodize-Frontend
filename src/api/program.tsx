import axios from "axios";
import { DB_URL } from "config";
import { getCookie } from "@lib/cookie";

async function createProgram(
	title: string = "",
	description: string = "",
	days: any[] = []
) {
	const sendData = {
		title,
		description,
		days,
		sessionid: await getCookie("sessionid"),
	};
	const { data } = await axios.put(`${DB_URL}/programs`, sendData);

	return data;
}

async function getPrograms() {
	const sendData = {
		sessionid: await getCookie("sessionid"),
	};
	const { data } = await axios.post(`${DB_URL}/programs/all`, sendData);
	return data;
}

async function getProgram(id: number) {
	const { data } = await axios.post(`${DB_URL}/programs/${id}`);
	return data;
}

async function deleteProgram(id: number) {
	const { data } = await axios.delete(`${DB_URL}/programs/${id}`);
	return data;
}

async function updateProgram(id: number) {
	const { data } = await axios.patch(`${DB_URL}/programs/${id}`);
	return data;
}

export { createProgram, getPrograms, getProgram, deleteProgram, updateProgram };
