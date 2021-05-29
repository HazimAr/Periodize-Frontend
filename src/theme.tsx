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
			200: "#61a19e",
			300: "#377572",
			400: "#0d4041",
			500: "#072020",
		},
	},
	styles: {
		global: (props) => ({
			html: {
				height: "100%",
			},
			body: {
				fontFamily: "body",

				color: props.colorMode === "dark" ? "text.400" : "black",
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
		Text: {
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
				hi: {
					bg: "red.400",
					boxShadow: "0 0 2px 2px #efdfde",
				},
				// 4. We can override existing variants
				bnw: (props) => ({
					color: mode("white", "black")(props),
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
