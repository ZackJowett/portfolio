import styles from "./PageContent.module.scss";

interface Props {
	children?: any;
	className?: string;
}

export default function PageContent({ children, className }: Props) {
	return (
		<div className={`${className} ${styles.pageContent}`}>{children}</div>
	);
}
