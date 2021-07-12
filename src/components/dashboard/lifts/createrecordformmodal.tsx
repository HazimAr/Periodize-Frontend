import React, { ReactElement, useState, useEffect } from "react";
import {
	Box,
	Button,
	FormLabel,
	Stack,
	VStack,
	Flex,
	Heading,
} from "@chakra-ui/react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import FormikInput from "@components/formikinput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import DatePicker from "react-datepicker/dist/react-datepicker";

//invalid date
//

interface Props {}

const formSchema = Yup.object().shape({
	load: Yup.number()
		.min(1, "too short")
		.required("Required")
		.positive("Provide a positive number")
		.max(25, "Too long!"),
	warmup: Yup.number()
		.min(1, "too short")
		.positive("Provide a positive number")
		.max(99, "Too long!"),
	sets: Yup.number()
		.min(1, "Atleast do one set!")
		.required("Required")
		.max(999, "Too long!")
		.positive("Has to be positive")
		.integer("Has to be an integer"),
	reps: Yup.number()
		.min(1, "too short")
		.required("Required")
		.max(999, "Too long!")
		.positive("Has to be positive")
		.integer("Has to be an integer"),
	rpe: Yup.number()
		.min(1, "too short")
		.required("Required")
		.max(10, "Too long!"),
	//validate date
});
interface formInput {
	load: string;
	warmup: string;
	sets: string;
	reps: string;
	rpe: string;
	datePerformed: string;
}
const initialValues: formInput = {
	load: "",
	warmup: "",
	sets: "",
	reps: "",
	rpe: "",
	datePerformed: "",
};

export default function CreateRecordFormModal({}: Props): ReactElement {
	const [name, setName] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		console.log(name);
	}, [name]);

	return (
		<>
			<Button onClick={onOpen}>Create record</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Formik
							initialValues={initialValues}
							onSubmit={(values, actions) => {
								setTimeout(() => {
									alert(JSON.stringify(values, null, 2));
									actions.setSubmitting(false);
								}, 1000);
							}}
							validationSchema={formSchema}
							validateOnChange={false}
						>
							{({ values, errors, isSubmitting }) => (
								<Form>
									{/* <Input value={name} onChange={(e) => setName(e.currentTarget.value)} /> */}
									<Box
										bg="brand.500"
										maxW="5xl"
										borderRadius="25px"
										py="30px"
									>
										<VStack spacing={2}>
											<Heading size="lg" my="20px">
												Create record
											</Heading>
											<Flex>
												<VStack mx="10px">
													<FormLabel>
														Warmup{" "}
													</FormLabel>
													<Field
														name="warmup"
														component={FormikInput}
													/>
												</VStack>
												<VStack mx="10px">
													<FormLabel>Sets </FormLabel>
													<Field
														name="sets"
														component={FormikInput}
													/>
												</VStack>
												<VStack mx="10px">
													<FormLabel>Reps </FormLabel>
													<Field
														name="reps"
														component={FormikInput}
													/>
												</VStack>
											</Flex>

											<Flex>
												<VStack mx="10px">
													<FormLabel>Load </FormLabel>
													<Field
														name="load"
														component={FormikInput}
													/>
												</VStack>
												<VStack mx="10px">
													<FormLabel>Rpe </FormLabel>
													<Field
														name="rpe"
														component={FormikInput}
													/>
												</VStack>
											</Flex>

											<Flex color="black">
												<VStack mx="10px">
													<FormLabel>Date </FormLabel>
													<DatePicker
														selected={startDate}
														onChange={(date) =>
															setStartDate(date)
														}
													/>
												</VStack>
											</Flex>

											<Box>
												<Button
													type="submit"
													my="10px"
													bg="brand.200"
													color="brand.600"
												>
													Submit
												</Button>
											</Box>
										</VStack>
									</Box>

									<pre>{JSON.stringify(values, null, 2)}</pre>

									{/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
								</Form>
							)}
						</Formik>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost">Secondary Action</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
