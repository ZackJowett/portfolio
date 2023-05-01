import { useState } from "react";
import styles from "./Title.module.scss";

interface Props {
	className?: string;
}

export default function Title({ className }: Props) {
	const [currColor, setCurrColor] = useState("#1f66ff");

	function changeRootColor(color: string) {
		setCurrColor(color);
		document.documentElement.style.setProperty("--primary", color);
	}

	return (
		<div className={`${className} ${styles.title}`}>
			<h1 className={styles.first}>
				<span
					className={`${styles.primary} ${
						currColor == "#1f66ff" && styles.current
					}`}
					onClick={() => changeRootColor("#1f66ff")}>
					Z
				</span>
				<span
					className={`${styles.orange} ${
						currColor == "orange" && styles.current
					}`}
					onClick={() => changeRootColor("orange")}>
					A
				</span>
				<span
					className={`${styles.grey} ${
						currColor == "grey" && styles.current
					}`}
					onClick={() => changeRootColor("grey")}>
					C
				</span>
				<span
					className={`${styles.purple} ${
						currColor == "purple" && styles.current
					}`}
					onClick={() => changeRootColor("purple")}>
					H
				</span>
				<span
					className={`${styles.red} ${
						currColor == "red" && styles.current
					}`}
					onClick={() => changeRootColor("red")}>
					A
				</span>
				<span
					className={`${styles.green} ${
						currColor == "green" && styles.current
					}`}
					onClick={() => changeRootColor("green")}>
					R
				</span>
				<span
					className={`${styles.lightBlue} ${
						currColor == "lightblue" && styles.current
					}`}
					onClick={() => changeRootColor("lightblue")}>
					Y
				</span>
			</h1>
			<p className={styles.last}>JOWETT</p>
		</div>
	);
}
