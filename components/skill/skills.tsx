import styles from "./skills.module.scss";
import Skill from "./skill";

// Icons
import {
	DiCss3,
	DiHtml5,
	DiSass,
	DiReact,
	DiJqueryLogo,
	DiVisualstudio,
} from "react-icons/di";
import {} from "react-icons/io5";
import {
	SiHtml5,
	SiCss3,
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
	SiHandlebarsdotjs,
	SiMongodb,
	SiJest,
	SiGithub,
	SiGitkraken,
	SiPostman,
	SiConfluence,
	SiTrello,
	SiHeroku,
	SiVercel,
} from "react-icons/si";
import { FaShopify } from "react-icons/fa";

export default function Skills() {
	return (
		<div className={styles.wrapper}>
			<Skill
				className={styles.skill}
				title="Languages"
				items={[
					{
						name: "HTML",
						icon: <SiHtml5 />,
					},
					{
						name: "CSS",
						icon: <SiCss3 />,
					},
					{
						name: "SASS",
						icon: <DiSass />,
					},
					{
						name: "JavaScript",
						icon: <SiJavascript />,
					},
					{
						name: "TypeScript",
						icon: <SiTypescript />,
					},
					{
						name: "Shopify Liquid",
						icon: <FaShopify />,
					},
				]}
			/>
			<Skill
				className={styles.skill}
				title="Frameworks & Libraries"
				items={[
					{
						name: "React",
						icon: <DiReact />,
					},
					{
						name: "NextJS",
						icon: <SiNextdotjs />,
					},
					{
						name: "jQuery",
						icon: <DiJqueryLogo />,
					},
					{
						name: "Handlebars",
						icon: <SiHandlebarsdotjs />,
					},
					{
						name: "Mongoose",
						icon: <SiMongodb />,
					},
					{
						name: "Jest",
						icon: <SiJest />,
					},
				]}
			/>
			<Skill
				className={styles.skill}
				title="Technologies"
				items={[
					{
						name: "MongoDB",
						icon: <SiMongodb />,
					},
				]}
			/>
			<Skill
				className={styles.skill}
				title="Programs & Tools"
				items={[
					{
						name: "VSCode",
						icon: <DiVisualstudio />,
					},
					{
						name: "GitHub",
						icon: <SiGithub />,
					},
					{
						name: "GitKraken",
						icon: <SiGitkraken />,
					},
					{
						name: "Postman",
						icon: <SiPostman />,
					},
					{
						name: "Confluence",
						icon: <SiConfluence />,
					},
					{
						name: "Trello",
						icon: <SiTrello />,
					},
					{
						name: "Shopify",
						icon: <FaShopify />,
					},
					{
						name: "Heroku",
						icon: <SiHeroku />,
					},
					{
						name: "Vercel",
						icon: <SiVercel />,
					},
				]}
			/>
		</div>
	);
}
