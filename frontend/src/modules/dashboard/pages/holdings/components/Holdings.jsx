import { useEffect, useState } from "react";
import useTheme from "../../../../../shared/hooks/useTheme";
import TreemapCard from "../../../components/widgets/TreemapCard";
import API from "../../../../../api";
import "./Holdings.css";

function Holdings() {
  const [holdingsData, setHoldingsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await API.get("/holdings");
        setHoldingsData(res.data.holdings);
      } catch (error) {
        setHoldingsData([]);

        if (error.response?.status === 401) {
          alert("Session expired. Please login again.");
        } else if (error.response?.status === 500) {
          alert("Server error. Please try again later.");
        } else {
          alert("Unable to load holdings. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchHoldings();
  }, []);

  const filteredData = holdingsData.filter((stock) =>
    stock.instrument.toLowerCase().includes(search.toLowerCase()),
  );

  const totalInvestment = filteredData.reduce(
    (acc, stock) => acc + stock.quantity * stock.avgCost,
    0,
  );

  const totalCurrentValue = filteredData.reduce(
    (acc, stock) => acc + stock.quantity * stock.ltp,
    0,
  );

  const totalDayPnL = holdingsData.reduce((acc, stock) => {
    const dayChange = stock.ltp - stock.prevClose;
    return acc + stock.quantity * dayChange;
  }, 0);

  const totalPrevValue = holdingsData.reduce(
    (acc, stock) => acc + stock.quantity * stock.prevClose,
    0,
  );

  const dayPercent = (totalDayPnL / totalPrevValue) * 100;

  const totalPnL = totalCurrentValue - totalInvestment;

  const totalPnLPercent =
    totalInvestment !== 0 ? (totalPnL / totalInvestment) * 100 : 0;

  const isEmpty = !loading && holdingsData.length === 0;

  const { theme } = useTheme();

  const image =
    theme === "dark"
      ? "https://res.cloudinary.com/dhcllqvkz/image/upload/v1772488523/holdings_nctsfl.png"
      : "https://res.cloudinary.com/dhcllqvkz/image/upload/v1772488397/holdings-light_nw6t4q.png";

  return (
    <div className="holdings">
      {isEmpty ? (
        <>
          <div className="notice">
            No holdings available. Buy stocks from the sidebar to build your
            portfolio.
          </div>
          <div className="empty-state text-center">
            <img src={image} />
          </div>
        </>
      ) : (
        <>
          <div className="holdings-head">
            <div className="holdings-left">
              <h3 className="title">
                Holdings{" "}
                <span>{loading ? "..." : `(${filteredData.length})`}</span>
              </h3>
            </div>

            <div className="toolbar">
              <div className="left-tools">
                <span className="left-tool-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="search"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div className="right-tools">
                <button className="link-btn" disabled={loading}>
                  <span className="right-tool-icon">
                    <i className="fa-solid fa-user-group"></i>
                  </span>
                  Family
                </button>
                <button className="link-btn" disabled={loading}>
                  <span className="right-tool-icon">
                    <i className="fa-solid fa-circle-notch"></i>
                  </span>
                  Analytics
                </button>
                <button className="download-btn" disabled={loading}>
                  <span className="right-tool-icon rotate-icon">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                  </span>
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="stats stats-header">
            {loading ? (
              <>
                <div>
                  <p className="label">Total Investment</p>
                  <h4 className="value">...</h4>
                </div>
                <div>
                  <p className="label">Current Value</p>
                  <h4 className="value">...</h4>
                </div>
                <div>
                  <p className="label">Day's P&L</p>
                  <h4 className="value">...</h4>
                </div>
                <div>
                  <p className="label">Total P&L</p>
                  <h4 className="value">...</h4>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p className="label">Total Investment</p>
                  <h4 className="value">₹{totalInvestment.toFixed(2)}</h4>
                </div>
                <div>
                  <p className="label">Current Value</p>
                  <h4 className="value">₹{totalCurrentValue.toFixed(2)}</h4>
                </div>
                <div>
                  <p className="label">Day's P&L</p>
                  <h4
                    className={`${totalDayPnL >= 0 ? "profit" : "loss"} value`}
                  >
                    ₹{totalDayPnL.toFixed(2)}
                    <span className="percentage">
                      ({dayPercent >= 0 ? "+" : ""}
                      {dayPercent.toFixed(2)}%)
                    </span>
                  </h4>
                </div>
                <div>
                  <p className="label">Total P&L</p>
                  <h4 className={`${totalPnL >= 0 ? "profit" : "loss"} value`}>
                    ₹
                    {totalPnL.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    <span className="percentage">
                      ({totalPnL >= 0 ? "+" : ""}
                      {totalPnLPercent.toFixed(2)}%)
                    </span>
                  </h4>
                </div>
              </>
            )}
          </div>

          {/* Table */}
          <div className="table-wrapper">
            <table className="stocks-table">
              <thead>
                <tr className="tr-row">
                  <th className="th-cell">Instrument</th>
                  <th className="th-cell">Qty.</th>
                  <th className="th-cell">Avg. cost</th>
                  <th className="th-cell">LTP</th>
                  <th className="th-cell">Cur. val</th>
                  <th className="th-cell">P&L</th>
                  <th className="th-cell">Net chg.</th>
                  <th className="th-cell">Day chg.</th>
                </tr>
              </thead>

              <tbody>
                {loading
                  ? Array.from({ length: 5 }).map((_, idx) => (
                      <tr key={idx} className="tr-row">
                        {Array.from({ length: 8 }).map((_, cellIdx) => (
                          <td key={cellIdx} className="td-cell">
                            ...
                          </td>
                        ))}
                      </tr>
                    ))
                  : filteredData.map((stock, index) => {
                      const currentValue = stock.quantity * stock.ltp;
                      const investment = stock.quantity * stock.avgCost;
                      const pnl = currentValue - investment;
                      const netChgPercent = (pnl / investment) * 100;
                      const dayChgPercent =
                        ((stock.ltp - stock.prevClose) / stock.prevClose) * 100;

                      const formatPercentWithSign = (value) =>
                        (value >= 0 ? "+" : "") + value.toFixed(2) + "%";

                      return (
                        <tr key={index} className="tr-row">
                          <td className="td-cell">{stock.instrument}</td>
                          <td className="td-cell">{stock.quantity}</td>
                          <td className="td-cell">
                            {stock.avgCost.toFixed(2)}
                          </td>
                          <td className="td-cell">{stock.ltp.toFixed(2)}</td>
                          <td className="td-cell">{currentValue.toFixed(2)}</td>
                          <td
                            className={`td-cell ${pnl >= 0 ? "profit" : "loss"}`}
                          >
                            {pnl.toFixed(2)}
                          </td>
                          <td
                            className={`td-cell net-chg ${
                              netChgPercent >= 0 ? "profit" : "loss"
                            }`}
                          >
                            {formatPercentWithSign(netChgPercent)}
                          </td>
                          <td
                            className={`td-cell day-chg ${
                              dayChgPercent >= 0 ? "profit" : "loss"
                            }`}
                          >
                            {formatPercentWithSign(dayChgPercent)}
                          </td>
                        </tr>
                      );
                    })}
              </tbody>

              {!loading && (
                <tfoot>
                  <tr className="tr-row">
                    <td className="td-cell total-label" colSpan="4">
                      <strong>Total</strong>
                    </td>
                    <td className="td-cell">
                      ₹
                      {filteredData
                        .reduce(
                          (sum, stock) => sum + stock.quantity * stock.ltp,
                          0,
                        )
                        .toFixed(2)}
                    </td>
                    <td
                      className={`td-cell ${
                        filteredData.reduce(
                          (sum, stock) =>
                            sum +
                            stock.quantity * stock.ltp -
                            stock.quantity * stock.avgCost,
                          0,
                        ) >= 0
                          ? "profit"
                          : "loss"
                      }`}
                    >
                      ₹
                      {filteredData
                        .reduce(
                          (sum, stock) =>
                            sum +
                            stock.quantity * stock.ltp -
                            stock.quantity * stock.avgCost,
                          0,
                        )
                        .toFixed(2)}
                    </td>
                    <td
                      className={`td-cell ${
                        filteredData.reduce(
                          (sum, stock) =>
                            sum +
                            stock.quantity * stock.ltp -
                            stock.quantity * stock.avgCost,
                          0,
                        ) >= 0
                          ? "profit"
                          : "loss"
                      }`}
                    >
                      {(
                        (filteredData.reduce(
                          (sum, stock) =>
                            sum +
                            stock.quantity * stock.ltp -
                            stock.quantity * stock.avgCost,
                          0,
                        ) /
                          filteredData.reduce(
                            (sum, stock) =>
                              sum + stock.quantity * stock.avgCost,
                            0,
                          )) *
                        100
                      ).toFixed(2) + "%"}
                    </td>
                    <td
                      className={`td-cell ${
                        filteredData.reduce(
                          (sum, stock) =>
                            sum +
                            (stock.ltp - stock.prevClose) * stock.quantity,
                          0,
                        ) >= 0
                          ? "profit"
                          : "loss"
                      }`}
                    >
                      {(
                        (filteredData.reduce(
                          (sum, stock) =>
                            sum +
                            (stock.ltp - stock.prevClose) * stock.quantity,
                          0,
                        ) /
                          filteredData.reduce(
                            (sum, stock) =>
                              sum + stock.prevClose * stock.quantity,
                            0,
                          )) *
                        100
                      ).toFixed(2) + "%"}
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>

          {/* Treemap Widget */}
          {!loading && (
            <div className="treemap-widget">
              <p className="treemap-title">Portfolio Heatmap</p>
              <TreemapCard data={holdingsData} height={49} />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Holdings;
