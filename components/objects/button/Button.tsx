import styles from "./Button.module.scss";

interface Props {
	children: any;
	primary?: boolean;
	secondary?: boolean;
}

export default function Button({
	children,
	primary = false,
	secondary = false,
}: Props) {
	return (
		<button
			className={`${styles.button} ${primary && "primary"} ${
				secondary && "secondary"
			}`}>
			{children}
		</button>
	);
}
