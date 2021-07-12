import { Box, Heading, Flex } from "@chakra-ui/react";
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
		<Flex justify="left">
			<Box>
				<Heading size="lg" mb={4}>
					{lift.name}
				</Heading>
			</Box>
		</Flex>
	);
}
