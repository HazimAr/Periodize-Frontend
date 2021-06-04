import {
	Flex,
	chakra,
	Image,
	Heading,
	Text,
	Container,
	Link,
	HStack,
	VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
interface StaffCardProps {
	src: string;
	name: string;
	sub: string;
	github: string;
	para: string;
	portfolio: string;
	linkedIn: string;
}

const CFaGithub = chakra(FaGithub);
const CFaLinkedIn = chakra(FaLinkedin);
export default function StaffCard({
	src = "",
	name,
	sub,
	github,
	portfolio,
	para,
	linkedIn,
}: StaffCardProps): JSX.Element {
	return (
		<Flex
			flexDir="column"
			align="center"
			borderRadius="10px"
			mb={4}
			bgGradient="linear(to-r, rgba(14,73,27,1),#43a839)"
			maxWidth="600px"
			width="100%"
		>
			<Image
				src={src}
				alt={name}
				borderRadius="10px"
				boxSize="150px"
				// objectFit="cover"
			/>
			<VStack align="flex-start" mx={2} spacing={2}>
				<Heading as="h2">{name}</Heading>
				<Text>{sub}</Text>
				<Link href={portfolio} isExternal>
					{portfolio}
				</Link>
				<HStack spacing={1}>
					<Link href={github} isExternal>
						<CFaGithub />
					</Link>
					<Link href={linkedIn} isExternal>
						<CFaLinkedIn />
					</Link>
				</HStack>
			</VStack>
			<Container>
				<Text align="left">{para}</Text>
			</Container>
		</Flex>
	);
}
