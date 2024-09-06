import { useState, useEffect } from 'react';
import axios from 'axios';

interface PostcodeData {
  result: {
    postcode: string;
    region: string;
    country: string;
  };
}

const usePostcodeData = (postcode: string) => {
  const [data, setData] = useState<PostcodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<PostcodeData>(`https://api.postcodes.io/postcodes/${postcode}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError((error as any).message);
        setLoading(false);
      }
    };

    fetchData();
  }, [postcode]);

  return { data, loading, error };
};

const CopilotMidTest3: React.FC = () => {
  const { data, loading, error } = usePostcodeData('EC1A1BB');

  if (loading) {
    return <p>ローディング中...</p>;
  }

  if (error) {
    return <p>エラーが発生しました: {error}</p>;
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

export default CopilotMidTest3;
