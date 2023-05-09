import Link from "next/link";
import styles from "./Button.module.scss";

interface Props {
	className?: string;
	title: any;
	href?: string;
	dark?: boolean;
}

export default function Button({ className, title, href, dark }: Props) {
	return (
		<>
			{href ? (
				<Link
					href={href}
					className={`${className ? className : ""} ${styles.link} ${
						dark ? styles.dark : ""
					}`}>
					{title}
				</Link>
			) : (
				<button
					className={`${className ? className : ""} ${
						styles.submit
					} ${dark ? styles.dark : ""}`}>
					{title}
				</button>
			)}
		</>
	);
}
