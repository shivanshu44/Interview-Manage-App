import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import API, { APIContext } from './services/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <APIContext.Provider value={new API()}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </APIContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
