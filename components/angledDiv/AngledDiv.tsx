import styles from "./AngledDiv.module.scss";

export default function AngledDiv() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.rotateElement}>
				<div className={`${styles.text} ${styles.header}`}>
					<h1>Zachary Jowett</h1>
				</div>
				<div className={`${styles.overflowWrapper}`}>
					<div className={styles.text}>
						<h3>Projects</h3>
					</div>
					<div className={`${styles.angledDiv} ${styles.left}`}></div>
				</div>
				<div className={`${styles.overflowWrapper} `}>
					<div className={styles.text}>
						<h3>GitHub</h3>
					</div>
					<div
						className={`${styles.angledDiv} ${styles.right}`}></div>
				</div>
				<div className={`${styles.overflowWrapper} `}>
					<div className={styles.text}>
						<h3>Me</h3>
					</div>
					<div className={`${styles.angledDiv} ${styles.left}`}></div>
				</div>
				<div className={`${styles.overflowWrapper} `}>
					<div className={styles.text}>
						<h3>Contact</h3>
					</div>
					<div
						className={`${styles.angledDiv} ${styles.right}`}></div>
				</div>
			</div>
		</div>
	);
}
