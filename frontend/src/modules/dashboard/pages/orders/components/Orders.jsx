import { useEffect, useState } from "react";
import useTheme from "../../../../../shared/hooks/useTheme";
import "../../holdings/components/Holdings.css";
import API from "../../../../../api";
import "./Orders.css";

function Orders() {
  const [ordersData, setOrdersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get("/orders");
        setOrdersData(res.data.orders || []);
      } catch (error) {
        setOrdersData([]);

        if (error.response?.status === 401) {
          alert("Session expired. Please login again.");
        } else if (error.response?.status === 500) {
          alert("Server error. Please try again later.");
        } else {
          alert("Unable to load orders. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filteredData = ordersData.filter((order) =>
    order.instrument.toLowerCase().includes(search.toLowerCase()),
  );

  const isEmpty = !loading && ordersData.length === 0;

  const { theme } = useTheme();

  const image =
    theme === "dark"
      ? "https://res.cloudinary.com/dhcllqvkz/image/upload/v1772488509/orders_l4d4jh.png"
      : "https://res.cloudinary.com/dhcllqvkz/image/upload/v1772488466/Orders-light_hvkbjq.png";

  return (
    <div className="orders holdings">
      {isEmpty ? (
        <>
          <div className="notice">
            You haven’t placed any orders yet. Place a trade from the sidebar to
            see your orders here.
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
                Orders{" "}
                <span>{loading ? "..." : `(${filteredData.length})`}</span>
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
                  disabled={loading}
                />
              </div>

              <div className="right-tools">
                <button className="download-btn" disabled={loading}>
                  <span className="right-tool-icon rotate-icon">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                  </span>
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-wrapper">
            <table className="stocks-table">
              <thead>
                <tr className="tr-row">
                  <th className="th-cell">Time</th>
                  <th className="th-cell">Type</th>
                  <th className="th-cell">Instrument</th>
                  <th className="th-cell">Product</th>
                  <th className="th-cell">Qty.</th>
                  <th className="th-cell">LTP</th>
                  <th className="th-cell">Price</th>
                  <th className="th-cell">Status</th>
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
                  : filteredData.map((order) => {
                      const orderTime = new Date(
                        order.createdAt,
                      ).toLocaleTimeString("en-GB", {
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      });

                      return (
                        <tr key={order._id} className="tr-row">
                          <td className="td-cell">{orderTime}</td>
                          <td className={`td-cell order-btn-type-buy`}>
                            <span
                              className={`text-label ${
                                order.type == "BUY" ? "buy" : "sell"
                              }`}
                            >
                              {order.type}
                            </span>
                          </td>
                          <td className="td-cell">
                            <div>
                              <div>
                                {order.instrument}
                                <small> {order.exchange}</small>
                              </div>
                            </div>
                          </td>
                          <td className="td-cell">{order.product}</td>
                          <td className="td-cell">{order.quantity}</td>
                          <td className="td-cell">{order.ltp}</td>
                          <td className="td-cell">{order.price}</td>
                          <td className={`td-cell order-btn-status`}>
                            <span
                              className={`text-label ${
                                order.status == "OPEN"
                                  ? "open"
                                  : order.status == "REJECTED"
                                    ? "rejected"
                                    : order.status == "CANCELLED"
                                      ? "cancelled"
                                      : "complete"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Orders;
