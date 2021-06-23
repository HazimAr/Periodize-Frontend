import axios from "axios";
import { DB_URL } from "config";
import { getCookie } from "@lib/cookie";
import { MyFormValues } from "types";

async function createProgram(
	program: MyFormValues
	// title: string = "",
	// description: string = "",
	// days: any[] = []
) {
	const sendData = {
		title: program.title,
		description: program.description,
		days: program.days,
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
	const sendData = {
		sessionid: await getCookie("sessionid"),
	};
	const { data } = await axios.post(`${DB_URL}/programs/${id}`, sendData);
	return data;
}

async function deleteProgram(id: number) {
	const sendData = {
		sessionid: await getCookie("sessionid"),
	};
	const { data } = await axios.put(`${DB_URL}/programs/${id}`, sendData);
	return data;
}

async function updateProgram(id: number) {
	const sendData = {
		sessionid: await getCookie("sessionid"),
	};
	const { data } = await axios.patch(`${DB_URL}/programs/${id}`, sendData);
	return data;
}

export { createProgram, getPrograms, getProgram, deleteProgram, updateProgram };
