import { useContext } from 'react';
import { UserContext } from '../UserContext';
import ComponentD from './ComponentD';

const ComponentC = () => {
  const { name } = useContext(UserContext);

  return (
    <div>
      <p>ComponentC: {name}</p>
      <ComponentD />
    </div>
  );
};

export default ComponentC;
