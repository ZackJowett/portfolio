import { ReactNode } from "react";
import styles from "./technologies.module.scss";

interface Props {
	title?: string;
	subtitle?: string;
	items: {
		name: string;
		icon: ReactNode;
	}[];
	className?: string;
}

export default function Technologies({
	title = "",
	subtitle = "",
	items,
	className,
}: Props) {
	return (
		<div className={className}>
			{title && <h4 className={styles.title}>{title}</h4>}
			{subtitle && <h5 className={styles.subtitle}>{subtitle}</h5>}
			<ul className={styles.list}>
				{items.map((item, index) => {
					return (
						<div key={index} className={styles.listItem}>
							<span className={styles.icon}>{item.icon}</span>
							<li key={index}>{item.name}</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
