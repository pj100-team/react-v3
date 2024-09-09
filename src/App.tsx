import { useEffect, useState } from 'react';
import './App.css';

interface ApiResponse {
  message: string | null;
  results: Result[];
  status: number;
}

interface Result {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
}

// APIから住所を取得
const getData = async (zipcode: string) => {
  const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`);
  const data: ApiResponse = await res.json();

  if (data.message) throw new Error(data.message);
  return data.results[0].address1 + data.results[0].address2 + data.results[0].address3;
};

function App() {
  const [zipcode, setZipcode] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipcode(e.target.value);
  };

  useEffect(() => {
    const getAddress = async (value: string) => {
      setIsLoading(true);
      try {
        const adr = await getData(value);
        setAddress(adr);
        setError('');
        console.log(adr);
      } catch (err) {
        setAddress('');
        if (err instanceof Error) {
          setError(err.message);
        }
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getAddress(zipcode);
  }, [zipcode]);

  return (
    <div>
      <input
        type="text"
        name="zipcode"
        onChange={(e) => {
          changeValue(e);
        }}
      />
      <p>address:{address}</p>
      <p>error:{error}</p>
      {isLoading && <p>loading...</p>}
    </div>
  );
}
export default App;
