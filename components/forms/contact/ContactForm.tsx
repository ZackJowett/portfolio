import styles from "./ContactForm.module.scss";
import { IoMail, IoPerson } from "react-icons/io5";
import Button from "@/components/objects/button/Button";
import Input from "../input/Input";
import { FormikErrors, FormikValues, useFormik } from "formik";

interface FormValues {
	name: string;
	email: string;
	message: string;
}

// Validation function for the form
// Later: Use 'Yup' for validation
const validate = (values: FormValues) => {
	const errors: FormikErrors<FormValues> = {};
	if (!values.name) {
		errors.name = "Required";
	} else if (values.name.length > 15) {
		errors.name = "Must be 15 characters or less";
	}

	if (!values.email) {
		errors.email = "Required";
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Invalid email address";
	}

	if (!values.message) {
		errors.message = "Required";
	}

	return errors;
};

export default function ContactForm() {
	// Use Formik form generator/handler library
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validate,
		onSubmit: (values) => {
			// Called when form is submitted
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div className={styles.wrapper}>
			<form className={styles.form} onSubmit={formik.handleSubmit}>
				{/* ------ Name ------ */}
				<Input
					type={"input"}
					placeholder={"Name"}
					// generates name, onChange, onBlur, value props
					{...formik.getFieldProps("name")}
				/>

				{/* Error Message */}
				{formik.touched.name && formik.errors.name ? (
					<p>{formik.errors.name}</p>
				) : null}

				{/* ------ Email ------*/}
				<Input
					placeholder={"Email"}
					type={"email"}
					{...formik.getFieldProps("email")}
				/>

				{/* Error Message */}
				{formik.touched.email && formik.errors.email ? (
					<p>{formik.errors.email}</p>
				) : null}

				{/* ------ Message ------ */}
				<textarea
					id="message"
					name="message"
					placeholder="Enter your message"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.message}
					rows={10}
					onInput={(e) => auto_grow(e.target)}
					className={styles.textarea}
				/>

				{/* Error Message */}
				{formik.touched.message && formik.errors.message ? (
					<p>{formik.errors.message}</p>
				) : null}

				{/* ------ Submit ------ */}
				<Button title="Send" submit />
			</form>
		</div>
	);
}

function auto_grow(element: any) {
	element.style.height = "5px";
	element.style.height = element.scrollHeight + "px";
}
