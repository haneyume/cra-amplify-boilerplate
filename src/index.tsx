import React, { useContext, useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';

import { Amplify, I18n } from 'aws-amplify';
import {
  AmplifyProvider,
  defaultDarkModeOverride,
  translations,
} from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

import App from './App';
import { AppProvider, AppContext } from './contexts/AppContext';

import './index.css';
import '@aws-amplify/ui-react/styles.css';

import reportWebVitals from './reportWebVitals';

Amplify.configure(awsconfig);
I18n.putVocabularies(translations);

const theme = {
  name: 'my-theme',
  overrides: [defaultDarkModeOverride],
};

const AppWrapper = () => {
  const appCtx = useContext(AppContext);

  return (
    <AmplifyProvider theme={theme} colorMode="dark">
      <App key={appCtx.language} />
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
