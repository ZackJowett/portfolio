import Layout from "../../layouts/Layout";

// import styles from "./Main.module.scss";
import BorderedSection from "@/components/sections/BorderedSection/BorderedSection";
import styles from "./Main.module.scss";
import SimplifiedAbout from "../SimplifiedAbout/SimplifiedAbout";
import Heading from "@/components/text/heading/Heading";
import FeaturedProject from "@/components/project/featured/FeaturedProject";
import Skills from "@/components/skills/skills";
import Contact from "@/components/sections/Contact/Contact";
import Button from "@/components/objects/button/Button";
import CallToAction from "@/components/sections/CallToAction/CallToAction";
import Socials from "@/components/sections/Socials/Socials";
import Flex from "@/components/layouts/flex/Flex";

export default function Main() {
	return (
		<Layout>
			<BorderedSection>
				<Heading title="Zack Jowett" subtitle="Full-Stack Developer" />
			</BorderedSection>
			<BorderedSection color="blue">
				<SimplifiedAbout />
			</BorderedSection>
			<BorderedSection background="blue" color="blue">
				<CallToAction />
			</BorderedSection>
			<BorderedSection color="orange">
				<FeaturedProject />
			</BorderedSection>
			<BorderedSection color="red">
				<Skills />
			</BorderedSection>
			<BorderedSection color="green" id="contact">
				<Contact />
			</BorderedSection>
			<BorderedSection>
				<Socials />
			</BorderedSection>
		</Layout>
	);
}
