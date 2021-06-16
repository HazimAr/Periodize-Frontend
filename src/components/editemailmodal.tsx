import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CFormikInput from "@components/formikinput";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import useProfile from "@hooks/useProfile";

// import GlassBgBox from "@components/glassbg";

export default function EditEmail() {
	const EditSchema = Yup.object().shape({

		email: Yup.string().email("Invalid email").required("Required"),
	});

	interface MyFormValues {
		email: string;
	}
	const user: any = useProfile();
	const initialValues: MyFormValues = {
		email: user?.email,
	};

	return (
		<Box>
			<Text mt="10px" mb="20px" fontSize="25px" fontWeight="bold">
				Change your new email
			</Text>
			<Formik
				initialValues={initialValues}
				validationSchema={EditSchema}
				onSubmit={(values) => {
					// same shape as initial values
					alert(JSON.stringify(values, null, 2));
				}}
			>
				{/* @ts-ignore */}
				{({ errors, touched }) => (
					<Form>
						<Box p="4">
							<Text
								align="left"
								mt="20px"
								mb="5px"
								fontWeight="bold"
								fontSize="13px"
							>
								EMAIL
							</Text>
							<Field
								name="email"
								type="email"
								component={CFormikInput}
							/>
						</Box>
						<Flex flexDir="row-reverse" mt="20px" bg="black" p="2">
							<Button variant="solid" type="submit">
								Submit
							</Button>
							<Button variant="ghost" p="2" mr="15px">
								Cancel
							</Button>
						</Flex>
					</Form>
				)}
			</Formik>
		</Box>
	);
}
