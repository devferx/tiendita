import { useContext } from "react";
import ReactDOM from "react-dom";
import { Toaster as HotToaster } from "react-hot-toast";

import { AppContext } from "@context/AppContext";

export const Toaster = () => {
  const { isBrowser } = useContext(AppContext);

  if (!isBrowser) return null;

  return ReactDOM.createPortal(
    <div style={{ zIndex: 99999 }}>
      <HotToaster />
    </div>,
    document.getElementById("toaster")
  );
};
