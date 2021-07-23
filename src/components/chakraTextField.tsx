import React, { ReactElement, useRef, useState } from "react";
import "../../styles/inputstyles.module.css";
interface Props {}

export default function ChakraTextField({}: Props): ReactElement {
	const [value, setValue] = useState("");
	const [focused, setFocused] = useState(false);
	const ref = useRef(null);
	return (
		<div>
			<div
				className={`form-field ${focused ? "is-focused" : ""} ${
					value.length > 0 ? "has-value" : ""
				}`}
			>
				<div className="control">
					<label onClick={() => ref.current.focus()}>Name</label>
					<input
						ref={ref}
						type="text"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						onFocus={() => setFocused(true)}
						onBlur={() => setFocused(false)}
					/>
				</div>
			</div>
		</div>
	);
}
