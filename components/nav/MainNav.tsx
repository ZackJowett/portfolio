import Button from "../objects/button/Button";
import styles from "./MainNav.module.scss";
import { FaQuestion } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsGearWideConnected, BsQuestionLg } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import Link from "next/link";
import Title from "../text/title/Title";

export default function MainNav() {
	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<div className={styles.wrapper}>
			<Title />
			<nav className={styles.nav}>
				<Link href="/" className={styles.link} onClick={handleClick}>
					<Button secondary>ABOUT</Button>
					<BsQuestionLg className={styles.icon} />
				</Link>

				<Link
					href="/projects"
					className={styles.link}
					onClick={handleClick}>
					<Button primary>PROJECTS</Button>
					<BsGearWideConnected className={styles.icon} />
				</Link>

				<Link href="/" className={styles.link} onClick={handleClick}>
					<Button secondary>CONTACT</Button>
					<MdMailOutline className={styles.icon} />
				</Link>
			</nav>
		</div>
	);
}
