/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
import { Box } from "@chakra-ui/react";
import styled from "styled-components";

const Glass = styled(Box)`
	background: linear-gradient(
		to right bottom,
		rgba(255, 255, 255, 0.404),
		rgba(255, 255, 255, 0.15)
	);

	backdrop-filter: blur(0.8rem);
	border-radius: 1rem;
`;

export default function GlassBg({ children, ...props }: any): JSX.Element {
	return <Glass {...props}>{children}</Glass>;
}
