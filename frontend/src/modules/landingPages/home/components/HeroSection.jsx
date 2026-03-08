import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    /* Hero Section */
    <section className="landing">
      <div className="container">
        <div className="row text-center gx-0">
          <img
            src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769278434/landing_jsl2rp.svg"
            alt="landing_image"
            className="landing-image"
          ></img>
          <h1 className="heading">Invest in everything</h1>
          <p className="landing-subheading ">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <Link to="/open-account">
            <button className="button">Sign up for free</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
