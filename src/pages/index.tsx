import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
// import HeadFoot from "@components/home/headfoot";
import Button from "@components/styledbutton";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import HomeVideo from "@components/homevideo";
// import Link from "@components/link";
import { FeatureComponent } from "@components/featureboxes";

const StyledButton = styled(Button)`
	transition: all ease 0.2s;
	transform: translateX(5px);

	svg {
		margin-left: 10px;
		transition: all ease 0.4s;
	}
	:hover {
		cursor: pointer;
		svg {
			transform: translateX(10px);
		}
	}
`;

// const StyledText = styled(Text)``;

// const LearnMore = styled(Text)`
// 	${StyledText} {
// 		margin-top: 10px;
// 		margin-bottom: 3px;
// 	}
// `;

const Wave = styled.svg`
	position: absolute;
	z-index: -10;
`;

export default function Home(): JSX.Element {
	return (
		// <HeadFoot>
		<>
		
				{/* <HomeVideo /> */}
				<FeatureComponent/>
				
			
		</>
		// </HeadFoot>
	);
}
