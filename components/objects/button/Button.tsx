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
			className={`${styles.button} ${primary && styles.primary} ${
				secondary && styles.secondary
			}`}>
			{children}
		</button>
	);
}
