import Link from "next/link";
import styles from "./Button.module.scss";

interface Props {
	className?: string;
	title: any | React.ReactNode;
	href?: string;
	dark?: boolean;
	submit?: boolean;
	disabled?: boolean;
}

export default function Button({
	className,
	title,
	href,
	dark,
	submit,
	disabled = false,
}: Props) {
	return (
		<>
			{href ? (
				<Link
					href={href}
					className={`${className ? className : ""} ${styles.link} ${
						dark ? styles.dark : ""
					} ${disabled ? styles.disabled : ""}`}>
					{title}
				</Link>
			) : (
				<button
					type={submit ? "submit" : "button"}
					className={`${className ? className : ""} ${
						styles.submit
					} ${dark ? styles.dark : ""} ${
						disabled ? styles.disabled : ""
					}`}
					disabled={disabled}>
					{title}
				</button>
			)}
		</>
	);
}
