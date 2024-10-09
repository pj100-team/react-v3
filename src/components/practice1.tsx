import React from 'react';
import Button from './button';

const Practice1: React.FC = () => {
	const handleClick = (buttonName: string) => {
		console.log(buttonName);
	};

	return (
		<div style={{ textAlign: 'center',  borderRadius: '10px',  margin: '100px auto' }}>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '40px' }}>
				<Button
					label="button1"
					backgroundColor="#f87171"
					textColor="#f9fafb"
					onClick={() => handleClick('button1')}
				/>
				<Button
					label="button2"
					backgroundColor="#fcd34d"
					textColor="#f9fafb"
					onClick={() => handleClick('button2')}
				/>
				<Button
					label="button3"
					backgroundColor="#86efac"
					textColor="#f9fafb"
					onClick={() => handleClick('button3')}
				/>
			</div>
		</div>
	);
};

export default Practice1;
