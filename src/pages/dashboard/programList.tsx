import { ListItem, UnorderedList } from "@chakra-ui/react";

export default function ProgramList(): JSX.Element {
	const friends = [
		{ name: "hazim", hobbies: "programming" },
		{ name: "lilan", hobbies: "programming" },
		{ name: "tendon", hobbies: "knitting" },
		{ name: "noodle", hobbies: "programming" },
		{ name: "noah", hobbies: "programming" },
	];
	return (
		<UnorderedList>
			<ListItem>Hi</ListItem>
			<ListItem>Program2</ListItem>
			<ListItem>Program3</ListItem>
		</UnorderedList>
	);
}
