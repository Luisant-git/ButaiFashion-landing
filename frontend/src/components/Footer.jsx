import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Footer.css';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Collections', href: '/#products' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      {/* Main Footer Grid */}
      <div className="footer__main">
        <div className="container footer__grid">

          {/* Column 1: Brand & Identity */}
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo" aria-label="Butai Fashion Home">
              <div className="footer__logo-mark">
                <span className="footer__logo-brand">BUTAI</span>
                <span className="footer__logo-plus">+</span>
              </div>
              <span className="footer__logo-sub">FASHION SDN. BHD.</span>
              <span className="footer__logo-tag">FAB INDIA</span>
            </Link>

            <div className="footer__tagline-badge">
              <span className="footer__tagline-dot"></span>
              <p className="footer__tagline">We are a Fabindia franchise in Malaysia</p>
            </div>

            <p className="footer__desc">
              Your premier retail boutique for handcrafted garments, authentic ethnic wear,
              fashion accessories, and beauty essentials in Kuala Lumpur.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Navigation</h4>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Store Location & Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Boutique Location</h4>
            <address className="footer__address">
              Lot No. L1-17, NU Sentral Mall<br />
              Jalan Stesen Sentral 5<br />
              50400 Kuala Lumpur, Malaysia
            </address>

            <div className="footer__contacts">
              <a href="tel:+60377214000" className="footer__contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +60 3-7721 4000
              </a>
              <a href="mailto:info@butaifashion.com" className="footer__contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@butaifashion.com
              </a>
            </div>
          </div>

          {/* Column 4: Hours & Social */}
          <div className="footer__col">
            <h4 className="footer__heading">Opening Hours</h4>
            <div className="footer__hours-card">
              <span className="footer__hours-days">Monday – Sunday</span>
              <span className="footer__hours-time">10:00 AM – 10:00 PM</span>
            </div>

            <p className="footer__store-note">
              Open daily for in-store fittings, custom styling, and exclusive collections.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; 2026 Butai Fashion Sdn. Bhd. All rights reserved.
          </p>

          <div className="footer__legal-links">
            <Link to="/privacy-policy" className="footer__legal-link" id="footer-privacy-link">
              Privacy Policy
            </Link>
            <span className="footer__legal-sep" aria-hidden="true">&bull;</span>
            <Link to="/terms-conditions" className="footer__legal-link" id="footer-terms-link">
              Terms &amp; Conditions
            </Link>
          </div>

          <div className="footer__bottom-right">
            <p className="footer__reg">
              SSM Reg. No. 201401038763 (1114911-V)
            </p>
            <button
              type="button"
              className="footer__back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
              title="Scroll to top"
              id="footer-scroll-top-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
