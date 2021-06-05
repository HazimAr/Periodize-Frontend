import styled from "styled-components";
import { Flex } from "@chakra-ui/react";

const GlassFlex = styled(Flex)`
	background-color: rgba(255, 255, 255, ${(props) => props.op || 0.2});
	overflow: hidden;
	z-index: 10;
	backdrop-filter: blur(15px);
	border-top: 1px solid rgba(255, 255, 255, 0.2);
	border-left: 1px solid rgba(255, 255, 255, 0.2);
	box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
`;

export default function GlassBgFlex({ children, ...props }: any): JSX.Element {
	return <GlassFlex {...props}>{children}</GlassFlex>;
}
