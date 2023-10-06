import axios from "axios";
import { useEffect, useState } from "react";

const Practice4 = () => {
  const [address, setAddress] = useState<any>([]);

  useEffect(() => {
    axios
      .post("https://zipcloud.ibsnet.co.jp/api/search?zipcode=6060015")
      .then((response) => {
        console.log(response.data.results);
        setAddress(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {address.map((info: any) => {
        return (
          <>
    {address ? (
      address.map((info: any) => {
        return (
          <>
            <span>郵便番号：</span>
            <span></span>
            <span>都道府県：</span>
            <span></span>
            <span>{info.address1}</span>
            <span></span>
            <span>市区町村：</span>
            <span>{info.address2}</span>
   
          </>
        );
      })
    ) : (
      <p>Loading...</p>
    )}
          </>
        );
      })}
    </>
  );
};

export default Practice4;
