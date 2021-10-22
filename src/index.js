import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ModalProvider } from './context/Modal'

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
