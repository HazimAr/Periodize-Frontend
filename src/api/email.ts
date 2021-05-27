import mailgun from "mailgun-js";
import type { NextApiRequest, NextApiResponse } from "next";


const DOMAIN = "mail.periodize.org";

const API_KEY = process.env.API_KEY || "";
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

type Data = {
	name: string;
	phone: string;
	email: string;
	subject: string;
	message: string;
};

export default function Email(
	req: NextApiRequest,
	res: NextApiResponse
): NextApiResponse {
	if (req.method === "POST") {
		const body: Data = {
			name: req.body.name,
			phone: req.body.phone,
			email: req.body.email,
			subject: req.body.subject,
			message: req.body.message,
		};

		const data = {
			from: `${body.name} <${body.email}>`,
			to: `USERS EMAIL GOES HERE,`,
			subject: `${body.subject}`,
			text: `
            name: ${body.name}
            phone: ${body.phone}
            email: ${body.email}
            subject: ${body.subject}

            message: 

            ${body.message}
            `,
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
