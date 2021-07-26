/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { VStack } from "@chakra-ui/react";

// eslint-disable-next-line import/no-default-export
export default function container(props: any): JSX.Element {
	return (
		<VStack w="100%" mx="25px" {...props}>
			{props.children}
		</VStack>
	);
}
