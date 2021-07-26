/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@chakra-ui/react";

// eslint-disable-next-line import/no-default-export
export default function container(props: any): JSX.Element {
	return (
		<Box w="100%" {...props} mx="25px">
			{props.children}
		</Box>
	);
}
