import Button from './elements/Button';
import '../App.css';

const Practice1 = () => {
  return (
    <>
      <div>
        <div className="flex justify-center mt-[20px]">
          <Button label="button1" />
          <Button label="button2" />
          <Button label="button3" />
        </div>
      </div>
    </>
  );
};

export default Practice1;
