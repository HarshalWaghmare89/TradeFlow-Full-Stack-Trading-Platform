import { useState } from "react";
import { watchlist } from "../../data";
import WatchListItems from "./WatchListItems";
import "./WatchList.css";

function WatchList() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(1);

  //--->> Get the items for the currently active tab
  const activeTabItems =
    watchlist.find((tab) => tab.tab === activeTab)?.items || [];

  //---->> Filter based on search input
  const filteredWatchlist = activeTabItems.filter((stock) =>
    stock.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder=" Search (infy bse, nifty fut, etc)"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="icon-search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <span className="counts">
          {filteredWatchlist.length} / {activeTabItems.length}
        </span>
      </div>

      <ul className="list">
        {filteredWatchlist.map((stock, index) => (
          <WatchListItems stock={stock} key={stock.name + index} />
        ))}
      </ul>

      <ul className="marketWatch-Selector">
        {[1, 2, 3, 4, 5, 6, 7].map((tabNum) => (
          <li
            key={tabNum}
            className={`item ${activeTab === tabNum ? "active" : ""}`}
            onClick={() => setActiveTab(tabNum)}
          >
            {tabNum}
          </li>
        ))}
        <li className="item settings-icon">
          <i className="fa-solid fa-gear"></i>
        </li>
      </ul>
    </div>
  );
}

export default WatchList;
