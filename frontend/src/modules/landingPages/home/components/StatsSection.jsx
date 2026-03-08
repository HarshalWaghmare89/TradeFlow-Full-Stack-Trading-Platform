import { Link } from "react-router-dom";
import "./StatsSection.css";

function StatsSection() {
  return (
    /* Stats Section*/
    <section className="ecosystem">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-5 ecosystem-msg">
            <h2>Trust with confidence</h2>

            <h3>Customer-first always</h3>
            <p className="text-muted">
              That's why 1.6+ crore customers trust TradeFlow with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>

            <h3>No spam or gimmicks</h3>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
              <a href="#"> Our philosophies.</a>
            </p>

            <h3>The TradeFlow universe</h3>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h3>Do better with money</h3>
            <p className="text-muted">
              With initiatives like <a href="#">Nudge</a> and{" "}
              <Link to="/support">Kill Switch</Link>, we don't just facilitate
              transactions, but actively help you do better with your money.
            </p>
          </div>

          <div className="col-12 col-md-7 ecosystem-img">
            <div className="text-center">
              <Link to="/products">
                <img
                  src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769279506/ecosystem_mocqeb.png"
                  alt="ecosystem_mocqeb"
                ></img>
              </Link>
            </div>

            <p className="text-center ecosystem-links">
              <Link to="/products">
                Explore our products <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <Link to="/open-account" className="demo-link">
                Try Kite demo <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
