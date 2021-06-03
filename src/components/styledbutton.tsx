/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-default-export */
import { Button } from "@chakra-ui/react";
import React from "react";
// import styled from "@emotion/styled";

export default function StyledButton(props: any): JSX.Element {
	return (
		<Button
			border="1px solid transparent"
			borderRadius="5px"
			_focus={{ outline: "none" }}
			type="submit"
			variant="solid"
			bg="text.800"
			_hover={{ bg: "text.700" }}
			color="white"
			{...props}
		>
			{props.children}
		</Button>
	);
}
