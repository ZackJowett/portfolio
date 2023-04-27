import styles from "./GiantSVG.module.scss";

interface Props {
	flip?: boolean;
}

export default function GiantText({ flip = false }: Props) {
	return (
		<div className={`${styles.wrapper} ${flip && styles.rotate180}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="290"
				height="1539.991"
				viewBox="0 0 290 1539.991"
				className={styles.svg}>
				<g
					id="Group_15"
					data-name="Group 15"
					transform="translate(892.992 4726.995) rotate(90)">
					<path
						id="Path_5"
						data-name="Path 5"
						d="M250,.012c-49.628,0-125-4.283-125,150V525C125,637.59,6.6,744.728,0,750c0,0,125,109.286,125,225V1349.99c0,154.281,75.372,150,125,150"
						transform="translate(-4707 872.992) rotate(-90)"
						fill="none"
						stroke="#fff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="40"
					/>
				</g>
			</svg>
		</div>
	);
}
