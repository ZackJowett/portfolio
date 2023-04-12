import styles from "./section.module.scss";

interface Props {
	title: string;
	children?: any;
}

export default function Section({ title, children }: Props) {
	return (
		<section>
			<h2>{title}</h2>
			{children}
		</section>
	);
}
