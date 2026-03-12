import { BRAND, FOOTER } from "../constants/data.jsx";
import Logo from "./Logo.jsx";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* Top Grid */}
      <div className="footer-grid">

        {/* Col 1 — Brand */}
        <div className="footer-brand-col">
          <a href="#home" className="footer-logo-link">
            <Logo />
          </a>
          <p className="footer-tagline">{BRAND.tagline}</p>
          <p className="footer-address">📍 {BRAND.address}</p>
          <div className="footer-contacts">
            <a href={`tel:${BRAND.phoneTel}`} className="footer-contact-link">
              📞 {BRAND.phone}
            </a>
            <a
              href={`mailto:${BRAND.email}?subject=Enquiry - Shyam Minerals & Logistics`}
              className="footer-contact-link"
            >
              ✉️ {BRAND.email}
            </a>
          </div>
          <div className="footer-socials">
            {FOOTER.socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Quick Links</h4>
          <ul className="footer-links">
            {FOOTER.quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Our Services</h4>
          <ul className="footer-links">
            {FOOTER.services.map((s) => (
              <li key={s.label}>
                <a href={s.href}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Legal */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Company Info</h4>
          <ul className="footer-legal-list">
            <li>
              <span className="legal-label">Established</span>
              <span className="legal-value">{BRAND.established}</span>
            </li>
            <li>
              <span className="legal-label">Proprietor</span>
              <span className="legal-value">{FOOTER.proprietor}</span>
            </li>
            <li>
              <span className="legal-label">GST No.</span>
              <span className="legal-value">{FOOTER.gst}</span>
            </li>
            <li>
              <span className="legal-label">Working Hours</span>
              <span className="legal-value">{BRAND.hours}</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} {FOOTER.copyright}. All Rights Reserved.
        </p>
        <p className="footer-pvt">
          Registered under the Companies Act, 2013 &nbsp;·&nbsp; Odisha, India
        </p>
      </div>

    </footer>
  );
}
