import React from 'react';
import ReactDOM from 'react-dom/client';
import HighTest1 from './highTest1';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LoginTest /> */}
    {/* <MidTest2 /> */}
    {/* <LowTest title={'FulAi'} /> */}
    <HighTest1 state="成功" />
  </React.StrictMode>,
);
