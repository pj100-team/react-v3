import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CopilotHighTest2 = () => {
  const [data, setData] = useState<{ result: { postcode: string; region: string; country: string } } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.postcodes.io/postcodes/EC1A1BB');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>ローディング中...</p>;
  }

  if (error) {
    return <p>エラーが発生しました: {error.message}</p>;
  }

  return (
    <div>
      <h1>郵便番号データ</h1>
      {data && (
        <div>
          <p>郵便番号: {data.result.postcode}</p>
          <p>地域: {data.result.region}</p>
          <p>国: {data.result.country}</p>
        </div>
      )}
    </div>
  );
};

export default CopilotHighTest2;
