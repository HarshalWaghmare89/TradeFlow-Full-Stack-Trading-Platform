import { Link } from "react-router-dom";
import "./OpenAccount.css";

function OpenAccount() {
  return (
    /* Open Account*/
    <section className="openAccount">
      <div className="container">
        <div className="row text-center">
          <h2 className="p-0">Open a TradeFlow account</h2>
          <p className="mt-1 p-0 text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <Link to="/open-account">
            <button className="button">Sign up for free</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
