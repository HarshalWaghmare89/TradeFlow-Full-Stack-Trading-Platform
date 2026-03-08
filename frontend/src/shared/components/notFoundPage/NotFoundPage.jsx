import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    /* NotFound Page*/
    <div className="container p-5">
      <div className="row">
        <h1 className="mt-5 fs-4 mb-3 notFound-heading">404</h1>
        <h1 className="fs-2 notFound-heading">Kiaan couldn’t find that page</h1>
        <p className="mb-3 notFound-msg">
          We couldn’t find the page you were looking for. <br /> Visit
          <Link to="/"> TradeFlow’s home page</Link>
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
