type Props = {
	buttonStyle?: string;
	buttonName: string;
	onClick: () => void;
};

export const Button = ({ buttonStyle, buttonName, onClick }: Props) => {
	return (
		<button className={buttonStyle} onClick={onClick}>
			{buttonName}
		</button>
	);
};
