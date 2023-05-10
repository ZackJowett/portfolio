import Image from "next/image";
import styles from "./ImageContainer.module.scss";

interface Props {
	className?: string;
	src: string;
	alt: string;
	dimensions: { width: number; height: number };
}

export default function ImageContainer({
	className,
	src,
	alt,
	dimensions,
}: Props) {
	return (
		<div className={styles.container}>
			{/* <div className={styles.description}>{alt}</div> */}
			<Image
				className={className}
				src={src}
				alt={alt}
				width={dimensions.width}
				height={dimensions.height}
			/>
		</div>
	);
}
