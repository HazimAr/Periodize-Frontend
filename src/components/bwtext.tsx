import { Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Container(props: any): JSX.Element {
	// const color = useColorModeValue("black", "white");
	const { colorMode } = useColorMode();
	return (
		<Text color={colorMode == "dark" ? "white" : "black"} {...props}>
			{props.children}
		</Text>
	);
}
