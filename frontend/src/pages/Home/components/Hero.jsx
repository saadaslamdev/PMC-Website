const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="hero-line-1">THREE GENERATIONS OF</span><br/>
            <span className="hero-line-2">DISTRIBUTION</span><br/>
            <span className="hero-line-3">EXCELLENCE</span>
          </h1>
          <p className="hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            From Karachi to Texas a half-century legacy<br/>of quality, trust, and continental reach.
          </p>
          <div className="hero-badge fade-in" style={{ animationDelay: '0.4s' }}>
            Established 1967 &middot; Sugar Land, Texas
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
