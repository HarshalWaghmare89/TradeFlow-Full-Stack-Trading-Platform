import { useState, useEffect, useMemo } from "react";
import useTheme from "../../../../../shared/hooks/useTheme";
import "../../holdings/components/Holdings.css";
import API from "../../../../../api";
import "./Bids.css";

function Bids() {
  const [search, setSearch] = useState("");
  const [bidsData, setBidsData] = useState([]);
  const [loading, setLoading] = useState(true); //-->> Track API loading

  //--->> Fetch bids from backend
  useEffect(() => {
    const fetchBids = async () => {
      setLoading(true);
      try {
        const res = await API.get("/bids");
        const formattedData = res.data.bids.map((bid) => ({
          ...bid,
          holdingPL:
            bid.lastPrice != null
              ? Number(
                  (
                    (bid.lastPrice - bid.holdingPrice) *
                    bid.eligibleQty
                  ).toFixed(2),
                )
              : 0,
        }));
        setBidsData(formattedData);
      } catch (error) {
        setBidsData([]);

        if (error.response?.status === 401) {
          alert("Session expired. Please login again.");
        } else if (error.response?.status === 500) {
          alert("Server error. Please try again later.");
        } else {
          alert("Something went wrong. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBids();
  }, []);

  //---->> Filter data based on search
  const filteredData = useMemo(() => {
    return bidsData.filter((item) =>
      item.instrument?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, bidsData]);

  const { theme } = useTheme();

  const image =
    theme === "dark"
      ? "https://res.cloudinary.com/dhcllqvkz/image/upload/v1772488555/bids_suc6zf.png"
      : "https://res.cloudinary.com/dhcllqvkz/image/upload/v1772488397/bids-light_mqtcli.png";

  return (
    <div className="auctions holdings">
      {loading ? (
        //--->> Loading skeleton
        <div className="loading-placeholder">
          <div className="skeleton-row"></div>
          <div className="skeleton-row"></div>
          <div className="skeleton-row"></div>
        </div>
      ) : bidsData.length === 0 ? (
        <>
          <div className="notice">
            No bids available. Place your first bid from the sidebar to get
            started.
          </div>
          <div className="empty-state text-center">
            <img src={image} alt="No bids" />
          </div>
        </>
      ) : (
        <>
          {/* Header */}
          <div className="holdings-head">
            <div className="holdings-left">
              <h3 className="title">
                Auctions <span>({filteredData.length})</span>
              </h3>
            </div>

            {/* Toolbar */}
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
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-wrapper">
            <table className="bids stocks-table">
              <thead>
                <tr className="tr-row">
                  <th className="th-cell">Instrument</th>
                  <th className="th-cell">Eligible qty.</th>
                  <th className="th-cell">Last price</th>
                  <th className="th-cell">Holding price</th>
                  <th className="th-cell">Holding P&L</th>
                  <th className="th-cell">Auction no.</th>
                </tr>
              </thead>

              <tbody className="table-body">
                {filteredData.map((item, index) => (
                  <tr key={index} className="tr-row">
                    <td className="td-cell">{item.instrument}</td>
                    <td
                      className={`td-cell ${item.eligibleQty >= 0 ? "profit" : "loss"}`}
                    >
                      {item.eligibleQty}
                    </td>
                    <td className="td-cell">
                      {item.lastPrice != null ? item.lastPrice.toFixed(2) : "–"}
                    </td>
                    <td className="td-cell">{item.holdingPrice.toFixed(2)}</td>
                    <td
                      className={`td-cell ${item.holdingPL >= 0 ? "profit" : "loss"}`}
                    >
                      {item.holdingPL.toFixed(2)}
                    </td>
                    <td className="td-cell">{item.auctionNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Bids;
