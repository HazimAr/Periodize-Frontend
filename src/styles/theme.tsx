import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
	sm: "40em",
	md: "52em",
	lg: "64em",
	xl: "80em",
});

const theme = extendTheme({
	colors: {
		black: "#16161D",
		bg: {
			100: "#0B0C10",
			200: "#1F2833",
		},
		text: {
			100: "#06d6a0",
			200: " #d8f3dcff",
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
	styles: {
		global: (props) => ({
			html: {
				height: "100%",
			},
			body: {
				fontFamily: "body",

				color: props.colorMode === "dark" ? "text.400" : "black",
				bg: mode("white", "bg.100")(props),
				lineHeight: "base",
			},
			a: {
				color: props.colorMode === "dark" ? "text.400" : "black",
			},
		}),
	},
	components: {
		Button: {
			// 1. We can update the base styles
			baseStyle: {
				fontWeight: "bold", // Normally, it is "semibold"
			},
			// 2. We can add a new button size or extend existing
			sizes: {
				xl: {
					h: "56px",
					fontSize: "lg",
					px: "32px",
				},
			},
			// 3. We can add a new visual variant
			variants: {
				"with-shadow": {
					bg: "red.400",
					boxShadow: "0 0 2px 2px #efdfde",
				},
				// 4. We can override existing variants
				solid: (props) => ({
					bg: props.colorMode === "dark" ? "bg.200" : "black",
					color: props.colorMode === "dark" ? "text.200" : "white",
				}),
			},
		},
	},
	initialColorMode: "dark",
	useSystemColorMode: false,
	fonts,
	breakpoints,
});

export default theme;
