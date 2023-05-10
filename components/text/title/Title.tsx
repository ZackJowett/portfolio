import styles from "./Title.module.scss";

interface Props {
	className?: string;
	title: string;
	subtitle?: string;
	align?: "left" | "center" | "right";
	small?: boolean;
	reverse?: boolean;
}

export default function Title({
	className,
	title,
	subtitle,
	align = "center",
	small,
	reverse,
}: Props) {
	return (
		<div
			className={`${className} ${styles.wrapper} ${
				small ? styles.small : ""
			} ${reverse ? styles.reverse : ""}`}
			style={{ textAlign: align }}>
			{small ? (
				<h4 className={styles.title}>{title}</h4>
			) : (
				<h2 className={styles.title}>{title}</h2>
			)}

			{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
		</div>
	);
}
