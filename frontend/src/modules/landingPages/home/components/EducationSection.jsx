import "./EducationSection.css";

function EducationSection() {
  return (
    /* Education Section */
    <section className="education">
      <div className="container mt-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-5 education-img text-center">
            <img
              src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769279563/index-education_s896b4.svg"
              alt="education-image"
            ></img>
          </div>
          <div className="col-12 col-md-6 education-msg">
            <h2>Free and open market education</h2>
            <p className="mt-3 text-muted">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="education-link">
              Varsity <i className="fa-solid fa-arrow-right"></i>
            </a>

            <p className="mt-4 text-muted">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#" className="education-link">
              TradingQ&A <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
