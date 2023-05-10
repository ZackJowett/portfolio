import styles from "./ContactForm.module.scss";
import { IoMail, IoPerson } from "react-icons/io5";
import Button from "@/components/objects/button/Button";
import Input from "../input/Input";

export default function ContactForm() {
	return (
		<div className={styles.wrapper}>
			<form className={styles.form}>
				<Input
					name={"name"}
					placeholder={"Name"}
					type={"input"}
					icon={<IoPerson />}></Input>
				<Input
					name={"email"}
					placeholder={"Email"}
					type={"email"}
					icon={<IoMail />}></Input>
				<textarea
					name="message"
					placeholder="Enter your message"
					rows={10}
					onInput={(e) => auto_grow(e.target)}
					className={styles.textarea}></textarea>
				<Button title="Send" />
			</form>
		</div>
	);
}

function auto_grow(element: any) {
	element.style.height = "5px";
	element.style.height = element.scrollHeight + "px";
}
