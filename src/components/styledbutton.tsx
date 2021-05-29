import React from "react";
import { Button } from "@chakra-ui/react";
// import styled from "@emotion/styled";

export default function StyledButton(props: any) {
	return (
		<Button
			border="1px solid"
			_hover={{ borderColor: "text.800" }}
			variant="outline"
			_focus={{ outline: "none" }}
			{...props}
		>
			{props.children}
		</Button>
	);
}
