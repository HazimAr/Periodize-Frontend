const Text = {
	// The styles all button have in common
	baseStyle: {
		// <-- border radius is same for all variants and sizes
	},
	// Two sizes: sm and md
	sizes: {},
	// Two variants: outline and solid
	variants: {
		bnw: (props) => ({
			color: props.colorMode === "dark" ? "white" : "black",
			
		}),
	},
	// The default size and variant values
	defaultProps: {},
};

// eslint-disable-next-line import/no-default-export
export default Text;
