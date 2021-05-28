/* eslint-disable import/no-default-export */
import { useColorMode, Switch } from "@chakra-ui/react";

export default function DarkModeSwitch(): JSX.Element {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";
	return (
		<Switch
			position="fixed"
			top="1rem"
			right="1rem"
			color="green"
			isChecked={isDark}
			onChange={toggleColorMode}
		/>
	);
}
