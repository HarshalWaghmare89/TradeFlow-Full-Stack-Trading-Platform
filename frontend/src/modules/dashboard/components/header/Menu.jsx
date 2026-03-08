import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ProfileDropdown from "./ProfileDropdown";
import "./Menu.css";

function Menu({ toggleSidebar }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const tabMap = {
    "/dashboard": "Dashboard",
    "/dashboard/orders": "Orders",
    "/dashboard/holdings": "Holdings",
    "/dashboard/positions": "Positions",
    "/dashboard/bids": "Bids",
    "/dashboard/funds": "Funds",
  };

  const activeTabName = tabMap[location.pathname] || "Dashboard";
  return (
    <div className="menu-container">
      <div className="left-section">
        <Link to="/dashboard">
          <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1772489646/kite-logo_q8kb0t.svg" />
        </Link>

        {/* Sidebar Toggle Icon */}
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <i className="fa-regular fa-hard-drive"></i>
        </button>
      </div>

      <div className="active-tab-header">
        <p>{activeTabName}</p>
      </div>

      <div className="menus">
        <ul className="all-header-tabs">
          <li className="menu-item">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive ? "activeTab" : "normalTab"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/dashboard/orders"
              className={({ isActive }) =>
                isActive ? "activeTab" : "normalTab"
              }
            >
              Orders
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/dashboard/holdings"
              className={({ isActive }) =>
                isActive ? "activeTab" : "normalTab"
              }
            >
              Holdings
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/dashboard/positions"
              className={({ isActive }) =>
                isActive ? "activeTab" : "normalTab"
              }
            >
              Positions
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/dashboard/bids"
              className={({ isActive }) =>
                isActive ? "activeTab" : "normalTab"
              }
            >
              Bids
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/dashboard/funds"
              className={({ isActive }) =>
                isActive ? "activeTab" : "normalTab"
              }
            >
              Funds
            </NavLink>
          </li>
        </ul>

        <div className="bulletin-menu">
          <i className="fa-regular fa-bell"></i>
        </div>
        <div
          className="profile"
          ref={dropdownRef}
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <div className="avatar">
            <i className="fa-regular fa-user"></i>
          </div>

          {isProfileOpen && <ProfileDropdown isOpen={isProfileOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Menu;
