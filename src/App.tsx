import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContents from './components/MainContents';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header title="practice" />
      <MainContents />
      <Footer />
    </div>
  );
}

export default App;
