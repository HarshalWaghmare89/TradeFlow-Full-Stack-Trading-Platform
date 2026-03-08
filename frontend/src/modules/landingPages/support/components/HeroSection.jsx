import "./HeroSection.css";

function HeroSection() {
  return (
    /* Hero Section*/
    <section className="support-section">
      <div className="container-fluid">
        <div className="support-header d-flex justify-content-between align-items-center px-0">
          <p>Support Portal</p>
          <button className="button">My tickets</button>
        </div>
        <div className="support-header-input d-flex align-items-center ">
          <span className="support-header-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="w-full"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
