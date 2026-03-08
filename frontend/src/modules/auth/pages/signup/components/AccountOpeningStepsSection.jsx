import "./AccountOpeningStepsSection.css";

function AccountOpeningStepsSection() {
  return (
    /* Account Opening Steps Section*/
    <section className="acop-steps-section">
      <div className="mini-container">
        <h2 className="text-center">
          Steps to open a demat account with TradeFlow
        </h2>
        <div className="account-open-steps">
          <div className="video-container-acop">
            <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1770461241/steps-acop_vchkxt.svg" />
          </div>
          <div className="account-open-steps-num">
            <div className="acop-steps-container">
              <div className="acop-steps">
                <div className="steps-num">01</div>
                <p className="acop-steps-text">Enter the requested details</p>
              </div>
            </div>

            <div className="acop-steps-container">
              <div className="acop-steps">
                <div className="steps-num">02</div>
                <p className="acop-steps-text">
                  Complete e-sign & verification
                </p>
              </div>
            </div>

            <div className="acop-steps-container botom-none">
              <div className="acop-steps">
                <div className="steps-num">03</div>
                <p className="acop-steps-text">Start investing!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountOpeningStepsSection;
