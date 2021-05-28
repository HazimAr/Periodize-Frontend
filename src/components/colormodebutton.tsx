/* eslint-disable react/function-component-definition */
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode, IconButton } from "@chakra-ui/react";
import React from "react";

export default function ColorModeButton(): JSX.Element {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<header>
			<IconButton
				onClick={toggleColorMode}
				aria-label="toggle darkmode"
				variant="ghost"
				icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
				// mb={{ base: 6, sm: 0 }}
				mr={{ base: 0, sm: 8 }}
				_focus={{ outline: "none" }}
				outline="none"
				color="text.600"
				_hover={{
					outline: "none",
					bg: "transparent",
					color: "text.400",
				}}
			/>
		</header>
	);
}
