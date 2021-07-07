import {
	Box,
	BoxProps,
	Heading,
	HStack,
	Icon,
	Link,
	Text
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

// const StyledVideo = styled.video`
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// 	object-fit: cover;
// 	opacity: 0.8;
// `;

const StyledSection = styled.div`
	position: absolute;
	right: 0;
	width: 100%;
	min-height: 100vh;
	padding: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #111;
	transition: 0.5s;
	z-index: 2;

	@media (max-width: 768px) {
		padding: 40px;
	}
`;

const StyledOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #323138;
	mix-blend-mode: overlay;
	/* background-color: rgba(255, 255, 255, 0.02);
	backdrop-filter: blur(4px);
	border-top: 1px solid rgba(255, 255, 255, 0.2);
	border-left: 1px solid rgba(255, 255, 255, 0.2);
	box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
	border-radius: 5px; */
`;

const StyledText = styled(motion.div)`
	position: relative;
	z-index: 10;
	text-align: left;

	/* background-color: rgba(49, 49, 49, 0.02);
	backdrop-filter: blur(8px);
	border-top: 1px solid rgba(255, 255, 255, 0.2);
	border-left: 1px solid rgba(255, 255, 255, 0.2);
	box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	padding: 8px; */
	/* display */
`;
const MotionBox = motion<BoxProps>(Box);
export default function HomeVideo() {
	const list = {
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.3,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				when: "afterChildren",
			},
		},
	};

	const item = {
		visible: {
			opacity: 1,
			x: 0,
			transition: { ease: "easeOut", duration: 2 },
		},
		hidden: { opacity: 0, x: -300 },
	};
	const seconditem = {
		visible: {
			opacity: 1,
			x: 0,
			transition: { ease: "easeOut", duration: 2 },
		},
		hidden: { opacity: 0, x: 300 },
	};
	return (
		<>
		
		<StyledSection>
			{/* <header>
					<h2 class="logo">Travel</h2>
					<div class="toggle"></div>
				</header> */}

			{/* <StyledVideo src="/homevid.mp4" muted loop autoPlay /> */}
			<Box
				backgroundImage="/purple.jpg"
				position="absolute"
				top="0"
				left="0"
				width="100%"
				height="100%"
				object-fit="cover"
				opacity="0.8"
			/>
			<StyledOverlay />
			<StyledText initial="hidden" animate="visible" variants={list}>
				<MotionBox variants={item}>
					<Heading
						as="h2"
						fontSize={["3em", "5em"]}
						fontWeight="800"
						lineHeight="1em"
						textTransform="uppercase"
						textAlign="left"
					>
						Periodize
					</Heading>
				</MotionBox>
				<MotionBox variants={seconditem}>
					<Heading
						as="h4"
						fontSize={["2em", "4em"]}
						fontWeight="700"
						lineHeight="1em"
						textTransform="uppercase"
						textAlign="left"
						mt="10px"
					>
						Perfect your Gains
					</Heading>
				</MotionBox>
				<MotionBox variants={item}>
					<Text
						fontSize="1.1em"
						fontWeight="400"
						maxW="700px"
						mt="20px"
						textAlign="left"
					>
						The new way to approach training and programming is
						here. Create custom training splits seemlessly and share
						them with others. Track your progress with your
						regiments and have Periodize regulate your workouts
						based on performance
					</Text>
				</MotionBox>
				<MotionBox variants={seconditem}>
					<Link
						mt="20px"
						href="#"
						display="inline-block"
						fontSize="1em"
						background="#fff"
						padding="10px 30px"
						text-transform="uppercase"
						//   text-decoration= "none"
						font-weight="500"
						margin-top="10px"
						color="#111"
						letter-spacing="2px"
						transition="0.2s"
						_hover={{ letterSpacing: "4px" }}
						textAlign="left"
					>
						Start Training
					</Link>
				</MotionBox>
				<MotionBox variants={item}>
					<HStack mt="20px">
						<Link
							href="/"
							isExternal
							sx={{
								// filter: "invert(1)",
								transform: "scale(0.75)",
								transition: "0.5s",
							}}
							_hover={{
								// filter: "invert(1)",
								transition: " 0.5s",
								transform: "scale(0.75) translateY(-15px)",
								color: "blue.600",
								// bg: "blue",
							}}
						>
							<Icon as={FaGithub} w={8} h={8} />
						</Link>
						<Link
							href="/"
							isExternal
							sx={{
								// filter: "invert(1)",
								transform: "scale(0.75)",
								transition: "0.5s",
							}}
							_hover={{
								// filter: "invert(1)",
								transition: " 0.5s",
								transform: "scale(0.75) translateY(-15px)",
								color: "purple.600",
							}}
						>
							<Icon as={FaInstagram} w={8} h={8} />
						</Link>
					</HStack>
				</MotionBox>
			</StyledText>

			{/* <div class="menu">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Destination</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>  */}
			</StyledSection>
			<Box h="100vh" />
		</>
	);
}
