import styles from "./ProgressBar.module.scss";

interface Props {
	title: string;
	percentage: number;
	icon?: React.ReactNode;
}

export default function ProgressBar({ title, percentage, icon }: Props) {
	return (
		<>
			<div className={styles.progressBar}>
				<div
					className={styles.progress}
					style={{ width: `${percentage}%` }}></div>

				<p className={styles.title}>
					{icon && <span className={styles.icon}>{icon}</span>}
					{title}
				</p>
			</div>
		</>
	);
}
