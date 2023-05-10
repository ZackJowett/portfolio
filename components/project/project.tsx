import Badge from "../objects/badge/Badge";
import styles from "./project.module.scss";
import Gallery from "../objects/images/Gallery";
import { ReactNode } from "react";
import Title from "../text/title/Title";
import Link from "next/link";
import DataBlock from "../text/data/DataBlock";
import Button from "../objects/button/Button";

interface Props {
	title: string;
	role: string;
	url?: string;
	tags: string[];
	year: string;
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
	year,
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

			{/* <div className={styles.data}>
				<DataBlock value={year} desc="Year" />
				<DataBlock value={client} desc="Client" />
			</div> */}
			<Button
				className={styles.link}
				href="https://www.thegame.cool/"
				title="Visit"
			/>

			<Gallery className={styles.gallery} images={images} />
		</div>
	);
}
