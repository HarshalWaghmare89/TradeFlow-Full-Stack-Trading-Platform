import { useEffect, useState } from "react";
import { niftyData } from "../../../data";
import TreemapCard from "../../../components/widgets/TreemapCard";
import NiftyChart from "../../../components/widgets/NiftyChart";
import API from "../../../../../api";
import "./Summary.css";

function Dashboard() {
  const [userName] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.firstName || "User";
  });

  const [fundsData, setFundsData] = useState(null);
  const [holdingsData, setHoldingsData] = useState([]);
  const [loading, setLoading] = useState(true); //--->> loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fundRes, holdingsRes] = await Promise.all([
          API.get("/funds"),
          API.get("/holdings"),
        ]);
        setFundsData(fundRes.data.funds[0]);
        setHoldingsData(holdingsRes.data.holdings);
      } catch (err) {
        setFundsData(null);
        setHoldingsData([]);

        if (err.response?.status === 401) {
          alert("Session expired. Please login again.");
        } else if (err.response?.status === 500) {
          alert("Server error. Please try again later.");
        } else {
          alert("Unable to load data. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //--->> Converts a number into a short formatted string using Indian units:
  const formatShortNumber = (num) => {
    const value = Number(num || 0);

    if (value === 0) return "0";
    if (value >= 10000000)
      return (value / 10000000).toFixed(2).replace(/\.00$/, "") + "Cr";
    if (value >= 100000)
      return (value / 100000).toFixed(2).replace(/\.00$/, "") + "L";
    if (value >= 1000) return (value / 1000).toFixed(0) + "k";
    return value.toFixed(2);
  };

  const computeUsedMargin = (segment) =>
    (segment?.spanMargin || 0) +
    (segment?.deliveryMargin || 0) +
    (segment?.exposure || 0);

  const totalInvestment = holdingsData.reduce(
    (acc, stock) => acc + stock.quantity * stock.avgCost,
    0,
  );

  const totalCurrentValue = holdingsData.reduce(
    (acc, stock) => acc + stock.quantity * stock.ltp,
    0,
  );

  const totalPnL = totalCurrentValue - totalInvestment;

  const totalPnLPercent = totalInvestment
    ? (totalPnL / totalInvestment) * 100
    : 0;

  return (
    <div className="dashboard">
      <h1 className="page-title big">
        Hi, <span className="nickname">{userName}</span>
      </h1>

      {/* ================= FUNDS SUMMARY ================= */}
      <div className="section margins-stats">
        <div className="row">
          {/* Equity */}
          <div className="col-sm-6">
            <div className="seconday-title">
              <span className="header-icon">
                <i className="fa-solid fa-chart-pie"></i>
              </span>
              <span className="title mx-1">Equity</span>
            </div>
            <div className="row">
              <div className="primary-stats col-6 col-md-5">
                <span className="value">
                  {loading
                    ? "..."
                    : formatShortNumber(fundsData?.equity?.availableCash)}
                </span>
                <div className="caption-text">Margin available</div>
              </div>

              <div className="secondary-stats col-6 col-md-7">
                <div className="block ms">
                  <span className="secondary-text">Margins used</span>
                  <span className="value">
                    {loading
                      ? "..."
                      : formatShortNumber(computeUsedMargin(fundsData?.equity))}
                  </span>
                </div>
                <div className="block">
                  <span className="secondary-text">Opening balance</span>
                  <span className="value">
                    {loading
                      ? "..."
                      : formatShortNumber(fundsData?.equity?.openingBalance)}
                  </span>
                </div>
                <div className="block color-blue">
                  <span className="view-icon">
                    <i className="fa-solid fa-circle-notch"></i>
                  </span>
                  <span className="secondary-text">View statement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Commodity */}
          <div className="col-sm-6 margin-top">
            <div className="seconday-title">
              <span className="header-icon">
                <i className="fa-solid fa-droplet"></i>
              </span>
              <span className="title mx-1">Commodity</span>
            </div>
            <div className="row">
              <div className="primary-stats col-6 col-md-5">
                <span className="value">
                  {loading
                    ? "..."
                    : formatShortNumber(fundsData?.commodity?.availableCash)}
                </span>
                <div className="caption-text">Margin available</div>
              </div>

              <div className="secondary-stats col-6 col-md-7">
                <div className="block ms">
                  <span className="secondary-text">Margins used</span>
                  <span className="value">
                    {loading
                      ? "..."
                      : formatShortNumber(
                          computeUsedMargin(fundsData?.commodity),
                        )}
                  </span>
                </div>
                <div className="block">
                  <span className="secondary-text">Opening balance</span>
                  <span className="value">
                    {loading
                      ? "..."
                      : formatShortNumber(fundsData?.commodity?.openingBalance)}
                  </span>
                </div>
                <div className="block color-blue">
                  <span className="view-icon">
                    <i className="fa-solid fa-circle-notch"></i>
                  </span>
                  <span className="secondary-text">View statement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= HOLDINGS SUMMARY ================= */}
      <div className="section holdings">
        <div className="seconday-title">
          <span className="header-icon">
            <i className="fa-solid fa-suitcase"></i>
          </span>
          <span className="title mx-1">
            Holdings {loading ? "(...)" : `(${holdingsData.length})`}
          </span>
        </div>

        <div className="row">
          <div className="primary-stats col-6 col-md-5">
            <span
              className={`value ${totalPnL >= 0 ? "color-green" : "color-red"}`}
            >
              {loading ? "..." : formatShortNumber(totalPnL)}
            </span>
            <span className="text-xsmall">
              {loading
                ? "..."
                : (totalPnLPercent >= 0 ? "+" : "") +
                  totalPnLPercent.toFixed(2) +
                  "%"}
            </span>
            <div className="caption-text">P&L</div>
          </div>

          <div className="secondary-stats col-6 col-md-7">
            <div className="block ms">
              <span className="secondary-text">Current value</span>
              <span className="value">
                {loading ? "..." : formatShortNumber(totalCurrentValue)}
              </span>
            </div>

            <div className="block">
              <span className="secondary-text">Investment</span>
              <span className="value">
                {loading ? "..." : formatShortNumber(totalInvestment)}
              </span>
            </div>
          </div>
        </div>

        {/* ================= HEAT MAP ================= */}
        <div className="treemap-widget">
          {loading ? (
            <div style={{ height: "49px", background: "#f0f0f0" }}></div>
          ) : (
            <TreemapCard data={holdingsData} height={49} />
          )}
        </div>
      </div>

      {/* ================= MARKET OVERVIEW ================= */}
      <div className="market-overview row">
        <div className="seconday-title">
          <span className="header-icon">
            <i className="fa-solid fa-arrow-trend-up"></i>
          </span>
          <span className="title mx-2">Market overview</span>
        </div>

        <div className="LineChart">
          {loading ? (
            <div style={{ height: "200px", background: "#f0f0f0" }}></div>
          ) : (
            <NiftyChart data={niftyData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
