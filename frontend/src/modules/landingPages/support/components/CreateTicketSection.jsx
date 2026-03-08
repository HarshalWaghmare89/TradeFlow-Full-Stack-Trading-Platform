import "./CreateTicketSection.css";

const categories = [
  {
    title: "Account Opening",
    icon: "fa-solid fa-circle-plus",
    links: [
      {
        text: "Resident individual",
        href: "#",
      },
      { text: "Minor", href: "#" },
      {
        text: "Non Resident Indian (NRI)",
        href: "#",
      },
      {
        text: "Company, Partnership, HUF and LLP",
        href: "#",
      },
      { text: "Glossary", href: "#" },
    ],
  },
  {
    title: "Your TradeFlow Account",
    icon: "fa-regular fa-circle-user",
    links: [
      {
        text: "Your Profile",
        href: "#",
      },
      {
        text: "Account modification",
        href: "#",
      },
      {
        text: "Client Master Report (CMR) and Depository Participant (DP)",
        href: "#",
      },
      {
        text: "Nomination",
        href: "#",
      },
      {
        text: "Transfer and conversion of securities",
        href: "#",
      },
    ],
  },
  {
    title: "Kite",
    icon: "fa-brands fa-gg-circle",
    links: [
      { text: "IPO", href: "#" },
      {
        text: "Trading FAQs",
        href: "#",
      },
      {
        text: "Margin Trading Facility (MTF) and Margins",
        href: "#",
      },
      {
        text: "Charts and orders",
        href: "#",
      },
      {
        text: "Alerts and Nudges",
        href: "#",
      },
      { text: "General", href: "#" },
    ],
  },
  {
    title: "Funds",
    icon: "fa-solid fa-indian-rupee-sign",
    links: [
      { text: "Add money", href: "#" },
      { text: "Withdraw money", href: "#" },
      {
        text: "Add bank accounts",
        href: "#",
      },
      { text: "eMandates", href: "#" },
    ],
  },
  {
    title: "Console",
    icon: "fa-regular fa-circle-user rotate",
    links: [
      { text: "Portfolio", href: "#" },
      {
        text: "Corporate actions",
        href: "#",
      },
      { text: "Funds statement", href: "#" },
      { text: "Reports", href: "#" },
      { text: "Profile", href: "#" },
      { text: "Segments", href: "#" },
    ],
  },
  {
    title: "Coin",
    icon: "fa-solid fa-coins",
    links: [
      {
        text: "Mutual funds",
        href: "#",
      },
      {
        text: "National Pension Scheme (NPS)",
        href: "#",
      },
      {
        text: "Fixed Deposit (FD)",
        href: "#",
      },
      {
        text: "Features on Coin",
        href: "#",
      },
      {
        text: "Payments and Orders",
        href: "#",
      },
      { text: "General", href: "#" },
    ],
  },
];

function CreateTicketSection() {
  return (
    /* Create Ticket Section*/
    <section className="ticket-section">
      <div className="container-fluid">
        <div className="row">
          <div className="post-message py-3 px-3 d-block d-lg-none">
            <p className="color-msg">
              Due to high volume, <a href="#"> reactivation </a>requests may
              take an extra 24-48 business hours to process.
            </p>
          </div>
          <div className="col-lg-8 col-12 px-0">
            <div className="d-flex flex-column gap-4 sub-links">
              {categories.map((category, index) => (
                <details className="accordion-item" key={index}>
                  <summary className="d-flex align-items-center border rounded  cursor-pointer drop-down">
                    <div className="icon bg-light-blue px-3 py-3 d-flex align-items-center justify-content-center me-3">
                      <span className={`text-primary fs-4`}>
                        <i className={category.icon}></i>
                      </span>
                    </div>
                    <h2 className="mb-0">{category.title}</h2>
                    <span className="ms-auto rotate-icon">
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </summary>
                  <div className="accordion-content border border-top-0">
                    <ul className="support-list mb-0">
                      {category.links.map((link, idx) => (
                        <li key={idx} className="support-item py-2 px2">
                          <a href={link.href}>{link.text}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="col-lg-4 col-12 quick-links">
            <div className="featured-container">
              <div className="post-message py-3 px-3 d-none d-lg-block">
                <p>
                  Due to high volume, <a href="#"> reactivation </a>requests may
                  take an extra 24-48 business hours to process.
                </p>
              </div>

              <div className="links-sections px-0">
                <div className="d-flex flex-column align-items-start border rounded  cursor-pointer px-0 w-full ">
                  <div className="link-header w-full">Quick links</div>
                  <a href="#" className="border-bottom w-full">
                    1. Track account opening
                  </a>
                  <a href="#" className="border-bottom w-full">
                    2. Track segment activation
                  </a>
                  <a href="#" className="border-bottom w-full">
                    3. Intraday margins
                  </a>
                  <a href="#" className="border-bottom w-full">
                    4. Kite user manual
                  </a>
                  <a href="#" className="w-full">
                    5. Learn how to create a ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTicketSection;
