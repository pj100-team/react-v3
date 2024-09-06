import React from 'react';
import ReactDOM from 'react-dom/client';
import CopilotLowTest1 from './copilotLowTest1';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <CopilotLowTest1 title="Hello, world!" />
  </React.StrictMode>,
);
