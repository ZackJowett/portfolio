import Link from "next/link";
import styles from "./Socials.module.scss";
import { SiGithub, SiFacebook, SiLinkedin } from "react-icons/si";

export default function Socials() {
	return (
		<div className={styles.wrapper}>
			<Link
				href="https://github.com/ZackJowett"
				target="_blank"
				className={styles.icon}>
				<SiGithub />
				<p>GitHub</p>
			</Link>
			<Link
				href="https://www.facebook.com/zachary.jowett.96/"
				target="_blank"
				className={styles.icon}>
				<SiFacebook />
				<p>Facebook</p>
			</Link>
			<Link
				href="https://www.linkedin.com/in/zacharyjowett"
				target="_blank"
				className={styles.icon}>
				<SiLinkedin />
				<p>LinkedIn</p>
			</Link>
		</div>
	);
}
