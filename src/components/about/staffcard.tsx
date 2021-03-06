/* eslint-disable import/no-default-export */
import {
	Avatar,
	Box,
	chakra,
	Heading,
	HStack,
	Link,
	Text,
	VStack,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import GlassFlex from "@components/glassflex";
// const StaffC = styled(Flex)`
// 	background-color: rgba(255, 255, 255, ${(props) => props.opacity || 0.4});
// 	overflow: hidden;
// 	z-index: 10;
// 	backdrop-filter: blur(15px);
// 	border-top: 1px solid rgba(255, 255, 255, 0.2);
// 	border-left: 1px solid rgba(255, 255, 255, 0.2);
// 	box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
// `;
import { FaGithub } from "react-icons/fa";

type StaffCardProps = {
	src: string;
	name: string;
	city: string;
	tags: string[];
	// sub: string;
	github: string;
	// para: string;
	// portfolio: string;
	// linkedIn: string;
};

const CFaGithub = chakra(FaGithub);
// const CFaLinkedIn = chakra(FaLinkedin);
export default function StaffCard({
	src = "",
	name,
	city,
	tags,
	github,
}: // sub,

// portfolio,
// para,
// linkedIn,
StaffCardProps): JSX.Element {
	return (
		<GlassFlex
			flexDir="column"
			justify="center"
			align="center"
			width="350px"
			// bg="#231e39"
			borderRadius="5px"
			op={0.1}
		>
			<Avatar src={src} alt="user" size="2xl" mt="24px" />
			<VStack spacing="2px" mt="8px">
				<Heading size="md">{name}</Heading>
				<Text>{city}</Text>
				<Text fontSize="xs">
					User interface designer and <br /> front-end developer
				</Text>
				<HStack>
					<Link href={github}>
						<CFaGithub />
					</Link>
				</HStack>
			</VStack>

			<Box
				// bgColor="#2d2747"
				mt="8px"
				px="16px"
				py="20px"
				w="100%"
				borderRadius="5px"
			>
				<Wrap justify="center">
					{tags.map((tag) => {
						return (
							<WrapItem key="tag">
								<Box
									py="1px"
									px="8px"
									border="1px solid grey"
									borderRadius="4px"
								>
									<Text fontSize="sm">{tag}</Text>
								</Box>
							</WrapItem>
						);
					})}
				</Wrap>
			</Box>
		</GlassFlex>
	);
}
