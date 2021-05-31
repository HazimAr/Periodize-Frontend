import mailgun from "mailgun-js";
import type { NextApiRequest, NextApiResponse } from "next";

import { COMPANY_INFO } from "../../config";

const DOMAIN = "mail.periodize.com";

const API_KEY = process.env.API_KEY || "";
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

type Data = {
	name: string;
	email: string;
	subject: string;
	company: string;
	message: string;
};

// eslint-disable-next-line import/ano-default-export
export default function Email(
	req: NextApiRequest,
	res: NextApiResponse
): NextApiResponse {
	if (req.method === "POST") {
		const body: Data = {
			name: req.body.name,
			email: req.body.email,
			subject: req.body.subject,
			company: req.body.company,
			message: req.body.message,
		};
		const data = {
			from: `${body.name} <${body.email}>`,
			to: `arajchwald@gmail.com`,
			subject: `${body.subject}`,
			text: `
            name: ${body.name}
            email: ${body.email}
            subject: ${body.subject}
            company: ${body.company}

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
