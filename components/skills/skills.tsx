import styles from "./skills.module.scss";

// Icons
import { DiSass, DiReact, DiJqueryLogo } from "react-icons/di";
import {} from "react-icons/io5";
import {
	SiHtml5,
	SiCss3,
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
	SiMongodb,
	SiNodedotjs,
	SiAdobexd,
	SiFigma,
} from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import Title from "../text/title/Title";
import SectionWithTitle from "../sections/SectionWithTitle/SectionWithTitle";
import ProgressBar from "../objects/progress/ProgressBar";
import TextButton from "../objects/button/text/TextButton";
import { useState } from "react";

export default function Skills() {
	const [showFront, setShowFront] = useState(false);
	const [showBack, setShowBack] = useState(false);
	const [showDesign, setShowDesign] = useState(false);

	return (
		<>
			<Title title="Skills" subtitle="Learning Progress" />
			<SectionWithTitle title="Front-End">
				{showFront && (
					<ProgressBar
						title="HTML"
						percentage={60}
						icon={<SiHtml5 />}
					/>
				)}
				<ProgressBar
					title="JavaScript"
					percentage={95}
					icon={<SiJavascript />}
				/>
				{showFront && (
					<ProgressBar
						title="CSS"
						percentage={60}
						icon={<SiCss3 />}
					/>
				)}
				<ProgressBar title="React" percentage={85} icon={<DiReact />} />
				<ProgressBar
					title="Next"
					percentage={85}
					icon={<SiNextdotjs />}
				/>
				{showFront && (
					<ProgressBar
						title="jQuery"
						percentage={35}
						icon={<DiJqueryLogo />}
					/>
				)}

				<TextButton
					title={showFront ? "Hide" : "Show More"}
					onClick={() => setShowFront(!showFront)}
				/>
			</SectionWithTitle>
			<SectionWithTitle title="Back-End">
				<ProgressBar
					title="Node"
					percentage={65}
					icon={<SiNodedotjs />}
				/>
				<ProgressBar
					title="MongoDB"
					percentage={40}
					icon={<SiMongodb />}
				/>
			</SectionWithTitle>
			<SectionWithTitle title="Design">
				<ProgressBar
					title="Adobe XD"
					percentage={80}
					icon={<SiAdobexd />}
				/>
				<ProgressBar title="Figma" percentage={70} icon={<SiFigma />} />
			</SectionWithTitle>
		</>
	);
}
