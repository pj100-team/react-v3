import React, { createContext, useContext } from 'react';

interface stateProps {
  state: string;
}

export const FirstPropsDrilling = () => {
  return (
    <div>
      <h1>FirstPropsDrilling</h1>
      <SecondPropsDrilling />
    </div>
  );
};

export const SecondPropsDrilling = () => {
  return (
    <div>
      <h2>SecondPropsDrilling</h2>
      <ThirdPropsDrilling />
    </div>
  );
};

export const ThirdPropsDrilling = () => {
  const { state } = useContext(AuthContext);
  return (
    <div>
      <h3>ThirdPropsDrilling</h3>
      <h4> Context API による状態管理:{state}</h4>
    </div>
  );
};

const AuthContext = createContext<stateProps>({ state: '' });
const HighTest1 = (stateProps: stateProps) => {
  return (
    <AuthContext.Provider value={stateProps}>
      <FirstPropsDrilling />
    </AuthContext.Provider>
  );
};

export default HighTest1;
