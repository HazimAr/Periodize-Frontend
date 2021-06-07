//create a component that displays weight: 75 lb , and a button that changes the unit to kilo or lb

import { Flex, Box, Button, Text, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function conversionButton(): JSX.Element {
	//this entire thing is useState Hook- which carries value of state and function
	const [weight, setWeight] = useState("");
	//     state/the value,   function to change state
    const [unit, setUnit] = useState("lb");

	useEffect(() => {
		console.log(weight);
	}, [weight]);


/* Old way to write function
function handleConvert(){
    statements here
}


new way 
const handleConvert2 = () => {
    statements
}

*/

function handleConvert() {
    if(unit == "lb"){
        setUnit("kg")
        setWeight((parseInt(weight) / 2.2).toString())
    }
    else{
        setUnit("lb")
        setWeight((parseInt(weight) * 2.2).toString())
    }
}


	return (
		<Flex h="100vh" justify="center" align="center">
			<Flex>
				<Input
					placeholder="Basic usage"
					mr="8px"
					value={weight}
					onChange={(e) => setWeight(e.target.value)}
				/>{" "}
				<Button onClick={() => handleConvert()}>{unit}</Button>
			</Flex>
		</Flex>
	);
}
