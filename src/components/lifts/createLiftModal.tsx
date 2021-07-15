import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import {
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { Field, FieldArray, Form, Formik } from "formik";
import React, { ReactElement, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";
import * as Yup from "yup";
import { CreateLiftInput, CreateLiftMutation, Lift } from "../../API";
import { createLift } from "../../graphql/mutations";
import FormikRadio from "../formikcheckbox";
import FormikInput from "../formikinput";
import FormikSelect from "../formikselect";
export default function CreateLiftModal(props: any): ReactElement {
  const [newTag, setnewTag] = useState("");
  const [error, setError] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const CHeart = chakra(FaHeart);

  const LiftSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "too short")
      .required("Required")
      .max(25, "Too long!"),
    category: Yup.string(),
    favorite: Yup.string(),
    bodypart: Yup.array()
      .min(1, "Add atleast 1 focus")
      .required("Required")
      .of(Yup.string()),
    tags: Yup.array().max(7, "Can add up to 7 tags").of(Yup.string()),
    unit: Yup.string().required("Required"),
  });

  interface LiftFormInput {
    name: string;
    category: string;
    bodypart: string[];
    tags: string[];
    favorite: string;
    unit: string;
  }

  const initialValues: LiftFormInput = {
    name: "",
    category: "main movement",
    bodypart: [],
    tags: [],
    favorite: "false",
    unit: "lbs",
  };
  const body = [
    { label: "fullbody", e: "🏋🏼‍♀️", id: "1" },
    { label: "upper", e: "🦖", id: "2" },
    { label: "lower", e: "🦘", id: "3" },
    { label: "legs", e: "🦵🏻", id: "4" },
    { label: "back", e: "🦍", id: "5" },
    { label: "chest", e: "🐄", id: "6" },
    { label: "arms", e: "💪🏻", id: "7" },
    { label: "glutes", e: "🍑", id: "8" },
    { label: "abs", e: "😳", id: "9" },
    { label: "forearms", e: "🙏🏾", id: "10" },
    { label: "cardio", e: "🚴🏼‍♂️", id: "11" },
  ];
  console.log(props.lifts);
  return (
    <>
      <Button onClick={onOpen}>Add Lift</Button>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Track New Lift</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={initialValues}
              onSubmit={async (values, actions) => {
                console.log("form values: ", JSON.stringify(values, null, 2));
                if (
                  props.lifts.filter((e) => e.name === values.name).length > 0
                ) {
                  console.log("you are already tracking: ", values.name);
                  setError(`You are already tracking ${values.name}`);
                  return;
                }
                const newLiftInput: CreateLiftInput = values;

                const createNewLift = (await API.graphql({
                  query: createLift,
                  variables: { input: newLiftInput },
                  authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
                })) as { data: CreateLiftMutation };

                console.log(createNewLift);
                props.setLifts([
                  ...props.lifts,
                  createNewLift.data.createLift as Lift,
                ]);
                actions.setSubmitting(false);
                onClose();
              }}
              validationSchema={LiftSchema}
              validateOnBlur={false}
              validateOnChange={false}
            >
              {({ values, errors, setFieldValue, isSubmitting }) => (
                <Form>
                  <VStack spacing={4}>
                    <Flex>
                      <Field name="name" component={FormikInput} />
                      <IconButton
                        aria-label="favorite"
                        icon={
                          <CHeart
                            color={
                              values.favorite === "true" ? "red.600" : "white"
                            }
                          />
                        }
                        onClick={() => {
                          if (values.favorite === "true") {
                            setFieldValue("favorite", "false");
                          } else {
                            setFieldValue("favorite", "true");
                          }
                        }}
                      />
                    </Flex>
                    <Flex w="100%" justify="space-around">
                      <Box w="45%">
                        <Field
                          name="category"
                          component={FormikSelect}
                          choices={[
                            "main movement",
                            "accessory",
                            "warm up",
                            "cardio",
                            "rehab",
                            "sport",
                          ]}
                        />
                      </Box>
                      <Box w="40%">
                        <Field
                          name="unit"
                          component={FormikSelect}
                          choices={[
                            "lbs",
                            "kilo",
                            "meters",
                            "feet",
                            "laps",
                            "bodyweight",
                          ]}
                        />
                      </Box>
                    </Flex>

                    <HStack spacing={4} wrap="wrap">
                      {body.map((part) => {
                        return (
                          <Field
                            type="checkbox"
                            name="bodypart"
                            value={part.label}
                            component={FormikRadio}
                            part={part}
                            key={part.id}
                          />
                        );
                      })}
                    </HStack>

                    <FieldArray
                      name="tags"
                      render={(arrayHelpers) => (
                        <Box>
                          <Flex>
                            <Input
                              value={newTag}
                              onChange={(e) => setnewTag(e.currentTarget.value)}
                            />
                            <Button
                              onClick={() => {
                                if (
                                  newTag !== "" &&
                                  !values.tags.includes(newTag)
                                ) {
                                  arrayHelpers.push(newTag);
                                  setnewTag("");
                                }
                              }}
                            >
                              Add Tag
                            </Button>
                          </Flex>

                          <HStack spacing={2} wrap="wrap" py={2}>
                            {values.tags.map((tag, i) => {
                              return (
                                <Box
                                  key={tag}
                                  px={2}
                                  py="4px"
                                  borderRadius="md"
                                  border="1px solid white"
                                  my={1}
                                >
                                  {tag}
                                  <IconButton
                                    aria-label="remove tag"
                                    icon={<RiDeleteBack2Line />}
                                    onClick={() => arrayHelpers.remove(i)}
                                    _focus={{ outline: "none" }}
                                    variant="ghost"
                                    size="xs"
                                  />
                                </Box>
                              );
                            })}
                          </HStack>
                        </Box>
                      )}
                    />
                    {error ? <Box>{error}</Box> : null}
                    <Box mb={3}>
                      <Button type="submit" disabled={isSubmitting}>
                        Submit
                      </Button>
                    </Box>
                  </VStack>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
