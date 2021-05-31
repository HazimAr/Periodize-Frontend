import { verifyEmail } from "@api/profile";
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.API_KEY || "";

type Data = {
	email: string;
	key: string;
};

export default async function Validate(
	req: NextApiRequest,
	res: NextApiResponse
): Promise<NextApiResponse> {
	if (req.method === "POST") {
		const body: Data = {
			email: req.body.email,
			key: API_KEY,
		};
		console.log(body);
		const response = await verifyEmail(body.email, body.key);
		res.status(200).json(response.data);
		return res;
	}
	res.setHeader("Content-Type", "application/json");
	res.statusCode = 200;
	res.status(100).json({ detail: "Method Not Allowed" });
	res.redirect(100, "/#");
	return res;
}
