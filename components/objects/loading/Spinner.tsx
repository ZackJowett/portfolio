import { ImSpinner2 } from "react-icons/im";
import styles from "./Spinner.module.scss";

export default function Spinner() {
	return <ImSpinner2 className={styles.spinner} size={16} />;
}
