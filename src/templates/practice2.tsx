import Input from "../components/input";
import { useState } from "react";

const Practice2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
	<div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "32px", gap: "12px" }}>
	  <Input
	    type="checkbox"
	    checked={isChecked}
	    onChange={(e) => setIsChecked(e.target.checked)}
	    width="24px"
	    height="24px"
	  />
	  <span style={{ visibility: isChecked ? "visible" : "hidden", fontSize: "24px" }}>hello world</span>
	</div>
  );
};

export default Practice2;
