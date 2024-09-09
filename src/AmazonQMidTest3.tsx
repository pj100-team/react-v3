import React, { useState, useEffect } from 'react';

// Custom hook for fetching data
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Component
const AmazonQMidTest3 = () => {
  const [postcode, setPostcode] = useState('');
  const { data, loading, error } = useFetchData(`https://api.postcodes.io/postcodes/${postcode}`);

  const handlePostcodeChange = (e) => {
    setPostcode(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter postcode" value={postcode} onChange={handlePostcodeChange} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <p>Postcode: {(data as { result: { postcode: string } }).result.postcode}</p>
          <p>Region: {(data as { result: { postcode: string; region: string } }).result.region}</p>
          <p>Country: {(data as { result: { country: string } }).result.country}</p>
        </div>
      )}
    </div>
  );
};

export default AmazonQMidTest3;
