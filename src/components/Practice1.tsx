import Button from './elements/Button';
import '../App.css';

const Practice1 = () => {
return (
	<div className="flex justify-center mt-[20px]">
	<Button className="bg-[#f87171]" label="button1" />
	<Button className="bg-[#fcd34d]" label="button2" />
	<Button className="bg-[#86efac]" label="button3" />
	</div>
);
};

export default Practice1;