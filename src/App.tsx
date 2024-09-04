import { useState } from 'react';
import './App.css';

function App() {
  const [postalCode, setPostalCode] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`);
      const data = await response.json();

      if (data.status === 400) {
        setError(data.message);
        setResult('');
      } else {
        const address = data.results[0];
        const fullAddress = `${address.address1}${address.address2}${address.address3}`;
        setResult(fullAddress);
        setError('');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching data.');
      setResult('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {' '}
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
