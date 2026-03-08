import { useState } from "react";
import API from "../../../../api";
import "./FundsActionWindow.css";

function FundsActionWindow({ type, segmentData, onClose, onUpdate }) {
  const [equityCash, setEquityCash] = useState(0);
  const [commodityCash, setCommodityCash] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFundsClick = async () => {
    if (equityCash < 0 || commodityCash < 0) {
      alert("Amounts must be greater than 0");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        equity: {
          availableCash:
            type === "add"
              ? (segmentData?.equity?.availableCash || 0) + Number(equityCash)
              : (segmentData?.equity?.availableCash || 0) - Number(equityCash),
        },
        commodity: {
          availableCash:
            type === "add"
              ? (segmentData?.commodity?.availableCash || 0) +
                Number(commodityCash)
              : (segmentData?.commodity?.availableCash || 0) -
                Number(commodityCash),
        },
      };

      const res = await API.post("/funds", payload);
      onUpdate(res.data.fund);
      onClose();
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Failed to update funds. Try again.";
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="funds-overlay">
      <div className={`funds-modal `}>
        <div className={`funds-header ${type === "add" ? "add" : "withdraw"}`}>
          <h3>{type === "add" ? "Add Funds" : "Withdraw Funds"}</h3>
        </div>

        <div className="funds-body">
          <div className="funds-inputs">
            <fieldset>
              <legend>Equity Cash</legend>
              <input
                type="number"
                min="0"
                value={equityCash}
                onChange={(e) =>
                  setEquityCash(Math.max(0, Number(e.target.value)))
                }
              />
            </fieldset>

            <fieldset>
              <legend>Commodity Cash</legend>
              <input
                type="number"
                min="0"
                value={commodityCash}
                onChange={(e) =>
                  setCommodityCash(Math.max(0, Number(e.target.value)))
                }
              />
            </fieldset>
          </div>
        </div>

        <div className="funds-footer">
          <span>
            Total: ₹
            {(Number(equityCash) + Number(commodityCash)).toLocaleString(
              "en-IN",
              { minimumFractionDigits: 2 },
            )}
          </span>

          <div className="funds-buttons">
            <button
              className={`funds-btn funds-btn-action ${type === "add" ? "funds-btn-add" : "funds-btn-withdraw"}`}
              onClick={handleFundsClick}
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : type === "add"
                  ? "Add Funds"
                  : "Withdraw Funds"}
            </button>

            <button className="funds-btn funds-btn-cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundsActionWindow;
