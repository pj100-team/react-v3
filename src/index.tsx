import React from 'react';
import ReactDOM from 'react-dom/client';
import LowTest from './lowTest';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <LowTest title={'FulAi'} />
  </React.StrictMode>,
);
