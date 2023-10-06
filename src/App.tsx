import { useState } from "react";
import "./App.css";
import Practice2 from "./components/Practice2";
import AdPractice2 from "./components/AdPractice2";
import { Box } from "@mui/material";
import Practice3 from "./components/Practice3";
import Practice4 from "./components/Practice4";
import Practice5 from "./components/Practice5";

export const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        {/* <Practice2 /> */}
        {/* <AdPractice2 isChecked={isChecked} handleCheckBox={handleCheckBox} /> */}
        {/* <Practice3 /> */}
        {/* <Practice4 /> */}
        <Practice5 />
      </Box>
    </>
  );
};
