import '../styles/Hero.css';

export default function Hero() {
  const handleExplore = (e) => {
    e.preventDefault();
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="hero" aria-label="Hero banner">
      {/* Background image */}
      <div className="hero__bg" aria-hidden="true">
        <img
          src="/images/hero_fashion_model.png"
          alt="Butai Fashion – elegant fashion model in modern apparel"
          className="hero__bg-img"
        />
        <div className="hero__overlay"></div>
      </div>

      {/* Content */}
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__welcome">Welcome to</p>
          <h1 className="hero__brand">
            BUTAI<span className="hero__brand-plus">+</span>
          </h1>
          <p className="hero__company">FASHION SDN. BHD.</p>
          <h2 className="hero__tagline">Style That Completes You</h2>
          <p className="hero__description">
            We bring you the latest in fashion apparel, garments<br />
            and accessories — crafted for your everyday elegance.
          </p>
          <a
            href="/#products"
            className="btn btn-primary hero__cta"
            onClick={handleExplore}
            id="hero-explore-btn"
          >
            Explore Our Products
            <span className="arrow-icon">→</span>
          </a>
        </div>

        {/* Slide dots */}
        <div className="hero__dots" aria-label="Slide indicator">
          <span className="hero__dot hero__dot--active"></span>
          <span className="hero__dot"></span>
          <span className="hero__dot"></span>
        </div>
      </div>
    </section>
  );
}
