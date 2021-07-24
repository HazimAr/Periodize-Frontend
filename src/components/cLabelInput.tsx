import { Box, FormLabel, Input } from "@chakra-ui/react";
import React, { ReactElement, useRef, useState } from "react";

export default function CLabelInput(props: any): ReactElement {
	const [focused, setFocused] = useState(false);
	const ref = useRef(null);

	function isPositiveFloat(n) {
		return !isNaN(n) && Number(n) > 0;
	}
	function handleChange(e) {
		e.preventDefault();
		const { value } = e.currentTarget;

		if (props.numinput) {
			if (isPositiveFloat(value)) {
				props.setFieldValue(props.name, value);
			}
		} else {
			props.setFieldValue(props.name, value);
			// props.field.onChange();
		}
	}
	return (
		<Box
			className={`form-field ${focused ? "is-focused" : ""} 
				${props.error ? "error" : ""} 
				${props.value.length > 0 ? "has-value" : ""} `}
		>
			<Box className="control">
				<FormLabel onClick={() => ref.current.focus()}>
					{props.label}
				</FormLabel>
				<Input
					ref={ref}
					type="text"
					variant="flushed"
					{...props.field}
					value={props.value}
					onChange={(e) => handleChange(e)}
					onFocus={() => setFocused(true)}
					min={props.numinput ? 0 : null}
					onBlur={() => {
						// props.handleBlur();
						setFocused(false);
					}}

					// onFocus={() => setFocused(true)}
					// onBlur={() => {
					// 	setFocused(false);
					// }}
				/>
			</Box>
		</Box>
	);
}
