type Props = {
	buttonName: string;
	buttonStyle: string;
	onClick: () => void;
};

export const Button = ({ buttonName, buttonStyle, onClick }: Props) => {
	return (
		<button className={buttonStyle} onClick={onClick}>
			{buttonName}
		</button>
	);
};
