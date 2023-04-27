import MainNav from "@/components/nav/MainNav";
import styles from "./Title.module.scss";

export default function Title() {
	return (
		<div className={styles.wrapper}>
			<div>
				<h1 className={styles.first}>ZACHARY</h1>
				<p className={styles.last}>JOWETT</p>
			</div>

			<MainNav />
		</div>
	);
}
