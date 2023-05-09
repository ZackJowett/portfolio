import styles from "./Title.module.scss";

interface Props {
	className?: string;
	title: string;
	subtitle?: string;
}

export default function Heading({ className, title, subtitle }: Props) {
	return (
		<div className={`${className} ${styles.wrapper}`}>
			<h2 className={styles.title}>{title}</h2>
			{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
		</div>
	);
}
