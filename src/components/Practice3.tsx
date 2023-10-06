import React, { useState } from "react";

const Practice3 = () => {
  const [chat, setChat] = useState("");
  const inputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setChat(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={inputChange} />
      <br />
      {chat}
    </>
  );
};

export default Practice3;
