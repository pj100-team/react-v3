import './App.css';
import List from './List';
import { ListItem } from './type';

function App() {
  const dummyData: ListItem[] = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
    { id: 5, text: 'Item 5' },
    { id: 6, text: 'Item 6' },
    { id: 7, text: 'Item 7' },
    { id: 8, text: 'Item 8' },
    { id: 9, text: 'Item 9' },
    { id: 10, text: 'Item 10' },
  ];

  return (
    <div className="flex items-center justify-center">
      <List items={dummyData} />
    </div>
  );
}

export default App;
