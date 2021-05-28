// import NextLink from "next/link";
// import { Link as ChakraLink } from "@chakra-ui/react";
import { Avatar, Box } from "@chakra-ui/react";
type AvatarProps = {
	name: string;
	src: string;
	size: string;
};
export default function AvatarBadge({
	name,
	src,
	size = "md",
}: AvatarProps): JSX.Element {
	return (
		<Box>
			<Avatar name={name} src={src} size={size} />
		</Box>
	);
}
