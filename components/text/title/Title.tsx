import MainNav from "@/components/nav/MainNav";
import styles from "./Title.module.scss";
import Link from "next/link";

interface Props {
	className?: string;
}

export default function Title({ className }: Props) {
	return (
		<Link href="/" className={`${className} ${styles.title}`}>
			<h1 className={styles.first}>ZACHARY</h1>
			<p className={styles.last}>JOWETT</p>
		</Link>
	);
}
