import { Box, FormLabel, Input } from "@chakra-ui/react";
import React, { ReactElement, useRef, useState } from "react";
// import "../../styles/inputstyles.module.css";
interface Props {}

function isRequired(val) {
	return val.length > 0 ? "" : "cannot be blank";
}

function isEmail(val) {
	const ai = val.indexOf("@");
	const gdi = val
		.split("")
		.reduce((acc, char, i) => (char === "." ? i : acc), 0);
	return ai > -1 && gdi > ai ? "" : "must be an email";
}
export default function ChakraTextField({}: Props): ReactElement {
	const [value, setValue] = useState("");
	const [focused, setFocused] = useState(false);
	const [errors, setErrors] = useState([]);
	const ref = useRef(null);

	function validate(validations) {
		setErrors(
			validations
				.map((errorsFor) => errorsFor(value))
				.filter((errorMsg) => errorMsg.length > 0)
		);
	}
	return (
		<Box>
			<Box
				className={`form-field ${focused ? "is-focused" : ""} ${
					value.length > 0 ? "has-value" : ""
				}`}
				display="block"
				mb="16px"
			>
				<Box className="control">
					<FormLabel onClick={() => ref.current.focus()}>
						Name
					</FormLabel>
					<Input
						ref={ref}
						type="text"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						onFocus={() => setFocused(true)}
						onBlur={() => {
							setFocused(false);
							validate([isRequired]);
						}}
					/>
				</Box>
				{errors.length > 0 && <Box>{errors.join(", ")}</Box>}
			</Box>
		</Box>
	);
}
