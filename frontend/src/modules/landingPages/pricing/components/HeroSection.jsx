import "./HeroSection.css";

function HeroSection() {
  return (
    /* Hero Section*/
    <section className="charges">
      <div className="container">
        <div className="row text-center gx-0 charges-header">
          <h1>Charges</h1>
          <p>List of all charges and taxes</p>
        </div>
        <div className="row text-center charges-sections-prices">
          <div className="col-12 col-md-4">
            <img
              className="img-fluid mb-3"
              src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769280336/images_chrh7m.png"
            />
            <h2>Free equity delivery</h2>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE) are absolutely free — ₹
              0 brokerage
            </p>
          </div>

          <div className="col-12 col-md-4">
            <img
              className="img-fluid mb-3"
              src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769280381/images_vyhpdq.png"
            />
            <h2>Intraday and F&amp;O trades</h2>
            <p className="text-muted">
              Flat ₹20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>

          <div className="col-12 col-md-4">
            <img
              className="img-fluid mb-3"
              src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769280336/images_chrh7m.png"
            />
            <h2>Free direct MF</h2>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions &amp; DP charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
