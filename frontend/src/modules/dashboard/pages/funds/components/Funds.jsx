import { useEffect, useState } from "react";
import useTheme from "../../../../../shared/hooks/useTheme";
import FundsActionWindow from "../../../components/actionWindow/FundsActionWindow";
import API from "../../../../../api";
import "./Funds.css";

function SegmentCard({ title, icon, data, loading }) {
  return (
    <div className="segment-wrapper">
      {/* Header*/}
      <div className="segment-header">
        <div className="segment-title">
          <span className="segment-logo">
            <i className={`${icon}`}></i>
          </span>
          <span className="name">{title}</span>
        </div>

        <div className="right-toolbar">
          <a href="#" className="toolbar-item">
            <span className="right-tool-icon">
              <i className="fa-solid fa-circle-notch"></i>
            </span>
            View statement
          </a>
          <a href="#" className="toolbar-item">
            <span className="right-tool-icon">
              <i className="fa-solid fa-circle-info"></i>
            </span>
            Help
          </a>
        </div>
      </div>

      {/* Card */}
      <div className="segment-card">
        {loading ? (
          <div className="loading-placeholder">
            <div className="skeleton-row"></div>
            <div className="skeleton-row"></div>
            <div className="skeleton-row"></div>
            <div className="skeleton-row"></div>
            <div className="skeleton-row"></div>
          </div>
        ) : (
          <table className="funds-table">
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.label}</td>
                  <td className={row.highlight ? "highlight" : ""}>
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function Funds() {
  const [fundsData, setFundsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionWindowOpen, setActionWindowOpen] = useState(false);
  const [actionType, setActionType] = useState("add");

  //---->>> Fallback object to prevent null errors
  const funds = fundsData || {
    equity: { availableCash: 0 },
    commodity: { availableCash: 0 },
  };

  useEffect(() => {
    const fetchFunds = async () => {
      setLoading(true);
      try {
        const res = await API.get("/funds");
        setFundsData(res.data.funds[0]);
      } catch (error) {
        setFundsData(null);

        if (error.response?.status === 401) {
          alert("Session expired. Please login again.");
        } else if (error.response?.status === 500) {
          alert("Server error. Please try again later.");
        } else {
          alert("Unable to load funds. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchFunds();
  }, []);

  const formatCurrency = (num) => {
    return Number(num || 0).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatSegment = (segment, type) => {
    if (!segment) return [];

    const usedMargin =
      (segment.spanMargin || 0) +
      (segment.deliveryMargin || 0) +
      (segment.exposure || 0);

    const availableMargin = segment.availableCash || 0;

    const baseRows = [
      {
        label: "Available margin",
        value: formatCurrency(availableMargin),
        highlight: true,
      },
      {
        label: "Used margin",
        value: formatCurrency(usedMargin),
        highlight: true,
      },
      {
        label: "Available cash",
        value: formatCurrency(segment.availableCash),
        highlight: true,
      },
      {
        label: "Opening balance",
        value: formatCurrency(segment.openingBalance),
      },
      { label: "Payin", value: formatCurrency(segment.payin) },
      { label: "Payout", value: formatCurrency(segment.payout) },
      { label: "SPAN", value: formatCurrency(segment.spanMargin) },
      {
        label: "Delivery margin",
        value: formatCurrency(segment.deliveryMargin),
      },
      { label: "Exposure", value: formatCurrency(segment.exposure) },
      {
        label: "Options premium",
        value: formatCurrency(segment.optionsPremium),
      },
    ];

    if (type === "equity") {
      const totalCollateral =
        (segment.collateralLiquidFunds || 0) + (segment.collateralEquity || 0);
      return [
        ...baseRows,
        {
          label: "Collateral (Liquid funds)",
          value: formatCurrency(segment.collateralLiquidFunds),
        },
        {
          label: "Collateral (Equity)",
          value: formatCurrency(segment.collateralEquity),
        },
        { label: "Total collateral", value: formatCurrency(totalCollateral) },
      ];
    }

    return baseRows;
  };

  const isEmpty =
    funds.equity.availableCash === 0 && funds.commodity.availableCash === 0;

  const { theme } = useTheme();

  const image =
    theme === "dark"
      ? "https://res.cloudinary.com/dhcllqvkz/image/upload/v1772488568/funds_ubulc1.png"
      : "https://res.cloudinary.com/dhcllqvkz/image/upload/v1772488397/funds-light_p5ydyt.png";

  return (
    <div className="funds-container">
      <div className="top-bar">
        <span className="upi-info">
          Instant, zero-cost fund transfers with UPI
        </span>
        <div>
          <button
            className="btn-green"
            onClick={() => {
              setActionType("add");
              setActionWindowOpen(true);
            }}
          >
            Add funds
          </button>
          <button
            className="btn-blue"
            onClick={() => {
              if (!fundsData) {
                alert("No funds available to withdraw!");
                return;
              }
              setActionType("withdraw");
              setActionWindowOpen(true);
            }}
          >
            Withdraw
          </button>
        </div>
      </div>

      {isEmpty && !loading ? (
        <div className="empty-state text-center">
          <img src={image} alt="No funds" />
        </div>
      ) : (
        <div className="segments">
          <SegmentCard
            title="Equity"
            icon="fa-solid fa-chart-pie"
            data={formatSegment(funds.equity, "equity")}
            loading={loading}
          />
          <SegmentCard
            title="Commodity"
            icon="fa-solid fa-droplet"
            data={formatSegment(funds.commodity, "commodity")}
            loading={loading}
          />
        </div>
      )}

      {/* Funds Action Window */}
      {actionWindowOpen && (
        <FundsActionWindow
          type={actionType}
          segmentData={fundsData}
          onClose={() => setActionWindowOpen(false)}
          onUpdate={(updatedFunds) => setFundsData(updatedFunds)}
        />
      )}
    </div>
  );
}

export default Funds;
