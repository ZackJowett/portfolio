import styles from "./BorderedSection.module.scss";

interface Props {
	children?: any;
	className?: string;
	id?: string;
	color?: string;
	background?: string;
}

export default function BorderedSection({
	children,
	className,
	id,
	color,
	background,
}: Props) {
	return (
		<div
			className={`${className} ${styles.section} border-${
				color ? color : "default"
			} background-${background ? background : "default"}`}
			id={id}>
			{children}
		</div>
	);
}
