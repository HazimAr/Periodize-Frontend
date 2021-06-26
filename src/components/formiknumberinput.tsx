import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import {
	Flex,
	FormControl,
	FormErrorMessage,
	HStack,
	IconButton,
	Input,
	InputRightElement,
} from "@chakra-ui/react";
import { FieldProps, getIn } from "formik";

const CNumberInput = ({
	field,
	form: { errors, touched, setFieldValue },
}: FieldProps) => {
	const error = getIn(errors, field.name);
	const touch = getIn(touched, field.name);
	const invalid = touch && error;

	return (
		<FormControl isInvalid={invalid}>
			<Flex align="center">
				<Input
					{...field}
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

				<InputRightElement
					children={
						<HStack spacing="">
							<IconButton
								aria-label="increase"
								icon={<ArrowUpIcon />}
								variant="ghost"
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
								icon={<ArrowDownIcon />}
								variant="ghost"
								onClick={() =>
									parseInt(field.value) > 1
										? setFieldValue(
												field.name,
												parseInt(field.value) - 1
										  )
										: console.log(field.value)
								}
							/>
						</HStack>
					}
				/>
			</Flex>

			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	);
};

export default CNumberInput;
