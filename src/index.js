import React from 'react';
import ReactDOM from 'react-dom/client';
import init from './init.jsx';

const app = async () => {
  const vdom = await init();
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {vdom}
    </React.StrictMode>,
  );
};

app();
