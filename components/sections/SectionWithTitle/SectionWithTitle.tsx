import styles from "./SectionWithTitle.module.scss";

interface Props {
	title: string;
	children: any;
	className?: string;
}

export default function SectionWithTitle({
	className = "",
	title,
	children,
}: Props) {
	return (
		<div className={`${className} ${styles.wrapper}`}>
			<h4 className={styles.title}>{title}</h4>
			<div className={styles.contentWrapper}>{children}</div>
		</div>
	);
}
