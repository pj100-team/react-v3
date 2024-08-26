import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginTest from './loginTest';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <LoginTest />
    {/* <LowTest title={'FulAi'} /> */}
  </React.StrictMode>,
);
