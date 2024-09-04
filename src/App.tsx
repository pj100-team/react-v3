import "./App.css";

type FourthLevelProps = {
  fourthLevelText: string;
};

type ThirdLevelProps = {
  thirdLevelText: string;
  fourthLevelProps: FourthLevelProps;
};

type SecondLevelProps = {
  secondLevelText: string;
  thirdLevelProps: ThirdLevelProps;
};

type FirstLevelProps = {
  firstLevelText: string;
  secondLevelProps: SecondLevelProps;
};

function App() {
  const fourthLevelProps: FourthLevelProps = {
    fourthLevelText: "Fourth Level Text",
  };

  const thirdLevelProps: ThirdLevelProps = {
    thirdLevelText: "Third Level Text",
    fourthLevelProps: fourthLevelProps,
  };

  const secondLevelProps: SecondLevelProps = {
    secondLevelText: "Second Level Text",
    thirdLevelProps: thirdLevelProps,
  };

  const firstLevelProps: FirstLevelProps = {
    firstLevelText: "First Level Text",
    secondLevelProps: secondLevelProps,
  };

  return (
    <header className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">
      <ChildComponent firstLevelProps={firstLevelProps} />
    </header>
  );
}

type ChildComponentProps = {
  firstLevelProps: FirstLevelProps;
};

function ChildComponent({ firstLevelProps }: ChildComponentProps) {
  return (
    <div>
      <h1>{firstLevelProps.firstLevelText}</h1>
      <SecondLevelComponent secondLevelProps={firstLevelProps.secondLevelProps} />
    </div>
  );
}

type SecondLevelComponentProps = {
  secondLevelProps: SecondLevelProps;
};

function SecondLevelComponent({ secondLevelProps }: SecondLevelComponentProps) {
  return (
    <div>
      <h2>{secondLevelProps.secondLevelText}</h2>
      <ThirdLevelComponent thirdLevelProps={secondLevelProps.thirdLevelProps} />
    </div>
  );
}

type ThirdLevelComponentProps = {
  thirdLevelProps: ThirdLevelProps;
};

function ThirdLevelComponent({ thirdLevelProps }: ThirdLevelComponentProps) {
  return (
    <div>
      <h3>{thirdLevelProps.thirdLevelText}</h3>
      <FourthLevelComponent fourthLevelProps={thirdLevelProps.fourthLevelProps} />
    </div>
  );
}

type FourthLevelComponentProps = {
  fourthLevelProps: FourthLevelProps;
};

function FourthLevelComponent({ fourthLevelProps }: FourthLevelComponentProps) {
  return (
    <div>
      <h4>{fourthLevelProps.fourthLevelText}</h4>
    </div>
  );
}

export default App;
