import { useState } from "react";
import InLine from "../objects/inLine";
import styles from "./section.module.scss";

interface Props {
	title: string;
	children?: any;
	className?: string;
}

export default function Section({ title, children, className }: Props) {
	const [open, setOpen] = useState(false);
	const [showContent, setShowContent] = useState(false);

	return (
		<section className={`${className} ${styles.section} `}>
			<div className={styles.details}>
				<div
					className={styles.header}
					onClick={() => {
						setOpen(!open);
						setShowContent(!showContent);
					}}>
					{/* <div className={styles.titleWrapper}> */}
					<div className={`${styles.title} ${open && styles.open}`}>
						<h2>{title}</h2>
					</div>
					{/* </div> */}
					<InLine />
				</div>
				<div
					className={`${styles.content} ${
						showContent && styles.showContent
					}`}>
					{children}
				</div>
			</div>
		</section>
	);
}
