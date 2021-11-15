import React from "react";
import type { AppProps } from "next/app";

import { AppProvider } from "@context/AppContext";
import { GlobalStyles } from "@styles/globalStyles";
import { CartProvider } from "@context/CartContext";
import { Toaster } from "@shared/components/Toaster";

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
      <GlobalStyles />
      <Toaster />
      <Component {...pageProps} />
    </AppState>
  );
};

export default MyApp;
