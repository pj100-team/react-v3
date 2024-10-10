import React from 'react';

interface ButtonProps {
	label: string;
	backgroundColor: string;
	textColor: string;
	onClick: () => void;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, backgroundColor, textColor, onClick, className }) => {
	return (
		<button
			onClick={onClick}
			className={`p-2 rounded border-2 ${className}`}
			style={{
				backgroundColor: backgroundColor,
				color: textColor,
				borderColor: backgroundColor,
			}}
		>
			{label}
		</button>
	);
};

export default Button;
