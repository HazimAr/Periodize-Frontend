import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

const arrData = [{ liftName: "bench", load: "315", reps: "5" }];

export default function PRList({ history, match }) {
	const { id } = match.params;
	const isAddMode = !id;

	const initialValues = {
		title: "",
		firstName: "",
		lastName: "",
		email: "",
		role: "",
		password: "",
		confirmPassword: "",
	};

	const validationSchema = Yup.object().shape({});

	// function onSubmit(fields, { setStatus, setSubmitting }) {
	// 	setStatus();
	// 	if (isAddMode) {
	// 		createUser(fields, setSubmitting);
	// 	} else {
	// 		updateUser(id, fields, setSubmitting);
	// 	}
	// }

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{({ errors, touched, isSubmitting, setFieldValue }) => {
				const [user, setUser] = useState({});

				useEffect(() => {
					if (!isAddMode) {
						// get user and set form fields
						userService.getById(id).then((user) => {
							const fields = [
								"title",
								"firstName",
								"lastName",
								"email",
								"role",
							];
							fields.forEach((field) =>
								setFieldValue(field, user[field], false)
							);
							setUser(user);
						});
					}
				}, []);

				return (
					<Form>
						<h1>{isAddMode ? "Add User" : "Edit User"}</h1>
						<div className="form-row">
							<div className="form-group col">
								<label>Title</label>
								<Field
									name="title"
									as="select"
									className={
										"form-control" +
										(errors.title && touched.title
											? " is-invalid"
											: "")
									}
								>
									<option value=""></option>
									<option value="Mr">Mr</option>
									<option value="Mrs">Mrs</option>
									<option value="Miss">Miss</option>
									<option value="Ms">Ms</option>
								</Field>
								<ErrorMessage
									name="title"
									component="div"
									className="invalid-feedback"
								/>
							</div>
							<div className="form-group col-5">
								<label>First Name</label>
								<Field
									name="firstName"
									type="text"
									className={
										"form-control" +
										(errors.firstName && touched.firstName
											? " is-invalid"
											: "")
									}
								/>
								<ErrorMessage
									name="firstName"
									component="div"
									className="invalid-feedback"
								/>
							</div>
							<div className="form-group col-5">
								<label>Last Name</label>
								<Field
									name="lastName"
									type="text"
									className={
										"form-control" +
										(errors.lastName && touched.lastName
											? " is-invalid"
											: "")
									}
								/>
								<ErrorMessage
									name="lastName"
									component="div"
									className="invalid-feedback"
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-7">
								<label>Email</label>
								<Field
									name="email"
									type="text"
									className={
										"form-control" +
										(errors.email && touched.email
											? " is-invalid"
											: "")
									}
								/>
								<ErrorMessage
									name="email"
									component="div"
									className="invalid-feedback"
								/>
							</div>
							<div className="form-group col">
								<label>Role</label>
								<Field
									name="role"
									as="select"
									className={
										"form-control" +
										(errors.role && touched.role
											? " is-invalid"
											: "")
									}
								>
									<option value=""></option>
									<option value="User">User</option>
									<option value="Admin">Admin</option>
								</Field>
								<ErrorMessage
									name="role"
									component="div"
									className="invalid-feedback"
								/>
							</div>
						</div>
						{!isAddMode && (
							<div>
								<h3 className="pt-3">Change Password</h3>
								<p>Leave blank to keep the same password</p>
							</div>
						)}

						<div className="form-group">
							<button
								type="submit"
								disabled={isSubmitting}
								className="btn btn-primary"
							>
								{isSubmitting && (
									<span className="spinner-border spinner-border-sm mr-1"></span>
								)}
								Save
							</button>
							<Link
								to={isAddMode ? "." : ".."}
								className="btn btn-link"
							>
								Cancel
							</Link>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
}
