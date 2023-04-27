import styles from "./navBar.module.scss";

interface Props {
	title: string;
}

export default function NavBar({ title }: Props) {
	return (
		<nav className={styles.wrapper}>
			<h1 className={styles.title}>{title}</h1>
		</nav>
	);
}
