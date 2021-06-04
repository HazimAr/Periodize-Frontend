/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-default-export */
import { Button } from "@chakra-ui/react";
// import styled from "@emotion/styled";

export default function StyledButton(props: any): JSX.Element {
	return (
		<Button
			border="1px solid transparent"
			borderRadius="5px"
			_focus={{ outline: "none" }}
			type="submit"
			variant="solid"
			bgColor="text.800"
			_hover={{ bgColor: "text.900" }}
			color="white"
			{...props}
		>
			{props.children}
		</Button>
	);
}
