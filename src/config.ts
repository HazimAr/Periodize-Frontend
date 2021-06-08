// google analytics measurement id
const GA_TRACKING_ID = "G-91DYSNTKXD";
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_TEST = process.env.NODE_ENV === "test";
const IS_BROWSER = typeof window !== "undefined";
export { GA_TRACKING_ID, IS_PRODUCTION, IS_TEST, IS_BROWSER };

const DB_URL = "https://periodize.herokuapp.com";
// const DB_URL = "https://eda85ab6eec7.ngrok.io";

const CLIENT_ID =
	"796349303741-k933ic3bqhovc821vg9m552190vm13cv.apps.googleusercontent.com";
const CLIENT_SECRET = "lIMFTb07wlZanTpO735ld2Qh";

type MetaType = {
	title: string;
	lang: string;
	description: string;
	image: string;
	url: string;
};

const META: MetaType = {
	title: "Periodize",
	lang: "en-us",
	description: "Periodize",
	image: "/",
	url: "https://periodize.org",
};

export { META, DB_URL, CLIENT_ID, CLIENT_SECRET };
