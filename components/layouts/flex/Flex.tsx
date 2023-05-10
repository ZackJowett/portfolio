//

interface Props {
	children?: any;
	direction?: "row" | "column";
	justify?:
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"
		| "space-evenly";
	align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
	wrap?: "nowrap" | "wrap" | "wrap-reverse";
	className?: string;
}

export default function Flex({
	children,
	className = "",
	direction = "row",
	justify = "space-evenly",
	align = "center",
	wrap = "nowrap",
}: Props) {
	return (
		<div
			className={className}
			style={{
				display: "flex",
				width: "100%",
				height: "100%",
				flexDirection: direction,
				justifyContent: justify,
				alignItems: align,
				flexWrap: wrap,
			}}>
			{children}
		</div>
	);
}
