import { NavLink, useNavigate } from "react-router-dom";
import useTheme from "../../../../shared/hooks/useTheme";
import { useState } from "react";
import "./ProfileDropdown.css";

function ProfileDropdown({ isOpen }) {
  const navigate = useNavigate();

  // Remove authentication data
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/open-account");
  };

  const { theme, toggleTheme } = useTheme();

  const logo =
    theme === "dark" ? (
      <i className="material-symbols-outlined color-white">light_mode</i>
    ) : (
      <i className="material-symbols-outlined">dark_mode</i>
    );

  const [userName] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.firstName || "User";
  });

  const [userEmail] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.email || "demo@tradeflow.com";
  });

  return (
    <div className={`dropdown-nav ${isOpen ? "open" : ""}`}>
      {/* Header */}
      <div className="dropdown-header">
        <h4>{userName}</h4>
        <p>{userEmail}</p>
      </div>

      <hr />

      {/* Header Tabs */}
      <ul className="dropdown-list header-tabs">
        <li>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) => (isActive ? "activeTab" : "normalTab")}
          >
            <span className="dropdown-icon">
              <i className="fa-regular fa-compass"></i>
            </span>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/orders"
            className={({ isActive }) => (isActive ? "activeTab" : "normalTab")}
          >
            <span className="dropdown-icon">
              <i className="fa-solid fa-book"></i>
            </span>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/holdings"
            className={({ isActive }) => (isActive ? "activeTab" : "normalTab")}
          >
            <span className="dropdown-icon">
              <i className="fa-solid fa-suitcase"></i>
            </span>
            Holdings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/positions"
            className={({ isActive }) => (isActive ? "activeTab" : "normalTab")}
          >
            <span className="dropdown-icon">
              <i className="fa-regular fa-file-lines"></i>
            </span>
            Positions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/bids"
            className={({ isActive }) => (isActive ? "activeTab" : "normalTab")}
          >
            <span className="dropdown-icon">
              <i className="fa-regular fa-clock"></i>
            </span>
            Bids
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/funds"
            className={({ isActive }) => (isActive ? "activeTab" : "normalTab")}
          >
            <span className="dropdown-icon">
              <i className="fa-regular fa-file-lines"></i>
            </span>
            Funds
          </NavLink>
        </li>

        <hr />
      </ul>

      {/* Internal Links */}
      <ul className="dropdown-list">
        <li>
          <NavLink to="/dashboard/profile">
            <span className="dropdown-icon">
              <i className="fa-regular fa-user"></i>
            </span>
            My Profile <span className="text-gray">/ Settings</span>
          </NavLink>
        </li>
        <li onClick={toggleTheme}>
          <a href="#">
            <span className="dropdown-icon theme-switch-icon">{logo}</span>
            {theme === "dark" ? "Light Theme" : "Dark Theme"}
          </a>
        </li>
      </ul>

      <hr />

      {/* External Links */}
      <ul className="dropdown-list">
        <li>
          <a href="#" target="_blank">
            <span className="dropdown-icon">
              <i className="fa-regular fa-circle-user rotate-console"></i>
            </span>
            Console
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <span className="dropdown-icon">
              <i className="fa-solid fa-coins"></i>
            </span>
            Coin
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <span className="dropdown-icon">
              <i className="fa-regular fa-life-ring"></i>
            </span>
            Support
          </a>
        </li>

        <hr />

        <li>
          <a href="#" target="_blank">
            <span className="dropdown-icon">
              <i className="fa-solid fa-person-circle-plus"></i>
            </span>
            Invite friends
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <span className="dropdown-icon">
              <i className="fa-regular fa-compass"></i>
            </span>
            Tour Kite
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <span className="dropdown-icon">
              <i className="fa-regular fa-keyboard"></i>
            </span>
            Keyboard shortcuts
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <span className="dropdown-icon">
              <i className="fa-regular fa-circle-question"></i>
            </span>
            User manual
          </a>
        </li>

        <hr />

        <li>
          <button className="logout-btn" onClick={handleLogout}>
            <span className="dropdown-icon">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </span>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ProfileDropdown;
