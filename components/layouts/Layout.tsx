import styles from "./Layout.module.scss";

interface Props {
	children: any;
	className?: string;
}

export default function Layout({ children, className }: Props) {
	return <main className={`${className} ${styles.main}`}>{children}</main>;
}
