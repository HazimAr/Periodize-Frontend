import CFormikInput from "@components/formikinput";
import { Flex, Box, IconButton, Button } from "@chakra-ui/react";
import { Field } from "formik";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";

export default function ProgramHeader({ formhelpers }: any) {
	return (
		<Flex justify="center" w="100%" my="16px">
			<Box w="10%" mx="8px">
				<Field component={CFormikInput} name="title" />
			</Box>
			<Button
				onClick={() => {
					formhelpers.setValues(basictemplate, false);
				}}
			>
				Basic Split
			</Button>
			<Box w="10%" mx="8px">
				<Field component={CFormikSplitSelect} name="preset" />
			</Box>

			<IconButton
				aria-label="add"
				icon={<AddIcon />}
				type="button"
				onClick={() =>
					push({
						dayName: values.days.length + 1,
						dayDescription: "",
						hideNote: true,
						workouts: [],
					})
				}
			>
				Add Day
			</IconButton>
		</Flex>
	);
}
