import Flex from "../layouts/flex/Flex";
import BorderedSection from "../sections/BorderedSection/BorderedSection";
import Title from "../text/title/Title";
import styles from "./Navigator.module.scss";
import NavButton from "./button/NavButton";

interface Props {
	className?: string;
	currentProject: string;
	setProject: Function;
}

export default function Navigator({
	className,
	currentProject,
	setProject,
}: Props) {
	return (
		<div className={` ${className} ${styles.wrapper}`}>
			{/* <Nav> */}
			<Flex direction="row" justify="space-between">
				<NavButton
					className={`${styles.navButton} ${styles.left} ${
						currentProject == "crr" ? styles.selected : ""
					}`}
					onClick={() => setProject("crr")}>
					<h4>Cricket&apos;s</h4>
					<h4>Rise</h4>
					<h4>Ranch</h4>
				</NavButton>
				<NavButton
					className={`${styles.navButton} ${styles.center} ${
						currentProject == "the-game" ? styles.selected : ""
					}`}
					onClick={() => setProject("the-game")}>
					<h4>The Game</h4>
				</NavButton>
				<NavButton
					className={`${styles.navButton} ${styles.right} ${
						currentProject == "fab" ? styles.selected : ""
					}`}
					onClick={() => setProject("fab")}>
					<h4>FAB</h4>
					<h4>Collection</h4>
					<h4>Manager</h4>
				</NavButton>
			</Flex>
			{/* </Nav> */}
		</div>
	);
}
