import { useState } from 'react';
import useAddressData from './useAddressData';
import './App.css';

function App() {
  const [zipcode, setZipcode] = useState<string>('');
  const { address, error, isLoading } = useAddressData(zipcode);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipcode(e.target.value);
  };

  // Tailwind class names
  const addressClass = 'text-lg font-bold';
  const errorClass = 'text-red-500';
  const loadingClass = 'text-blue-500';
  const inputClass = 'w-1/2 border-2 border-gray-300 rounded-md p-2';

  return (
    <div>
      <input type="text" name="zipcode" className={inputClass} onChange={(e) => changeValue(e)} />
      <p className={addressClass}>address:{address}</p>
      <p className={errorClass}>error:{error}</p>
      {isLoading && <p className={loadingClass}>loading...</p>}
    </div>
  );
}

export default App;
