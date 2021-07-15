import { Box } from "@chakra-ui/react";
import { Lift } from "API";
import React, { ReactElement } from "react";

interface Props {
	lift: Lift;
}
export default function IndividualLift({ lift }: Props): ReactElement {
	console.log(lift);
	return <Box>My Lift</Box>;
}
