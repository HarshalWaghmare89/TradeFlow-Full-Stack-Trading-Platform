import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import useTheme from "../../hooks/useTheme";
import "./Header.css";

function Header({ isfixed }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const { theme } = useTheme();

  const logo =
    theme === "dark"
      ? "https://res.cloudinary.com/dhcllqvkz/image/upload/v1771995213/Logo_darkTheme-Photoroom_faaryv_wxg9zw.png"
      : "https://res.cloudinary.com/dhcllqvkz/image/upload/v1770018141/Logo_exgjlp-Photoroom_dfcgww.png";

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          isfixed ? "fixed" : "sticky-top"
        } custom-navbar`}
      >
        <div className="container-fluid px-0 navbar-container-custom">
          {/* LOGO */}
          <Link className="navbar-brand py-0" to="/">
            <img src={logo} alt="TradeFlow" className="logo" />
          </Link>

          {/* MOBILE TOGGLER */}
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="fa-solid fa-bars"></span>
          </button>

          {/* DESKTOP MENU */}
          <div className="desktop-menu navbar-collapse">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item me-2">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>

              <div className="ms-auto d-flex align-items-center gap-2">
                <li className="nav-item theme-toggle">
                  <ThemeToggle />
                </li>

                <li className="nav-item">
                  <Link className="signup-btn" to="/open-account">
                    Sign in
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR  */}
      <div className={`custom-drawer ${isOpen ? "show" : ""}`} id="mainNavbar">
        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
          <li className="nav-item text-center custom-drawer-top-btn">
            <Link className="signup-btn" to="/open-account" onClick={closeMenu}>
              Sign in
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/products" onClick={closeMenu}>
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/pricing" onClick={closeMenu}>
              Pricing
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/support" onClick={closeMenu}>
              Support
            </Link>
          </li>

          <li className="nav-item theme-toggle">
            <ThemeToggle />
          </li>
        </ul>
      </div>

      {/* OVERLAY */}
      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Header;
