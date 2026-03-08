import "./AwardsSection.css";

function AwardsSection() {
  return (
    /* Awards Section */
    <section className="awards">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 awards-left text-center">
            <img
              src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769336082/largestBroker_ghmkgh.svg"
              alt="Awards_image"
              className="awards-image"
            ></img>
          </div>

          <div className="col-12 col-md-6 awards-msg">
            <h2>Largest stock broker in India</h2>
            <p className="mb-5 text-muted">
              2+ millon TradeFlow clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>

            <div className="row text-muted awards-list">
              <div className="col-6">
                <ul>
                  <li>
                    <p>Futures and Options</p>
                  </li>
                  <li>
                    <p>Commodity derivates</p>
                  </li>
                  <li>
                    <p>Currency derivates</p>
                  </li>
                </ul>
              </div>

              <div className="col-6">
                <ul>
                  <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Govt. Securities</p>
                  </li>
                </ul>
              </div>
            </div>

            <img
              src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769279743/press-logos_mmgua5.png"
              alt="press-logo"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
