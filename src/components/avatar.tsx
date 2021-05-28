// import NextLink from "next/link";
// import { Link as ChakraLink } from "@chakra-ui/react";
import { Avatar, Box } from "@chakra-ui/react";
type AvatarProps = {
	name: string;
	src: string;
};
export default function AvatarBadge({ name, src }: AvatarProps): JSX.Element {
	return (
		<Box>
			<Avatar name={name} src={src} />
		</Box>
	);
}
