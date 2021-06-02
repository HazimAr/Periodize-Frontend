import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

const StyledButton = styled.button`
	background-color: var(--highlight);
	padding: 5px;
	color: white;
	width: fit-content;
	padding: 10px 20px;
	font-weight: 500;
	margin: auto;
	transition: all ease 0.2s;
	font-family: "Sarabun", sans-serif;
	border-radius: 10px;
	display: flex;
	align-items: center;
	border: 2px solid var(--blue);

	svg {
		margin-left: 5px;
		transition: all ease 0.4s;
	}

	:hover {
		cursor: pointer;
		background-color: #007fb9;
		svg {
			transform: translateX(7.5px);
		}
	}
`;

const Span = styled.span`
	color: var(--highlight);
	font-family: var(--title);
`;

const Container = styled.div`
	max-width: 1200px;
	width: 100%;
`;

const StyledFlex = styled(Flex)`
	* {
		margin: 2.5px 0px;
	}
`;

export { StyledButton, Span, Container, StyledFlex };
