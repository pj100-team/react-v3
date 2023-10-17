import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

/* Question1 */
const color: string = "text-[#f9fafb]";
const gray: string = "bg-slate-400";
/* Question */
const errorText: string = "必須項目です";

const AddressSearch = () => {
  const [inputAddress, setInputAddress] = useState("");
  const [inputPrefecture, setInputPrefecture] = useState("");
  const [inputCity, setInputCity] = useState("");
  return (
    <>
      <div className={`flex justify-center ${gray} text-white py-3`}>
        <p>React-V3</p>
      </div>
      <label className="flex justify-center py-3">addressSearch</label>
      <div className="flex justify-center">
        <label>郵便番号</label>
        <div className="flex-col">
          <Input
            type="text"
            styles=" h-8 mx-4 border-2"
            value={inputAddress}
            onChange={(event) => {
              setInputAddress(event.target.value);
            }}
          />
          <label className="mx-4 flex justify-start text-sm text-red-500">
            {errorText}
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          buttonName={"送信"}
          backGroundColor={gray}
          color={color}
          onClick={() => console.log("button1")}
        />
      </div>
    </>
  );
};

export default AddressSearch;
