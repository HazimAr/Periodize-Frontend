import mailgun from "mailgun-js";
import type { NextApiRequest, NextApiResponse } from "next";
import { forgotPassword } from "@api/profile";

const DOMAIN = "mail.periodize.org";

const API_KEY = process.env.API_KEY || "";
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

type Data = {
	email: string;
	link: string;
};

export default async function ForgotPassword(
	req: NextApiRequest,
	res: NextApiResponse
): Promise<NextApiResponse> {
	if (req.method === "POST") {
		const user = await forgotPassword(req.body.email);
		const uuid = user.uuid;
		const body: Data = {
			email: req.body.email,
			link: `https://periodize.org/forgot?id=${uuid}`,
		};

		const data = {
			from: `Periodize <accounts@periodize.org>`,
			to: `${body.email}`,
			subject: `Periodize Account Password Reset`,
			html: `<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <!--[if gte mso 9
      ]><xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml><!
    [endif]-->
    <title>Periodize</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
    <meta name="format-detection" content="telephone=no" />
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,700,700i,900,900i"
      rel="stylesheet"
    />
    <!--<![endif]-->
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100% !important;
        -ms-text-size-adjust: 100% !important;
        -webkit-font-smoothing: antialiased !important;
      }
      img {
        border: 0 !important;
        outline: none !important;
      }
      p {
        margin: 0px !important;
        padding: 0px !important;
      }
      table {
        border-collapse: collapse;
        mso-table-lspace: 0px;
        mso-table-rspace: 0px;
      }
      td,
      a,
      span {
        border-collapse: collapse;
        mso-line-height-rule: exactly;
      }
      .ExternalClass * {
        line-height: 100%;
      }
      .em_blue a {
        text-decoration: none;
        color: #264780;
      }
      .em_grey a {
        text-decoration: none;
        color: #434343;
      }
      .em_white a {
        text-decoration: none;
        color: #ffffff;
      }

      @media only screen and (min-width: 481px) and (max-width: 649px) {
        .em_main_table {
          width: 100% !important;
        }
        .em_wrapper {
          width: 100% !important;
        }
        .em_hide {
          display: none !important;
        }
        .em_aside10 {
          padding: 0px 10px !important;
        }
        .em_h20 {
          height: 20px !important;
          font-size: 1px !important;
          line-height: 1px !important;
        }
        .em_h10 {
          height: 10px !important;
          font-size: 1px !important;
          line-height: 1px !important;
        }
        .em_aside5 {
          padding: 0px 10px !important;
        }
        .em_ptop2 {
          padding-top: 8px !important;
        }
      }
      @media only screen and (min-width: 375px) and (max-width: 480px) {
        .em_main_table {
          width: 100% !important;
        }
        .em_wrapper {
          width: 100% !important;
        }
        .em_hide {
          display: none !important;
        }
        .em_aside10 {
          padding: 0px 10px !important;
        }
        .em_aside5 {
          padding: 0px 8px !important;
        }
        .em_h20 {
          height: 20px !important;
          font-size: 1px !important;
          line-height: 1px !important;
        }
        .em_h10 {
          height: 10px !important;
          font-size: 1px !important;
          line-height: 1px !important;
        }
        .em_font_11 {
          font-size: 12px !important;
        }
        .em_font_22 {
          font-size: 22px !important;
          line-height: 25px !important;
        }
        .em_w5 {
          width: 7px !important;
        }
        .em_w150 {
          width: 150px !important;
          height: auto !important;
        }
        .em_ptop2 {
          padding-top: 8px !important;
        }
        u + .em_body .em_full_wrap {
          width: 100% !important;
          width: 100vw !important;
        }
      }
      @media only screen and (max-width: 374px) {
        .em_main_table {
          width: 100% !important;
        }
        .em_wrapper {
          width: 100% !important;
        }
        .em_hide {
          display: none !important;
        }
        .em_aside10 {
          padding: 0px 10px !important;
        }
        .em_aside5 {
          padding: 0px 8px !important;
        }
        .em_h20 {
          height: 20px !important;
          font-size: 1px !important;
          line-height: 1px !important;
        }
        .em_h10 {
          height: 10px !important;
          font-size: 1px !important;
          line-height: 1px !important;
        }
        .em_font_11 {
          font-size: 11px !important;
        }
        .em_font_22 {
          font-size: 22px !important;
          line-height: 25px !important;
        }
        .em_w5 {
          width: 5px !important;
        }
        .em_w150 {
          width: 150px !important;
          height: auto !important;
        }
        .em_ptop2 {
          padding-top: 8px !important;
        }
        u + .em_body .em_full_wrap {
          width: 100% !important;
          width: 100vw !important;
        }
      }
    </style>
  </head>
  <body
    class="em_body"
    style="margin: 0px auto; padding: 0px"
    bgcolor="#efefef"
  >
    <table
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      class="em_full_wrap"
      align="center"
      bgcolor="#efefef"
    >
      <tr>
        <td align="center" valign="top">
          <table
            align="center"
            width="650"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="em_main_table"
            style="width: 650px; table-layout: fixed"
          >
            <tr>
              <td
                align="center"
                valign="top"
                style="padding: 0 25px"
                class="em_aside10"
              >
                <table
                  width="100%"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  align="center"
                >
                  <tr>
                    <td height="25" style="height: 25px" class="em_h20">
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top">
                      <a href="#" target="_blank" style="text-decoration: none"
                        ><img
                          src="/assets/pilot/images/templates/header_logo.png"
                          width="208"
                          height="41"
                          alt="Periodize"
                          border="0"
                          style="
                            display: block;
                            font-family: Arial, sans-serif;
                            font-size: 18px;
                            line-height: 25px;
                            text-align: center;
                            color: #1d4685;
                            font-weight: bold;
                            max-width: 208px;
                          "
                          class="em_w150"
                      /></a>
                    </td>
                  </tr>
                  <tr>
                    <td height="28" style="height: 28px" class="em_h20">
                      &nbsp;
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <table
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      class="em_full_wrap"
      align="center"
      bgcolor="#efefef"
    >
      <tr>
        <td align="center" valign="top" class="em_aside5">
          <table
            align="center"
            width="650"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="em_main_table"
            style="width: 650px; table-layout: fixed"
          >
            <tr>
              <td
                align="center"
                valign="top"
                style="padding: 0 25px; background-color: #ffffff"
                class="em_aside10"
              >
                <table
                  width="100%"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  align="center"
                >
                  <tr>
                    <td height="45" style="height: 45px" class="em_h20">
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="em_blue em_font_22"
                      align="center"
                      valign="top"
                      style="
                        font-family: Arial, sans-serif;
                        font-size: 26px;
                        line-height: 29px;
                        color: #264780;
                        font-weight: bold;
                      "
                    >
                      Forgot your password?
                    </td>
                  </tr>
                  <tr>
                    <td
                      height="14"
                      style="height: 14px; font-size: 0px; line-height: 0px"
                    >
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="em_grey"
                      align="center"
                      valign="top"
                      style="
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        line-height: 26px;
                        color: #434343;
                      "
                    >
                      It happens to the best of us. The good news is you can
                      change it.
                    </td>
                  </tr>
                  <tr>
                    <td height="26" style="height: 26px" class="em_h20">
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top">
                      <table
                        width="250"
                        style="
                          width: 250px;
                          background-color: #6bafb2;
                          border-radius: 4px;
                        "
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        align="center"
                      >
                        <tr>
                          <td
                            class="em_white"
                            height="42"
                            align="center"
                            valign="middle"
                            style="
                              font-family: Arial, sans-serif;
                              font-size: 16px;
                              color: #ffffff;
                              font-weight: bold;
                              height: 42px;
                            "
                          >
                            <a
                              href="${body.link}"
                              target="_blank"
                              style="
                                text-decoration: none;
                                color: #ffffff;
                                line-height: 42px;
                                display: block;
                              "
                              >RESET YOUR PASSWORD</a
                            >
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td height="25" style="height: 25px" class="em_h20">
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="em_grey"
                      align="center"
                      valign="top"
                      style="
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        line-height: 26px;
                        color: #434343;
                      "
                    >
                      If you didn&rsquo;t request a password reset, you
                      don&rsquo;t have to do anything.<br class="em_hide" />
                      Just ignore this email.
                    </td>
                  </tr>
                  <tr>
                    <td height="44" style="height: 44px" class="em_h20">
                      &nbsp;
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <table
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      class="em_full_wrap"
      align="center"
      bgcolor="#efefef"
    >
      <tr>
        <td align="center" valign="top">
          <table
            align="center"
            width="650"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="em_main_table"
            style="width: 650px; table-layout: fixed"
          >
            <tr>
              <td
                align="center"
                valign="top"
                style="padding: 0 25px"
                class="em_aside10"
              >
                <table
                  width="100%"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  align="center"
                >
                  <tr>
                    <td height="40" style="height: 40px" class="em_h20">
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td
                      height="16"
                      style="
                        height: 16px;
                        font-size: 1px;
                        line-height: 1px;
                        height: 16px;
                      "
                    >
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="em_grey"
                      align="center"
                      valign="top"
                      style="
                        font-family: Arial, sans-serif;
                        font-size: 15px;
                        line-height: 18px;
                        color: #434343;
                        font-weight: bold;
                      "
                    >
                      Problems or questions?
                    </td>
                  </tr>
                  <tr>
                    <td
                      height="10"
                      style="height: 10px; font-size: 1px; line-height: 1px"
                    >
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="center"
                      valign="top"
                      style="font-size: 0px; line-height: 0px"
                    >
                      <table
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        align="center"
                      >
                        <tr>
                          <td
                            width="15"
                            align="left"
                            valign="middle"
                            style="
                              font-size: 0px;
                              line-height: 0px;
                              width: 15px;
                            "
                          >
                            <a
                              href="mailto:accounts@periodize.org"
                              style="text-decoration: none"
                              ><img
                                src="/assets/pilot/images/templates/email_img.png"
                                width="15"
                                height="12"
                                alt=""
                                border="0"
                                style="display: block; max-width: 15px"
                            /></a>
                          </td>
                          <td
                            width="9"
                            style="width: 9px; font-size: 0px; line-height: 0px"
                            class="em_w5"
                          >
                            <img
                              src="/assets/pilot/images/templates/spacer.gif"
                              width="1"
                              height="1"
                              alt=""
                              border="0"
                              style="display: block"
                            />
                          </td>
                          <td
                            class="em_grey em_font_11"
                            align="left"
                            valign="middle"
                            style="
                              font-family: Arial, sans-serif;
                              font-size: 13px;
                              line-height: 15px;
                              color: #434343;
                            "
                          >
                            <a
                              href="mailto:accounts@periodize.org"
                              style="text-decoration: none; color: #434343"
                              >accounts@periodize.org</a
                            >
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td
                      height="9"
                      style="font-size: 0px; line-height: 0px; height: 9px"
                      class="em_h10"
                    >
                      <img
                        src="/assets/pilot/images/templates/spacer.gif"
                        width="1"
                        height="1"
                        alt=""
                        border="0"
                        style="display: block"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top">
                      <table
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        align="center"
                      >
                        <tr>
                          <td
                            width="12"
                            align="left"
                            valign="middle"
                            style="
                              font-size: 0px;
                              line-height: 0px;
                              width: 12px;
                            "
                          >
                            <a
                              href="#"
                              target="_blank"
                              style="text-decoration: none"
                              ><img
                                src="/assets/pilot/images/templates/img_1.png"
                                width="12"
                                height="16"
                                alt=""
                                border="0"
                                style="display: block; max-width: 12px"
                            /></a>
                          </td>
                          <td
                            width="7"
                            style="width: 7px; font-size: 0px; line-height: 0px"
                            class="em_w5"
                          >
                            &nbsp;
                          </td>
                          <td
                            class="em_grey em_font_11"
                            align="left"
                            valign="middle"
                            style="
                              font-family: Arial, sans-serif;
                              font-size: 13px;
                              line-height: 15px;
                              color: #434343;
                            "
                          >
                            <a
                              href="https://periodize.org"
                              target="_blank"
                              style="text-decoration: none; color: #434343"
                              >Periodize</a
                            >
                            &bull; 1736 Bluestem Ln &bull; Glenview, IL 60026
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td height="35" style="height: 35px" class="em_h20">
                      &nbsp;
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td
                height="1"
                bgcolor="#dadada"
                style="font-size: 0px; line-height: 0px; height: 1px"
              >
                <img
                  src="/assets/pilot/images/templates/spacer.gif"
                  width="1"
                  height="1"
                  alt=""
                  border="0"
                  style="display: block"
                />
              </td>
            </tr>
            <tr>
              <td
                align="center"
                valign="top"
                style="padding: 0 25px"
                class="em_aside10"
              >
                <table
                  width="100%"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  align="center"
                >
                  <tr>
                    <td
                      height="16"
                      style="font-size: 0px; line-height: 0px; height: 16px"
                    >
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top">
                      <table
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        align="left"
                        class="em_wrapper"
                      >
                        <tr>
                          <td
                            class="em_grey"
                            align="center"
                            valign="middle"
                            style="
                              font-family: Arial, sans-serif;
                              font-size: 11px;
                              line-height: 16px;
                              color: #434343;
                            "
                          >
                            &copy; Periodize 2021
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td
                      height="16"
                      style="font-size: 0px; line-height: 0px; height: 16px"
                    >
                      &nbsp;
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td
                class="em_hide"
                style="
                  line-height: 1px;
                  min-width: 650px;
                  background-color: #efefef;
                "
              >
                <img
                  alt=""
                  src="/assets/pilot/images/templates/spacer.gif"
                  height="1"
                  width="650"
                  style="
                    max-height: 1px;
                    min-height: 1px;
                    display: block;
                    width: 650px;
                    min-width: 650px;
                  "
                  border="0"
                />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
			// template: "password",
			// "h:X-Mailgun-Variables": JSON.stringify({ link: body.link }),
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
