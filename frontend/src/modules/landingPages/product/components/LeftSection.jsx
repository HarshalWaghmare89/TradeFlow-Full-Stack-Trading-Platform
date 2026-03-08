import "./LeftSection.css";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  tryDemoLink,
  learnMore,
  learnMoreLink,
  linkText1,
  linkText2,
  googlePlay,
  appStore,
}) {
  return (
    /* Left Section*/
    <section className="leftSection">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-7 text-center">
            <img src={imageURL} />
          </div>
          <div className="col-12 col-md-4 leftSection-header">
            <h2>{productName}</h2>
            <p className="mt-3 text-muted">{productDescription}</p>

            <div className="row leftSection-links">
              {tryDemo && (
                <div className="col-6">
                  <a href={tryDemoLink}>
                    {linkText1}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              )}
              {learnMore && (
                <div className="col-6">
                  <a href={learnMoreLink}>
                    {linkText2} <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              )}
            </div>

            <div className="kite-mobile-links ">
              <a href={googlePlay}>
                <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769279173/google-play-badge_x71bf2.svg" />
              </a>
              <a href={appStore} className="app-store">
                <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769279017/appstore-badge_dolcbe.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
