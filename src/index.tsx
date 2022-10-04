import React, { useContext, useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';

import { AmplifyProvider } from '@aws-amplify/ui-react';

import { initAws, theme } from './initAws';

import App from './App';
import { AppProvider, AppContext } from './contexts/AppContext';

import './index.css';
import './styles/my-layout.css';
import './styles/my-layout-without-nav.css';

import reportWebVitals from './reportWebVitals';

initAws();

const AppWrapper = () => {
  const appCtx = useContext(AppContext);

  return (
    <AmplifyProvider theme={theme} colorMode="dark">
      <App />
    </AmplifyProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
