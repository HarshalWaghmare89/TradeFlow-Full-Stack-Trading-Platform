import "./TeamSection.css";

function TeamSection() {
  return (
    /* Team Section */
    <section className="about-people">
      <div className="container">
        <div className="row">
          <h2 className="text-center">People</h2>
        </div>

        <div className="row developer-container">
          <div className="col-12 col-md-5 text-center">
            <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1770635976/darker_blurred_image_rc3wvt.png" />
            <h5>Harshal Waghmare</h5>
            <p className="text-muted">Founder & CEO, TradeFlow</p>
          </div>
          <div className="col-12 col-md-7 about-msg">
            <p>
              Harshal founded TradeFlow with a vision to simplify and modernize
              the trading experience. As a Computer Science undergraduate
              passionate about fintech and system design, he builds scalable,
              user-centric, and performance-driven platforms.
            </p>
            <p>
              He focuses on solving real-world problems through clean
              architecture, efficient systems, and thoughtful product design —
              combining technical precision with strategic thinking to deliver
              production-ready solutions.
            </p>
            <p>
              He believes technology should make investing more accessible,
              transparent, and efficient.
            </p>
            <p>
              Beyond coding, he explores emerging technologies, refines product
              strategy, and continuously sharpens his engineering expertise.
            </p>
            <p>
              Connect:{" "}
              <a
                href="https://www.linkedin.com/in/harshalwaghmare"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              •{" "}
              <a
                href="https://github.com/harshalwaghmare89"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              •{" "}
              <a
                href="https://github.com/HarshalWaghmare89/TradeFlow-Full-Stack-Trading-Platform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Repository
              </a>
            </p>
            <p className="signature text-muted">
              Built with purpose. — Harshal Waghmare
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
