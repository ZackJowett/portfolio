import styles from "./AngledDiv.module.scss";

export default function AngledDiv() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.rotateElement}>
				<div className={styles.angledDiv}>
					<div className={styles.text}>
						<h1>Zachary Jowett</h1>
					</div>
				</div>
				<div className={styles.angledDiv}>
					<div className={styles.text}>
						<h1>Projects</h1>
					</div>
				</div>
				<div className={styles.angledDiv}>
					<div className={styles.text}>
						<h1>Me</h1>
					</div>
				</div>
				<div className={styles.angledDiv}>
					<div className={styles.text}>
						<h1>Contact</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
