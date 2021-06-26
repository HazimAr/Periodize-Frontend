import { FormControl, FormErrorMessage, Textarea } from "@chakra-ui/react";
import { FieldProps, getIn } from "formik";

const CFormikTextarea = ({ field, form: { errors, touched } }: FieldProps) => {
	const error = getIn(errors, field.name);
	const touch = getIn(touched, field.name);
	const invalid = touch && error;
	return (
		<FormControl isInvalid={invalid}>
			<Textarea {...field} />
			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	);
};

export default CFormikTextarea;
