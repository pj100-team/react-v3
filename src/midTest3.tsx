import React, { useState } from 'react';
import useFetchAddress from './hook';

const MidTest3 = () => {
  const [postcode, setPostcode] = useState<string>('');
  const { data, loading, error } = useFetchAddress(postcode);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(e.target.value);
  };

  return (
    <div>
      <h1>郵便番号で住所を取得</h1>
      <input type="text" value={postcode} onChange={handleChange} />
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

export default MidTest3;
