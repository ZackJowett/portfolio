import { ReactNode } from "react";
import styles from "./skill.module.scss";

interface Props {
	title: string;
	subtitle?: string;
	items: {
		name: string;
		icon: ReactNode;
	}[];
	className?: string;
}

export default function Skill({
	title,
	subtitle = "",
	items,
	className,
}: Props) {
	return (
		<div className={className}>
			<h4 className={styles.title}>{title}</h4>
			<h5 className={styles.subtitle}>{subtitle}</h5>
			<ul className={styles.list}>
				{items.map((item, index) => {
					return (
						<div className={styles.listItem}>
							<span className={styles.icon}>{item.icon}</span>
							<li key={index}>{item.name}</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
