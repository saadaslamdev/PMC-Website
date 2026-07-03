import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="Professional Marketing Channel Logo" className="header-logo" />
          <div className="logo-text">PMC <span className="logo-span">Imports</span></div>
        </Link>
        
        <nav>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
            <li><Link to="/services" className="nav-link">Services</Link></li>
            <li><Link to="/products" className="nav-link">Products</Link></li>
            <li><Link to="/team" className="nav-link">Team</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
