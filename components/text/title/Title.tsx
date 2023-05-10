import styles from "./Title.module.scss";

interface Props {
	className?: string;
	title: string;
	subtitle?: string;
	align?: "left" | "center" | "right";
}

export default function Title({
	className,
	title,
	subtitle,
	align = "center",
}: Props) {
	return (
		<div
			className={`${className} ${styles.wrapper}`}
			style={{ textAlign: align }}>
			<h2 className={styles.title}>{title}</h2>
			{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
		</div>
	);
}
