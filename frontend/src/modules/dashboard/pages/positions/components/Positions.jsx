import { useEffect, useState, useMemo } from "react";
import useTheme from "../../../../../shared/hooks/useTheme";
import "../../holdings/components/Holdings.css";
import API from "../../../../../api";
import "./Positions.css";

function Positions() {
  const [positionsData, setPositionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await API.get("/positions");
        setPositionsData(res.data.positions || []);
      } catch (error) {
        setPositionsData([]);

        if (error.response?.status === 401) {
          alert("Session expired. Please login again.");
        } else if (error.response?.status === 500) {
          alert("Server error. Please try again later.");
        } else {
          alert("Unable to load positions. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPositions();
  }, []);

  const safeNum = (val) => (typeof val === "number" ? val : 0);

  const positionsWithPnL = useMemo(() => {
    return positionsData.map((pos) => {
      const quantity = safeNum(pos.quantity);
      const avgPrice = safeNum(pos.avgPrice);
      const ltp = safeNum(pos.ltp) || avgPrice;
      const pnl =
        quantity >= 0
          ? (ltp - avgPrice) * quantity
          : (avgPrice - ltp) * Math.abs(quantity);

      const prevClose = safeNum(pos.prevClose) || avgPrice;
      const changePercent =
        prevClose !== 0 ? ((ltp - prevClose) / prevClose) * 100 : 0;
      return { ...pos, ltp, pnl, changePercent };
    });
  }, [positionsData]);

  const filteredData = useMemo(() => {
    return positionsWithPnL.filter(
      (pos) =>
        pos.instrument?.toLowerCase().includes(search.toLowerCase()) ||
        pos.product?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, positionsWithPnL]);

  const totalPnL = useMemo(() => {
    return filteredData.reduce((acc, pos) => acc + safeNum(pos.pnl), 0);
  }, [filteredData]);

  const isEmpty = !loading && positionsData.length === 0;

  const { theme } = useTheme();

  const image =
    theme === "dark"
      ? "https://res.cloudinary.com/dhcllqvkz/image/upload/v1772488543/positions_my97or.png"
      : "https://res.cloudinary.com/dhcllqvkz/image/upload/v1772488397/positions-light_w9wmdy.png";

  return (
    <div className="positions holdings">
      {isEmpty ? (
        <>
          <div className="notice">
            No open positions. Start trading to track your active positions
            here.
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
                Positions{" "}
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

          <div className="table-wrapper">
            <table className="stocks-table">
              <thead>
                <tr className="tr-row">
                  <th className="th-cell">Product</th>
                  <th className="th-cell">Instrument</th>
                  <th className="th-cell">Qty.</th>
                  <th className="th-cell">Avg.</th>
                  <th className="th-cell">LTP</th>
                  <th className="th-cell">P&L</th>
                  <th className="th-cell">Chg.</th>
                </tr>
              </thead>

              <tbody>
                {loading
                  ? Array.from({ length: 5 }).map((_, idx) => (
                      <tr key={idx} className="tr-row">
                        {Array.from({ length: 7 }).map((_, cellIdx) => (
                          <td key={cellIdx} className="td-cell text-label">
                            ...
                          </td>
                        ))}
                      </tr>
                    ))
                  : filteredData.map((pos, index) => (
                      <tr key={index} className="tr-row">
                        <td className="td-cell">
                          <span className="text-label">{pos.product}</span>
                        </td>
                        <td className="td-cell">
                          <div>
                            <div>
                              {pos.instrument}
                              <small> {pos.exchange}</small>
                            </div>
                          </div>
                        </td>
                        <td
                          className={`td-cell ${pos.quantity >= 0 ? "profit" : "loss"}`}
                        >
                          {pos.quantity}
                        </td>
                        <td className="td-cell">
                          {safeNum(pos.avgPrice).toFixed(2)}
                        </td>
                        <td className="td-cell">
                          {safeNum(pos.ltp).toFixed(2)}
                        </td>
                        <td
                          className={`td-cell ${pos.pnl >= 0 ? "profit" : "loss"}`}
                        >
                          {safeNum(pos.pnl).toFixed(2)}
                        </td>
                        <td
                          className={`td-cell ${pos.changePercent >= 0 ? "profit" : "loss"}`}
                        >
                          {safeNum(pos.changePercent).toFixed(2)}%
                        </td>
                      </tr>
                    ))}
              </tbody>

              <tfoot>
                <tr className="tr-row">
                  <td className="td-cell" colSpan="4">
                    <strong>Total</strong>
                  </td>
                  <td
                    className={`td-cell ${totalPnL >= 0 ? "profit" : "loss"}`}
                  >
                    {loading ? "..." : totalPnL.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Positions;
