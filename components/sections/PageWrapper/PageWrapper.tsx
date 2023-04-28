import styles from "./PageWrapper.module.scss";

interface Props {
	children: any;
	className?: string;
}

export default function PageWrapper({ children, className }: any) {
	return (
		<div className={`${className} ${styles.pageContent}`}>{children}</div>
	);
}
