import { useCallback, useState } from "react";

type AddressList = [
  {
    address1: string;
    address2: string;
    address3: string;
    kana1: string;
    kana2: string;
    kana3: string;
    prefcode: string;
    zipcode: string;
  }
];

const useFetchData = () => {
  const [addressList, setAddressList] = useState<AddressList>();
  const url = "https://zipcloud.ibsnet.co.jp/api/search";
 
   const fetchAddressData = useCallback(
      async(zipCode:String) =>{ 
        try{
          const res = await fetch(`${url}?zipcode=${zipCode}`, {
            method: 'GET',
          });
          if(res.status !== 200){
            throw res.status;
          }
          const data = await res.json();
          setAddressList(data.results);
        }catch(e){
          setAddressList(undefined);
        }
      },
      [setAddressList],
   );
return {addressList,fetchAddressData};
};

export default useFetchData;
