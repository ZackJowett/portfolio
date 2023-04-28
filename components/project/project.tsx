import Badge from "../objects/badge/Badge";
import styles from "./project.module.scss";
import Skill from "@/components/skill/skill";

import Gallery from "../objects/images/Gallery";

interface Props {
	title: string;
	role: string;
	titleLink?: string;
	projectDuration: string;
	projectStatus: string;
	description: string;
}

export default function Project({
	title,
	role,
	titleLink,
	projectDuration,
	projectStatus,
	description,
}: Props) {
	return (
		<div className={styles.project}>
			<div className={styles.projectDetails}>
				<div className={styles.header}>
					<h2 className={styles.title}>
						{titleLink ? (
							<a href={titleLink} target="_blank">
								{title}
							</a>
						) : (
							<>{title}</>
						)}
					</h2>
					{role && <h5 className={styles.role}>{role}</h5>}
					<div className={styles.badges}>
						<Badge text={projectStatus} />
						<Badge text={projectDuration} secondary />
					</div>
				</div>

				<div className={styles.description}>
					<p>{description}</p>
				</div>
			</div>

			<Gallery
				className={styles.gallery}
				images={[
					{
						src: "/static/images/image0.jpg",
						alt: "Home Page",
						width: 500,
						height: 500,
					},
					{
						src: "/static/images/image1.jpg",
						alt: "Contact Page",
						width: 500,
						height: 500,
					},
					{
						src: "/static/images/image1.jpg",
						alt: "Duplicate Page",
						width: 500,
						height: 500,
					},
				]}
			/>
		</div>
	);
}
