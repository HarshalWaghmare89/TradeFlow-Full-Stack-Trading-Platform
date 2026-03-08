import Menu from "./Menu";
import "./Header.css";

function Header({ toggleSidebar }) {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{18181.75} </p>
          <p className="percent">-104.75 (-0.57%)</p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{61560.64}</p>
          <p className="percent">-371.83 (-0.60%)</p>
        </div>
      </div>

      <Menu toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Header;
