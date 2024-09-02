import { useContext } from 'react';
import { UserContext } from '../UserContext';

const ComponentD = () => {
  const { name } = useContext(UserContext);

  return (
    <div>
      <p>ComponentD: {name}</p>
    </div>
  );
};

export default ComponentD;
