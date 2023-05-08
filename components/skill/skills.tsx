import styles from "./skills.module.scss";
import Skill from "./skill";

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

export default function Skills() {
	return (
		<>
			<Title title="Skills" subtitle="Learning Progress" />
			<SectionWithTitle title="Front-End">
				<ProgressBar title="HTML" percentage={60} icon={<SiHtml5 />} />
				<ProgressBar
					title="JavaScript"
					percentage={95}
					icon={<SiJavascript />}
				/>
				<ProgressBar title="CSS" percentage={60} icon={<SiCss3 />} />
				<ProgressBar title="React" percentage={85} icon={<DiReact />} />
				<ProgressBar
					title="Next"
					percentage={85}
					icon={<SiNextdotjs />}
				/>
				<ProgressBar
					title="jQuery"
					percentage={35}
					icon={<DiJqueryLogo />}
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
