import Button from './elements/Button';
import '../App.css';

const Practice1 = () => {
  return (
    <div className="flex justify-center mt-[50px] gap-12">
      <Button backgroundColor="bg-[#f87171]" label="button1" />
      <Button backgroundColor="bg-[#fcd34d]" label="button2" />
      <Button backgroundColor="bg-[#86efac]" label="button3" />
    </div>
  );
};

export default Practice1;