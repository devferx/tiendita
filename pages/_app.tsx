import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";

import { AppContextProvider } from "../context/AppContext";
import { GlobalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Toaster />
      <GlobalStyles />
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
