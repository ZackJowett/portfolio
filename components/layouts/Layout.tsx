import styles from "./Layout.module.scss";
import Flex from "./flex/Flex";

interface Props {
	children: any;
	className?: string;
}

export default function Layout({ children, className }: Props) {
	return (
		<main className={`${className} ${styles.main}`}>
			<Flex className={styles.content} direction="column">
				{children}
			</Flex>
		</main>
	);
}
