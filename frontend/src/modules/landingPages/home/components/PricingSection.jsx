import { Link } from "react-router-dom";
import "./PricingSection.css";

function PricingSection() {
  return (
    /* Pricing Section*/
    <section className="pricing">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 pricing-msg">
            <h2>Unbeatable pricing</h2>
            <p className="text-muted">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
          </div>
          <div className="col-12 col-md-7">
            <div className="row">
              <div className="col-12 col-md-4 pricing-box">
                <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769280336/images_chrh7m.png" />
                <p className="text-muted">
                  Free account
                  <br />
                  opening
                </p>
              </div>
              <div className="col-12 col-md-4 pricing-box">
                <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769280336/images_chrh7m.png" />
                <p className="text-muted">
                  Free equity delivery
                  <br />
                  direct mutual funds
                </p>
              </div>
              <div className="col-12 col-md-4 pricing-box">
                <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769280381/images_vyhpdq.png" />
                <p className="text-muted">
                  Intraday and
                  <br />
                  F&amp;O
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="pricing-link">
          <Link to="/pricing">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default PricingSection;
