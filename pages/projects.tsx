import Layout from "@/components/layouts/Layout";
import BorderedSection from "@/components/sections/BorderedSection/BorderedSection";
import Heading from "@/components/text/heading/Heading";
import Navigator from "@/components/nav/Navigator";
import { useEffect, useState } from "react";
import Project from "@/components/project/project";
import styles from "@/styles/pages/Projects.module.scss";

export default function Projects() {
	const [project, setProject] = useState("crr");

	return (
		<Layout>
			<BorderedSection>
				<Heading title="Projects" subtitle="Zack Jowett" reverse />
			</BorderedSection>
			<Navigator currentProject={project} setProject={setProject} />
			{project && (
				<BorderedSection
					className={`${styles.details} ${
						project === "the-game"
							? styles.center
							: project === "crr"
							? styles.left
							: project === "fab"
							? styles.right
							: ""
					}`}>
					<Project
						show={project === "crr"}
						title="Cricket's Rise Ranch"
						role="Sole Developer & Technician"
						tags={["Deployed"]}
						year="2023"
						client="Cricket's Rise Ranch"
						desc="Designed and built with Next, integrated with Shopify, contains video streaming and live data from on-site sensors"
						images={[]}
					/>
					<Project
						show={project === "the-game"}
						title="The Game"
						role="Sole Developer"
						tags={["Complete"]}
						year="2023"
						client="The Game"
						desc="Reimagined The Game Wallets’ existing website with a modern and mobile-friendly design, and created a custom monogramming app"
						images={[
							{
								src: "/static/images/the-game/the-game-home.png",
								alt: "Home Page",
							},
						]}
					/>
					<Project
						show={project === "fab"}
						title="FAB Collection Manager"
						role="Back-End & API Developer"
						tags={["Complete"]}
						year="2022"
						client="University Capstone"
						desc="Created a REST API and handled back-end integration"
						images={[]}
					/>
				</BorderedSection>
			)}
		</Layout>
	);
}
// function getSelectedProject(project: string) {
// 	if (project === "the-game") {
// 		return (
// 			<Project
// 				title="The Game"
// 				role="Sole Developer"
// 				status="Complete"
// 				desc="Reimagined The Game Wallets’ existing website with a modern and mobile-friendly design"
// 			/>
// 		);
// 	} else if (project === "crr") {
// 		return (
// 			<Project
// 				title="Cricket's Rise Ranch"
// 				role="Sole Developer"
// 				status="Complete"
// 				desc="..."
// 			/>
// 		);
// 	} else if (project === "fab") {
// 		return (
// 			<Project
// 				title="FAB Collection Manager"
// 				role="Back-End & API Developer"
// 				status="Complete"
// 				desc="..."
// 			/>
// 		);
// 	}
// }
