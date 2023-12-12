import { useState } from "react";
type AddressType = {
  message: null;
  results: {
    address1: string;
    address2: string;
    address3: string;
    kana1: string;
    kana2: string;
    prefcode: string;
    zipcode: string;
  }[];
};
export const useAddressSearch = () => {
  const [prefecture, setPrefecture] = useState("");
  const [city, setCity] = useState("");
  const [isAd, setIsAd] = useState(true);

  const fetchAddress = (PostCode: number): Promise<AddressType> => {
    return new Promise<AddressType>((resolve, reject) => {
      fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${PostCode}`)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .then((error) => reject(error));
    });
  };
  const getAddress = async (PostCode: number) => {
    if (String(PostCode).length === 7) {
      const fetchdata = await fetchAddress(PostCode);
      if (fetchdata.results === null) {
        setIsAd(false);
      } else {
        setPrefecture(fetchdata.results[0].address1);
        setCity(fetchdata.results[0].address2);
      }
    }
  };

  return { getAddress, prefecture, city, isAd, setPrefecture, setIsAd, setCity };
};
