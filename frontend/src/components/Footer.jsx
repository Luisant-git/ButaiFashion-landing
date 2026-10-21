import { Link, useLocation } from 'react-router-dom';
import '../styles/Footer.css';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        <div className="container footer__top-inner">

          {/* Logo */}
          <Link to="/" className="footer__logo" aria-label="Butai Fashion Home">
            <div className="footer__logo-mark">
              <span className="footer__logo-brand">BUTAI</span>
              <span className="footer__logo-plus">+</span>
            </div>
            <span className="footer__logo-sub">FASHION SDN. BHD.</span>
          </Link>

          {/* Nav Links */}
          <nav aria-label="Footer navigation">
            <ul className="footer__nav">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <div className="footer__legal-links">
            <Link to="/privacy-policy" className="footer__legal-link" id="footer-privacy-link">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="footer__legal-link" id="footer-terms-link">
              Terms &amp; Conditions
            </Link>
          </div>

          {/* Social placeholders — update with real URLs when available */}
          <div className="footer__social" aria-label="Social media links">
            {/* Facebook */}
            <a href="#social-facebook" className="footer__social-link" aria-label="Facebook (link to be confirmed)" title="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#social-instagram" className="footer__social-link" aria-label="Instagram (link to be confirmed)" title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#social-tiktok" className="footer__social-link" aria-label="TikTok (link to be confirmed)" title="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#social-youtube" className="footer__social-link" aria-label="YouTube (link to be confirmed)" title="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Butai Fashion Sdn. Bhd. All rights reserved.
          </p>
          <p className="footer__reg">
            SSM Reg. No. 201401038763 (1114911-V)
          </p>
        </div>
      </div>
    </footer>
  );
}
