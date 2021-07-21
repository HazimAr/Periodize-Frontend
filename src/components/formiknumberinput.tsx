import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
	Box,
	FormControl,
	FormErrorMessage,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	VStack,
} from "@chakra-ui/react";
import { FieldProps, getIn } from "formik";
import React from "react";

const CNumberInput = ({
	field,
	form: { errors, touched, setFieldValue },
}: FieldProps) => {
	const error = getIn(errors, field.name);
	const touch = getIn(touched, field.name);
	const invalid = touch && error;

	return (
		<Box w="100px">
			<FormControl isInvalid={invalid}>
				<InputGroup>
					<Input
						{...field}
						size="md"
						onChange={(e) => {
							e.preventDefault();
							const { value } = e.target;
							// const regex = /^(|-?\d+)$/;
							// const regex = /^(?!0\d)\d*(\.\d+)?$/gm;
							// if (regex.test(value.toString())) {
							// 	setFieldValue(field.name, value);
							// }
							if (parseInt(value) >= 0 || value === "") {
								setFieldValue(field.name, value);
							}
						}}
					/>

					<InputRightElement alignItems="center" height="90%">
						<VStack spacing={0}>
							<IconButton
								aria-label="increase"
								icon={<ChevronUpIcon />}
								variant="ghost"
								size="xs"
								py={0}
								_focus={{ outline: "none" }}
								onClick={() => {
									if (
										field.value === "" ||
										field.value == NaN ||
										field.value == null
									) {
										setFieldValue(field.name, 1);
									} else {
										setFieldValue(
											field.name,
											parseInt(field.value) + 1
										);
									}
								}}
							/>
							<IconButton
								aria-label="decrease"
								icon={<ChevronDownIcon />}
								variant="ghost"
								py={0}
								size="xs"
								_focus={{ outline: "none" }}
								onClick={() =>
									parseInt(field.value) > 1
										? setFieldValue(
												field.name,
												parseInt(field.value) - 1
										  )
										: console.log(field.value)
								}
							/>
						</VStack>
					</InputRightElement>
				</InputGroup>

				{error && <FormErrorMessage>{error}</FormErrorMessage>}
			</FormControl>
		</Box>
	);
};

export default CNumberInput;
