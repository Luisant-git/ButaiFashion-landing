import '../styles/WhyChooseUs.css';

const features = [
  {
    id: 'quality-products',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Quality Products',
    desc: 'Premium quality, always',
  },
  {
    id: 'reliable-service',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a4 4 0 0 0-8 0v2" strokeLinecap="round" />
        <circle cx="12" cy="14" r="1.5" />
      </svg>
    ),
    title: 'Reliable Service',
    desc: 'On time, every time',
  },
  {
    id: 'trusted-brand',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 3l2.5 5 5.5.8-4 3.9.94 5.46L12 15.77 7.06 18.16 8 12.7 4 8.8l5.5-.8L12 3z" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Trusted Brand',
    desc: 'Your satisfaction is our priority',
  },
  {
    id: 'fashion-for-everyone',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Fashion for Everyone',
    desc: 'Style, comfort & confidence',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose" aria-labelledby="why-choose-heading">
      <div className="container">
        <div className="why-choose__grid">
          {features.map((feat) => (
            <div key={feat.id} className="why-choose__card" id={feat.id}>
              <div className="why-choose__icon" aria-hidden="true">
                {feat.icon}
              </div>
              <h3 className="why-choose__title">{feat.title}</h3>
              <p className="why-choose__desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
