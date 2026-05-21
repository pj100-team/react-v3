import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <Link to="/practice5" className="mb-4 text-lg">
        TODOList
      </Link>
      <Link to="/practice4" className="mb-4 text-lg">
        addressSearch
      </Link>
    </div>
  );
};

export default Home;
