import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>PMC Imports</h4>
            <p>A 57-year heritage of distribution excellence, built from Karachi to Texas.</p>
            <p>15850 W Bellfort Ave, Unit C1-C4<br/>Sugar Land, TX 77498</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/services" className="footer-link">Our Services</Link>
            <Link to="/products" className="footer-link">Product Catalog</Link>
            <Link to="/team" className="footer-link">Leadership Team</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>Phone: +1 (281) 854-9072</p>
            <p>Phone: +1 (281) 891-5559</p>
            <p>Email: info@pmcimportsllc.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Professional Marketing Channel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
