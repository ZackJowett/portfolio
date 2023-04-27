import Button from "../objects/button/Button";
import styles from "./MainNav.module.scss";

export default function MainNav() {
	return (
		<nav className={styles.nav}>
			<div className={styles.link}>
				<Button secondary>ABOUT</Button>
			</div>

			<div className={styles.link}>
				<Button primary>PROJECTS</Button>
			</div>

			<div className={styles.link}>
				<Button secondary>CONTACT</Button>
			</div>
		</nav>
	);
}
