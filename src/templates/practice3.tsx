import Input from '../components/input';
import Button from '../components/button';
import { FormEvent, useState } from 'react';

const Practice3: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <Input type="text" name="word" style="p-form__input" onChange={handleChange} value={inputValue} />
      <Button type="button" onClick={handleClear} style={'text-[#f9fafb] bg-[#f87171] border-[#f87171]'}>
        リセット
      </Button>
    </div>
  );
};

export default Practice3;
