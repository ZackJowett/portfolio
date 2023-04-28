import Layout from "@/components/layouts/Layout";
import Button from "@/components/objects/button/Button";
import Project from "@/components/project/project";
import PageContent from "@/components/sections/PageContent/PageContent";
import PageWrapper from "@/components/sections/PageWrapper/PageWrapper";
import Title from "@/components/text/title/Title";
import styles from "@/styles/pages/Projects.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
	const [page, setPage] = useState(null);

	return (
		<Layout className={styles.projects}>
			<Title className={styles.title} />
			<PageWrapper className={styles.content}>
				<nav className={styles.pageNav}>
					<Link href="/about">
						<Button secondary>ABOUT</Button>
					</Link>
					<Link href="/projects">
						<Button primary>PROJECTS</Button>
					</Link>
					<Link href="/contact">
						<Button secondary>CONTACT</Button>
					</Link>
				</nav>
				<PageContent>
					<Project
						title="THE GAME"
						role="Sole Developer"
						projectDuration="6 Months"
						projectStatus="Complete"
						description="Redesigning of The Game Wallets' Shopify website."
					/>
				</PageContent>
			</PageWrapper>
		</Layout>
	);
}
