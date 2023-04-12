import styles from "./project.module.scss";
import Skill from "@/components/skill/skill";

interface Props {
	title: string;
	subtitle?: string;
	dateStarted: string;
	dateCompleted: string;
	desc: string;
	// approachUsed: string;
	// resources: typeof Skill[];
	challenges: string;
	link?: string;
}

export default function Project({
	title,
	subtitle,
	dateStarted,
	dateCompleted,
	desc,
	challenges,
	link = "",
}: Props) {
	return (
		<div>
			<h3>
				{link ? (
					<a href={link} target="_blank">
						{title}
					</a>
				) : (
					<>{title}</>
				)}
			</h3>
			{subtitle && <h4>{subtitle}</h4>}
			<h4>
				{dateStarted} -&gt; {dateCompleted}
			</h4>

			<p>{desc}</p>
			{/* <h4>Resources</h4> */}
			{/* <div>{resources.map(resource => {
				return <Skill title={resource.title} subtitle={resource.subtitle} items={resource.items}
			})}</div> */}
			<h5>Challenges</h5>
			<p>{challenges}</p>
			<h5>Screenshots & Links</h5>
		</div>
	);
}
