import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Router } from '@everybase/router';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
  );
}
