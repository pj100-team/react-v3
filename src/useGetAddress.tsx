import { useState, useEffect } from 'react';

const useGetAddress = () => {
  const [postal, setPostal] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAddress = async (postal: string) => {
    setIsLoading(true);
    const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postal}`);
    const value = await res.json();

    const msg = value.message;
    if (msg) {
      setMessage(msg);
    } else {
      setMessage('');
      setAddress(value.results[0].address1 + value.results[0].address2 + value.results[0].address3);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getAddress(postal);
  }, [postal]);

  return { setPostal, address, message, isLoading };
};

export default useGetAddress;
