import Button from "../objects/button/Button";
import styles from "./MainNav.module.scss";
import { FaQuestion } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsGearWideConnected, BsQuestionLg } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import Link from "next/link";
import Title from "../text/heading/Heading";

export default function MainNav() {
	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<div className={styles.wrapper}>
			<Title />
			<nav className={styles.nav}>
				<Link href="/" className={styles.link} onClick={handleClick}>
					<Button>ABOUT</Button>
					{/* <Button icon={<BsQuestionLg />}>ABOUT</Button> */}
				</Link>

				<Link
					href="/projects"
					className={styles.link}
					onClick={handleClick}>
					<Button>PROJECTS</Button>
					{/* <Button primary icon={<BsGearWideConnected />}>
						PROJECTS
					</Button> */}
				</Link>

				<Link href="/" className={styles.link} onClick={handleClick}>
					<Button>PROJECTS</Button>
					{/* <Button icon={<MdMailOutline />}>PROJECTS</Button> */}
				</Link>
			</nav>
		</div>
	);
}
