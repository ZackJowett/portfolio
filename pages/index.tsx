import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "/styles/Home.module.scss";
import AngledDiv from "@/components/angledDiv/AngledDiv";
import Script from "next/script";
import Project from "@/components/project/project";
import Skill from "@/components/skill/skill";
import Section from "@/components/section/section";
import NavBar from "@/components/nav/navBar/navBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Zachary Jowett Portfolio</title>
				<meta name="Zachary Jowett's Portfolio" content="" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js" />
			<main className={styles.main}>
				{/* <AngledDiv /> */}
				<NavBar title="Zachary Jowett" />

				<Section title="Skills">
					<Skill
						title="Languages"
						items={[
							"HTML",
							"CSS",
							"SASS",
							"JavaScript",
							"TypeScript",
							"Shopify Liquid",
						]}
					/>
					<Skill
						title="Frameworks & Libraries"
						items={[
							"React",
							"NextJS",
							"jQuery",
							"Handlebars",
							"Mongoose",
							"Jest",
						]}
					/>
					<Skill title="Technologies" items={["MongoDB"]} />
					<Skill
						title="Programs & Tools"
						items={[
							"VSCode",
							"GitHub",
							"GitKraken",
							"Postman",
							"Confluence",
							"Jira",
							"Trello",
							"Shopify",
							"Heroku",
							"Vercel",
						]}
					/>
				</Section>

				<Section title="Projects">
					<Project
						title="The Game"
						link="https://thegame.cool/"
						dateStarted="Aug 2022"
						dateCompleted="present"
						desc="Redesigning of The Game Wallets' Shopify website, giving it a fresh, modern look while retaining its unique cricket-inspired branding. Built a custom monogramming app using Shopify's Liquid templating language, which allows customers to customize their wallets with their initials."
						challenges="The biggest challenge was learning Shopify's Liquid templating language. Thorough research and studying of their documentation allowed me to competently develop all initial requirements and solve issues from their original web app."
					/>
					<Project
						title="Flesh & Blood Card Game Collection Manager"
						subtitle="University Capstone Project"
						link=""
						dateStarted="Aug 2022"
						dateCompleted="Nov 2022"
						desc=""
						// desc="Our group was tasked with building a web application for a client. We followed the Scrum methodology to organize our develpment process into one week sprints with tri-weekly standups. We also maintained an Agile philosphy to adapt our development process as needed to ensure that we were meeting the client's needs and expectations."
						challenges=""
					/>
					{/* <Project
					title="Portfolio (this site)"
					link="/"
					dateStarted="Feb 2023"
					dateCompleted="present"
					desc=""
					challenges="Designing a website that reflects my personality and engineering philosphy while also being easy to navigate and aesthetically pleasing was a challenge."
				/> */}
				</Section>

				<Section title="Me"></Section>

				<Section title="Contact">
					<h3>Contact Form</h3>
					<h3>Email</h3>
					<h3>Calendly link for booking a call</h3>
					<h3>Social Media if relevant to developing</h3>
				</Section>

				{/* <Section title="Blog"></Section> */}

				<Section title="Links">
					<h3>GitHub & Projects</h3>
					<h3>Resume</h3>
				</Section>
			</main>
		</>
	);
}
