const Ecosystem = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Our Distribution Ecosystem</h2>
        </div>
        <div className="grid-3">
          <div className="card">
            <img src="/eco-imports.png" alt="International Imports" className="card-img" />
            <h3>Exclusive Imports</h3>
            <p>Bridging the authentic flavors of Pakistan and India. Proudly representing the largest consumer brands for the diaspora.</p>
          </div>
          <div className="card">
            <img src="/eco-fleet.png" alt="RA Fred Fleet" className="card-img" />
            <h3>RA Fred Solution Logistic</h3>
            <p>Our dedicated, in-house fleet ensuring direct-to-store delivery to over 400 shops. Total control over last-mile freshness.</p>
          </div>
          <div className="card">
            <img src="/eco-inhouse.png" alt="In-house Brands" className="card-img" />
            <h3>In-House Manufacturing</h3>
            <p>Developing robust private labels like Memon Brothers, Janat-e-Sheeren, and Royal Classic Crockery.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
