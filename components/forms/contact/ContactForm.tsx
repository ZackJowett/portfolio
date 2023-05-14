import styles from "./ContactForm.module.scss";
import { IoMail, IoPerson } from "react-icons/io5";
import Button from "@/components/objects/button/Button";
import Input from "../input/Input";
import { FormikErrors, FormikValues, useFormik } from "formik";

interface FormValues {
	name: string;
	email: string;
	subject: string;
	message: string;
}

// Validation function for the form
// Later: Use 'Yup' for validation
const validate = (values: FormValues) => {
	const errors: FormikErrors<FormValues> = {};
	if (!values.name) {
		errors.name = "Required";
	} else if (values.name.length > 70) {
		errors.name = "Must be 70 characters or less";
	}

	if (!values.email) {
		errors.email = "Required";
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Invalid email address";
	} else if (values.email.length > 320) {
		errors.email = "Must be 320 characters or less";
	}

	if (!values.subject) {
		errors.subject = "Required";
	} else if (values.subject.length > 255) {
		errors.subject = "Must be 255 characters or less";
	}

	if (!values.message) {
		errors.message = "Required";
	} else if (values.message.length > 10000) {
		errors.message = "Must be 10,000 characters or less";
	}

	return errors;
};

export default function ContactForm() {
	// Use Formik form generator/handler library
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validate,
		onSubmit: (values: FormValues) => {
			// Called when form is submitted
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div className={styles.wrapper}>
			<form className={styles.form} onSubmit={formik.handleSubmit}>
				{/* ------ Name ------ */}
				<Input
					className={`${
						formik.touched.name && formik.errors.name
							? styles.error
							: ""
					}`}
					type={"input"}
					placeholder={"Name"}
					// generates name, onChange, onBlur, value props
					{...formik.getFieldProps("name")}
				/>

				{/* Error Message */}
				{formik.touched.name && formik.errors.name ? (
					<p className={styles.errorMessage}> {formik.errors.name}</p>
				) : null}

				{/* ------ Email ------*/}
				<Input
					className={`${
						formik.touched.email && formik.errors.email
							? styles.error
							: ""
					}`}
					placeholder={"Email"}
					type={"email"}
					{...formik.getFieldProps("email")}
				/>

				{/* Error Message */}
				{formik.touched.email && formik.errors.email ? (
					<p className={styles.errorMessage}>{formik.errors.email}</p>
				) : null}

				{/* ------ Subj ------ */}
				<Input
					className={`${
						formik.touched.subject && formik.errors.subject
							? styles.error
							: ""
					}`}
					type={"input"}
					placeholder={"Subject"}
					// generates name, onChange, onBlur, value props
					{...formik.getFieldProps("subject")}
				/>

				{/* Error Message */}
				{formik.touched.subject && formik.errors.subject ? (
					<p className={styles.errorMessage}>
						{" "}
						{formik.errors.subject}
					</p>
				) : null}

				{/* ------ Message ------ */}
				<textarea
					id="message"
					name="message"
					placeholder="Enter your message"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.message}
					rows={500}
					onInput={(e) => auto_grow(e.target)}
					className={`${styles.textarea} ${
						formik.touched.message && formik.errors.message
							? styles.error
							: ""
					}`}
				/>

				{/* Error Message */}
				{formik.touched.message && formik.errors.message ? (
					<p className={styles.errorMessage}>
						{formik.errors.message}
					</p>
				) : null}

				{/* ------ Submit ------ */}
				<Button submit title="Send" className={styles.submit} />
			</form>
		</div>
	);
}

function auto_grow(element: any) {
	element.style.height = "5px";
	element.style.height = element.scrollHeight + "px";
}
