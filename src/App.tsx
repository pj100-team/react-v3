import { createContext, useContext, useState } from 'react';
import './App.css';

type UserType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};
const UserContext = createContext<UserType>({
  name: '',
  setName: () => {},
  email: '',
  setEmail: () => {},
});

const Component1 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h2>Component 1</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <Component2 />
    </>
  );
};

const Component2 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h2>Component 2</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <Component3 />
    </>
  );
};

const Component3 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h2>Component 3</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => user.setName('Jane Doe')}>Change Name</button>
      <button onClick={() => user.setEmail('jane@example.com')}>Change Email</button>
    </>
  );
};

function App() {
  const [name, setName] = useState<string>('John Doe');
  const [email, setEmail] = useState<string>('john@example.com');
  const user: UserType = { name, setName, email, setEmail };

  return (
    <>
      <UserContext.Provider value={user}>
        <h1>React Context API</h1>
        <Component1 />
      </UserContext.Provider>
    </>
  );
}

export default App;
