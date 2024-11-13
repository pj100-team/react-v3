import React, { useState } from 'react';
import './App.css';
import Input from './components/input';
import Button from './components/button';
import Practice4 from './templates/practice4'; //

function App() {
  const [intputText, setIntputText] = useState<string>("");

  return (
    <div>
      <header className="bg-[#94A3B8] text-center p-5 text-4xl text-white">
        React-v3
      </header>
      <div className="flex justify-center my-10">
        <Input
          value={intputText}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setIntputText(e.target.value);
            console.log(e.target.value);
          }}
          className="h-8 border-2"
        />
        <Button
          buttonName="Reset"
          backGroundColor="red"
          onClick={() => {
            setIntputText("");
          }}
        />
      </div>
	  
      <div className="my-10">
        <h1 className="text-center text-2xl mb-5">郵便番号検索フォーム</h1>
        <Practice4 />
      </div>
    </div>
  );
}

export default App;
