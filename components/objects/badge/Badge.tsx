import styles from "./Badge.module.scss";

interface Props {
	className?: string;
	text: string;
	secondary?: boolean;
}

export default function Badge({ className, text, secondary }: Props) {
	return (
		<div
			className={`${className} ${styles.badge} ${
				secondary && styles.secondary
			}`}>
			<p className={styles.text}>{text}</p>
		</div>
	);
}
