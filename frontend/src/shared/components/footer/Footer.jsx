import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import "./Footer.css";

function Footer() {
  const { theme } = useTheme();

  const logo =
    theme === "dark"
      ? "https://res.cloudinary.com/dhcllqvkz/image/upload/v1771995213/Logo_darkTheme-Photoroom_faaryv_wxg9zw.png"
      : "https://res.cloudinary.com/dhcllqvkz/image/upload/v1770018141/Logo_exgjlp-Photoroom_dfcgww.png";

  return (
    <footer id="footer">
      <div className="container">
        {/* ================= MAIN FOOTER ================= */}
        <div className="row justify-content-between align-item-center text-muted">
          {/* Left section */}
          <div className="col-12 col-md-3 mb-4 left-section">
            <Link to="/">
              <img src={logo} className="img-fluid mb-3 footer-logo" />
            </Link>

            <p className="mb-1">
              © 2010 – {new Date().getFullYear()}, TradeFlow Broking Ltd.
            </p>
            <p>All rights reserved.</p>

            <div className="footer-social mt-3">
              <ul className="list-unstyled d-flex gap-3 mb-2">
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/harshalwaghmare"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>

              <ul className="list-unstyled d-flex gap-3">
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right section */}
          <div className="col-12 col-md-9">
            <div className="row">
              <FooterColumn
                title="Account"
                links={[
                  ["Open demat account", "#"],
                  ["Minor demat account", "#"],
                  ["NRI demat account", "#"],
                  ["Commodity", "#"],
                  ["Dematerialisation", "#"],
                  ["Fund transfer", "#"],
                  ["MTF", "#"],
                  ["Referral program", "#"],
                ]}
              />

              <FooterColumn
                title="Support"
                links={[
                  ["Contact us", "#"],
                  ["Support portal", "#"],
                  ["How to file a complaint?", "#"],
                  ["Status of your complaints", "#"],
                  ["Bulletin", "#"],
                  ["Circular", "#"],
                  ["Z-Connect blog", "#"],
                  ["Downloads", "#"],
                ]}
              />

              <FooterColumn
                title="Company"
                links={[
                  ["About", "#"],
                  ["Philosophy", "#"],
                  ["Press & media", "#"],
                  ["Careers", "#"],
                  ["TradeFlow Cares (CSR)", "#"],
                  ["TradeFlow.tech", "#"],
                  ["Open source", "#"],
                ]}
              />

              <FooterColumn
                title="Quick links"
                links={[
                  ["Upcoming IPOs", "#"],
                  ["Brokerage charges", "#"],
                  ["Market holidays", "#"],
                  ["Economic calendar", "#"],
                  ["Calculators", "#"],
                  ["Markets", "#"],
                  ["Sectors", "#"],
                ]}
              />
            </div>
          </div>
        </div>

        {/* ================= DISCLAIMER ================= */}
        <div className="row mt-5">
          <div className="col-12 footer-disclaimer">
            <p>
              TradeFlow Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031683 CDSL/NSDL: Depository services
              through TradeFlow Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Registered Address: TradeFlow Broking Ltd.,
              #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
              J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
              complaints pertaining to securities broking please write to
              <a href="#"> complaints@tradeflow.com</a>, for DP related to
              <a href="#"> dp@tradeflow.com</a>. Please ensure you carefully
              read the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on <a href="#"> SEBI SCORES:</a>
              Register on SCORES portal. Mandatory details for filing complaints
              on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
              Effective Communication, Speedy redressal of the grievances
            </p>

            <p>
              <a href="#">Smart Online Dispute Resolution</a> |{" "}
              <a href="#"> Grievances Redressal Mechanism</a>
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
              India's largest broker based on networth as per NSE.{" "}
              <a href="#"> NSE broker factsheet</a>
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of TradeFlow and offering such
              services, please <a href="#">create a ticket here.</a>
            </p>

            <p>
              *Customers availing insurance advisory services offered by Ditto
              (Tacterial Consulting Private Limited | IRDAI Registered Corporate
              Agent (Composite) License No CA0738) will not have access to the
              exchange investor grievance redressal forum, SEBI SCORES/ODR, or
              arbitration mechanism for such products.
            </p>
          </div>
        </div>

        {/* ================= BOTTOM LINKS ================= */}
        <div className="text-center pt-3 footer-bottomLink">
          <ul className="list-unstyled d-flex flex-wrap justify-content-center  mb-0 gap-3">
            <li>
              <a href="#">NSE</a>
            </li>
            <li>
              <a href="#">BSE</a>
            </li>
            <li>
              <a href="#">MCX</a>
            </li>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
            <li>
              <a href="#">Policies & procedures</a>
            </li>
            <li>
              <a href="#">Privacy policy </a>
            </li>
            <li>
              <a href="#">Disclosure </a>
            </li>
            <li>
              <a href="#">For investor's attention</a>
            </li>
            <li>
              <a href="#">Investor charters</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="col-6 col-md-3 mb-4 footer-column">
      <h6>{title}</h6>
      <ul className="list-unstyled">
        {links.map(([text, url]) => (
          <li key={text}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
