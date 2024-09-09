import { useState, useEffect } from 'react';

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

const useAddressData = (zipcode: string) => {
  const [address, setAddress] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAddress = async (value: string) => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${value}`);
        const data: ApiResponse = await res.json();

        if (!data.results) throw new Error(data.message ?? '住所を取得出来ませんでした');
        const adr = data.results[0].address1 + data.results[0].address2 + data.results[0].address3;
        setAddress(adr);
        setError('');
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

    if (zipcode) {
      getAddress(zipcode);
    } else {
      setAddress('');
      setError('');
      setIsLoading(false);
    }
  }, [zipcode]);

  return { address, error, isLoading };
};

export default useAddressData;
