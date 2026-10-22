import '../styles/AboutUs.css';

export default function AboutUs() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container about__container">

        {/* Store Image */}
        <div className="about__image-wrap">
          <img
            src="/images/store_front.webp"
            alt="Butai Fashion Sdn. Bhd. store interior at NU Sentral Mall, Kuala Lumpur"
            className="about__image"
          />
          <div className="about__image-badge">
            <span className="about__badge-brand">FABINDIA</span>
            <span className="about__badge-sub">MALAYSIA &bull; NU SENTRAL</span>
          </div>
        </div>

        {/* Content */}
        <div className="about__content">
          <p className="section-label">About Us</p>
          <h2 id="about-heading" className="section-title">
            Butai Fashion Sdn. Bhd.
          </h2>
          <div className="section-divider"></div>

          <div className="about__brand-statement">
            <span className="about__statement-text">We are Fabindia Malaysia NU Sentral</span>
          </div>

          <p className="about__intro">
            We are Fabindia Malaysia NU Sentral. Operated by Butai Fashion Sdn. Bhd. in Kuala Lumpur,
            Malaysia, we specialise in fashion apparel, garments and accessories of all kinds.
            We are committed to bringing you stylish, high-quality handcrafted apparel and lifestyle
            products that enhance your natural beauty and confidence.
          </p>
          <p className="about__sub">
            Registered under SSM (No. 201401038763 / 1114911-V), we operate our flagship retail
            boutique at Lot No. L1-17, NU Sentral Mall, serving our visitors with an authentic and
            curated selection of elegant fashion, clothing, and traditional-modern apparel.
          </p>

          {/* Addresses */}
          <div className="about__addresses">
            <div className="about__address-card">
              <div className="about__address-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinejoin="round"/>
                  <polyline points="9 22 9 12 15 12 15 22" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="about__address-label">Registered Address</h3>
                <address className="about__address-text">
                  Suite 707, 7th Floor, Wisma Lim Foo Yong,<br />
                  No. 86 Jalan Raja Chulan,<br />
                  Kuala Lumpur, Wilayah Persekutuan 50200,<br />
                  Malaysia.
                </address>
              </div>
            </div>

            <div className="about__address-card">
              <div className="about__address-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3 className="about__address-label">Business Address</h3>
                <address className="about__address-text">
                  Lot No. L1-17, NU Sentral Mall,<br />
                  Jalan Stesen Sentral 5,<br />
                  Kuala Lumpur, Wilayah Persekutuan 50400,<br />
                  Malaysia.
                </address>
              </div>
            </div>
          </div>

          <a
            href="/#contact"
            className="btn btn-dark about__cta"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            id="about-learn-more-btn"
          >
            Get in Touch <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
