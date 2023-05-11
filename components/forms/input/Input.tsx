import styles from "./Input.module.scss";

interface Props {
	className?: string;
	name: string;
	placeholder: string;
	type: string;
	value: any;
	onChange: Function;
	onBlur: Function;
	icon?: React.ReactNode;
}

export default function Input({
	className,
	name,
	placeholder,
	type,
	value,
	onChange,
	onBlur,
	icon,
}: Props) {
	return (
		<div className={styles.wrapper}>
			{icon && <div className={styles.icon}>{icon}</div>}
			<input
				id={name}
				name={name}
				className={`${className} ${styles.input} ${
					icon ? styles.leftAddon : ""
				}`}
				type={type}
				value={value}
				onChange={(e) => onChange(e)}
				onBlur={(e) => onBlur(e)}
				placeholder={placeholder}></input>
		</div>
	);
}
