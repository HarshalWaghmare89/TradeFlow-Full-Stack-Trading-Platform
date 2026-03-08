import "./InvestmentOptionsSection.css";

const investments = [
  {
    title: "Stocks",
    description: "Invest in all exchange-listed securities",
    img: "https://res.cloudinary.com/dhcllqvkz/image/upload/v1770461138/stocks-acop_tr3ftz.svg",
  },
  {
    title: "Mutual funds",
    description: "Invest in commission-free direct mutual funds",
    img: "https://res.cloudinary.com/dhcllqvkz/image/upload/v1770461172/mf-acop_kl9rb8.svg",
  },
  {
    title: "IPO",
    description: "Apply to the latest IPOs instantly via UPI",
    img: "https://res.cloudinary.com/dhcllqvkz/image/upload/v1770461187/ipo-acop_lpxphx.svg",
  },
  {
    title: "Futures & options",
    description:
      "Hedge and mitigate market risk through simplified F&O trading",
    img: "https://res.cloudinary.com/dhcllqvkz/image/upload/v1770461203/fo-acop_v89bbh.svg",
  },
];

function InvestmentOptionsSection() {
  return (
    /* Investment Options Section */
    <section className="account-open-sections">
      <div className="container investment-options-section">
        <h2 className="text-center">
          Investment options with TradeFlow demat account
        </h2>

        <div className="investment-options-group">
          {investments.map((item, index) => (
            <div className="investment-options" key={index}>
              <img src={item.img} />
              <div>
                <h3>{item.title}</h3>
                <p className="acop-steps-text text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center explore-investments">
          <button
            type="submit"
            id="open_account_proceed_form"
            className="button"
          >
            Explore Investments
          </button>
        </div>
      </div>
    </section>
  );
}

export default InvestmentOptionsSection;
