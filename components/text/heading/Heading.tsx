import MainNav from "@/components/nav/MainNav";
import styles from "./Heading.module.scss";
import Link from "next/link";

interface Props {
	className?: string;
}

export default function Heading({ className }: Props) {
	return (
		<Link href="/" className={`${className} ${styles.title}`}>
			<h1 className={styles.first}>Zack Jowett</h1>
			<p className={styles.last}>Full-Stack Developer</p>
		</Link>
	);
}
