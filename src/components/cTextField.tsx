import { Box, FormLabel, Input } from "@chakra-ui/react";
import React, { ReactElement, useRef, useState } from "react";
// import "../../styles/inputstyles.module.css";
interface Props {}
export default function ChakraTextField({}: Props): ReactElement {
	const [value, setValue] = useState("");
	const [focused, setFocused] = useState(false);
	const ref = useRef(null);
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
						onBlur={() => setFocused(false)}
					/>
				</Box>
			</Box>
		</Box>
	);
}
