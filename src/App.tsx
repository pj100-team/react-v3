import React, { useState } from 'react';
import './App.css';
import Input from './components/input';
import Button from './components/button';

function App() {
	const [intputText,setIntputText]=useState<string>("")
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
		  setIntputText(e.target.value)
		  console.log(e.target.value);
          }}
          className="h-8 border-2"
        />
        <Button
          buttonName="Reset"
          backGroundColor="red"
          onClick={() => {setIntputText("")
        }
		}
        />
      </div>
    </div>
  );
}

export default App;
