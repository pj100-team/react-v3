import { useContext } from 'react';
import ComponentB from './ComponentB';
import { UserContext } from '../UserContext';

const ComponentA = () => {
  const { name } = useContext(UserContext);
  return (
    <div>
      <p>ComponentA: {name}</p>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
