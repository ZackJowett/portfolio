import styles from "./BorderedSection.module.scss";

interface Props {
	children?: any;
	className?: string;
	style?: any;
	id?: string;
	color?: string;
	background?: string;
}

export default function BorderedSection({
	children,
	className,
	style,
	id,
	color,
	background,
}: Props) {
	return (
		<div
			className={`${styles.section} border-${
				color ? color : "default"
			} background-${background ? background : "default"} ${
				className ? className : ""
			} `}
			id={id}
			style={style}>
			{children}
		</div>
	);
}
