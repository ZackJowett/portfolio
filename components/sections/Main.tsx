import Layout from "../layouts/Layout";
import MainNav from "../nav/MainNav";
import GiantSVG from "../objects/GiantSVG/GiantSVG";
import MainBorder from "../objects/border/MainBorder";

// import styles from "./Main.module.scss";
import { RiBracesFill } from "react-icons/ri";

export default function Main() {
	return (
		<Layout>
			<MainBorder />
			<GiantSVG />
			<MainNav />
			<GiantSVG flip />
		</Layout>
	);
}
