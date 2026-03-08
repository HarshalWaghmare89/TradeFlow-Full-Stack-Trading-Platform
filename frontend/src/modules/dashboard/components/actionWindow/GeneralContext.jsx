import { useState, createContext } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
});

function GeneralContextComponent({ children }) {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderMode, setOrderMode] = useState("BUY");

  const openBuyWindow = (uid, mode) => {
    setSelectedStockUID(uid);
    setOrderMode(mode);
    setIsBuyWindowOpen(true);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider value={{ openBuyWindow, closeBuyWindow }}>
      {children}

      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} mode={orderMode} />
      )}
    </GeneralContext.Provider>
  );
}

export { GeneralContext };
export default GeneralContextComponent;
