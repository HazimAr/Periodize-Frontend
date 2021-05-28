import mailgun from "mailgun-js";
import type { NextApiRequest, NextApiResponse } from "next";

const DOMAIN = "mail.periodize.org";

const API_KEY = process.env.API_KEY || "";
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

type Data = {
	email: string;
	link: string;
};

export default function ForgotPassword(
	req: NextApiRequest,
	res: NextApiResponse
): NextApiResponse {
	if (req.method === "POST") {
		const body: Data = {
			email: req.body.email,
			link: req.body.link,
		};

		const data = {
			from: `Periodize <accounts@periodize.org>`,
			to: `${body.email}`,
			subject: `Periodize Account Password Reset`,
			template: "password",
			"h:X-Mailgun-Variables": JSON.stringify({ link: body.link }),
		};
		
		void mg.messages().send(data, (_error, body) => {
			res.status(200).json({ detail: body.message });
		});
		return res;
	}
	res.setHeader("Content-Type", "application/json");
	res.statusCode = 200;
	res.status(100).json({ detail: "Method Not Allowed" });
	res.redirect(100, "/#");
	return res;
}
