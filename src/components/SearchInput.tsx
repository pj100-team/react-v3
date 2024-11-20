import { useState} from 'react';
import Button from './Button';

interface SearchInputProps
{
  title?:string;
}

const SearchInput:React.FC<SearchInputProps>=()=> {
    const [value, setValue] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setValue(event.currentTarget.value.trim());
      }
      const handleClick = () => 
      {
          if (value) 
            {
              console.log(value);
              setValue("");
            }
      }
  return (
    <>
      <input type='search' onClick={handleClick} value={value} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500" />
      <Button onClick={handleClick} title='reset' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded'>Reset</Button>
    </>
  );
}

export default SearchInput;
