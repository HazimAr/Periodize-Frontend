import { FieldProps } from "formik";
import { Select } from "@chakra-ui/react";
export default function SplitSelect({
	field,
	form: { handleChange, handleBlur },
}: FieldProps) {
	return (
		<Select
			name={field.name}
			value={field.value}
			onChange={handleChange}
			onBlur={handleBlur}
		>
			<option value="week">Week</option>
			<option value="ppl">PPL</option>
			<option value="bro">Bro Split</option>
			<option value="5day">5 day</option>
			<option value="4day">4 day</option>
			<option value="3day">3 day</option>
		</Select>
	);
}
