import './App.css';
import ComponentA from './components/ComponentA';
import { UserContext } from './UserContext';

function App() {
  const name = 'test';

  return (
    <div>
      <UserContext.Provider value={{ name }}>
        <p>name:{name}</p>
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
}

export default App;
