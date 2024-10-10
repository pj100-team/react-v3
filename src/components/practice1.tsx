import React from 'react';
import Button from './button';

const Practice1: React.FC = () => {
	const handleClick = (buttonName: string) => {
		console.log(buttonName);
	};

	return (
		<div className="text-center rounded-2xl mx-auto mt-24">
			<div className="flex justify-center mt-5 gap-10">
				<Button
					label="button1"
					backgroundColor="#f87171"
					textColor="#f9fafb"
					onClick={() => handleClick('button1')}
					className="px-11 py-4 text-lg"
				/>
				<Button
					label="button2"
					backgroundColor="#fcd34d"
					textColor="#f9fafb"
					onClick={() => handleClick('button2')}
					className="px-11 py-4 text-lg"
				/>
				<Button
					label="button3"
					backgroundColor="#86efac"
					textColor="#f9fafb"
					onClick={() => handleClick('button3')}
					className="px-11 py-4 text-lg"
				/>
			</div>
		</div>
	);
};

export default Practice1;
