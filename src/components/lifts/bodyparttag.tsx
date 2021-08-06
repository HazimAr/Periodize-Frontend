import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Props {
	part: string;
}

export default function BodyPartTag({ part }: Props): ReactElement {
	let col: string;

	switch (part) {
		case "fullbody":
			col = "gold.600";
			break;
		case "upper":
			col = "red.600";
			break;
		case "lower":
			col = "blue.700";
			break;
		case "legs":
			col = "blue.300";
			break;
		case "chest":
			col = "red.400";
			break;
		case "back":
			col = "green.800";
			break;
		case "arms":
			col = "green.500";
			break;
		case "glutes":
			col = "pink.800";
			break;
		case "forearms":
			col = "red.300";
			break;
		case "abs":
			col = "pink.600";
			break;
	}
	return (
		<Box
			px={3}
			py={0.5}
			border="2px solid"
			borderColor={col}
			borderRadius="md"
		>
			{part}
		</Box>
	);
}
