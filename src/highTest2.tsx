import React, { useState, useEffect } from 'react';

interface ApiResponse {
  addresses: Address[];
}

interface Address {
  ja: {
    prefecture: string;
    address1: string;
  };
}

const HighTest2 = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null | unknown>(null);

  const [postcode, setPostcode] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const response = await fetch(`https://jp-postal-code-api.ttskch.com/api/v1/${postcode}.json`);
        if (!response.ok) {
          throw new Error('正し郵便番号を入力してください');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postcode]);

  return (
    <div>
      <h1>郵便番号で住所を取得</h1>
      <div>
        <label htmlFor="postcode" style={{ marginRight: '8px' }}>
          郵便番号:
        </label>
        <input type="text" id="postcode" value={postcode} onChange={handleChange} />
      </div>
      {loading ? <div>検索中</div> : <div></div>}
      {data ? (
        <>
          <p>都道府県: {data.addresses[0].ja.prefecture}</p>
          <p>市町村: {data.addresses[0].ja.address1}</p>
        </>
      ) : (
        <div>{error ? <div>{(error as Error).message}</div> : <div></div>}</div>
      )}
    </div>
  );
};

export default HighTest2;
