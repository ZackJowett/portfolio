import styles from "./Heading.module.scss";
import Link from "next/link";

interface Props {
	className?: string;
	title: string;
	subtitle?: string;
	reverse?: boolean;
}

export default function Heading({
	className,
	title,
	subtitle,
	reverse = false,
}: Props) {
	return (
		<Link
			href="/"
			className={`${className} ${styles.title} ${
				reverse ? styles.reverse : ""
			}`}>
			<h1 className={styles.first}>{title}</h1>
			<p className={styles.last}>{subtitle}</p>
		</Link>
	);
}
