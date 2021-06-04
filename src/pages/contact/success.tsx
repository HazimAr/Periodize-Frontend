import { Text } from "@chakra-ui/react";
import HeadFoot from "@components/home/headfoot";

export default function About(): JSX.Element {
	return (
		<HeadFoot>
			<div>
				About<Text variant="bnw">Congrats foo</Text>
			</div>
		</HeadFoot>
	);
}
