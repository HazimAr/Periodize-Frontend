import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { Field, FieldArray, Form, Formik } from "formik";
import React, { ReactElement, useState } from "react";
import { BiNote } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";
import * as Yup from "yup";
import { Lift, LiftsByUserQuery } from "../../API";
import { useUser } from "../../context/AuthContext";
import { liftsByUser } from "../../graphql/queries";
import FormikRadio from "../formikcheckbox";
import FormikInput from "../formikinput";
import FormikSelect from "../formikselect";
import FormikTextArea from "../formiktextarea";
export default function LiftsList(): ReactElement {
  const { user } = useUser();
  const [lifts, setLifts] = useState<Lift[]>([]);
  const [hasUser, setHasUser] = useState(false);

  const [newTag, setnewTag] = useState("");
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const CHeart = chakra(FaHeart);
  const fetchMyLifts = async (): Promise<Lift[]> => {
    const myLifts = (await API.graphql({
      query: liftsByUser,
      variables: {
        owner: user.getUsername(),
      },
    })) as {
      data: LiftsByUserQuery;
      errors: any;
    };
    if (myLifts.data) {
      setLifts(myLifts.data.liftsByUser.items as Lift[]);
      return myLifts.data.liftsByUser.items as Lift[];
    } else {
      throw new Error("Could not get lifts");
    }
  };
  if (!user) {
    return <Box>Loading lifts...</Box>;
  }
  if (user && !hasUser) {
    fetchMyLifts();
    setHasUser(true);
  }
  const LiftSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "too short")
      .required("Required")
      .max(25, "Too long!"),
    description: Yup.string()
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
  });

  interface LiftFormInput {
    name: string;
    description: string;
    category: string;
    bodypart: string[];
    tags: string[];
    favorite: string;
  }

  const initialValues: LiftFormInput = {
    name: "",
    description: "",
    category: "main movement",
    bodypart: [],
    tags: [],
    favorite: "false",
  };
  const body = [
    { label: "fullbody", e: "🚶‍♂️", id: "1" },
    { label: "legs", e: "🦵🏻", id: "2" },
    { label: "back", e: "🦍", id: "3" },
    { label: "chest", e: "🐄", id: "4" },
    { label: "arms", e: "💪🏻", id: "5" },
    { label: "glutes", e: "🍑", id: "6" },
    { label: "abs", e: "😳", id: "10" },
    { label: "forearms", e: "", id: "9" },
  ];
  console.log("current user: ", user);
  console.log(lifts);
  return (
    <Container>
      <Heading>My Lifts</Heading>

      <Stack as="ul" spacing="4" my="4">
        <Flex justify="space-between" align="center">
          <Box>
            <InputGroup size="md">
              <InputLeftElement pointerEvents="none">
                <BsSearch opacity={0.5} />
              </InputLeftElement>

              <Input
                rounded="md"
                placeholder="Search lifts"
                // bg={mode("white", "gray.900")}
                _placeholder={{
                  opacity: 1,
                  // color: mode("gray.400", "gray.500"),
                }}
              />
            </InputGroup>
          </Box>
          <Flex>
            Sort by: <Button onClick={onOpen}>Add Lift</Button>
            <Modal onClose={onClose} isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Track New Lift</ModalHeader>
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
                    validationSchema={LiftSchema}
                    validateOnChange={false}
                  >
                    {({ values, errors, setFieldValue, isSubmitting }) => (
                      <Form>
                        <Flex>
                          <Field name="name" component={FormikInput} />
                          <IconButton
                            aria-label="favorite"
                            icon={
                              <CHeart
                                color={
                                  values.favorite === "true"
                                    ? "red.600"
                                    : "none"
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
                          <IconButton
                            aria-label="add description"
                            icon={<BiNote />}
                            onClick={() => setShow(!show)}
                          />
                        </Flex>
                        {show ? (
                          <Field
                            name="description"
                            component={FormikTextArea}
                          />
                        ) : null}
                        <Field
                          name="category"
                          component={FormikSelect}
                          choices={[
                            "main movement",
                            "accesory",
                            "warm up",
                            "cardio",
                            "rehab",
                            "sport",
                          ]}
                        />
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
                        <FieldArray
                          name="tags"
                          render={(arrayHelpers) => (
                            <Box>
                              <Input
                                value={newTag}
                                onChange={(e) =>
                                  setnewTag(e.currentTarget.value)
                                }
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
                              <Flex>
                                {values.tags.map((tag, i) => {
                                  return (
                                    <Box
                                      key={tag}
                                      px={2}
                                      py={1}
                                      borderRadius="md"
                                      border="1px solid white"
                                    >
                                      {tag}
                                      <IconButton
                                        aria-label="remove tag"
                                        icon={<RiDeleteBack2Line />}
                                        onClick={() => arrayHelpers.remove(i)}
                                        _focus={{ outline: "none" }}
                                        variant="ghost"
                                      />
                                    </Box>
                                  );
                                })}
                              </Flex>
                            </Box>
                          )}
                        />

                        <Box>
                          <Button type="submit" disabled={isSubmitting}>
                            Submit
                          </Button>
                        </Box>
                      </Form>
                    )}
                  </Formik>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
        {lifts.map((lift) => {
          return (
            <Flex justify="space-between" key={lift.id}>
              <Box>{lift.name}</Box>
              <Flex></Flex>
            </Flex>
          );
        })}
      </Stack>
    </Container>
  );
}
