// src/practice1.tsx
import React from 'react';
import Button from './components/button';

const Practice1: React.FC = () => {
	const handleClick = (buttonName: string) => {
		console.log(`${buttonName} was clicked`);
	};

	return (
		<div style={{ padding: '20px', textAlign: 'center' }}>
			<h2>React-v3</h2>
			<Button
				label="button1"
				onClick={() => handleClick('button1')}
				style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', margin: '5px' }}
			/>
			<Button
				label="button2"
				onClick={() => handleClick('button2')}
				style={{ backgroundColor: 'yellow', color: 'black', padding: '10px 20px', margin: '5px' }}
			/>
			<Button
				label="button3"
				onClick={() => handleClick('button3')}
				style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', margin: '5px' }}
			/>
		</div>
	);
};

export default Practice1;