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
			100: "#C5C6C7",
			200: "#66FCF1",
			300: "#45A29E",
			400: "#116466",
		},
	},
	styles: {
		global: (props) => ({
			html: {
				height: "100%",
			},
			body: {
				fontFamily: "body",

				color: props.colorMode === "dark" ? "text.200" : "black",
				bg: mode("white", "bg.200")(props),
				lineHeight: "base",
			},
			a: {
				color: props.colorMode === "dark" ? "text.200" : "black",
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
	useSystemColorMode: true,
	fonts,
	breakpoints,
});

export default theme;
