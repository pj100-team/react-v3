import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Practice4 from './components/templates/Practice4';
import Practice5 from './components/templates/Practice5';
import Home from './components/templates/Home';

function AppContent() {
  const location = useLocation();

  const headerText = location.pathname === '/' ? 'HOME' : 'React-v3';
  return (
    <>
      <header className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">{headerText}</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice4" element={<Practice4 />} />
        <Route path="/practice5" element={<Practice5 />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;