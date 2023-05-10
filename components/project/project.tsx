import Badge from "../objects/badge/Badge";
import styles from "./project.module.scss";
import Gallery from "../objects/images/Gallery";
import { ReactNode } from "react";
import Title from "../text/title/Title";
import Link from "next/link";
import DataBlock from "../text/data/DataBlock";
import Button from "../objects/button/Button";
import ImageContainer from "../objects/images/ImageContainer";
import SectionWithTitle from "../sections/SectionWithTitle/SectionWithTitle";

interface Props {
	title: string;
	role: string;
	url?: string;
	tags: string[];
	client: string;
	desc: string;
	images: { src: string; alt: string }[];
	show: boolean;
}

export default function Project({
	title,
	role,
	url,
	tags,
	desc,
	show,
	images,
	client,
}: Props) {
	return (
		<div className={`${styles.project} ${show ? styles.show : ""}`}>
			{url ? (
				<Link href={url} className={styles.projectDetails}>
					<Title title={title} subtitle={role} align="left" />
				</Link>
			) : (
				<Title title={title} subtitle={role} align="left" />
			)}
			<div>
				{tags.map((tag) => {
					return <Badge key={tag} text={tag} />;
				})}
			</div>

			<p className={styles.desc}>{desc}</p>

			{url && <Button className={styles.link} href={url} title="Visit" />}

			<div className={styles.images}>
				{images.map((image) => {
					return (
						<SectionWithTitle title={image.alt}>
							<ImageContainer
								src={image.src}
								alt={image.alt}
								key={image.src}
								dimensions={{
									width: 500,
									height: 500,
								}}
							/>
						</SectionWithTitle>
					);
				})}
			</div>

			{/* <Gallery className={styles.gallery} images={images} /> */}
		</div>
	);
}
