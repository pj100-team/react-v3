type Props = {
	name: string;
	style: React.CSSProperties;
	onClick: () => void;
}

export const Practice1 = (props: Props) => {
	const { name, style, onClick } = props;

	return (
		<>
			<button style={style} onClick={onClick}>{name}</button>
		</>
	);
}
