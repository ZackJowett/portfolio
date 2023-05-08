import Title from "@/components/text/title/Title";
import styles from "./FeaturedProject.module.scss";
import Button from "@/components/objects/button/Button";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function FeaturedProject() {
	return (
		<>
			<Title title="Projects" subtitle="Featured" />
			<div className={styles.featuredWrapper}>
				<Link href="/projects/the-game">
					<Image
						src="/static/images/the-game-home.png"
						width={500}
						height={150}
						alt="The Game Website - Home"
						className={styles.image}
					/>
					<div className={styles.content}>
						<div className={styles.details}>
							<h3 className={styles.title}>The Game</h3>
							<h6 className={styles.subtitle}>Sole Developer</h6>
							<p className={styles.desc}>
								Reimagined The Game Wallets&apos; existing
								website with a modern and mobile-friendly design
							</p>
						</div>
						<IoIosArrowForward className={styles.icon} />
					</div>
				</Link>
			</div>
			<Button href="/projects" title="EXPLORE PROJECTS" />
		</>
	);
}
