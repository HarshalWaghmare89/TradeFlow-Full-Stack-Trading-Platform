import "./RightSection.css";

function RightSection({
  imageURL,
  productName,
  productDescription,
  prouctLink,
  linkText,
}) {
  return (
    /* Right Section*/
    <section className="rightSection">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 text-center d-block d-md-none .mobile-visible">
            <img src={imageURL} />
          </div>

          <div className="col-12 col-md-4 rightSection-msg">
            <h2>{productName}</h2>
            <p className="text-muted">{productDescription}</p>

            <a href={prouctLink}>
              {linkText} <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="col-md-7 text-center d-none d-md-block">
            <img src={imageURL} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSection;
