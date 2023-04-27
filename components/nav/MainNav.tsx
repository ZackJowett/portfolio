import Button from "../objects/button/Button";
import styles from "./MainNav.module.scss";
import { FaQuestion } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsGearWideConnected, BsQuestionLg } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";

export default function MainNav() {
	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<nav className={styles.nav}>
			<div className={styles.link} onClick={handleClick}>
				<Button secondary>ABOUT</Button>
				<BsQuestionLg className={styles.icon} />
			</div>

			<div className={styles.link} onClick={handleClick}>
				<Button primary>PROJECTS</Button>
				<BsGearWideConnected className={styles.icon} />
			</div>

			<div className={styles.link} onClick={handleClick}>
				<Button secondary>CONTACT</Button>
				<MdMailOutline className={styles.icon} />
			</div>
		</nav>
	);
}
