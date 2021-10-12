import { createContext, useEffect, useState } from "react";
import { IProduct } from "@interfaces/product";

interface IAppContext {
  isBrowser: boolean;
  popularProducts: IProduct[];
  setGlobalPopularProducts: (products: IProduct[]) => void;
}

export const AppContext = createContext({} as IAppContext);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppContextProviderProps) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [popularProducts, setPopularProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const setGlobalPopularProducts = (products: IProduct[]) =>
    setPopularProducts(products);

  return (
    <AppContext.Provider
      value={{
        isBrowser,
        popularProducts,
        setGlobalPopularProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
