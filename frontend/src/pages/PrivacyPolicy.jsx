import { Link } from 'react-router-dom';
import '../styles/LegalPage.css';

export default function PrivacyPolicy() {
  return (
    <article className="legal-page" aria-labelledby="privacy-heading">
      <div className="legal-page__hero">
        <div className="container">
          <p className="section-label">Legal &amp; Data Protection</p>
          <h1 id="privacy-heading" className="legal-page__title">Privacy Policy</h1>
          <p className="legal-page__meta">
            In Compliance with the Personal Data Protection Act 2010 (PDPA) &nbsp;|&nbsp; Last Updated: October 2026
          </p>
        </div>
      </div>

      <div className="container legal-page__body">
        <nav className="legal-page__toc" aria-label="Table of contents">
          <h2>Contents</h2>
          <ol>
            <li><a href="#pp-1">Identity of Data User</a></li>
            <li><a href="#pp-2">Commitment to the PDPA 2010</a></li>
            <li><a href="#pp-3">Personal Data We Collect</a></li>
            <li><a href="#pp-4">Purpose of Data Processing</a></li>
            <li><a href="#pp-5">Disclosure to Third Parties</a></li>
            <li><a href="#pp-6">Data Protection &amp; Storage</a></li>
            <li><a href="#pp-7">Data Retention Policy</a></li>
            <li><a href="#pp-8">Your Legal Rights</a></li>
            <li><a href="#pp-9">Cookies &amp; Technical Log Data</a></li>
            <li><a href="#pp-10">Third-Party Platforms</a></li>
            <li><a href="#pp-11">Data Protection Officer Contact</a></li>
          </ol>
        </nav>

        <div className="legal-page__content">
          <div className="legal-page__intro">
            <p>
              <strong>BUTAI FASHION SDN. BHD.</strong> (Companies Commission of Malaysia / SSM Registration No.{' '}
              <strong>201401038763 / 1114911-V</strong>) (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
              respects your privacy and is dedicated to safeguarding your personal data.
            </p>
            <p>
              This Privacy Policy outlines how we collect, process, manage, and protect your personal information in accordance with the <strong>Personal Data Protection Act 2010 of Malaysia (&ldquo;PDPA&rdquo;)</strong> and its subsidiary legislation.
            </p>
          </div>

          <section id="pp-1">
            <h2>1. Identity of Data User (Corporate Profile)</h2>
            <p>
              Under the PDPA 2010, the Data User responsible for your personal data is <strong>BUTAI FASHION SDN. BHD.</strong>:
            </p>
            <ul>
              <li><strong>Legal Entity:</strong> BUTAI FASHION SDN. BHD.</li>
              <li><strong>SSM Registration Number:</strong> 201401038763 (1114911-V)</li>
              <li><strong>Incorporation Date:</strong> 27 October 2014</li>
              <li><strong>Nature of Business:</strong> Designers and seller of fashion apparel, garments and accessories of all kinds</li>
              <li><strong>Registered Office:</strong> Suite 707, 7th Floor, Wisma Lim Foo Yong, No. 86 Jalan Raja Chulan, 50200 Kuala Lumpur, Wilayah Persekutuan, Malaysia</li>
              <li><strong>Principal Place of Business:</strong> Lot No. L1-17, NU Sentral Mall, Jalan Stesen Sentral 5, 50400 Kuala Lumpur, Wilayah Persekutuan, Malaysia</li>
            </ul>
          </section>

          <section id="pp-2">
            <h2>2. Commitment to the PDPA 2010</h2>
            <p>
              We adhere strictly to the Seven Personal Data Protection Principles outlined under Malaysian law:
            </p>
            <ul>
              <li><strong>General Principle:</strong> Processing only with your consent or for legitimate business and transactional purposes.</li>
              <li><strong>Notice &amp; Choice:</strong> Providing clear notice of why data is collected and offering appropriate choices.</li>
              <li><strong>Disclosure Principle:</strong> Not disclosing your personal data for secondary or unrelated purposes without your consent.</li>
              <li><strong>Security Principle:</strong> Enforcing stringent organizational and technical security measures.</li>
              <li><strong>Retention Principle:</strong> Retaining personal data only as long as required by law or business necessity.</li>
              <li><strong>Data Integrity Principle:</strong> Taking reasonable steps to ensure data is accurate, complete, and up to date.</li>
              <li><strong>Access Principle:</strong> Respecting your statutory right to access and correct your personal data.</li>
            </ul>
          </section>

          <section id="pp-3">
            <h2>3. Personal Data We Collect</h2>
            <p>
              Depending on your interactions with our boutique and customer support channels, the personal data we may collect includes:
            </p>
            <ul>
              <li>
                <strong>Direct Communications:</strong> Your name, email address, contact telephone number, and message details when you contact us directly via telephone (<a href="tel:+60377214000">+60 3-7721 4000</a>) or email (<a href="mailto:info@butai.com.my">info@butai.com.my</a>).
              </li>
              <li>
                <strong>Retail &amp; Customer Care:</strong> In-store customer service inquiries, custom fitting details, styling consultations, warranty records, feedback, or corporate inquiry information provided at our NU Sentral Mall boutique.
              </li>
              <li>
                <strong>Technical Browsing Data:</strong> Standard server logs, IP addresses, browser specifications, and referral URLs collected automatically to ensure web security and optimize website responsiveness.
              </li>
            </ul>
          </section>

          <section id="pp-4">
            <h2>4. Purpose of Data Processing</h2>
            <p>We process your personal information strictly for the following legitimate purposes:</p>
            <ul>
              <li>Responding to your product inquiries, bespoke styling queries, and customer service requests.</li>
              <li>Managing retail operations and issuing official receipts or tax documentation for purchases made at our store.</li>
              <li>Fulfilling corporate compliance obligations mandated by the Companies Commission of Malaysia (SSM) and the Inland Revenue Board of Malaysia (LHDN).</li>
              <li>Protecting the safety, security, and integrity of our digital systems and physical retail premises.</li>
              <li>Establishing, exercising, or defending our legal rights and protecting against fraudulent activity.</li>
            </ul>
            <p>
              We do <strong>not</strong> sell, rent, lease, or trade your personal data to any external commercial third parties.
            </p>
          </section>

          <section id="pp-5">
            <h2>5. Disclosure to Third Parties</h2>
            <p>
              Your personal data will remain confidential. We only disclose personal information to third parties under the following limited conditions:
            </p>
            <ul>
              <li>
                <strong>Authorized Service Providers:</strong> Trusted third-party IT, web hosting, or point-of-sale maintenance providers who operate under contractual data protection and confidentiality agreements.
              </li>
              <li>
                <strong>Regulatory &amp; Legal Authorities:</strong> Government agencies, statutory bodies (including SSM, LHDN, and the Royal Malaysia Police), or law enforcement when legally required by subpoena, court order, or Malaysian statutory law.
              </li>
              <li>
                <strong>Professional Advisors:</strong> Our appointed auditors, legal advisers, and tax agents who owe statutory duties of confidentiality.
              </li>
            </ul>
          </section>

          <section id="pp-6">
            <h2>6. Data Protection &amp; Storage</h2>
            <p>
              We maintain administrative, organizational, and technological safeguards to protect personal data against accidental loss, unauthorized access, alteration, destruction, or misuse.
            </p>
            <p>
              Digital records are stored on secure servers with restricted access controls, while physical records at our registered and business offices are held in secure facilities accessible only to authorized personnel.
            </p>
          </section>

          <section id="pp-7">
            <h2>7. Data Retention Policy</h2>
            <p>
              Personal data will only be retained for as long as is necessary to fulfill the specific purposes for which it was obtained, or as mandated by applicable statutory retention periods under Malaysian tax and commercial legislation (typically up to seven (7) years for accounting and transaction records).
            </p>
            <p>
              Once data is no longer required, it is destroyed through secure deletion or permanent anonymization.
            </p>
          </section>

          <section id="pp-8">
            <h2>8. Your Legal Rights</h2>
            <p>Under the Malaysian PDPA 2010, you have enforceable legal rights regarding your personal data:</p>
            <ul>
              <li><strong>Right of Access:</strong> You may request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Correct:</strong> You may request the rectification or update of inaccurate, misleading, or incomplete data.</li>
              <li><strong>Right to Withdraw Consent:</strong> You may at any time withdraw your consent for future processing of your personal data.</li>
              <li><strong>Right to Limit Processing:</strong> You may request that we limit the processing of your personal data.</li>
            </ul>
            <p>
              To exercise any of these rights, please submit a written request to our Data Protection Officer at <a href="mailto:info@butai.com.my">info@butai.com.my</a>.
            </p>
          </section>

          <section id="pp-9">
            <h2>9. Cookies &amp; Technical Log Data</h2>
            <p>
              Our website uses only essential session elements required for website navigation, accessibility, and security. We do not deploy third-party advertising cookies, behavioural cross-site tracking scripts, or ad-retargeting beacons.
            </p>
          </section>

          <section id="pp-10">
            <h2>10. Third-Party Platforms</h2>
            <p>
              Our website includes an embedded Google Maps frame to assist visitors with directions to our store at NU Sentral Mall. Interactions with Google Maps are governed by Google&rsquo;s Privacy Policy at{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                policies.google.com/privacy
              </a>.
            </p>
          </section>

          <section id="pp-11">
            <h2>11. Data Protection Officer Contact</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our compliance with the PDPA 2010, please contact:
            </p>
            <address>
              <strong>Data Protection Officer</strong><br />
              <strong>BUTAI FASHION SDN. BHD.</strong><br />
              <strong>SSM Reg. No.:</strong> 201401038763 (1114911-V)<br />
              <strong>Principal Business Address:</strong> Lot No. L1-17, NU Sentral Mall, Jalan Stesen Sentral 5, 50400 Kuala Lumpur, Wilayah Persekutuan, Malaysia.<br />
              <strong>Registered Office:</strong> Suite 707, 7th Floor, Wisma Lim Foo Yong, No. 86 Jalan Raja Chulan, 50200 Kuala Lumpur, Wilayah Persekutuan, Malaysia.<br />
              <strong>Email:</strong> <a href="mailto:info@butai.com.my">info@butai.com.my</a><br />
              <strong>Telephone:</strong> <a href="tel:+60377214000">+60 3-7721 4000</a>
            </address>
          </section>

          <div className="legal-page__back">
            <Link to="/" className="btn btn-outline">&larr; Back to Home</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
