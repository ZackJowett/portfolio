import { Head } from "next/document";
import MainBorder from "../objects/border/MainBorder";
import styles from "./Layout.module.scss";
import { Interface } from "readline";

interface Props {
	children: any;
	className?: string;
}

export default function Layout({ children, className }: Props) {
	return <main className={`${className} ${styles.main}`}>{children}</main>;
}
