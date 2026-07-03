import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to expand your brand?</h2>
        <p className="cta-address">Headquarters: 15850 W Bellfort Ave, Unit C1-C4, Sugar Land, TX 77498</p>
        <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
      </div>
    </section>
  );
};

export default CTA;
