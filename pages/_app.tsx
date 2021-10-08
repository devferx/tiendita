import React from "react";
import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";

import { AppProvider } from "@context/AppContext";
import { GlobalStyles } from "@styles/globalStyles";
import { CartProvider } from "@context/CartContext";

interface AppStateProps {
  children: React.ReactNode;
}

export const AppState = ({ children }: AppStateProps) => (
  <AppProvider>
    <CartProvider>{children}</CartProvider>
  </AppProvider>
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppState>
      <Toaster />
      <GlobalStyles />
      <Component {...pageProps} />
    </AppState>
  );
};

export default MyApp;
