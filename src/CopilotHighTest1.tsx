import React, { useState, createContext, useContext } from 'react';

// Context の作成
interface SharedState {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SharedStateContext = createContext<SharedState | undefined>(undefined);

const ComponentC = () => {
  const sharedState = useContext(SharedStateContext);
  const value = sharedState?.value;
  return (
    <div>
      <p>Component C: {value}</p>
    </div>
  );
};

const ComponentB = () => {
  return (
    <div>
      <p>Component B</p>
      <ComponentC />
    </div>
  );
};

const ComponentA = () => {
  return (
    <div>
      <p>Component A</p>
      <ComponentB />
    </div>
  );
};

const CopilotHighTest1 = () => {
  const [value, setValue] = useState('共有される状態');

  return (
    <SharedStateContext.Provider value={{ value, setValue }}>
      <div>
        <h1>Context API の例</h1>
        <ComponentA />
      </div>
    </SharedStateContext.Provider>
  );
};

export default CopilotHighTest1;
