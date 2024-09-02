import { useContext } from 'react';
import { UserContext } from '../UserContext';
import ComponentC from './ComponentC';

const ComponentB = () => {
  const { name } = useContext(UserContext);

  return (
    <div>
      <p>ComponentB: {name}</p>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
