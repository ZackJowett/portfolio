import styles from "./DataBlock.module.scss";

interface Props {
	value: string;
	desc?: string;
	color?: string;
}

export default function DataBlock({ value, desc, color }: Props) {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.value}>{value}</h3>
			<div
				className={`${styles.line} border-${color ? color : "default"}`}
			/>
			<p className={styles.desc}>{desc}</p>
		</div>
	);
}
