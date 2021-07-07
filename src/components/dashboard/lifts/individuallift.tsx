import { Box, Heading } from "@chakra-ui/react";
import { Lift } from "API";
import { useEffect } from "react";
// eslint-disable-next-line import/no-default-export
interface Props {
	lift: Lift;
}
export default function IndividualLift({ lift }: Props): JSX.Element {
	useEffect(() => {
		console.log(lift);
	}, []);
	return (
		<Box>
			<Heading size="lg" mb={4}>
				My Programs
			</Heading>
		</Box>
	);
}
