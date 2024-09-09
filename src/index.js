import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import LaylStore from './Redux/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={LaylStore}>
          <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
