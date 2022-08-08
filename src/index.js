import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
        domain="dev-78c1nql2.us.auth0.com"
        clientId="6wCR2gvdn1szkiR0wQJURXAy25tJ7Mkq"
        redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>
);
