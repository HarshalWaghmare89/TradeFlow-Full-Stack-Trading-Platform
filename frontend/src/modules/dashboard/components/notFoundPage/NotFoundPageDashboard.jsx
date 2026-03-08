import { Link } from "react-router-dom";
import "./NotFoundPageDashboard.css";

function NotFoundPageDashboard() {
  return (
    <div className="not-found-container">
      <Link to="/dashboard">
        <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1772489646/kite-logo_q8kb0t.svg" />
      </Link>
      <h2>Page not found</h2>
      <div className="description">
        The page you are looking for does not exist.
        <Link to="/dashboard"> TradeFlow’s dashboard</Link>
      </div>
    </div>
  );
}

export default NotFoundPageDashboard;
