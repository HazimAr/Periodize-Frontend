import {
	Box,
	Heading,
	Text,
	Flex,
	UnorderedList,
	Button,
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

	return (
		<Box>
			<Box>
				<Heading>Personal Records</Heading>
			</Box>
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
						<Button
							type="submit"
							my="10px"
							bg="linear-gradient(#8c00ff7b, #5b6d9ecc)"
						>
							Submit
						</Button>
					</Form>
				</Formik>
			</Box>
		</Box>
	);
}

/*
notes: Form that had 

*/
