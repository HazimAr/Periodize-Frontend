import {
	Box,
	Heading,
	Text,
	Flex,
	UnorderedList,
	Button,
	ButtonProps,
	BoxProps,
} from "@chakra-ui/react";
import Layout from "@components/dashboard/personalrecords/addprform";
import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
} from "formik";
import CFormikInput from "@components/formikinput";
import * as Yup from "yup";
import { SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

//styled(Box) motion(Box)

const MotionButton = motion<ButtonProps>(Button);
const MotionBox = motion<BoxProps>(Box);
interface MyFormValues {
	liftName: string;
	load: string;
	reps: string;
}

const PRSchema = Yup.object().shape({
	liftName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	load: Yup.number().positive().integer().required("Required"),
	reps: Yup.number().positive().integer().required("Required"),
});

export default function PRForm(): JSX.Element {
	const initialValues: MyFormValues = { liftName: "", load: "", reps: "" };
	const [visible, setVisible] = useState(false);

	const [color, setColor] = useState(false);
	//immutable setColor is a function! setColor("new value")

	const variants = {
		start: {
			opacity: 0,
			x: -300,
			y: -200,
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: { ease: "easeOut", duration: 2 },
		},
	};
	return (
		<Box>
			<MotionBox
				initial="start"
				animate="visible"
				variants={variants}
				// transition={{ ease: "easeOut", duration: 2 }}
			>
				<Heading color={color === true ? "gold" : ""}>
					Personal Records
				</Heading>
			</MotionBox>
			<Box border="2px solid" borderRadius="5px" mt="20px" px="20px">
				<Formik
					initialValues={initialValues}
					onSubmit={(values, actions) => {
						console.log({ values, actions });
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
					}}
					validationSchema={PRSchema}
				>
					<Form>
						<SimpleGrid columns={3} mt="40px" spacingX={"20px"}>
							<Text textAlign="left">Lift Name</Text>
							<Text textAlign="left">Load</Text>
							<Text textAlign="left">Reps</Text>
							<Field
								id="liftName"
								name="liftName"
								// placeholder="First Name"
								component={CFormikInput}
							/>

							<Field
								id="load"
								name="load"
								// placeholder="First Name"
								component={CFormikInput}
							/>

							<Field
								id="reps"
								name="reps"
								// placeholder="First Name"
								component={CFormikInput}
							/>
						</SimpleGrid>
						<MotionButton
							type="submit"
							my="10px"
							bg="linear-gradient(#8c00ff7b, #5b6d9ecc)"
							whileHover={{ scale: 1.1 }}
							whileTap={{
								scale: 0.8,
								backgroundColor: "purple",
							}}
							// _hover={{}}
							animate
						>
							Submit
						</MotionButton>
						<MotionBox
							onHoverStart={() => {
								setColor(true);
							}}
							onHoverEnd={() => {
								setColor(false);
							}}
						>
							Hover Me!!!
						</MotionBox>

						{visible ? <Box mt="20px">Noa can see me</Box> : null}
					</Form>
				</Formik>
			</Box>
		</Box>
	);
}

/*
notes: Form that had 

*/
