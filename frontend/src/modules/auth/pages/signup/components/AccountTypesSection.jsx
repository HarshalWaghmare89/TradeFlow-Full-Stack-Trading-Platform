import "./AccountTypesSection.css";

function AccountTypesSection() {
  return (
    /* Account Types Section*/
    <section className="account-types-sections">
      <div className="container">
        <h2 className="text-center">Explore different account types</h2>
        <div className="row align-items-center justify-content-between px-0">
          <div className="custom-col">
            <a href="#" className="acop-type-card">
              <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1770530139/acop-individual_zovkdz.svg" />
              <h3>Individual Account</h3>
              <p className="text-muted">
                Invest in equity, mutual funds and derivatives
              </p>
            </a>
          </div>
          <div className="custom-col">
            <a href="#" className="acop-type-card">
              <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1770530160/acop-huf_doyine.svg" />
              <h3>HUF Account</h3>
              <p className="text-muted">
                Make tax-efficient investments for your family
              </p>
            </a>
          </div>
          <div className="custom-col">
            <a href="#" className="acop-type-card">
              <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1770530166/acop-nri_itb4bq.svg" />
              <h3>NRI Account</h3>
              <p className="text-muted">
                Invest in equity, mutual funds, debentures, and more
              </p>
            </a>
          </div>
        </div>

        <div className="row align-items-center justify-content-between">
          <div className="custom-col">
            <a href="#" className="acop-type-card">
              <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1770530187/acop-minor_mstlql.svg" />
              <h3>Minor Account</h3>
              <p className="text-muted">
                Teach your little ones about money & invest for their future
                with them
              </p>
            </a>
          </div>
          <div className="custom-col">
            <a href="#" className="acop-type-card">
              <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1770530192/acop-corporate_apdjc2.svg" />
              <h3>Corporate / LLP/ Partnership</h3>
              <p className="text-muted">
                Manage your business surplus and investments easily
              </p>
            </a>
          </div>
          <div className="custom-col">&nbsp;</div>
        </div>
      </div>
    </section>
  );
}

export default AccountTypesSection;
