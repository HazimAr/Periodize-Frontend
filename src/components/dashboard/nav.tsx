/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
// /* eslint-disable sonarjs/cognitive-complexity */
// import MobileNav from "@components/dashboard/mobileNav";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { BsPeopleCircle } from "react-icons/bs";
// import { FaDumbbell } from "react-icons/fa";
// import { FiHelpCircle } from "react-icons/fi";
// import { IoIosArrowForward } from "react-icons/io";
// import { RiHome2Line } from "react-icons/ri";
// import styled from "styled-components";

// import {
// 	StyledMenuContainer,
// 	StyledMenuList,
// 	DeselectMenu,
// 	StyledLink as StyledMenuLink,
// } from "../home/head";
// import { setHeader } from "../home/menu";

// const StyledText = styled.span`
// 	display: none;
// 	margin-left: 0rem;
// 	transition: margin-left 100ms ease-in-out;
// `;

// const Logo = styled.li`
// 	font-weight: bold;
// 	text-align: center;
// 	cursor: pointer;
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	height: 5rem;
// 	color: white;
// 	font-size: 1.5rem;
// 	width: 100%;
// 	svg {
// 		transition: transform 400ms;
// 	}
// `;

// const Navbar = styled.nav`
// 	height: 100vh;
// 	background: var(--secondary);
// 	background: linear-gradient(to right, var(--secondary), var(--secondary2));
// 	position: fixed;
// 	left: 0;
// 	top: 0;
// 	transition: width 100ms ease;
// 	width: 16rem;
// 	${StyledText} {
// 		display: block;
// 		margin-left: 1rem;
// 	}
// 	${Logo} {
// 		svg {
// 			transform: rotate(-180deg);
// 		}
// 	}
// `;

// const StyledList = styled.ul`
// 	position: relative;
// 	height: 100%;
// 	margin: 0;
// 	padding: 0;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	.active {
// 		background-color: var(--accent);
// 	}
// `;

// const StyledLink = styled.a`
// 	cursor: pointer;
// 	display: flex;
// 	align-items: center;
// 	height: 5rem;
// 	color: white;
// 	text-decoration: none;

// 	svg {
// 		min-width: 2rem;
// 		margin: 0 1.5rem;
// 	}
// `;

// const StyledListElement = styled.li`
// 	width: 100%;
// 	background-color: transparent;
// 	transition: 200ms ease-in-out;
// 	:hover {
// 		background-color: var(--accent) !important;
// 	}
// `;

// const List = styled.ul`
// 	position: absolute;
// 	width: 100%;
// 	padding: 0;
// 	bottom: 0;
// 	left: 0;
// `;

// const ArrowButton = styled.button`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	width: 50px;
// 	height: 50px;
// 	transition: transform 0.2s ease;
// 	:hover {
// 		transform: translateX(-6px);
// 		cursor: pointer;
// 	}
// `;

// const Wrapper = styled.div`
// 	.closed {
// 		width: 5rem;
// 		${StyledList} {
// 			${Logo} {
// 				justify-content: center;
// 				${ArrowButton} {
// 					transform: rotate(-180deg);
// 					:hover {
// 						transform: translateX(6px) rotate(180deg);
// 						cursor: pointer;
// 					}
// 				}
// 				${StyledText} {
// 					display: none;
// 				}
// 			}
// 			${StyledListElement} ${StyledLink} ${StyledText} {
// 				display: none;
// 			}
// 		}
// 	}
// 	@media only screen and (max-width: 600px) {
// 		display: none;
// 	}
// `;

// const FixedMenu = styled.div`
// 	position: fixed;
// 	right: 10px;
// 	top: 10px;
// `;

// // eslint-disable-next-line import/no-default-export
// export default function Main(): JSX.Element {
// 	const router = useRouter();
// 	const [isClosed, setIsClosed] = useState<boolean>(true);
// 	useEffect(() => {
// 		const ele: HTMLDivElement | null = document.querySelector("#main");
// 		const width = window.matchMedia("(max-width: 600px)");

// 		if (width.matches) {
// 			if (ele !== null) {
// 				ele.style.marginLeft = "0rem";
// 			}
// 		} else {
// 			if (isClosed && ele !== null) {
// 				ele.style.marginLeft = "16rem";
// 			} else if (ele !== null) {
// 				ele.style.marginLeft = "5rem";
// 			}
// 		}
// 	});

// 	function toggleInOut() {
// 		const ele: HTMLDivElement | null = document.querySelector("#main");
// 		const width = window.matchMedia("(max-width: 600px)");

// 		if (width.matches) {
// 			if (ele !== null) {
// 				ele.style.marginLeft = "0rem";
// 			}
// 		} else {
// 			if (isClosed && ele !== null) {
// 				ele.style.marginLeft = "16rem";
// 			} else if (ele !== null) {
// 				ele.style.marginLeft = "5rem";
// 			}
// 		}

// 		setIsClosed(!isClosed);
// 	}

// 	return (
// 		<>
// 			<FixedMenu>
// 				<MobileNav />
// 			</FixedMenu>
// 			<StyledMenuContainer
// 				aria-label="Dropdown Mobile Menu"
// 				id="drop-menu"
// 			>
// 				<DeselectMenu
// 					aria-label="Deselect Menu"
// 					onClick={() => {
// 						setHeader(false);
// 					}}
// 				/>
// 				<StyledMenuList>
// 					{options.map((temp) => (
// 						<StyledMenuLink key={`menu-${temp.title}`}>
// 							<a
// 								onClick={() => {
// 									setHeader(false);
// 								}}
// 								href={temp.link}
// 							>
// 								{temp.title}
// 							</a>
// 						</StyledMenuLink>
// 					))}
// 				</StyledMenuList>
// 			</StyledMenuContainer>

// 			<Wrapper>
// 				<Navbar className={isClosed ? "" : "closed"}>
// 					<StyledList>
// 						<Logo>
// 							<Link href="/">
// 								<a>
// 									<StyledText>Periodize</StyledText>
// 								</a>
// 							</Link>

// 							<ArrowButton
// 								aria-label="Toggle Dropdown"
// 								onClick={toggleInOut}
// 							>
// 								<IoIosArrowForward color="white" size="40px" />
// 							</ArrowButton>
// 						</Logo>
// 						{/* @ts-ignore*/}
// 						{options.map((Data) => (
// 							<StyledListElement
// 								className={
// 									router.pathname === Data.link
// 										? "active"
// 										: ""
// 								}
// 								key={Data.link}
// 							>
// 								<Link href={Data.link}>
// 									<StyledLink>
// 										<Data.Image />
// 										<StyledText>{Data.title}</StyledText>
// 									</StyledLink>
// 								</Link>
// 							</StyledListElement>
// 						))}
// 						<List>
// 							<StyledListElement
// 								className={
// 									router.pathname === "/dashboard/profile"
// 										? "active"
// 										: ""
// 								}
// 							>
// 								<Link href="/dashboard/profile">
// 									<StyledLink>
// 										<BsPeopleCircle size="30px" />
// 										<StyledText>Profile</StyledText>
// 									</StyledLink>
// 								</Link>
// 							</StyledListElement>
// 						</List>
// 					</StyledList>
// 				</Navbar>
// 			</Wrapper>
// 		</>
// 	);
// }

import {
	Box,
	UnorderedList,
	ListItem,
	Flex,
	Text,
	Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsPeopleCircle } from "react-icons/bs";
import { FaClipboardList, FaDumbbell } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const options = [
	{
		title: "Home",
		link: "/dashboard",
		image: (props: any) => {
			return <FaClipboardList {...props} />;
		},
	},
	{
		title: "Programs",
		link: "/dashboard/programs",
		image: (props: any) => {
			return <FaDumbbell {...props} />;
		},
	},
	{
		title: "Help",
		link: "/dashboard/help",
		image: (props: any) => {
			return <FiHelpCircle {...props} />;
		},
	},
];

const profile = {
	title: "Profile",
	link: "/dashboard/profile",
	image: (props: any) => {
		return <BsPeopleCircle {...props} />;
	},
};

const spacing = "10px";

const Arrow = motion(IoIosArrowForward);

export default function Nave(): JSX.Element {
	return (
		<Box as="nav" bg="brand.500" w="200px" h="100vh" position="absolute">
			<UnorderedList styleType="none" m="0">
				<Flex flexDir="column" justify="space-between" h="100vh">
					<Box>
						<ListItem my={spacing} key="periodize" textAlign="left">
							<Link href="/dashboard">
								<a>
									<Flex
										justify="space-between"
										align="center"
									>
										Periodize
										<Arrow
											color="white"
											size="30px"
											whileHover={{ translateX: "10px" }}
											transition={{ duration: 1 }}
										/>
									</Flex>
								</a>
							</Link>
						</ListItem>
						{options.map((option) => {
							return (
								<ListItem my={spacing} key={option.title}>
									<Link href={option.link}>
										<a>
											<Flex align="center">
												<option.image
													size="30px"
													color="#5A378B"

													// brand.400
												/>
												<Heading ml="20px" size="md">
													{option.title}
												</Heading>
											</Flex>
										</a>
									</Link>
								</ListItem>
							);
						})}
					</Box>
					<ListItem key={profile.title} my={spacing}>
						<Link href={profile.link}>
							<a>
								<Flex align="center">
									<profile.image
										size="30px"
										color="#5A378B"
										// brand.400
									/>
									<Heading ml="20px" size="md">
										{profile.title}
									</Heading>
								</Flex>
							</a>
						</Link>
					</ListItem>
				</Flex>
			</UnorderedList>
		</Box>
	);
}
