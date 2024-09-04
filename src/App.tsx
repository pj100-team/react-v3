import './App.css';
import React, { createContext, useContext } from 'react';

type FourthLevelProps = {
  fourthLevelText: string;
};

type ThirdLevelProps = {
  thirdLevelText: string;
};

type SecondLevelProps = {
  secondLevelText: string;
};

type FirstLevelProps = {
  firstLevelText: string;
};

const FourthLevelContext = createContext<FourthLevelProps | undefined>(undefined);
const ThirdLevelContext = createContext<ThirdLevelProps | undefined>(undefined);
const SecondLevelContext = createContext<SecondLevelProps | undefined>(undefined);
const FirstLevelContext = createContext<FirstLevelProps | undefined>(undefined);

function App() {
  const fourthLevelProps: FourthLevelProps = {
    fourthLevelText: 'Fourth Level Text',
  };

  const thirdLevelProps: ThirdLevelProps = {
    thirdLevelText: 'Third Level Text',
  };

  const secondLevelProps: SecondLevelProps = {
    secondLevelText: 'Second Level Text',
  };

  const firstLevelProps: FirstLevelProps = {
    firstLevelText: 'First Level Text',
  };

  return (
    <header className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">
      <FirstLevelContext.Provider value={firstLevelProps}>
        <SecondLevelContext.Provider value={secondLevelProps}>
          <ThirdLevelContext.Provider value={thirdLevelProps}>
            <FourthLevelContext.Provider value={fourthLevelProps}>
              <ChildComponent />
            </FourthLevelContext.Provider>
          </ThirdLevelContext.Provider>
        </SecondLevelContext.Provider>
      </FirstLevelContext.Provider>
    </header>
  );
}

function ChildComponent() {
  const firstLevelProps = useContext(FirstLevelContext);

  return (
    <div>
      <h1>{firstLevelProps?.firstLevelText}</h1>
      <SecondLevelComponent />
    </div>
  );
}

function SecondLevelComponent() {
  const secondLevelProps = useContext(SecondLevelContext);

  return (
    <div>
      <h2>{secondLevelProps?.secondLevelText}</h2>
      <ThirdLevelComponent />
    </div>
  );
}

function ThirdLevelComponent() {
  const thirdLevelProps = useContext(ThirdLevelContext);

  return (
    <div>
      <h3>{thirdLevelProps?.thirdLevelText}</h3>
      <FourthLevelComponent />
    </div>
  );
}

function FourthLevelComponent() {
  const fourthLevelProps = useContext(FourthLevelContext);

  return (
    <div>
      <h4>{fourthLevelProps?.fourthLevelText}</h4>
    </div>
  );
}

export default App;
