import Head from "next/head";
import { Inter } from "next/font/google";
import Main from "@/components/sections/Main";

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
			<Main />
		</>
	);
}

{
	/* <div className={styles.contentWrapper}>
{/* <AngledDiv />
<NavBar title="Zachary Jowett" />
<div className={styles.sectionWrapper}>
	<Section className={styles.skills} title="Skills">
		<Skills />
	</Section>

	<Section title="Projects">
		<Project
			title="The Game"
			titleLink="https://thegame.cool/"
			dateStarted="Aug 2022"
			dateCompleted="present"
			desc="Redesigning of The Game Wallets' Shopify website, giving it a fresh, modern look while retaining its unique cricket-inspired branding. Built a custom monogramming app using Shopify's Liquid templating language, which allows customers to customize their wallets with their initials."
			challenges="The biggest challenge was learning Shopify's Liquid templating language. Thorough research and studying of their documentation allowed me to competently develop all initial requirements and solve issues from their original web app."
		/>
		<Project
			title="Flesh & Blood Card Game Collection Manager"
			subtitle="University Capstone Project"
			titleLink=""
			dateStarted="Aug 2022"
			dateCompleted="Nov 2022"
			desc=""
			// desc="Our group was tasked with building a web application for a client. We followed the Scrum methodology to organize our develpment process into one week sprints with tri-weekly standups. We also maintained an Agile philosphy to adapt our development process as needed to ensure that we were meeting the client's needs and expectations."
			challenges=""
		/>
		<Project
			title="Portfolio (this site)"
			titleLink="/"
			linkCircles={
				<a
					href="https://github.com/ZackJowett/portfolio"
					target="_blank">
					<AiFillGithub />
				</a>
			}
			dateStarted="Feb 2023"
			dateCompleted="present"
			desc=""
			challenges="Designing a website that reflects my personality and engineering philosphy while also being easy to navigate and aesthetically pleasing was a challenge."
		/>
	</Section>

	<Section title="Me"></Section>

	<Section title="Contact">
		<h3>Contact Form</h3>
		<h3>Email</h3>
		<h3>Calendly link for booking a call</h3>
		<h3>Social Media if relevant to developing</h3>
	</Section>

	{/* <Section title="Blog"></Section> 

	<Section title="Links">
		<h3>GitHub & Projects</h3>
		<h3>Resume</h3>
	</Section>
</div>
</div> */
}
