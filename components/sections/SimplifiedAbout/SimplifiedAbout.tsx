import DataBlock from "@/components/text/data/DataBlock";
import styles from "./SimplifiedAbout.module.scss";

export default function SimplifiedAbout() {
	return (
		<div className={styles.wrapper}>
			<DataBlock value="Melbourne" desc="Australia" color="blue" />
			<DataBlock value="4+" desc="Years Experience" color="blue" />
		</div>
	);
}
