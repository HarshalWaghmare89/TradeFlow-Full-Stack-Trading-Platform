import { Link } from "react-router-dom";
import "./UniverseSection.css";

function UniverseSection() {
  return (
    /* Universe Section */
    <section className="UniverseSection">
      <div className="container">
        <div className="row text-center gx-0">
          <p className="landing-subheading">
            Want to know more about our technology stack? Check out the
            <a href="#"> TradeFlow.tech </a> blog.
          </p>
        </div>

        <div className="row text-center gx-0 product-section">
          <h2>The TradeFlow Universe</h2>
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row parent-product justify-content-evenly align-items-center text-center">
          {/* Column 1 */}
          <div className="col-auto d-flex flex-column align-items-center">
            <a href="#" className="d-block mb-4 ">
              <img
                src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769278940/zerodhafundhouse_jyusth.png"
                className="mb-2"
              />
              <span className="d-block">
                Our asset management venture <br />
                that is creating simple and transparent index <br />
                funds to help you save for your goals.
              </span>
            </a>

            <br />
            <a href="#" className="d-block mb-4">
              <img
                src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769280067/streak-logo_aeirrq.png"
                alt="Streak"
                className="mb-2"
              />
              <span className="d-block">
                Systematic trading platform <br />
                that allows you to create and backtest <br />
                strategies without coding.
              </span>
            </a>
          </div>

          {/* Column 2 */}
          <div className="col-auto d-flex flex-column align-items-center">
            <a href="#" className="d-block mb-4">
              <img
                src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769280111/sensibull-logo_nlyede.svg"
                alt="Sensibull"
                className="sensibull-logo mb-3"
              />
              <span className=" d-block">
                Options trading platform that lets you <br />
                create strategies, analyze positions, and examine <br />
                data points like open interest, FII/DII, and more.
              </span>
            </a>

            <br />
            <a href="#" className="d-block mb-4">
              <img
                src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769280100/smallcase-logo_odrz7x.png"
                alt="Smallcase"
                className="mb-3"
              />
              <span className="d-block">
                Thematic investing platform <br />
                that helps you invest in diversified <br />
                baskets of stocks on ETFs.
              </span>
            </a>
          </div>

          {/* Column 3 */}
          <div className="col-auto d-flex flex-column align-items-center">
            <a href="#" className="d-block mb-4 ">
              <img
                src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769280117/tijori_v9chg5.svg"
                alt="Tijori"
                className="mb-2"
              />
              <span className=" d-block">
                Investment research platform <br />
                that offers detailed insights on stocks, <br />
                sectors, supply chains, and more.
              </span>
            </a>
            <br />
            <a href="#" className="d-block mb-4">
              <img
                src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769279403/ditto-logo_wpxczy.png"
                alt="Ditto Insurance"
                className="mb-2"
              />
              <span className=" d-block">
                Personalized advice on life <br />
                and health insurance. No spam <br />
                and no mis-selling.
              </span>
            </a>
          </div>
        </div>

        <div className="row text-center footer-button">
          <Link to="/open-account">
            <button className="button">Sign up for free</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default UniverseSection;
