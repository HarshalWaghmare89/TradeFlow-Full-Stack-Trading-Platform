import "./FaqSection.css";

function FaqSection() {
  return (
    /* Faq Section*/
    <section className="signup-faq-section">
      <div className="faq-container">
        <h3 className="faq-title">FAQs</h3>
        <div className="faq-list">
          <details className="faq-item">
            <summary className="faq-question">
              <span className="question-text">What is a TradeFlow account</span>
              <span className="rotate-icon">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </summary>
            <div className="faq-answer">
              <p>
                A TradeFlow account is a combined demat and trading account that
                allows investors to buy, sell, and hold securities digitally.
              </p>
            </div>
          </details>
          <details className="faq-item">
            <summary className="faq-question">
              <span className="question-text">
                What documents are required to open a demat account?
              </span>
              <span className="ms-auto rotate-icon">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </summary>
            <div className="faq-answer">
              <p>
                The following documents are required to open a TradeFlow account
                online:
              </p>
              <ul>
                <li>PAN number</li>
                <li>
                  Aadhaar Card (Linked with a phone number for OTP verification)
                </li>
                <li>
                  Cancelled cheque or bank account statement (To link your bank
                  account)
                </li>
                <li>
                  Income proof (Required only if you wish to trade in Futures
                  &amp; options)
                </li>
              </ul>
            </div>
          </details>
          <details className="faq-item">
            <summary className="faq-question">
              <span className="question-text">
                Is TradeFlow account opening free?
              </span>
              <span className="ms-auto rotate-icon">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </summary>
            <div className="faq-answer">
              <p>Yes, It is completely free.</p>
            </div>
          </details>
          <details className="faq-item">
            <summary className="faq-question">
              <span className="question-text">
                Are there any maintenance charges for a demat account?
              </span>
              <span className="ms-auto rotate-icon">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </summary>
            <div className="faq-answer">
              <p>
                The account maintenance charges is applicable based on the
                account type.
                <br />
                For Basic Services Demat Account: Zero charges if the holding
                value is less than ₹4,00,000.
                <br />
                For non-Basic Services Demat Account demat accounts: ₹300 per
                year + GST.
                <br />
                To learn more about BSDA, <a href="#">Click here</a>.
              </p>
            </div>
          </details>
          <details className="faq-item">
            <summary className="faq-question">
              <span className="question-text">
                Can I open a demat account without a bank account?
              </span>
              <span className="ms-auto rotate-icon">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </summary>
            <div className="faq-answer">
              <p>
                To open a demat account, you must have a bank account in your
                name.
                <br />
                If UPI verification is completed successfully, no proof of bank
                is needed. However, if bank verification fails, you'll need to
                provide either a cancelled cheque or a bank statement to link
                your bank account to TradeFlow.
              </p>
            </div>
          </details>
          <details className="faq-item">
            <summary className="faq-question">
              <span className="question-text">
                What is a Basic Services Demat Account (BSDA)?
              </span>
              <span className="ms-auto rotate-icon">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </summary>
            <div className="faq-answer">
              <p>
                BSDA is a demat account designed for retail investors with
                smaller holdings. It automatically applies if you have only one
                demat account per PAN and holdings of up to ₹10 lakhs in it. You
                will not be charged any Account Maintenance Charge (AMC) for
                holdings up to ₹4 lakhs value, and only ₹25/quarter if holdings
                are between ₹4 lakhs and ₹10 lakhs.
              </p>
            </div>
          </details>
          <details className="faq-item">
            <summary className="faq-question">
              <span className="question-text">
                Can I open a demat and trading account using the mobile app?
              </span>
              <span className="ms-auto rotate-icon">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </summary>
            <div className="faq-answer">
              <p>
                Yes, You can open a demat and trading account completely online
                using the TradeFlow Kite mobile app, available on Android and
                iOS.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
