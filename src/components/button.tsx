import React from 'react';

interface ButtonProps {
	label: string;
	backgroundColor: string;
	textColor: string;
	handleClick: () => void;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, backgroundColor, textColor, handleClick, className }) => {
	return (
		<button
			className={`p-2 rounded border-2 ${className}`}
			style={{
				backgroundColor: backgroundColor,
				color: textColor,
				borderColor: backgroundColor,
			}}
			onClick={handleClick}
		>
			{label}
		</button>
	);
};

export default Button;
