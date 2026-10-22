import '../styles/Services.css';

const services = [
  {
    id: 'retail-sales',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeLinejoin="round"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Retail Sales',
    desc: 'Fashion apparel, garments & accessories',
  },
  {
    id: 'customer-support',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Customer Support',
    desc: "We're here to help you",
  },
  {
    id: 'quality-assurance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Quality Assurance',
    desc: 'Only the best for you',
  },
  {
    id: 'fast-delivery',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1" strokeLinejoin="round"/>
        <path d="M16 8h4l3 5v3h-7V8z" strokeLinejoin="round"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Fast & Secure Delivery',
    desc: 'Safe and reliable shipping',
  },
];

export default function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="services__header">
          <p className="section-label">Our Services</p>
          <h2 id="services-heading" className="section-title">What We Offer</h2>
          <div className="section-divider"></div>
        </div>

        <div className="services__grid">
          {services.map((svc) => (
            <div key={svc.id} className="service-card" id={svc.id}>
              <div className="service-card__icon">{svc.icon}</div>
              <h3 className="service-card__title">{svc.title}</h3>
              <p className="service-card__desc">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
