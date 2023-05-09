import styles from "./Input.module.scss";

interface Props {
	className?: string;
	name: string;
	placeholder: string;
	type: string;
	icon?: React.ReactNode;
}

export default function Input({
	className,
	name,
	placeholder,
	type,
	icon,
}: Props) {
	return (
		<div className={styles.wrapper}>
			{icon && <div className={styles.icon}>{icon}</div>}
			<input
				name={name}
				className={`${className} ${styles.input} ${
					icon ? styles.leftAddon : ""
				}`}
				type={type}
				placeholder={placeholder}></input>
		</div>
	);
}
