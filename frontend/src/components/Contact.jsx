import '../styles/Contact.css';

const contactCards = [
  {
    id: 'contact-phone',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Phone Enquiries',
    subtitle: 'Direct customer service line',
    value: '+60 3-7721 4000',
    actionText: 'Call Now',
    href: 'tel:+60377214000',
  },
  {
    id: 'contact-email',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'Email Us',
    subtitle: 'Support & general inquiries',
    value: 'info@butai.com.my',
    actionText: 'Send an Email',
    href: 'mailto:info@butai.com.my',
  },
  {
    id: 'contact-address',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Store Location',
    subtitle: 'NU Sentral Mall, Kuala Lumpur',
    value: 'Lot No. L1-17, NU Sentral Mall, Jalan Stesen Sentral 5, 50400 Kuala Lumpur, Wilayah Persekutuan',
    actionText: 'Get Directions',
    href: 'https://maps.google.com/?q=NU+Sentral+Mall+Kuala+Lumpur',
    external: true,
  },
  {
    id: 'contact-hours',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Opening Hours',
    subtitle: 'Open daily for shoppers & visitors',
    value: 'Monday – Sunday: 10:00 AM – 10:00 PM',
    note: 'SSM Reg. No. 201401038763 (1114911-V)',
    actionText: 'View on Map',
    href: '#contact-map',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        {/* Header */}
        <div className="contact__header">
          <p className="section-label">Get in Touch</p>
          <h2 id="contact-heading" className="section-title">Contact Us</h2>
          <div className="section-divider section-divider--center"></div>
          <p className="contact__intro">
            We would love to hear from you. Reach out to our team directly through any of our channels or visit our boutique store in Kuala Lumpur.
          </p>
        </div>

        {/* Details Cards Grid */}
        <div className="contact__cards">
          {contactCards.map((card) => (
            <div key={card.id} className="contact__card" id={card.id}>
              <div className="contact__card-icon" aria-hidden="true">
                {card.icon}
              </div>
              <h3 className="contact__card-title">{card.title}</h3>
              <p className="contact__card-subtitle">{card.subtitle}</p>
              <div className="contact__card-value">{card.value}</div>
              {card.note && <p className="contact__card-note">{card.note}</p>}
              {card.href && (
                <a
                  href={card.href}
                  className="contact__card-link"
                  {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {card.actionText} <span className="arrow-icon" aria-hidden="true">→</span>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Map Showcase */}
        <div className="contact__map-wrapper" id="contact-map">
          <div className="contact__map-header">
            <div className="contact__map-info">
              <span className="contact__map-badge">Store Location</span>
              <h3 className="contact__map-name">Butai Fashion Sdn. Bhd.</h3>
              <p className="contact__map-address">
                Lot No. L1-17, NU Sentral Mall, Jalan Stesen Sentral 5, 50400 Kuala Lumpur
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=NU+Sentral+Mall+Kuala+Lumpur"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary contact__map-btn"
            >
              Get Directions <span className="arrow-icon" aria-hidden="true">→</span>
            </a>
          </div>

          <div className="contact__map-frame">
            <iframe
              title="Butai Fashion Sdn. Bhd. location – NU Sentral Mall, Kuala Lumpur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8!2d101.6873496!3d3.1328277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xa1c29416fbe1fce0!2sNU%20Sentral!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
