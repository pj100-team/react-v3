import { useState } from 'react';
import './App.css';

type Address = {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
};

type ApiResponse = {
  message: string | null;
  results: Address[] | null;
  status: number;
};

function App() {
  const [postalCode, setPostalCode] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`);
      const data: ApiResponse = await response.json();

      if (data.status !== 200) throw new Error(data.message || 'An error occurred while fetching data.');

      const address = data.results?.[0];
      const fullAddress = address ? `${address.address1}${address.address2}${address.address3}` : '';
      setResult(fullAddress);
      setError('');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
      setResult('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Apply Tailwind CSS classes */}
      <input
        type="text"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mr-2"
      />
      <button onClick={fetchData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Fetch Data
      </button>
      {isLoading && <div className="mt-4">Loading...</div>}
      {error && <div className="mt-4 text-red-500">{error}</div>}
      <div className="mt-4">{result}</div>
    </div>
  );
}

export default App;
