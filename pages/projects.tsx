import Layout from "@/components/layouts/Layout";
import Title from "@/components/text/title/Title";
import styles from "@/styles/pages/Projects.module.scss";
import { useState } from "react";

export default function Projects() {
	const [page, setPage] = useState(null);

	return (
		<Layout className={styles.projects}>
			<Title title="Projects" />
			{/* <PageWrapper className={styles.content}>
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
				<nav className={styles.projectNav}>
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
				</PageContent> */}
			{/* </PageWrapper> */}
		</Layout>
	);
}
