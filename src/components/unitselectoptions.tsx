import { Select } from "@chakra-ui/react";
import { FieldProps } from "formik";
export default function UnitSelect({
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
			<option value="lb">lb</option>
			<option value="rpe">RPE</option>
			<option value="%">% of 1RM</option>
			<option value="bodyweight">bodyweight</option>
			<option value="meter">meters</option>
			<option value="mile">mile</option>
			<option value="foot">ft</option>
		</Select>
	);
}
