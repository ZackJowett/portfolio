import GiantSVG from "../objects/GiantSVG/GiantSVG";
import MainBorder from "../objects/border/MainBorder";
import Title from "../text/title/Title";
import styles from "./Main.module.scss";
import { RiBracesFill } from "react-icons/ri";

export default function Main() {
	return (
		<main className={styles.main}>
			<MainBorder />
			<GiantSVG />
			<Title />
			<GiantSVG flip />
		</main>
	);
}
