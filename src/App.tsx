import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Practice4 from './templates/practice4';
import Practice5 from './templates/practice5';

const Home: React.FC = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold mb-4">HOME</h1>
    <div className="flex justify-center space-x-4 mt-6">
      <Link to="/todo" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        TODOリスト
      </Link>
      <Link to="/address" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        住所検索
      </Link>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Practice5 />} />
        <Route path="/address" element={<Practice4 />} />
      </Routes>
    </Router>
  );
};

export default App;
