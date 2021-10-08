import { createContext, useEffect, useState } from "react";

interface IAppContext {
  isBrowser: boolean;
}

export const AppContext = createContext({} as IAppContext);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppContextProviderProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isBrowser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
