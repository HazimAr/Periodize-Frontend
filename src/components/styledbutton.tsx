import React from "react";
import { Button } from "@chakra-ui/react";
// import styled from "@emotion/styled";

export default function StyledButton(props: any) {
	return (
		<Button
			border="1px solid transparent"
			borderRadius="5px"
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
