const BrandsMarquee = () => {
  return (
    <section className="brands-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Exclusive Import Partners</h2>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            <div className="brand-card">
              <div className="brand-logo-wrapper"><img src="/Partner-Brand-Logos/hilal-foods-logo.png" alt="Hilal Foods" className="brand-logo" /></div>
              <p className="brand-name">Hilal Foods</p>
            </div>
            <div className="brand-card">
              <div className="brand-logo-wrapper"><img src="/Partner-Brand-Logos/Pride-logo.png" alt="Pride Food" className="brand-logo" /></div>
              <p className="brand-name">Pride Food</p>
            </div>
            <div className="brand-card">
              <div className="brand-logo-wrapper"><img src="/Partner-Brand-Logos/Sunder-Logo.png" alt="Sunder Food" className="brand-logo" /></div>
              <p className="brand-name">Sunder Food</p>
            </div>
            <div className="brand-card">
              <div className="brand-logo-wrapper"><img src="/Partner-Brand-Logos/Daani-Logo.jpg" alt="Daani International" className="brand-logo" /></div>
              <p className="brand-name">Daani International</p>
            </div>
            <div className="brand-card">
              <div className="brand-logo-wrapper"><img src="/Partner-Brand-Logos/Frooto-Logo.png" alt="Frooto Juice" className="brand-logo" /></div>
              <p className="brand-name">Frooto Juice</p>
            </div>
            <div className="brand-card">
              <div className="brand-logo-wrapper"><img src="/Partner-Brand-Logos/MA-International-Logo.png" alt="M&A International" className="brand-logo" /></div>
              <p className="brand-name">M&A International</p>
            </div>
            
            {/* Duplicates for infinite scroll */}
            <div className="brand-card">
              <div className="brand-logo-wrapper"><img src="/Partner-Brand-Logos/hilal-foods-logo.png" alt="Hilal Foods" className="brand-logo" /></div>
              <p className="brand-name">Hilal Foods</p>
            </div>
            <div className="brand-card">
              <div className="brand-logo-wrapper"><img src="/Partner-Brand-Logos/Pride-logo.png" alt="Pride Food" className="brand-logo" /></div>
              <p className="brand-name">Pride Food</p>
            </div>
            <div className="brand-card">
              <div className="brand-logo-wrapper"><img src="/Partner-Brand-Logos/Sunder-Logo.png" alt="Sunder Food" className="brand-logo" /></div>
              <p className="brand-name">Sunder Food</p>
            </div>
            <div className="brand-card">
              <div className="brand-logo-wrapper"><img src="/Partner-Brand-Logos/Daani-Logo.jpg" alt="Daani International" className="brand-logo" /></div>
              <p className="brand-name">Daani International</p>
            </div>
            <div className="brand-card">
              <div className="brand-logo-wrapper"><img src="/Partner-Brand-Logos/Frooto-Logo.png" alt="Frooto Juice" className="brand-logo" /></div>
              <p className="brand-name">Frooto Juice</p>
            </div>
            <div className="brand-card">
              <div className="brand-logo-wrapper"><img src="/Partner-Brand-Logos/MA-International-Logo.png" alt="M&A International" className="brand-logo" /></div>
              <p className="brand-name">M&A International</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
