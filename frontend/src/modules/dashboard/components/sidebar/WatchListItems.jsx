import { useState, useContext } from "react";
import { GeneralContext } from "../actionWindow/GeneralContext";
import { Tooltip } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  DeleteOutline,
  MoreHoriz,
  Moving,
} from "@mui/icons-material";
import "./WatchListItems.css";

function WatchListItems({ stock, index }) {
  const [showWatchListAction, setWatchListAction] = useState(false);

  return (
    <li
      onMouseEnter={() => setWatchListAction(true)}
      onMouseLeave={() => setWatchListAction(false)}
    >
      <div className="watchlist-item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDownOutlined className="down item-icon" />
          ) : (
            <KeyboardArrowUpOutlined className="up item-icon" />
          )}

          <span className={`price ${stock.isDown ? "down" : "up"}`}>
            {stock.price}
          </span>
        </div>

        {showWatchListAction && (
          <WatchListAction uid={stock.name + stock.price + index} />
        )}
      </div>
    </li>
  );
}

export default WatchListItems;

const WatchListAction = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <span className="action">
      <Tooltip title="Buy (B)" placement="top" arrow>
        <button className="buy-btn" onClick={() => openBuyWindow(uid, "BUY")}>
          B
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow>
        <button className="sell-btn" onClick={() => openBuyWindow(uid, "SELL")}>
          S
        </button>
      </Tooltip>

      <Tooltip title="Market Depth (D)" placement="top" arrow>
        <button className="market-btn">
          <BarChartOutlined className="item-icon" />
        </button>
      </Tooltip>
      <Tooltip title="Chart (C)" placement="top" arrow>
        <button className="chart-btn">
          <Moving className="item-icon" />
        </button>
      </Tooltip>
      <Tooltip title="Delete (del)" placement="top" arrow>
        <button className="del-btn">
          <DeleteOutline className="item-icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow>
        <button className="more-btn">
          <MoreHoriz className="item-icon" />
        </button>
      </Tooltip>
    </span>
  );
};
