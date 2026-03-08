import "./BenefitsSection.css";

function BenefitsSection() {
  return (
    /* Benefits Section*/
    <section className="acop-benefits-section">
      <div className="acop-benefits">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 px-5 acop-benefits-header">
            <p className="text-center acop-benefits-img">
              <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1770461258/acop-benefits_tt18c2.svg" />
            </p>
            <h2>Benefits of opening a TradeFlow demat account</h2>
          </div>
          <div className="col-12 col-md-6 px-3 acop-benefits-msg">
            <h3>Unbeatable pricing</h3>
            <p className="text-muted">
              Zero charges for equity &amp; mutual fund investments. Flat ₹20
              fees for intraday and F&amp;O trades.
            </p>
            <br />
            <h3>Best investing experience</h3>
            <p className="text-muted">
              Simple and intuitive trading platform with an easy-to-understand
              user interface.
            </p>
            <br />
            <h3>No spam or gimmicks</h3>
            <p className="text-muted">
              Committed to transparency — no gimmicks, spam, "gamification", or
              intrusive push notifications.
            </p>
            <br />
            <h3>The TradeFlow universe</h3>
            <p className="text-muted">
              More than just an app — gain free access to the entire ecosystem
              of our partner products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
