import styles from "./project.module.scss";
import Skill from "@/components/skill/skill";

interface Props {
	title: string;
	subtitle?: string;
	titleLink?: string;
	linkCircles?: any;
	dateStarted: string;
	dateCompleted: string;
	desc: string;
	// approachUsed: string;
	// resources: typeof Skill[];
	challenges: string;
}

export default function Project({
	title,
	subtitle,
	titleLink,
	linkCircles,
	dateStarted,
	dateCompleted,
	desc,
	challenges,
}: Props) {
	return (
		<div>
			<h3>
				{titleLink ? (
					<a href={titleLink} target="_blank">
						{title}
					</a>
				) : (
					<>{title}</>
				)}

				{/* Link Circles to various platforms (e.g. email, discord) */}
				<span>{linkCircles}</span>
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
