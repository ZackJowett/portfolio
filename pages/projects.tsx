import Layout from "@/components/layouts/Layout";
import Title from "@/components/text/title/Title";
import styles from "@/styles/pages/Projects.module.scss";
import { useState } from "react";
import { DiJqueryLogo } from "react-icons/di";
import { FaShopify } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";

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
						technologies={[
							{ name: "Shopify Liquid", icon: <FaShopify /> },
							{
								name: "jQuery",
								icon: <DiJqueryLogo />,
							},
							{ name: "Adobe XD", icon: <SiAdobexd /> },
						]}
					/>
				</PageContent> */}
			{/* </PageWrapper> */}
		</Layout>
	);
}
