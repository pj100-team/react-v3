import { useState, useEffect } from 'react';

interface Address {
  ja: {
    prefecture: string;
    address1: string;
    address2: string;
  };
}

interface ApiResponse {
  addresses: Address[];
}

const useFetchAddress = (postcode: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null >(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const response = await fetch(`https://jp-postal-code-api.ttskch.com/api/v1/${postcode}.json`);
        if (!response.ok) {
          throw new Error('正しい郵便番号を入力してください');
        }
        const result: ApiResponse = await response.json();
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    if (postcode) {
      fetchData();
    }
  }, [postcode]);

  return { data, loading, error };
};

export default useFetchAddress;