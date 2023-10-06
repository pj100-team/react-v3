import React, { useState } from "react";

const Practice2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
    {}
      <input type="checkbox" onChange={handleCheckBox} />
      {isChecked ? <div>Hello World</div> : <div></div>}
    </>
  );
};

export default Practice2;
