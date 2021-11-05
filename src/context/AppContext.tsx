import { createContext, useEffect, useState } from "react";
import { IProduct } from "@interfaces/product";

interface IAppContext {
  isBrowser: boolean;
  modalRightIsOpen: boolean;
  popularProducts: IProduct[];
  toggleModalRightIsOpen: () => void;
  setGlobalPopularProducts: (products: IProduct[]) => void;
}

export const AppContext = createContext({} as IAppContext);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppContextProviderProps) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [modalRightIsOpen, setModalRightIsOpen] = useState(false);
  const [popularProducts, setPopularProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const setGlobalPopularProducts = (products: IProduct[]) =>
    setPopularProducts(products);

  const toggleModalRightIsOpen = () => setModalRightIsOpen(!modalRightIsOpen);

  return (
    <AppContext.Provider
      value={{
        isBrowser,
        modalRightIsOpen,
        popularProducts,
        setGlobalPopularProducts,
        toggleModalRightIsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
