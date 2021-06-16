import {
	Box,
	Divider,
	Flex,
	FlexProps,
	Spacer,
	Stack,
	useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import {
	FaRegBell,
	FaRegChartBar,
	FaRegClipboard,
	FaRegHeart,
	FaRegImages,
	FaRegQuestionCircle,
} from "react-icons/fa";
import { Logo } from "@components/dash2/logo";
import { NavLink } from "@components/dash2/navlink";
import { SearchField } from "@components/dash2/searchfield";
import { UserProfile } from "@components/dash2/userprofile";

export const Sidebar = (props: FlexProps) => {
	return (
		<Flex
			bg={mode("gray.50", "gray.800")}
			direction="column"
			borderRightWidth="1px"
			width="64"
			{...props}
		>
			<Flex
				direction="column"
				flex="1"
				pt="5"
				pb="4"
				overflowY="auto"
				px="4"
			>
				<Box mb="6">
					<Logo color={mode("blue.600", "blue.400")} h="6" />
				</Box>

				<Box mb="6">
					<SearchField />
				</Box>

				<Stack spacing="6" as="nav" aria-label="Sidebar Navigation">
					<Stack spacing="1">
						<NavLink label="Images" icon={FaRegImages} isActive />
						<NavLink label="Favorites" icon={FaRegHeart} />
						<NavLink label="Notes" icon={FaRegClipboard} />
						<NavLink label="Statistics" icon={FaRegChartBar} />
					</Stack>

					<Divider />

					<Stack spacing="1">
						<NavLink label="Notifications" icon={FaRegBell} />
						<NavLink
							label="Help Center"
							icon={FaRegQuestionCircle}
						/>
					</Stack>
				</Stack>
				<Spacer />
			</Flex>

			<UserProfile />
		</Flex>
	);
};
