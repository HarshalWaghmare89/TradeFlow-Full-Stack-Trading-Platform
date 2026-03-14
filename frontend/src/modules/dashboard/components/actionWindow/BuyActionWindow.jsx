import { useState, useContext } from "react";
import { GeneralContext } from "./GeneralContext";
import API from "../../../../api";
import "./BuyActionWindow.css";

function BuyActionWindow({ uid, mode }) {
  const { closeBuyWindow, refreshDashboardData } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const [productType, setProductType] = useState("NRML");
  const [exchange, setExchange] = useState("NSE");
  const [loading, setLoading] = useState(false);

  const margin =
    stockQuantity > 0 && stockPrice > 0
      ? (stockQuantity * stockPrice).toFixed(2)
      : "0.00";

  const newuid = uid
    .toString()
    .replace("undefined", "")
    .replace(/([a-zA-Z])(\d)/g, "$1 $2")
    .trim();

  const handleTradeClick = async () => {
    if (stockQuantity <= 0 || stockPrice <= 0) {
      alert("Quantity and Price must be greater than 0");
      return;
    }

    setLoading(true);

    try {
      const response = await API.post("/trade/execute", {
        instrument: newuid,
        quantity: Number(stockQuantity),
        price: Number(stockPrice),
        mode,
        product: productType,
        exchange,
      });

      if (refreshDashboardData) refreshDashboardData();
      closeBuyWindow();
    } catch (err) {
      alert(
        err.response?.data?.message || "Failed to execute trade. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="trade-overlay">
      <div
        className={`trade-container ${
          mode === "BUY" ? "trade-buy-theme" : "trade-sell-theme"
        }`}
      >
        <div className="trade-header">
          <h3>
            {mode} Order <span>{newuid}</span>
          </h3>
        </div>

        <div className="trade-regular-order">
          <div className="trade-inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                min="1"
                max="1000"
                value={stockQuantity}
                onChange={(e) =>
                  setStockQuantity(Math.max(1, Number(e.target.value)))
                }
              />
            </fieldset>

            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                step="0.05"
                min="0"
                max="100000"
                value={stockPrice}
                onChange={(e) =>
                  setStockPrice(Math.max(0, Number(e.target.value)))
                }
              />
            </fieldset>

            <fieldset>
              <legend>Product</legend>
              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
              >
                <option value="NRML">NRML</option>
                <option value="MIS">MIS</option>
                <option value="CNC">CNC</option>
              </select>
            </fieldset>

            <fieldset>
              <legend>Exchange</legend>
              <select
                value={exchange}
                onChange={(e) => setExchange(e.target.value)}
              >
                <option value="NSE">NSE</option>
                <option value="BSE">BSE</option>
                <option value="CDS">CDS</option>
                <option value="MCX">MCX</option>
              </select>
            </fieldset>
          </div>
        </div>

        <div className="trade-buttons">
          <span>Margin required ₹{margin}</span>

          <div>
            <button
              className={`trade-btn ${
                mode === "BUY" ? "trade-btn-blue" : "trade-btn-red"
              }`}
              onClick={handleTradeClick}
              disabled={loading}
            >
              {loading ? "Processing..." : mode}
            </button>

            <button
              className="trade-btn trade-btn-grey"
              onClick={closeBuyWindow}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyActionWindow;
