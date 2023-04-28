import ImageContainer from "./ImageContainer";
import styles from "./Gallery.module.scss";

interface Props {
	className?: string;
	images: {
		src: string;
		alt: string;
		width: number;
		height: number;
	}[];
}

export default function Gallery({ className, images }: Props) {
	return (
		<div className={`${className} ${styles.gallery}`}>
			{images.map((image: any) => (
				<ImageContainer
					src={image.src}
					alt={image.alt}
					dimensions={{ width: image.width, height: image.height }}
				/>
			))}
		</div>
	);
}
