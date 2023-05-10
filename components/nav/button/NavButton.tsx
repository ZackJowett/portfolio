import styles from "./NavButton.module.scss";

interface Props {
	children: any;
	className?: string;
	onClick: Function;
}

export default function NavButton({
	children,
	className = "",
	onClick,
}: Props) {
	return (
		<div
			className={`${className} ${styles.wrapper}`}
			onClick={() => onClick()}>
			{children}
		</div>
	);
}
