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
					className="px-11 py-4 text-lg"
					handleClick={() => handleClick('button1')}
				/>
				<Button
					label="button2"
					backgroundColor="#fcd34d"
					textColor="#f9fafb"
					className="px-11 py-4 text-lg"
					handleClick={() => handleClick('button2')}
				/>
				<Button
					label="button3"
					backgroundColor="#86efac"
					textColor="#f9fafb"
					className="px-11 py-4 text-lg"
					handleClick={() => handleClick('button3')}
				/>
			</div>
		</div>
	);
};

export default Practice1;
