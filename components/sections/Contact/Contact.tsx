import ContactForm from "@/components/forms/contact/ContactForm";
import Title from "@/components/text/title/Title";
import styles from "./Contact.module.scss";

export default function Contact() {
	return (
		<>
			<div className={styles.details}>
				<Title title="Contact" />
				<a href="mailto:zachary.jowett@gmail.com">
					<Title
						small
						title="zachary.jowett@gmail.com"
						subtitle="Email"
						align="left"
						reverse
					/>
				</a>
				<Title
					small
					title="0473370000"
					subtitle="Phone"
					align="left"
					reverse
				/>
			</div>

			<Title
				small
				title="Quick Contact"
				className={styles.contactFormTitle}
			/>
			<ContactForm />
		</>
	);
}
