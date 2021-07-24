import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { getIn } from "formik";
import CLabelInput from "./cLabelInput";

const CFormikLabelInput = (props: any) => {
	const error = getIn(props.form.errors, props.field.name);
	const touch = getIn(props.form.touched, props.field.name);

	const invalid = touch && error;

	return (
		<FormControl isInvalid={invalid}>
			<CLabelInput
				{...props.field}
				label={props.label}
				error={error}
				num={true}
			/>
			{error && (
				<FormErrorMessage textAlign="right">{error}</FormErrorMessage>
			)}
		</FormControl>
	);
};

export default CFormikLabelInput;
