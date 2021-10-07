import { createContext, useEffect, useState } from "react";
import { IProduct } from "@interfaces/product";

interface IAppContext {
  card: IProduct[];
  isBrowser: boolean;
  isProductModalOpen: boolean;
  addToCard: (product: IProduct) => void;
  removeFromCard: (productId: string) => void;
  clearCard: () => void;
}

export const AppContext = createContext({} as IAppContext);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [card, setcard] = useState([]);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const addToCard = (product: IProduct) => {};
  const removeFromCard = (productId: string) => {};
  const clearCard = () => {};

  return (
    <AppContext.Provider
      value={{
        card,
        isProductModalOpen,
        isBrowser,
        addToCard,
        removeFromCard,
        clearCard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
