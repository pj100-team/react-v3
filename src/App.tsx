import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="flex justify-center gap-2">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <Button key={index} name={`Button ${index + 1}`} alertText={`Hello, world ${index + 1}!`} />
        ))}
    </div>
  );
}

export default App;
