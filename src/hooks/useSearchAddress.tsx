import axios from 'axios';
import { useEffect, useState } from 'react';

type AddressType = {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
};
type Result = {
  data: AddressType | null;
  error: unknown;
};

async function getAddressData(zip: string): Promise<Result> {
  const zipVal = zip;
  if (!zipVal) {
    return {
      data: null,
      error: '郵便番号が入力されていません',
    };
  }
  try {
    const response = await axios.get('https://zipcloud.ibsnet.co.jp/api/search', {
      params: {
        zipcode: Number(zipVal),
      },
    });
    const data: AddressType = await response.data.results[0];
    return await {
      data: data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
}

export default function useSearchAddress(zip: string) {
  const [result, setResult] = useState<Result>();

  useEffect(() => {
    getAddressData(zip).then((data) => setResult(data));
  }, [zip]);
  return result;
}
