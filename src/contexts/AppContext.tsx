import React, { useContext, useEffect, useState, useRef } from 'react';

import '../utils/i18n';

interface AppContextProps {
  initialized: boolean;
  setInitialized: React.Dispatch<React.SetStateAction<boolean>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;

  statusMessage: string;
  setStatusMessage: React.Dispatch<React.SetStateAction<string>>;

  languages: Array<{ title: string; value: string }>;
}

export const AppContext = React.createContext<AppContextProps>(undefined!);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [initialized, setInitialized] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [statusMessage, setStatusMessage] = useState<string>('Ready');

  return (
    <AppContext.Provider
      value={{
        initialized,
        setInitialized,

        loading,
        setLoading,

        tabIndex,
        setTabIndex,

        statusMessage,
        setStatusMessage,

        languages: [
          { title: 'English', value: 'en' },
          { title: '日本語', value: 'ja' },
          { title: '繁體中文', value: 'zhHant' },
          { title: '简体中文', value: 'zhHans' },
        ],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
