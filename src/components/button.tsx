import React from 'react';

interface ButtonProps {
	label: string;
	backgroundColor: string;
	textColor: string;
	onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, backgroundColor, textColor, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="p-2 rounded cursor-pointer border-2"
			style={{
				backgroundColor: backgroundColor,
				color: textColor,
				borderColor: backgroundColor,
				padding: '8px 38px',
				fontSize: '18px',
			}}
		>
			{label}
		</button>
	);
};

export default Button;
