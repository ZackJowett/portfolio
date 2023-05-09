import Button from "@/components/objects/button/Button";
import styles from "./CallToAction.module.scss";

export default function CallToAction() {
	return (
		<>
			<Button
				href="#contact"
				title="Hire Me"
				className={styles.button}
				dark
			/>
		</>
	);
}
