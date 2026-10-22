import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const isLegalPage =
    location.pathname === '/privacy-policy' ||
    location.pathname === '/terms-conditions';

  return (
    <header
      className={`header${scrolled || isLegalPage ? ' header--scrolled' : ''}${menuOpen ? ' header--menu-open' : ''}`}
      role="banner"
    >
      <div className="container header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo" aria-label="Butai Fashion Home">
          <div className="logo-mark">
            <span className="logo-brand">BUTAI</span>
            <span className="logo-plus">+</span>
          </div>
          
          <span className="logo-sub">FASHION SDN. BHD.</span>
          <span className="logo-tag">FAB INDIA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.label} className="nav__item">
                <a
                  href={link.href}
                  className="nav__link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  id={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger */}
        <div className="header__actions">
          <button
            className="header__hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`hamburger-line${menuOpen ? ' hamburger-line--1-open' : ''}`}></span>
            <span className={`hamburger-line${menuOpen ? ' hamburger-line--2-open' : ''}`}></span>
            <span className={`hamburger-line${menuOpen ? ' hamburger-line--3-open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`header__mobile-menu${menuOpen ? ' header__mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav role="navigation" aria-label="Mobile navigation">
          <ul className="mobile-nav__list">
            {navLinks.map((link) => (
              <li key={link.label} className="mobile-nav__item">
                <a
                  href={link.href}
                  className="mobile-nav__link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
