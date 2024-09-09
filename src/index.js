import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import LaylStore from './Redux/Store';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      {/* <Provider store={LaylStore}> */}
        <GoogleOAuthProvider clientId="69261592377">
            <App />
        </GoogleOAuthProvider>
      {/* </Provider> */}
    </HelmetProvider>
  </React.StrictMode>
);
