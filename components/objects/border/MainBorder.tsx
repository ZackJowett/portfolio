import styles from "./MainBorder.module.scss";

export default function MainBorder() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.border} />
		</div>
	);
}
