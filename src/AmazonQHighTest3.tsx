import React, { useCallback } from 'react';

type ExpensiveComponentProps = {
  data: any;
  handleClick: () => void;
};

const ExpensiveComponent = React.memo(({ data, handleClick }: ExpensiveComponentProps) => {
  // Expensive calculations or rendering logic here

  return (
    <div onClick={handleClick}>
      {/* Render component */}
    </div>
  );
});

const AmazonQHighTest3 = ({ data }: { data: any }) => {
  const handleClick = useCallback(() => {
    // Handle click logic here
  }, []);

  return <ExpensiveComponent data={data} handleClick={handleClick} />;
};

export default AmazonQHighTest3;
