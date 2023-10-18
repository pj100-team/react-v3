import React, { useEffect, useState } from "react";

interface Props {
  zipCode: Number;
}

const FetchData = ({ zipCode }: Props) => {
  console.log("start");
  const [data, setData] = useState(undefined);
  const url = "https://zipcloud.ibsnet.co.jp/api/search";
  const params = {
    method: "POST",
    body: JSON.stringify({ zipCode: { zipCode } }),
  };

  // useEffect(() => {
  fetch(url, params)
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch(() => alert("error"));
  // }, []);
  console.log(data);
  return <></>;
};

export default FetchData;
