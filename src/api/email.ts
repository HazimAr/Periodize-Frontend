import mailgun from "mailgun-js";
import type { NextApiRequest, NextApiResponse } from "next";

const DOMAIN = "mail.periodize.org";

const API_KEY = process.env.API_KEY || "";
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

type Data = {
	email: string;
	subject: string;
	message: string;
	link: string;
};

export default function Email(
	req: NextApiRequest,
	res: NextApiResponse
): NextApiResponse {
	if (req.method === "POST") {
		const body: Data = {
			email: req.body.email,
			subject: "Periodize Account Password Reset",
			message: req.body.message,
			link: req.body.link,
		};

		const data = {
			from: `Periodize <accounts@periodize.org>`,
			to: `${body.email}`,
			subject: `${body.subject}`,
			template: "password",
			"h:X-Mailgun-Variables": { link: body.link },
		};
		// eslint-disable-next-line no-void
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
