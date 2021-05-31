import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";
import { linkStyles as Link } from "@styles/linkstyles";
import Text from "@styles/texttheme";
const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
	sm: "40em",
	md: "52em",
	lg: "64em",
	xl: "80em",
});

const theme = extendTheme({
	colors: {
		primary: "#40916cff",
		secondary: "#b7e4c7ff",
		lightBase: "#dde2ec",
		darkPrimary: "#072f21",
		black: "#16161D",

		bg: {
			100: "#0B0C10",
			200: "#1F2833",
		},
		text: {
			100: "#06d6a0",
			200: "#d8f3dcff",
			300: "#b7e4c7ff",
			400: "#95d5b2ff",
			500: "#74c69dff",
			600: "#52b788ff",
			700: "#40916cff",
			800: "#1b4332ff",
			900: "#081c15ff",
		},

		///* CSS HEX */
		// --nyanza: #d8f3dcff;
		// --turquoise-green: #b7e4c7ff;
		// --turquoise-green-2: #95d5b2ff;
		// --ocean-green: #74c69dff;
		// --ocean-green-2: #52b788ff;
		// --illuminating-emerald: ;
		// --bottle-green: #2d6a4fff;
		// --brunswick-green: #1b4332ff;
		// --dark-jungle-green: #081c15ff;
	},
	components: {
		Link,
		Text,
	},
	styles: {
		global: (props) => ({
			html: {
				height: "100%",
			},
			body: {
				fontFamily: "body",
				color: mode("text.700", "secondary")(props),
				bg: mode("lightBase", "bg.100")(props),
				lineHeight: "base",
			},
			a: {
				color: mode("text.800", "text.600")(props),
			},
		}),
	},
	initialColorMode: "dark",
	useSystemColorMode: false,
	fonts,
	breakpoints,
});

export default theme;
