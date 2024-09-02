import './App.css';
import useGetAddress from './useGetAddress';

function App() {
  const { setPostal, address, message, isLoading } = useGetAddress();

  return (
    <>
      <input className="border-2 border-black" name="postal" type="text" onChange={(e) => setPostal(e.target.value)} />
      {isLoading ? <p>Loading...</p> : message ? <p>{message}</p> : <p>{address}</p>}
    </>
  );
}

export default App;
