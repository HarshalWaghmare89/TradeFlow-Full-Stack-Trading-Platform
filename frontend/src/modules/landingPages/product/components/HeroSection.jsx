import "./HeroSection.css";

function HeroSection() {
  return (
    /* Hero Section*/
    <section className="products-header text-center">
      <div className="container">
        <div className="row gx-0">
          <h1>TradeFlow Products</h1>
          <p className="landing-subheading text-muted">
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className="text-muted">
            Check out our{" "}
            <a href="#">
              investment offerings <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
