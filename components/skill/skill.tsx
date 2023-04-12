import styles from "./skill.module.scss";

interface Props {
	title: string;
	subtitle?: string;
	items: string[];
}

export default function Skill({ title, subtitle = "", items }: Props) {
	return (
		<div>
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			<ul>
				{items.map((item) => {
					return <li>{item}</li>;
				})}
			</ul>
		</div>
	);
}
